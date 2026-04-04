<?php
require_once 'config/db.php';

// Adjust memory and execution limits for large data
ini_set('memory_limit', '256M');
set_time_limit(300);

echo "<h1>SkyView Database Seeder</h1>";

$sqlFile = 'sql/seed_locations.sql';

if (!file_exists($sqlFile)) {
    // Try absolute path if relative fails (based on your workspace)
    $sqlFile = 'c:/Users/G5-PC-02/Desktop/skyview/backend/sql/seed_locations.sql';
}

if (!file_exists($sqlFile)) {
    die("<p style='color:red'>Error: SQL file not found at $sqlFile</p>");
}

$sqlContent = file_get_contents($sqlFile);

// Split by semicolon followed by newline
$queries = preg_split('/;(?:\s*\n)/', $sqlContent);

$successCount = 0;
$errorCount = 0;

// Also add the Admin user specifically
$queries[] = "INSERT INTO admins (username, password) VALUES ('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi') ON DUPLICATE KEY UPDATE username=username";

echo "<ul>";
foreach ($queries as $query) {
    $query = trim($query);
    if (empty($query)) continue;

    try {
        $conn->query($query);
        $successCount++;
    } catch (Exception $e) {
        $errorCount++;
        echo "<li style='color:red'><b>Error in query:</b> " . htmlspecialchars(substr($query, 0, 100)) . "... <br> <i>Reason: " . $e->getMessage() . "</i></li>";
    }
}
echo "</ul>";

echo "<h2>Results:</h2>";
echo "<p style='color:green'>Successfully executed: $successCount queries.</p>";
if ($errorCount > 0) {
    echo "<p style='color:red'>Failed queries: $errorCount.</p>";
}

echo "<p><a href='http://localhost/backend/api/index.php/locations' target='_blank'>Click here to verify the API output</a></p>";
?>
