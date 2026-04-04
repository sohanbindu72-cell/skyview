import re
import os

# Load the markdown content
md_path = r'C:\Users\G5-PC-02\.gemini\antigravity\brain\5ed399fc-3d42-4ee7-8520-ce55ea93023f\.system_generated\steps\301\content.md'
if not os.path.exists(md_path):
    print("Markdown file not found.")
    exit(1)

with open(md_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Map suffixes to country names
suffix_to_country = {
    'us': 'United States', 'fr': 'France', 'it': 'Italy', 'mx': 'Mexico', 'es': 'Spain',
    'gb': 'United Kingdom', 'uk': 'United Kingdom', 'de': 'Germany', 'gr': 'Greece',
    'ae': 'United Arab Emirates', 'ca': 'Canada', 'nl': 'Netherlands', 'sx': 'Sint Maarten',
    'al': 'Albania', 'ar': 'Argentina', 'am': 'Armenia', 'aw': 'Aruba', 'au': 'Australia',
    'at': 'Austria', 'bs': 'Bahamas', 'bh': 'Bahrain', 'bb': 'Barbados', 'be': 'Belgium',
    'bm': 'Bermuda', 'ba': 'Bosnia and Herzegovina', 'bw': 'Botswana', 'br': 'Brazil',
    'vg': 'British Virgin Islands', 'bg': 'Bulgaria', 'cm': 'Cameroon', 'za': 'South Africa',
    'cy': 'Cyprus', 'cz': 'Czechia', 'dk': 'Denmark', 'do': 'Dominican Republic',
    'ec': 'Ecuador', 'eg': 'Egypt', 'sv': 'El Salvador', 'ee': 'Estonia', 'et': 'Ethiopia',
    'fj': 'Fiji', 'fi': 'Finland', 'ge': 'Georgia', 'gd': 'Grenada', 'gp': 'Guadeloupe',
    'gt': 'Guatemala', 'hn': 'Honduras', 'hk': 'Hong Kong', 'hu': 'Hungary', 'is': 'Iceland',
    'in': 'India', 'id': 'Indonesia', 'ie': 'Ireland', 'il': 'Israel', 'jm': 'Jamaica',
    'jp': 'Japan', 'jo': 'Jordan', 'kz': 'Kazakhstan', 'ke': 'Kenya', 'kw': 'Kuwait',
    'kg': 'Kyrgyzstan', 'lv': 'Latvia', 'lb': 'Lebanon', 'lt': 'Lithuania', 'mo': 'Macau',
    'my': 'Malaysia', 'mv': 'Maldives', 'mt': 'Malta', 'mu': 'Mauritius', 'me': 'Montenegro',
    'ma': 'Morocco', 'mm': 'Myanmar', 'nz': 'New Zealand', 'ng': 'Nigeria', 'mk': 'North Macedonia',
    'no': 'Norway', 'om': 'Oman', 'pa': 'Panama', 'pe': 'Peru', 'ph': 'Philippines',
    'pl': 'Poland', 'pt': 'Portugal', 'pr': 'Puerto Rico', 'qa': 'Qatar', 'ro': 'Romania',
    'rw': 'Rwanda', 'sa': 'Saudi Arabia', 'sn': 'Senegal', 'rs': 'Serbia', 'sc': 'Seychelles',
    'sg': 'Singapore', 'si': 'Slovenia', 'kr': 'South Korea', 'lk': 'Sri Lanka', 'se': 'Sweden',
    'ch': 'Switzerland', 'tw': 'Taiwan', 'tz': 'Tanzania', 'th': 'Thailand', 'tn': 'Tunisia',
    'tr': 'Turkey', 'tc': 'Turks and Caicos', 'vi': 'US Virgin Islands', 'ug': 'Uganda',
    'ua': 'Ukraine', 'uy': 'Uruguay', 'vn': 'Vietnam', 'zm': 'Zambia', 'zw': 'Zimbabwe'
}

country_to_flag = {
    'United States': '🇺🇸', 'France': '🇫🇷', 'Italy': '🇮🇹', 'Mexico': '🇲🇽', 'Spain': '🇪🇸',
    'United Kingdom': '🇬🇧', 'Germany': '🇩🇪', 'Greece': '🇬🇷', 'United Arab Emirates': '🇦🇪',
    'Canada': '🇨🇦', 'Japan': '🇯🇵', 'China': '🇨🇳', 'Singapore': '🇸🇬', 'Switzerland': '🇨🇭',
    'Thailand': '🇹🇭', 'Turkey': '🇹🇷', 'Australia': '🇦🇺', 'India': '🇮🇳', 'Netherlands': '🇳🇱'
}

airports = []
link_pattern = re.compile(r'(\d+)\. \[(.*?)\]\((.*?)\)')

for line in lines:
    match = link_pattern.search(line)
    if match:
        number, name, url = match.groups()
        suffix = url.split('-')[-1].lower()
        country = suffix_to_country.get(suffix, "Other")
        
        if "hong-kong" in url: country = "Hong Kong"
        if "macau" in url: country = "Macau"
        if "taiwan" in url: country = "Taiwan"
        
        airports.append({
            "country": country,
            "name": name,
            "url": url
        })

seen_urls = set()
unique_airports = []
for a in airports:
    if a['url'] not in seen_urls:
        unique_airports.append(a)
        seen_urls.add(a['url'])

by_country = {}
for a in unique_airports:
    c = a['country']
    if c not in by_country:
        by_country[c] = []
    by_country[c].append(a)

sql = []
sql.append("USE skyview;")
sql.append("SET NAMES utf8mb4;")
sql.append("SET FOREIGN_KEY_CHECKS = 0;")
sql.append("TRUNCATE TABLE airports;")
sql.append("TRUNCATE TABLE locations;")
sql.append("SET FOREIGN_KEY_CHECKS = 1;")
sql.append("")

country_id = 1
for country, items in sorted(by_country.items()):
    val_country = country.replace("'", "''")
    flag = country_to_flag.get(country, '📍')
    sql.append(f"INSERT INTO locations (id, country_name, flag_icon) VALUES ({country_id}, '{val_country}', '{flag}');")
    
    # Chunk airports for this country (or just generally across all items)
    # But for simplicity, we'll collect all and chunk them at the end
    country_id += 1

def sql_escape(text):
    if not text:
        return ""
    # Standardize all quotes to standard single quote, then escape for SQL
    text = text.replace("’", "'").replace("‘", "'").replace("´", "'").replace("`", "'")
    return text.replace("'", "''")

# Collect and chunk all airports
all_airport_rows = []
country_id = 1
for country, items in sorted(by_country.items()):
    for item in items:
        name = sql_escape(item['name'])
        url = sql_escape(item['url'])
        
        # Specific fix for Sardar Vallabhbhai Patel URL inconsistency if detected
        if "sardar-vallabhbhai-patel-in" in url and "amd" not in url.lower():
            url = url.replace("patel-in", "patel-amd-vabo-in")
            
        all_airport_rows.append(f"({country_id}, '{name}', '{url}')")
    country_id += 1

sql.append("")
# Chunk into 50s
chunk_size = 50
for i in range(0, len(all_airport_rows), chunk_size):
    chunk = all_airport_rows[i:i + chunk_size]
    sql.append("INSERT INTO airports (location_id, name, link) VALUES")
    sql.append(",\n".join(chunk) + ";")
    sql.append("")

output_path = r'c:\Users\G5-PC-02\Desktop\skyview\backend\sql\seed_locations.sql'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(sql))

print(f"Generated {output_path} with {len(by_country)} countries and {len(unique_airports)} airports (chunked).")
