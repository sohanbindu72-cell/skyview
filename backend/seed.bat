C:\xampp\mysql\bin\mysql.exe -u root -e "CREATE DATABASE IF NOT EXISTS skyview;"
C:\xampp\mysql\bin\mysql.exe -u root skyview < sql\schema.sql
C:\xampp\mysql\bin\mysql.exe -u root skyview < sql\seed_locations.sql
