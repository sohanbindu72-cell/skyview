const { execute } = require('./src/config/db');

async function run() {
    console.log("Adding airport_package_pricing table...");
    try {
        await execute(`
            CREATE TABLE IF NOT EXISTS airport_package_pricing (
              airport_id INT NOT NULL,
              package_id INT NOT NULL,
              custom_price DECIMAL(10, 2) NOT NULL,
              PRIMARY KEY (airport_id, package_id),
              FOREIGN KEY (airport_id) REFERENCES airports(id) ON DELETE CASCADE,
              FOREIGN KEY (package_id) REFERENCES service_packages(id) ON DELETE CASCADE
            );
        `);
        console.log("Success.");
    } catch(e) {
        console.error(e);
    }
    process.exit(0);
}
run();
