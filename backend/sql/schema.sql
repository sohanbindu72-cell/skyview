CREATE DATABASE IF NOT EXISTS skyview;
USE skyview;

CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS service_packages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  base_price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  features JSON,
  is_active BOOLEAN DEFAULT TRUE,
  is_popular BOOLEAN DEFAULT FALSE,
  rank_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  country_name VARCHAR(255) NOT NULL,
  flag_icon VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS airports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  location_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  link VARCHAR(255),
  FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS airport_excluded_packages (
  airport_id INT NOT NULL,
  package_id INT NOT NULL,
  PRIMARY KEY (airport_id, package_id),
  FOREIGN KEY (airport_id) REFERENCES airports(id) ON DELETE CASCADE,
  FOREIGN KEY (package_id) REFERENCES service_packages(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS airport_package_pricing (
  airport_id INT NOT NULL,
  package_id INT NOT NULL,
  custom_price DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (airport_id, package_id),
  FOREIGN KEY (airport_id) REFERENCES airports(id) ON DELETE CASCADE,
  FOREIGN KEY (package_id) REFERENCES service_packages(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  is_password_temp BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(255) NOT NULL,
  from_location_id INT,
  from_airport VARCHAR(255) NOT NULL,
  to_location_id INT,
  to_airport VARCHAR(255),
  departure_date DATETIME NOT NULL,
  return_date DATETIME,
  passengers INT DEFAULT 1,
  service_level ENUM('Standard', 'Premium', 'VIP') NOT NULL,
  status ENUM('Pending', 'Confirmed', 'Cancelled', 'Completed') DEFAULT 'Pending',
  total_amount DECIMAL(10, 2) NOT NULL,
  payment_status ENUM('Unpaid', 'Paid', 'Refunded') DEFAULT 'Unpaid',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (from_location_id) REFERENCES locations(id) ON DELETE SET NULL,
  FOREIGN KEY (to_location_id) REFERENCES locations(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  reservation_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'USD',
  status ENUM('Succeeded', 'Failed', 'Refunded') NOT NULL,
  type ENUM('Payment', 'Refund') NOT NULL,
  payment_method VARCHAR(50) DEFAULT 'Card',
  external_id VARCHAR(255) UNIQUE,
  metadata JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (reservation_id) REFERENCES reservations(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  airport VARCHAR(255),
  service_type VARCHAR(255),
  date DATETIME,
  passengers INT,
  status ENUM('Inquiry', 'Booked', 'Contacted') DEFAULT 'Inquiry',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  setting_key VARCHAR(255) NOT NULL UNIQUE,
  setting_value TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS airport_pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  page_title VARCHAR(255) NOT NULL,
  meta_description TEXT,
  hero_image_url VARCHAR(500),
  content TEXT,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
