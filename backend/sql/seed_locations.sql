USE skyview;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE airports;
TRUNCATE TABLE locations;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO locations (id, country_name, flag_icon) VALUES (1, 'Albania', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (2, 'Argentina', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (3, 'Armenia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (4, 'Aruba', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (5, 'Australia', '🇦🇺');
INSERT INTO locations (id, country_name, flag_icon) VALUES (6, 'Austria', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (7, 'Bahamas', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (8, 'Bahrain', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (9, 'Barbados', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (10, 'Belgium', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (11, 'Bermuda', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (12, 'Bosnia and Herzegovina', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (13, 'Botswana', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (14, 'Brazil', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (15, 'British Virgin Islands', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (16, 'Bulgaria', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (17, 'Canada', '🇨🇦');
INSERT INTO locations (id, country_name, flag_icon) VALUES (18, 'Cyprus', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (19, 'Czechia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (20, 'Denmark', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (21, 'Dominican Republic', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (22, 'Ecuador', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (23, 'Egypt', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (24, 'El Salvador', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (25, 'Estonia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (26, 'Ethiopia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (27, 'Fiji', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (28, 'Finland', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (29, 'France', '🇫🇷');
INSERT INTO locations (id, country_name, flag_icon) VALUES (30, 'Georgia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (31, 'Germany', '🇩🇪');
INSERT INTO locations (id, country_name, flag_icon) VALUES (32, 'Greece', '🇬🇷');
INSERT INTO locations (id, country_name, flag_icon) VALUES (33, 'Grenada', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (34, 'Guatemala', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (35, 'Honduras', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (36, 'Hong Kong', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (37, 'Hungary', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (38, 'Iceland', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (39, 'India', '🇮🇳');
INSERT INTO locations (id, country_name, flag_icon) VALUES (40, 'Indonesia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (41, 'Ireland', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (42, 'Israel', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (43, 'Italy', '🇮🇹');
INSERT INTO locations (id, country_name, flag_icon) VALUES (44, 'Jamaica', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (45, 'Japan', '🇯🇵');
INSERT INTO locations (id, country_name, flag_icon) VALUES (46, 'Jordan', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (47, 'Kazakhstan', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (48, 'Kenya', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (49, 'Kuwait', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (50, 'Kyrgyzstan', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (51, 'Latvia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (52, 'Lebanon', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (53, 'Lithuania', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (54, 'Macau', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (55, 'Malaysia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (56, 'Maldives', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (57, 'Malta', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (58, 'Mauritius', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (59, 'Mexico', '🇲🇽');
INSERT INTO locations (id, country_name, flag_icon) VALUES (60, 'Montenegro', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (61, 'Morocco', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (62, 'Myanmar', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (63, 'Netherlands', '🇳🇱');
INSERT INTO locations (id, country_name, flag_icon) VALUES (64, 'New Zealand', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (65, 'Nigeria', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (66, 'North Macedonia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (67, 'Norway', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (68, 'Oman', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (69, 'Other', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (70, 'Panama', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (71, 'Peru', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (72, 'Philippines', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (73, 'Poland', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (74, 'Portugal', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (75, 'Puerto Rico', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (76, 'Qatar', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (77, 'Romania', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (78, 'Rwanda', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (79, 'Saudi Arabia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (80, 'Senegal', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (81, 'Serbia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (82, 'Seychelles', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (83, 'Singapore', '🇸🇬');
INSERT INTO locations (id, country_name, flag_icon) VALUES (84, 'Sint Maarten', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (85, 'Slovenia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (86, 'South Africa', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (87, 'South Korea', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (88, 'Spain', '🇪🇸');
INSERT INTO locations (id, country_name, flag_icon) VALUES (89, 'Sri Lanka', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (90, 'Sweden', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (91, 'Switzerland', '🇨🇭');
INSERT INTO locations (id, country_name, flag_icon) VALUES (92, 'Taiwan', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (93, 'Thailand', '🇹🇭');
INSERT INTO locations (id, country_name, flag_icon) VALUES (94, 'Tunisia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (95, 'Turkey', '🇹🇷');
INSERT INTO locations (id, country_name, flag_icon) VALUES (96, 'Turks and Caicos', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (97, 'US Virgin Islands', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (98, 'Uganda', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (99, 'Ukraine', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (100, 'United Arab Emirates', '🇦🇪');
INSERT INTO locations (id, country_name, flag_icon) VALUES (101, 'United Kingdom', '🇬🇧');
INSERT INTO locations (id, country_name, flag_icon) VALUES (102, 'United States', '🇺🇸');
INSERT INTO locations (id, country_name, flag_icon) VALUES (103, 'Uruguay', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (104, 'Vietnam', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (105, 'Zambia', '📍');
INSERT INTO locations (id, country_name, flag_icon) VALUES (106, 'Zimbabwe', '📍');

INSERT INTO airports (location_id, name, link) VALUES
(1, 'Tirana Nënë Tereza Rinas International Airport, TIA', 'https://skyvipservices.com/airport/tirana-nene-tereza-rinas-tia-lati-al'),
(2, 'Buenos Aires - Ministro Pistarini International Airport, EZE', 'https://skyvipservices.com/airport/ministro-pistarini-eze-saez-ar'),
(2, 'Jorge Newbery Airport, AEP', 'https://skyvipservices.com/airport/jorge-newbery-aep-sabe-ar'),
(2, 'Ushuaia International Airport, USH', 'https://skyvipservices.com/airport/ushuaia-ush-sawh-ar'),
(3, 'Zvartnots International Airport, EVN', 'https://skyvipservices.com/airport/zvartnots-evn-udyz-am'),
(4, 'Queen Beatrix International Airport, AUA', 'https://skyvipservices.com/airport/queen-beatrix-aua-tnca-aw'),
(5, 'Adelaide Airport, ADL', 'https://skyvipservices.com/airport/adelaide-adl-ypad-au'),
(5, 'Brisbane Airport, BNE', 'https://skyvipservices.com/airport/brisbane-bne-ybbn-au'),
(5, 'Melbourne Airport, MEL', 'https://skyvipservices.com/airport/melbourne-mel-ymml-au'),
(5, 'Perth Airport, PER', 'https://skyvipservices.com/airport/perth-per-ypph-au'),
(5, 'Sydney International Airport, SYD', 'https://skyvipservices.com/airport/sydney-kingsford-smith-syd-yssy-au'),
(6, 'Salzburg Airport, SZG', 'https://skyvipservices.com/airport/salzburg-szg-lows-at'),
(6, 'Vienna International Airport, VIE', 'https://skyvipservices.com/airport/vienna-vie-loww-at'),
(7, 'Leonard M. Thompson International Airport, MHH', 'https://skyvipservices.com/airport/marh-harbour-mhh-myam-bs'),
(7, 'Lynden Pindling International Airport, NAS', 'https://skyvipservices.com/airport/lynden-pindling-nas-mynn-bs'),
(8, 'Bahrain International Airport, BAH', 'https://skyvipservices.com/airport/bahrain-bah-obbi-bh'),
(9, 'Bridgetown Grantley Adams International Airport, BGI', 'https://skyvipservices.com/airport/bridgetown-grantley-adams-bgi-tbpb-bb'),
(10, 'Brussels Airport, BRU', 'https://skyvipservices.com/airport/brussels-bru-ebbr-be'),
(11, 'L.F. Wade International Airport, BDA', 'https://skyvipservices.com/airport/bermuda-bda-txkf-bm'),
(12, 'Sarajevo International Airport, SJJ', 'https://skyvipservices.com/airport/sarajevo-sjj-lqsa-ba'),
(13, 'Sir Seretse Khama International Airport, GBE', 'https://skyvipservices.com/airport/sir-seretse-khama-gbe-fbsk-bw'),
(14, 'Val-de-Cans/Júlio Cezar Ribeiro International Airport, BEL', 'https://skyvipservices.com/airport/val-de-cans-julio-cezar-ribeiro-bel-sbbe-br'),
(14, 'Brasilia International Airport, BSB', 'https://skyvipservices.com/airport/presidente-juscelino-kubitschek-bsb-sbbr-br'),
(14, 'Várzea Grande–Marechal Rondon International Airport, CGB', 'https://skyvipservices.com/airport/varzea-grande-marechal-rondon-cgb-sbcy-br'),
(14, 'Curitiba-President Afonso Pena International Airport, CWB', 'https://skyvipservices.com/airport/curitiba-president-afonso-pena-cwb-sbct-br'),
(14, 'Florianópolis–Hercílio Luz International Airport, FLN', 'https://skyvipservices.com/airport/florianopolis-hercilio-fln-sbfl-br'),
(14, 'Fortaleza–Pinto Martins International Airport, FOR', 'https://skyvipservices.com/airport/fortaleza-pinto-martins-for-sbfz-br'),
(14, 'Goiânia/Santa Genoveva International Airport, GYN', 'https://skyvipservices.com/airport/goiania-santa-genoveva-gyn-sbgo-br'),
(14, 'Foz do Iguaçu/Cataratas International Airport, IGU', 'https://skyvipservices.com/airport/foz-do-iguacu-cataratas-gru-sbgr-br'),
(14, 'Ilhéus/Bahia–Jorge Amado Airport, IOS', 'https://skyvipservices.com/airport/ilheus-bahia-jorge-ios-sbil-br'),
(14, 'Londrina–Gov. José Richa Airport, LDB', 'https://skyvipservices.com/airport/londrina-gov-jose-richa-gru-sbgr-br'),
(14, 'Manaus–Eduardo Gomes International Airport, MAO', 'https://skyvipservices.com/airport/manaus-eduardo-gomes-mao-sbeg-br'),
(14, 'Porto Alegre–Salgado Filho International Airport, POA', 'https://skyvipservices.com/airport/porto-alegre-salgado-filho-gru-sbgr-br'),
(14, 'Porto Seguro Airport, BPS', 'https://skyvipservices.com/airport/porto-seguro-bps-sbps-br'),
(14, 'Aeroporto Internacional do Recife/Guararapes–Gilberto Freyre, REC', 'https://skyvipservices.com/airport/recife-guararapes-gilberto-freyre-rec-sbrf-br'),
(14, 'Rio De Janeiro - Santos Dumont Airport, SDU', 'https://skyvipservices.com/airport/rio-santos-dumont-sdu-sbgl-br'),
(14, 'Rio de Janeiro-Galeao International Airport, GIG', 'https://skyvipservices.com/airport/rio-galeao-tom-jobim-gig-sbgl-br'),
(14, 'Salvador–Deputado Luís Eduardo Magalhães International Airport, SSA', 'https://skyvipservices.com/airport/salvador-deputado-luis-eduardo-magalhaes-ssa-sbsv-br'),
(14, 'São Luís–Marechal Cunha Machado International Airport, SLZ', 'https://skyvipservices.com/airport/sao-luis-marechal-cunha-machado-slz-sbgr-br'),
(14, 'Sao Paulo-Guarulhos International Airport, GRU', 'https://skyvipservices.com/airport/guarulhos-governador-andre-franco-montoro-gru-sbgr-br'),
(14, 'São Paulo - Congonhas, CGH', 'https://skyvipservices.com/airport/congonhas-deputado-freitas-nobre-cgh-sbsp-br'),
(15, 'Terrance B. Lettsome International Airport, EIS', 'https://skyvipservices.com/airport/terrance-b-lettsome-eis-tupj-vg'),
(16, 'Sofia Vasil Levski Airport, SOF', 'https://skyvipservices.com/airport/sofia-sof-lbsf-bg'),
(17, 'Calgary International Airport, YYC', 'https://skyvipservices.com/airport/calgary-yyc-cyyc-ca'),
(17, 'Halifax Stanfield International Airport, YHZ', 'https://skyvipservices.com/airport/halifax-stanfield-yhz-cyhz-ca'),
(17, 'Montreal-Pierre Elliott Trudeau International Airport, YUL', 'https://skyvipservices.com/airport/montreal-pierre-elliott-trudeau-yul-cyul-ca'),
(17, 'Billy Bishop Toronto City Airport, YTZ', 'https://skyvipservices.com/airport/billy-bishop-ytz-cytz-ca'),
(17, 'Toronto Pearson International Airport, YYZ', 'https://skyvipservices.com/airport/lester-b-pearson-yyz-cyyz-ca'),
(17, 'Vancouver International Airport, YVR', 'https://skyvipservices.com/airport/vancouver-yvr-cyvr-ca'),
(18, 'Larnaca International Airport, LCA', 'https://skyvipservices.com/airport/larnaca-lca-lclk-cy');

INSERT INTO airports (location_id, name, link) VALUES
(18, 'Paphos International Airport, PFO', 'https://skyvipservices.com/airport/paphos-pfo-lcph-cy'),
(19, 'Prague Vaclav Havel Airport, PRG', 'https://skyvipservices.com/airport/vaclav-havel-prague-prg-lkpr-cz'),
(20, 'Aarhus Airport, AAR', 'https://skyvipservices.com/airport/aarhus-aar-eka-dk'),
(20, 'Copenhagen Airport, CPH', 'https://skyvipservices.com/airport/copenhagen-kastrup-cph-ekch-dk'),
(21, 'Las Américas International Airport , SDQ', 'https://skyvipservices.com/airport/las-americas-sdq-mdsd-do'),
(22, 'José Joaquín de Olmedo International Airport, GYE', 'https://skyvipservices.com/airport/jose-joaquin-de-olmedo-gye-segu-ec'),
(22, 'Mariscal Sucre International Airport, UIO', 'https://skyvipservices.com/airport/mariscal-sucre-uio-seqm-ec'),
(23, 'New Borg El Arab International Airport, HBE', 'https://skyvipservices.com/airport/el-arab-hbe-heax-eg'),
(23, 'Cairo International Airport, CAI', 'https://skyvipservices.com/airport/cairo-cai-heca-eg'),
(24, 'El Salvador International Airport, San Óscar Arnulfo Romero y Galdámez, SAL', 'https://skyvipservices.com/airport/salvador-sal-mslp-sv'),
(25, 'Tallinn Airport, TLL', 'https://skyvipservices.com/airport/lennart-meri-tallinn-tll-eetn-ee'),
(26, 'Addis Ababa Bole International Airport, ADD', 'https://skyvipservices.com/airport/addis-ababa-bole-add-haab-et'),
(26, 'Beica Airport, BEI', 'https://skyvipservices.com/airport/beica-bei-habe-et'),
(27, 'Nadi International Airport, NAN', 'https://skyvipservices.com/airport/nadi-nan-nffn-fj'),
(28, 'Helsinki Airport, HEL', 'https://skyvipservices.com/airport/helsinki-hel-efhk-fi'),
(28, 'Kuusamo Airport, KAO', 'https://skyvipservices.com/airport/kuusamo-kao-efks-fi'),
(28, 'Rovaniemi Airport, RVN', 'https://skyvipservices.com/airport/rovaniemi-rvn-efhk-fi'),
(29, 'Paris Charles de Gaulle Airport, CDG', 'https://skyvipservices.com/airport/charles-gaulle-cdg-lfpg-fr'),
(29, 'Lyon-Saint Exupery Airport, LYS', 'https://skyvipservices.com/airport/lyon-saint-exupery-lys-lfll-fr'),
(29, 'Nice Cote d''Azur International Airport, NCE', 'https://skyvipservices.com/airport/nice-cote-d-azur-nce-lfmn-fr'),
(29, 'Paris Orly Airport, ORY', 'https://skyvipservices.com/airport/paris-orly-ory-lfpo-fr'),
(29, 'Paris–Le Bourget Airport, LBG', 'https://skyvipservices.com/airport/le-bourget-lbg-lfpb-fr'),
(29, 'Basel-Mulhouse-Freiburg, BSL', 'https://skyvipservices.com/airport/euroairport-basel-mulhouse-freiburg-mlh-lfsb-fr'),
(30, 'Alexander Kartveli Batumi International Airport, BUS', 'https://skyvipservices.com/airport/alexander-kartveli-batumi-bus-ugsb-ge'),
(30, 'Shota Rustaveli Tbilisi International Airport, TBS', 'https://skyvipservices.com/airport/shota-rustaveli-tbilisi-tbs-ugtb-ge'),
(31, 'Berlin Brandenburg Airport, BER', 'https://skyvipservices.com/airport/berlin-brandenburg-ber-eddb-de'),
(31, 'Bremen Airport, BRE', 'https://skyvipservices.com/airport/bremen-bre-eddw-de'),
(31, 'Cologne Bonn Airport, CGN', 'https://skyvipservices.com/airport/cologne-bonn-cgn-eddk-de'),
(31, 'Duesseldorf International Airport, DUS', 'https://skyvipservices.com/airport/dusseldorf-dus-eddl-de'),
(31, 'Frankfurt Airport, FRA', 'https://skyvipservices.com/airport/frankfurt-am-main-fra-eddf-de'),
(31, 'Hamburg Airport, HAM', 'https://skyvipservices.com/airport/hamburg-ham-eddh-de'),
(31, 'Hannover Airport, HAJ', 'https://skyvipservices.com/airport/hannover-haj-eddv-de'),
(31, 'Munich International Airport, MUC', 'https://skyvipservices.com/airport/munich-muc-eddm-de'),
(32, 'Athens - Eleftherios Venizelos International Airport, ATH', 'https://skyvipservices.com/airport/eleftherios-venizelos-ath-lgav-gr'),
(32, 'Chania International Airport - Daskalogiannis, CHQ', 'https://skyvipservices.com/airport/daskalogiannis-chania-chq-lgsa-gr'),
(32, 'Heraklion International Airport, HER', 'https://skyvipservices.com/airport/heraklion-nikos-kazantzakis-her-lgir-gr'),
(32, 'Corfu International Airport, "Ioannis Kapodistrias", CFU', 'https://skyvipservices.com/airport/ioannis-kapodistrias-cfu-lgkr-gr'),
(32, 'Mikonos Airport, JMK', 'https://skyvipservices.com/airport/mykonos-jmk-lgmk-gr'),
(32, 'Rhodes International Airport, RHO', 'https://skyvipservices.com/airport/diagoras-rho-lgrp-gr'),
(32, 'Thessaloniki Airport, SKG', 'https://skyvipservices.com/airport/thessaloniki-macedonia-skg-lgts-gr'),
(32, 'Santorini Airport, JTR', 'https://skyvipservices.com/airport/santorini-jtr-lgsr-gr'),
(33, 'Maurice Bishop International Airport, GND', 'https://skyvipservices.com/airport/maurice-bishop-gnd-tpgy-gd'),
(34, 'La Aurora International Airport, GUA', 'https://skyvipservices.com/airport/la-aurora-gua-mggt-gt'),
(35, 'Aeropuerto Internacional Juan Manuel Gálvez, RTB', 'https://skyvipservices.com/airport/roatan-rtb-mhro-hn'),
(36, 'Hong Kong International Airport, HKG', 'https://skyvipservices.com/airport/hong-kong-hkg-vhhh-hk'),
(37, 'Budapest Ferenc Liszt International Airport, BUD', 'https://skyvipservices.com/airport/budapest-liszt-ferenc-bud-lhbp-hu'),
(38, 'Keflavik International Airport, KEF', 'https://skyvipservices.com/airport/keflavik-kef-bikf-is'),
(39, 'Sardar Vallabhbhai Patel International Airport , AMD', 'https://skyvipservices.com/airport/sardar-vallabhbhai-patel-amd-vabo-in'),
(39, 'Delhi - Indira Gandhi International Airport, DEL', 'https://skyvipservices.com/airport/indira-gandhi-del-vidp-in'),
(39, 'Chhatrapati Shivaji Maharaj International Airport, BOM', 'https://skyvipservices.com/airport/chhatrapati-shivaji-maharaj-bom-vabb-in');

INSERT INTO airports (location_id, name, link) VALUES
(40, 'Ngurah Rai International Airport, DPS', 'https://skyvipservices.com/airport/ngurah-rai-bali-dps-wadd-id'),
(40, 'Soekarno-Hatta International Airport, CGK', 'https://skyvipservices.com/airport/soekarno-hatta-cgk-wiii-id'),
(40, 'Minangkabau International Airport , PDG', 'https://skyvipservices.com/airport/minangkabau-pdg-wiee-id'),
(41, 'Cork Airport, ORK', 'https://skyvipservices.com/airport/cork-ork-eick-ie'),
(41, 'Dublin Airport, DUB', 'https://skyvipservices.com/airport/dublin-dub-eidw-ie'),
(41, 'Shannon Airport, SNN', 'https://skyvipservices.com/airport/shannon-snn-einn-ie'),
(42, 'Ben Gurion International Airport, TLV', 'https://skyvipservices.com/airport/ben-gurion-tlv-llbg-il'),
(43, 'Milano Malpensa Airport, MXP', 'https://skyvipservices.com/airport/malpensa-mxp-limc-it'),
(43, 'Rome - Leonardo da Vinci-Fiumicino Airport, FCO', 'https://skyvipservices.com/airport/leonardo-da-vinci-fiumicino-fco-lirf-it'),
(43, 'Bari Karol Wojtyła Airport, BRI', 'https://skyvipservices.com/airport/bari-da-karol-wojtyla-bri-libd-it'),
(43, 'Cagliari Elmas Airport, CAG', 'https://skyvipservices.com/airport/cagliari-elmas-cag-liee-it'),
(43, 'Catania-Fontanarossa Airport, CTA', 'https://skyvipservices.com/airport/catania-fontanarossa-cta-licc-it'),
(43, 'Florence Peretola Airport, FLR', 'https://skyvipservices.com/airport/peretola-flr-lirq-it'),
(43, 'Bergamo - Il Caravaggio International Airport, BGY', 'https://skyvipservices.com/airport/milan-bergamo-bgy-lime-it'),
(43, 'Milano - Linate Airport, LIN', 'https://skyvipservices.com/airport/milano-linate-lin-liml-it'),
(43, 'Naples International Airport, NAP', 'https://skyvipservices.com/airport/naples-nap-lirn-it'),
(43, 'Olbia Costa Smeralda Airport, OLB', 'https://skyvipservices.com/airport/olbia-costa-smeralda-olb-lieo-it'),
(43, 'Palermo - Falcone-Borsellino Airport, PMO', 'https://skyvipservices.com/airport/falcone-borsellino-pmo-licj-it'),
(43, 'Pisa International - Galileo Galilei Airport, PSA', 'https://skyvipservices.com/airport/pisa-galileo-galilei-psa-lirp-it'),
(43, 'Rome Ciampino – G. B. Pastine International Airport, CIA', 'https://skyvipservices.com/airport/romeciampino-cia-lira-it'),
(43, 'Treviso Airport - Aeroporto di Treviso A Canova, TSF', 'https://skyvipservices.com/airport/treviso-tsf-liph-it'),
(43, 'Turin Airport, TRN', 'https://skyvipservices.com/airport/turin-trn-limf-it'),
(43, 'Venice Marco Polo Airport, VCE', 'https://skyvipservices.com/airport/venice-marco-polo-vce-lipz-it'),
(43, 'Verona Villafranca Airport, VRN', 'https://skyvipservices.com/airport/verona-villafranca-vrn-lipx-it'),
(44, 'Sangster International Airport, MBJ', 'https://skyvipservices.com/airport/leonardo-da-vinci-fiumicino-mbj-mkjs-jm'),
(45, 'Kansai International Airport, KIX', 'https://skyvipservices.com/airport/osaka-kansai-kix-rjbb-jp'),
(45, 'Tokyo - Narita International Airport, NRT', 'https://skyvipservices.com/airport/narita-nrt-rjaa-jp'),
(45, 'Tokyo Haneda International Airport, HND', 'https://skyvipservices.com/airport/tokyo-haneda-hnd-rjtt-jp'),
(46, 'Queen Alia International Airport, AMM', 'https://skyvipservices.com/airport/queen-alia-amm-ojai-jo'),
(47, 'Almaty International Airport, ALA', 'https://skyvipservices.com/airport/almaty-ala-uaaa-kz'),
(48, 'Nairobi - Jomo Kenyatta International Airport, NBO', 'https://skyvipservices.com/airport/jomo-kenyatta-nbo-hkjk-ke'),
(49, 'Kuwait International Airport, KWI', 'https://skyvipservices.com/airport/kwi-kuwait-okkk-kw'),
(50, 'Manas International Airport, FRU', 'https://skyvipservices.com/airport/manas-fru-ucfm-kg'),
(51, 'Riga International Airport, RIX', 'https://skyvipservices.com/airport/riga-rix-evra-lv'),
(52, 'Beirut International Airport, BEY', 'https://skyvipservices.com/airport/beirut-rafic-hariri-bey-olba-lb'),
(53, 'Vilnius International Airport, VNO', 'https://skyvipservices.com/airport/vilnius-vno-eyvi-lt'),
(54, 'Macau International Airport, MFM', 'https://skyvipservices.com/airport/macau-mfm-vmmc-mo'),
(55, 'Kuala Lumpur International Airport, KUL', 'https://skyvipservices.com/airport/kuala-lumpur-kul-wmkk-my'),
(56, 'Male - Velana International Airport, MLE', 'https://skyvipservices.com/airport/male-mle-vrmm-mv'),
(57, 'Malta International Airport, MLA', 'https://skyvipservices.com/airport/malta-mla-lmml-mt'),
(58, 'Mauritius - Sir Seewoosagur Ramgoolam International Airport, MRU', 'https://skyvipservices.com/airport/sir-seewoosagur-ramgoolam-mru-fimp-mu'),
(59, 'Cancun International Airport, CUN', 'https://skyvipservices.com/airport/cancun-cun-mmun-mx'),
(59, 'Merida - Manuel Crescencio Rejon International Airport, MID', 'https://skyvipservices.com/airport/licenciado-manuel-crescencio-rejon-mid-mmmd-mx'),
(59, 'Monterrey International Airport, MTY', 'https://skyvipservices.com/airport/monterrey-mty-mmmy-mx'),
(59, 'Puerto Vallarta - Licenciado Gustavo Diaz Ordaz International Airport, PVR', 'https://skyvipservices.com/airport/licenciado-gustavo-diaz-ordaz-pvr-mmpr-mx'),
(59, 'Los Cabos International Airport, SJD', 'https://skyvipservices.com/airport/los-cabos-sjd-mmsd-mx'),
(59, 'Veracruz - Aeropuerto Internacional Heriberto Jara, VER', 'https://skyvipservices.com/airport/veracruz-heriberto-jara-ver-mmvr-mx'),
(60, 'Podgorica Airport, TGD', 'https://skyvipservices.com/airport/podgorica-golubovci-tgd-lypg-me'),
(60, 'Tivat Airport, TIV', 'https://skyvipservices.com/airport/tivat-tiv-lytv-me'),
(61, 'Agadir-Al Massira Airport, AGA', 'https://skyvipservices.com/airport/al-massira-aga-gmad-ma');

INSERT INTO airports (location_id, name, link) VALUES
(61, 'Casablanca - Mohammed V International Airport, CMN', 'https://skyvipservices.com/airport/mohammed-v-cmn-gmmn-ma'),
(61, 'Fes-Saiss Airport, FEZ', 'https://skyvipservices.com/airport/saiss-fez-gmff-ma'),
(61, 'Marrakech - Menara Airport, RAK', 'https://skyvipservices.com/airport/menara-rak-gmmx-ma'),
(61, 'Oujda - Angads Airport, OUD', 'https://skyvipservices.com/airport/angads-oud-gmfo-ma'),
(61, 'Tangier Ibn Battouta Airport, TNG', 'https://skyvipservices.com/airport/tangier-ibn-battouta-tng-gmtt-ma'),
(61, 'Dakhla Airport, VIL', 'https://skyvipservices.com/airport/dakhla-vil-gmmh-ma'),
(61, 'Hassan I Airport - Laayoune, EUN', 'https://skyvipservices.com/airport/hassan-l-laayoune-eun-gmml-ma'),
(62, 'Pakokku Airport, PKK', 'https://skyvipservices.com/airport/pakokku-pkk-kvpu-mm'),
(63, 'Amsterdam Airport Schiphol, AMS', 'https://skyvipservices.com/airport/amsterdam-schiphol-ams-eham-nl'),
(64, 'Auckland International Airport, AKL', 'https://skyvipservices.com/airport/auckland-akl-nzaa-nz'),
(64, 'Christchurch Airport, CHC', 'https://skyvipservices.com/airport/christchurch-chc-nzch-nz'),
(64, 'Dunedin Airport, DUD', 'https://skyvipservices.com/airport/dunedin-dud-nzdn-nz'),
(64, 'Napier - Hawke''s Bay Airport, NPE', 'https://skyvipservices.com/airport/hawkes-bay-npe-nznr-nz'),
(64, 'Nelson Airport, NSN', 'https://skyvipservices.com/airport/nelson-nsn-nzns-nz'),
(64, 'New Plymouth Airport, NPL', 'https://skyvipservices.com/airport/new-plymouth-npl-nznp-nz'),
(64, 'Palmerston North Airport, PMR', 'https://skyvipservices.com/airport/palmerston-north-pmr-nzpm-nz'),
(64, 'Queenstown International Airport, ZQN', 'https://skyvipservices.com/airport/queenstown-zqn-nzqn-nz'),
(64, 'Wellington International Airport, WLG', 'https://skyvipservices.com/airport/wellington-wlg-nzwn-nz'),
(65, 'Nnamdi Azikiwe International Airport, ABV', 'https://skyvipservices.com/airport/nnamdi-azikiwe-abv-fttj-ng'),
(65, 'Murtala Muhammed International Airport, LOS', 'https://skyvipservices.com/airport/murtala-muhammed-los-dnmm-ng'),
(66, 'Skopje Petrovec International Airport, SKP', 'https://skyvipservices.com/airport/skopje-petrovec-skp-lwsk-mk'),
(67, 'Oslo Airport, Gardermoen, OSL', 'https://skyvipservices.com/airport/oslo-gardermoen-osl-engm-no'),
(68, 'Muscat International Airport, MCT', 'https://skyvipservices.com/airport/muscat-mct-ooms-om'),
(69, 'Marseille Provence Airport , MRS', 'https://skyvipservices.com/airport/marseille-mrs-province-france-lfml'),
(69, 'Bologna Guglielmo Marconi Airport, BLQ', 'https://skyvipservices.com/airport/bologna-guglielmo-marconi-airport'),
(69, 'Brindisi Papola Casale Airport , BDS', 'https://skyvipservices.com/airport/brindisi-bds-salerno--libr-it-papola'),
(69, 'Lamezia Terme International Airport, SUF', 'https://skyvipservices.com/airport/lamezia-suf-it-lica-terme'),
(69, 'Salerno Costa d''Amalfi Airport , QSR', 'https://skyvipservices.com/airport/salerno-it-qsr-liri-amalfi'),
(69, 'Guanajuato International Airport, BJX', 'https://skyvipservices.com/airport/bjx-leon-mexico-guanajuato-mmlo'),
(69, 'Aeropuerto Internacional Playa de Oro, ZLO', 'https://skyvipservices.com/airport/zlo-mexico-playa-de-oro-manzanillo-mmzo'),
(69, 'Federico García Lorca Granada-Jaén Airport , GRX', 'https://skyvipservices.com/airport/granada-grx-spain-legr'),
(69, 'Buffalo Niagara International Airport, BUF', 'https://skyvipservices.com/airport/buffalo-buf-niagara-usa-kbuf'),
(69, 'Louisville Muhammad Ali International Airport, SDF', 'https://skyvipservices.com/airport/sdf-louisville-muhammad-ali-us-ksdf'),
(69, 'Milwaukee Mitchell International Airport, MKE', 'https://skyvipservices.com/airport/mke-kmke-milwaukee-mitchell'),
(69, 'Raleigh–Durham International Airport, RDU', 'https://skyvipservices.com/airport/raleigh-durham-rdu-us-krdu'),
(69, 'Salt Lake City International Airport, SLC', 'https://skyvipservices.com/airport/slc-salt-lake-city-kslc'),
(69, 'Tucson International Airport , TUS', 'https://skyvipservices.com/airport/tus-tucson-ktus-arizona'),
(69, 'Palm Beach International Airport, PBI', 'https://skyvipservices.com/airport/pbi-palm-beach-west-florida-kpbi'),
(69, 'Ingeniero Aeronáutico Ambrosio L.V. Taravella International Airport, COR', 'https://skyvipservices.com/airport/cor-saco-cordoba-argentina-ingeniero-ambrosio-taravella'),
(69, 'Governor Francisco Gabrielli International Airport, MDZ', 'https://skyvipservices.com/airport/mendoza-argentina-same-governor-francisco-gabrielli'),
(69, 'Rosario – Islas Malvinas International Airport, ROS', 'https://skyvipservices.com/airport/rosario-ros-argentina-islas-malvinas'),
(69, 'Gold Coast Airport, OOL', 'https://skyvipservices.com/airport/ool-gold-coast-australia-ybcg'),
(69, 'Edmonton International Airport , YEG', 'https://skyvipservices.com/airport/yeg-canada-edmonton-cyeg'),
(69, 'Jean Lesage International Airport, YQB', 'https://skyvipservices.com/airport/canada-yqb-quebec-cyqb'),
(69, 'Owen Roberts International Airport, GCM', 'https://skyvipservices.com/airport/gcm-grand-cayman-islands-mwcr'),
(69, 'N''Djamena International Airport , NDJ', 'https://skyvipservices.com/airport/ndjamena-ndj-fttj-td'),
(69, 'Comodoro Arturo Merino Benitez International Airport, SCL', 'https://skyvipservices.com/airport/comodoro-arturo-merino-benitez-scl-scel-cl'),
(69, 'Beijing Capital International Airport, PEK', 'https://skyvipservices.com/airport/beijing-pek-zbaa-cn'),
(69, 'Beijing Daxing International Airport, PKX', 'https://skyvipservices.com/airport/beijing-daxing-pkx-kzbad-cn'),
(69, 'Changsha Huanghua International Airport, CSX', 'https://skyvipservices.com/airport/changsha-china-csx-zgha');

INSERT INTO airports (location_id, name, link) VALUES
(69, 'Chengdu Shuangliu International Airport, CTU', 'https://skyvipservices.com/airport/ctu-china-chengdu-zuuu'),
(69, 'Chengdu Tianfu International Airport, TFU', 'https://skyvipservices.com/airport/china-tfu-chengdu-zutf'),
(69, 'Dalian Zhoushuizi International Airport, DLC', 'https://skyvipservices.com/airport/dalian-zhoushuizi-dlc-zytl-cn'),
(69, 'Guangzhou Baiyun International Airport, CAN', 'https://skyvipservices.com/airport/can-china'),
(69, 'Hangzhou Xiaoshan International Airport, HGH', 'https://skyvipservices.com/airport/hgh-china-hangzhou-xiaoshan-zshc'),
(69, 'Ningbo Lishe International Airport , NGB', 'https://skyvipservices.com/airport/ningbo-lishe-ngb-zsnb-cn'),
(69, 'Shanghai Hongqiao International Airport, SHA', 'https://skyvipservices.com/airport/shanghai-hongqiao-international-airport'),
(69, 'Shanghai Pudong International Airport, PVG', 'https://skyvipservices.com/airport/shanghai-pudong-pvg-zspd-cn'),
(69, 'Wenzhou Longwan International Airport, WNZ', 'https://skyvipservices.com/airport/wenzhou-wnz-zswz-cn'),
(69, 'Xi''an Xianyang International Airport, XIY', 'https://skyvipservices.com/airport/xian-xiy-china-zlxy'),
(69, 'Xiamen Gaoqi International Airport, XMN', 'https://skyvipservices.com/airport/xiamen-xmn-zsam-cn'),
(69, 'Yichang Sanxia International Airport , YIH', 'https://skyvipservices.com/airport/yichang-yih-china-zhyc'),
(69, 'Zhengzhou Xinzheng International Airport , CGO', 'https://skyvipservices.com/airport/zhengzhou-cgo-zhcc-cn'),
(69, 'El Dorado International Airport, BOG', 'https://skyvipservices.com/airport/el-dorado-bog-skbo-co'),
(69, 'The Liberia Guanacaste Airport , LIR', 'https://skyvipservices.com/airport/liberia-guanacaste-lir-mrlb-daniel-oduber'),
(69, 'Costa Rica - Juan Santamaria International Airport, SJO', 'https://skyvipservices.com/airport/juan-santamaria-sjo-mroc-cr'),
(69, 'Pula Airport, PUY', 'https://skyvipservices.com/airport/pula-puy-ldpl-hr'),
(69, 'Split Saint Jerome Airport, SPU', 'https://skyvipservices.com/airport/split-croatia-spu-saint-jerome-ldsp'),
(69, 'Zadar Airport, ZAD', 'https://skyvipservices.com/airport/zadar-zad-ldzd-hr'),
(69, 'Zagreb Franjo Tuđman Airport, ZAG', 'https://skyvipservices.com/airport/zagreb-zag-ldzd-hr'),
(69, 'Curaçao International Airport, CUR', 'https://skyvipservices.com/airport/curacao-cur-tncc-cw'),
(69, 'Faaʻa International Airport, PPT', 'https://skyvipservices.com/airport/faaa-ppt'),
(69, 'Stuttgart Airport, STR', 'https://skyvipservices.com/airport/str-stuttgart-edds'),
(69, 'Paros National Airport, PAS', 'https://skyvipservices.com/airport/paros-national-pas'),
(69, 'Zakynthos International Airport, ZTH', 'https://skyvipservices.com/airport/greece-zth-lgza'),
(69, 'Pointe-à-Pitre International Airport, PTP', 'https://skyvipservices.com/airport/abymes-guadeloupe-ptp-tffr-maryse-conde'),
(69, 'Manohar International Airport - Goa Airport , GOX', 'https://skyvipservices.com/airport/gox-goa-india-voga-manohar'),
(69, 'Rajiv Gandhi International Airport, HYD', 'https://skyvipservices.com/airport/hyd-india-rajiv-gandhi-vohs'),
(69, 'Fukuoka international airport, FUK', 'https://skyvipservices.com/airport/fuk-fukuoka-japan-rjff-itazuke'),
(69, 'Sultan Azlan Shah Airport, IPH', 'https://skyvipservices.com/airport/iph-wmki-ipoh-azian-shah'),
(69, 'Penang International Airport, PEN', 'https://skyvipservices.com/airport/pen-penang-wmkp'),
(69, 'Madeira International Airport Cristiano Ronaldo, FNC', 'https://skyvipservices.com/airport/madeira-fnc-cristiano-ronaldo-portugalia-lpma'),
(69, 'Hewanorra International Airport, UVF', 'https://skyvipservices.com/airport/hewanorra--vieux-fort-quarter-uvf-tlpl-lc'),
(69, 'Argyle International Airport, SVD', 'https://skyvipservices.com/airport/argyle-svd-tvsa-vs'),
(69, 'Al-Ula International Airport, ULH', 'https://skyvipservices.com/airport/alula-ulh-oeao-sa-prince-abdul-majeed-bin-abdulaziz'),
(69, 'Gothenburg Landvetter Airport, GOT', 'https://skyvipservices.com/airport/gothenburg-got-esgg'),
(69, 'Kilimanjaro International Airport, JRO', 'https://skyvipservices.com/airport/jro-kilimanjaro-htkj'),
(69, 'Mae Fah Luang - Chiang Rai International Airport , CEI', 'https://skyvipservices.com/airport/chiang-rai-thailand-cei-vtct'),
(69, 'Samui International Airport, USM', 'https://skyvipservices.com/airport/samui-international-airport'),
(69, 'Dalaman Havalimanı, DLM', 'https://skyvipservices.com/airport/turkey-dalaman-dlm-ltbs'),
(70, 'Panama - Tocumen International Airport, PTY', 'https://skyvipservices.com/airport/tocumen-pty-mpto-pa'),
(71, 'Rodríguez Ballón International Airport, AQP', 'https://skyvipservices.com/airport/rodriguez-ballon-aqp-spqu-pe'),
(71, 'Jorge Chávez International Airport, LIM', 'https://skyvipservices.com/airport/jorge-chavez-lim-spjc-pe'),
(72, 'Clark International Airport, CRK', 'https://skyvipservices.com/airport/clark-airport-crk-rplc-ph'),
(72, 'Godofredo P. Ramos Airport, MPH', 'https://skyvipservices.com/airport/godofredo-p-ramos-mph-rpve-ph'),
(72, 'Mactan–Cebu International Airport, CEB', 'https://skyvipservices.com/airport/mactan-cebu-ceb-rpvm-ph'),
(72, 'Francisco Bangoy International Airport, DVO', 'https://skyvipservices.com/airport/francisco-bangoy-dvo-rpmd-ph'),
(72, 'Kalibo International Airport, KLO', 'https://skyvipservices.com/airport/kalibo-airport-klo-rpvk-ph'),
(72, 'Manila - Ninoy Aquino International Airport, MNL', 'https://skyvipservices.com/airport/ninoy-aquino-mnl-rpll-ph'),
(72, 'Puerto Princesa International Airport, PPS', 'https://skyvipservices.com/airport/puerto-princesa-pps-rpvp-ph');

INSERT INTO airports (location_id, name, link) VALUES
(73, 'Kraków John Paul II International Airport, KRK', 'https://skyvipservices.com/airport/krakow-john-paul-ii-krk-epkk-pl'),
(73, 'Warsaw Chopin Airport, WAW', 'https://skyvipservices.com/airport/warsaw-chopin-waw-epwa-pl'),
(74, 'Lisbon Humberto Delgado Airport, LIS', 'https://skyvipservices.com/airport/humberto-delgado-lisbon-portela-lis-lppt-pt'),
(74, 'Porto - Francisco de Sa Carneiro Airport, OPO', 'https://skyvipservices.com/airport/francisco-carneiro-opo-lppr-pt'),
(75, 'Luis Munoz Marin International Airport, SJU', 'https://skyvipservices.com/airport/luis-munoz-marin-sju-tjsj-pr'),
(76, 'Hamad International Airport, DOH', 'https://skyvipservices.com/airport/hamad-doh-othh-qa'),
(77, 'Bucharest Henri Coanda International Airport, OTP', 'https://skyvipservices.com/airport/bucharest-henri-coanda-otp-lrop-ro'),
(78, 'Kigali international airport, KGL', 'https://skyvipservices.com/airport/kigali-kgl-hryr-rw'),
(79, 'Jeddah - King Abdulaziz International Airport, JED', 'https://skyvipservices.com/airport/king-abdulaziz-jed-oejn-sa'),
(79, 'Prince Mohammad Bin Abdulaziz International Airport, MED', 'https://skyvipservices.com/airport/prince-mohammad-bin-abdulaziz-med-oema-sa'),
(79, 'Riyadh - King Khalid International Airport, RUH', 'https://skyvipservices.com/airport/king-khalid-ruh-oerk-sa'),
(80, 'Blaise Diagne International Airport, DSS', 'https://skyvipservices.com/airport/blaise-diagne-dss-gobd-sn'),
(81, 'Belgrade Nikola Tesla Airport, BEG', 'https://skyvipservices.com/airport/belgrade-nikola-tesla-beg-lybe-rs'),
(82, 'Seychelles International Airport, SEZ', 'https://skyvipservices.com/airport/seychelles-sez-fsia-sc'),
(83, 'Singapore Changi Airport, SIN', 'https://skyvipservices.com/airport/singapore-changi-west-sin-wsss-sg'),
(84, 'Sint Maarten - Princess Juliana International Airport, SXM', 'https://skyvipservices.com/airport/princess-juliana-sxm-tncm-sx'),
(84, 'Saint Barthélemy Airport, SBH', 'https://skyvipservices.com/airport/saint-barthelemy-remy-de-haenen-sbh-tffj-sx'),
(85, 'Ljubljana Joze Pucnik Airport, LJU', 'https://skyvipservices.com/airport/ljubljana-joze-pucnik-lju-ljlj-si'),
(85, 'Maribor Edvard Rusjan Airport, MBX', 'https://skyvipservices.com/airport/maribor-edvard-rusjan-mbx-ljmb-si'),
(86, 'Douala International Airport, DLA', 'https://skyvipservices.com/airport/douala-dla-fkkd-za'),
(86, 'Cape Town International Airport, CPT', 'https://skyvipservices.com/airport/cape-town-cpt-fact-za'),
(86, 'Durban International Airport, DUR', 'https://skyvipservices.com/airport/dur-durban-fadn-za'),
(86, 'Johannesburg - O.R. Tambo International Airport, JNB', 'https://skyvipservices.com/airport/or-tambo-jnb-faor-za'),
(86, 'Kruger Mpumalanga International Airport, MQP', 'https://skyvipservices.com/airport/kruger-mpumalanga-mqp-fakn-za'),
(87, 'Gimpo International Airport - Kimpo, GMP', 'https://skyvipservices.com/airport/gimpo-kimpo-gmp-rkss-kr'),
(87, 'Incheon International Airport, ICN', 'https://skyvipservices.com/airport/incheon-icn-rksi-kr'),
(88, 'Adolfo Suarez Madrid-Barajas Airport, MAD', 'https://skyvipservices.com/airport/adolfo-suarez-madrid-barajas-mad-lemd-es'),
(88, 'Barcelona-El Prat Airport, BCN', 'https://skyvipservices.com/airport/barcelona-bcn-lebl-es'),
(88, 'Ibiza Airport, IBZ', 'https://skyvipservices.com/airport/ibiza-ibz-leib-es'),
(88, 'Gran Canaria Airport, LPA', 'https://skyvipservices.com/airport/gran-canaria-lpa-gclp-es'),
(88, 'Malaga Airport, AGP', 'https://skyvipservices.com/airport/malaga-agp-lemg-es'),
(88, 'Palma de Mallorca Airport, PMI', 'https://skyvipservices.com/airport/palma-mallorca-pmi-lepa-es'),
(88, 'San Sebastián Airport, EAS', 'https://skyvipservices.com/airport/san-sebastian-eas-leso-es'),
(88, 'San Pablo Sevilla - Seville Airport, SVQ', 'https://skyvipservices.com/airport/san-pablo-svq-lezl-es'),
(88, 'Tenerife South Airport, TFS', 'https://skyvipservices.com/airport/tenerife-south-tfs-gcts-es'),
(88, 'Valencia Airport, VLC', 'https://skyvipservices.com/airport/valencia-vlc-levc-es'),
(89, 'Bandaranaike International Airport, CMB', 'https://skyvipservices.com/airport/bandaranaike-cmb-vcbi-lk'),
(90, 'Stockholm Arlanda Airport, ARN', 'https://skyvipservices.com/airport/stockholm-arlanda-arn-essa-se'),
(91, 'Geneve-Cointrin Aeroport, GVA', 'https://skyvipservices.com/airport/geneva-cointrin-gva-lsgg-ch'),
(91, 'Zurich Airport, ZRH', 'https://skyvipservices.com/airport/zurich-zrh-lszh-ch'),
(92, 'Taiwan Taoyuan International Airport, TPE', 'https://skyvipservices.com/airport/taiwan-taoyuan-taipei-tpe-rctp-tw'),
(93, 'Bangkok - Suvarnabhumi Airport, BKK', 'https://skyvipservices.com/airport/suvarnabhumi-bkk-vtbs-th'),
(93, 'Chiang Mai international Airport, CNX', 'https://skyvipservices.com/airport/chiang-mai-cnx-vtcc-th'),
(93, 'Phuket International , HKT', 'https://skyvipservices.com/airport/phuket-hkt-vtsp-th'),
(94, 'Tunis–Carthage International Airport, TUN', 'https://skyvipservices.com/airport/tunis-carthage-tun-dtta-tn'),
(95, 'Antalya Airport, AYT', 'https://skyvipservices.com/airport/antalya-ayt-ltai-tr'),
(95, 'Bodrum Milas Airport, BJV', 'https://skyvipservices.com/airport/milas-bodrum-bjv-ltfe-tr'),
(95, 'Istanbul Airport, IST', 'https://skyvipservices.com/airport/istanbul-ist-ltfm-tr'),
(95, 'Istanbul Sabiha Gökçen International Airport, SAW', 'https://skyvipservices.com/airport/istanbul-saw-ltfj-tr'),
(95, 'Izmir Adnan Menderes Airport , ADB', 'https://skyvipservices.com/airport/izmir-adb-ltbj-tr');

INSERT INTO airports (location_id, name, link) VALUES
(96, 'Providenciales International Airport, PLS', 'https://skyvipservices.com/airport/providenciales-pls-mbpv-tc'),
(97, 'The Cyril E. King International Airport, STT', 'https://skyvipservices.com/airport/cyril-e-king-stt-tist-vi'),
(98, 'Entebbe International Airport , EBB', 'https://skyvipservices.com/airport/entebbe-ebb-huen-ug'),
(99, 'Kiev Boryspil International Airport, KBP', 'https://skyvipservices.com/airport/boryspil-kbp-ukbb-ua'),
(100, 'Abu Dhabi International Airport, AUH', 'https://skyvipservices.com/airport/abu-dhabi-auh-omaa-ae'),
(100, 'Dubai International Airport, DXB', 'https://skyvipservices.com/airport/dubai-dxb-omdb-ae'),
(100, 'Dubai-Al Maktoum , DWC', 'https://skyvipservices.com/airport/almktoum-dwc-omdw-ae'),
(101, 'London Heathrow Airport, LHR', 'https://skyvipservices.com/airport/london-heathrow-lhr-egll-gb'),
(101, 'Aberdeen International Airport, ABZ', 'https://skyvipservices.com/airport/abz-aberdeen-egpd-gb'),
(101, 'Bristol Airport, BRS', 'https://skyvipservices.com/airport/bristol-brs-eggd-uk'),
(101, 'Edinburgh Airport, EDI', 'https://skyvipservices.com/airport/edinburgh-edi-egph-gb'),
(101, 'Glasgow International Airport, GLA', 'https://skyvipservices.com/airport/glasgow-gla-egpf-gb'),
(101, 'London City Airport, LCY', 'https://skyvipservices.com/airport/london-city-lcy-eglc-gb'),
(101, 'London Gatwick Airport, LGW', 'https://skyvipservices.com/airport/london-gatwick-lgw-egkk-gb'),
(101, 'London Stansted Airport, STN', 'https://skyvipservices.com/airport/london-stansted-stn-egss-gb'),
(101, 'Manchester Airport, MAN', 'https://skyvipservices.com/airport/manchester-man-egcc-uk'),
(102, 'Los Angeles International Airport, LAX', 'https://skyvipservices.com/airport/los-angeles-lax-klax-us'),
(102, 'John F. Kennedy International Airport, JFK', 'https://skyvipservices.com/airport/john-f-kennedy-jfk-kjfk-us'),
(102, 'Hartsfield-Jackson Atlanta International Airport, ATL', 'https://skyvipservices.com/airport/hartsfield-jackson-atlanta-atl-katl-us'),
(102, 'Austin-Bergstrom International Airport, AUS', 'https://skyvipservices.com/airport/austin-bergstrom-aus-kaus-us'),
(102, 'Baltimore-Washington International Airport, BWI', 'https://skyvipservices.com/airport/baltimore-washington-thurgood-marshall-bwi-kbwi-us'),
(102, 'Logan International Airport, BOS', 'https://skyvipservices.com/airport/general-edward-lawrence-logan-bos-kbos-us'),
(102, 'Charleston International Airport, CHS', 'https://skyvipservices.com/airport/charleston-chs-kchs-us'),
(102, 'Charlotte Douglas International Airport, CLT', 'https://skyvipservices.com/airport/charlotte-douglas-clt-kclt-us'),
(102, 'Chicago Midway International Airport, MDW', 'https://skyvipservices.com/airport/chicago-midway-mdw-kmdw-us'),
(102, 'Chicago O''Hare International Airport, ORD', 'https://skyvipservices.com/airport/chicago-o-hare-ord-kord-us'),
(102, 'Cincinnati/Northern Kentucky International Airport, CVG', 'https://skyvipservices.com/airport/cincinnati-northern-kentucky-cvg-kcvg-us'),
(102, 'Cleveland Hopkins International Airport, CLE', 'https://skyvipservices.com/airport/cleveland-hopkins-cle-kcle-us'),
(102, 'John Glenn Columbus International Airport, CMH', 'https://skyvipservices.com/airport/john-glenn-columbus-cmh-kcmh-us'),
(102, 'Dallas/Fort Worth International Airport, DFW', 'https://skyvipservices.com/airport/dallas-fort-worth-dfw-kdfw-us'),
(102, 'Denver International Airport, DEN', 'https://skyvipservices.com/airport/denver-den-kden-us'),
(102, 'Detroit Metropolitan Wayne County Airport, DTW', 'https://skyvipservices.com/airport/detroit-metropolitan-wayne-county-dtw-kdtw-us'),
(102, 'Fort Lauderdale-Hollywood International Airport, FLL', 'https://skyvipservices.com/airport/fort-lauderdale-hollywood-fll-kfll-us'),
(102, 'George Bush Intercontinental Airport, IAH', 'https://skyvipservices.com/airport/george-bush-intercontinental-houston-iah-kiah-us'),
(102, 'Indianapolis International Airport, IND', 'https://skyvipservices.com/airport/indianapolis-ind-kind-us'),
(102, 'Jacksonville International Airport, JAX', 'https://skyvipservices.com/airport/jacksonville-jax-kjax-us'),
(102, 'McCarran International Airport, LAS', 'https://skyvipservices.com/airport/mccarran-las-klas-us'),
(102, 'Macarthur Airport, ISP', 'https://skyvipservices.com/airport/macarthur-isp-kisp-us'),
(102, 'Miami International Airport , MIA', 'https://skyvipservices.com/airport/miami-mia-kmia-us'),
(102, 'Minneapolis-St Paul International Airport, MSP', 'https://skyvipservices.com/airport/minneapolis-st-paul-wold-chamberlain-msp-kmsp-us'),
(102, 'Nashville International Airport, BNA', 'https://skyvipservices.com/airport/nashville-bna-kbna-us'),
(102, 'Louis Armstrong New Orleans International Airport, MSY', 'https://skyvipservices.com/airport/louis-armstrong-new-orleans-msy-kmsy-us'),
(102, 'La Guardia Airport, LGA', 'https://skyvipservices.com/airport/guardia-lga-klga-us'),
(102, 'Newark Liberty International Airport, EWR', 'https://skyvipservices.com/airport/newark-liberty-ewr-kewr-us'),
(102, 'Metropolitan Oakland International Airport, OAK', 'https://skyvipservices.com/airport/metropolitan-oakland-oak-koak-us'),
(102, 'Orlando International Airport, MCO', 'https://skyvipservices.com/airport/orlando-mco-kmco-us'),
(102, 'Philadelphia International Airport, PHL', 'https://skyvipservices.com/airport/philadelphia-phl-kphl-us'),
(102, 'Phoenix Sky Harbor International Airport, PHX', 'https://skyvipservices.com/airport/phoenix-sky-harbor-phx-kphx-us'),
(102, 'Pittsburgh International Airport, PIT', 'https://skyvipservices.com/airport/pittsburgh-pit-kpit-us'),
(102, 'Portland International Airport, PDX', 'https://skyvipservices.com/airport/portland-pdx-kpdx-us');

INSERT INTO airports (location_id, name, link) VALUES
(102, 'Lambert-St. Louis International Airport, STL', 'https://skyvipservices.com/airport/st-louis-lambert-stl-kstl-us'),
(102, 'San Diego International Airport, SAN', 'https://skyvipservices.com/airport/san-diego-san-ksan-us'),
(102, 'San Francisco International Airport, SFO', 'https://skyvipservices.com/airport/san-francisco-sfo-ksfo-us'),
(102, 'Norman Y. Mineta San Jose International Airport, SJC', 'https://skyvipservices.com/airport/sanjosemineta-sjc-ksjc-us'),
(102, 'John Wayne Airport-Orange County, SNA', 'https://skyvipservices.com/airport/john-wayne-orange-county-sna-ksna-us'),
(102, 'Savannah/Hilton Head International Airport, SAV', 'https://skyvipservices.com/airport/savannah-sav-ksav-us'),
(102, 'Seattle-Tacoma International Airport, SEA', 'https://skyvipservices.com/airport/seattle-tacoma-sea-ksea-us'),
(102, 'Bradley International Airport, BDL', 'https://skyvipservices.com/airport/bradley-international-bld-kbdl-us'),
(102, 'Tampa International Airport, TPA', 'https://skyvipservices.com/airport/tampa-tpa-ktpa-us'),
(102, 'Ronald Reagan Washington National Airport, DCA', 'https://skyvipservices.com/airport/ronald-reagan-washington-national-dca-kdca-us'),
(102, 'Washington Dulles International Airport, IAD', 'https://skyvipservices.com/airport/washington-dulles-iad-kiad-us'),
(102, 'Westchester County Airport, HPN', 'https://skyvipservices.com/airport/westchester-hpn-khpn-us'),
(103, 'Carrasco International Airport, MVD', 'https://skyvipservices.com/airport/carrasco-general-c-l-berisso-mvd-sumu-uy'),
(103, 'Capitan de Corbeta Carlos A. Curbelo International Airport, PDP', 'https://skyvipservices.com/airport/capitan-corbeta-ca-curbelo-pdp-suls-uy'),
(104, 'Da Nang International Airport, DAD', 'https://skyvipservices.com/airport/da-nang-dad-vvdn-vn'),
(104, 'Noi Bai International Airport, HAN', 'https://skyvipservices.com/airport/noi-bai-han-vvnb-vn'),
(104, 'Tan Son Nhat International Airport, SGN', 'https://skyvipservices.com/airport/tan-son-nhat-sgn-vvts-vn'),
(104, 'Cam Ranh International Airport, CXR', 'https://skyvipservices.com/airport/cam-ranh-cxr-vvcr-vn'),
(105, 'Kenneth Kaunda Chongwe International Airport , LUN', 'https://skyvipservices.com/airport/kenneth-kaunda-chongwe-lun-flkk-zm'),
(106, 'Robert Gabriel Mugabe International Airport, HRE', 'https://skyvipservices.com/airport/robert-gabriel-mugabe-hre-fvrg-zw');
