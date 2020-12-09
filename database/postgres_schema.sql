DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

\c sdc;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  ratings INT,
  category_1 TEXT,
  category_2 TEXT,
  unisex BOOLEAN
);

CREATE TABLE test_products (
  id SERIAL PRIMARY KEY,
  ratings INT,
  category_1 TEXT,
  category_2 TEXT,
  unisex BOOLEAN
);

-- CREATE INDEX products_asc ON products (id ASC);

CREATE TABLE variants (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL REFERENCES test_products(id),
  variant_name TEXT NOT NULL,
  reg_price INT NOT NULL,
  color_1 TEXT NOT NULL,
  color_2 TEXT,
  color_3 TEXT,
  CONSTRAINT fk_product
    FOREIGN KEY(product_id)
      REFERENCES products(id)
      ON DELETE CASCADE
);

CREATE TABLE test_variants (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL REFERENCES test_products(id),
  variant_name TEXT NOT NULL,
  reg_price INT NOT NULL,
  color_1 TEXT NOT NULL,
  color_2 TEXT,
  color_3 TEXT,
  CONSTRAINT fk_product
    FOREIGN KEY(product_id)
      REFERENCES products(id)
      ON DELETE CASCADE
);

ALTER TABLE test_variants
ALTER COLUMN variant_name,
ALTER COLUMN reg_price,
ALTER COLUMN color_1
-- CREATE INDEX product_variants_asc ON variants(product_id ASC);

CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  variant_id INT REFERENCES variants(id),
  size float(1),
  stock INT
);
  CONSTRAINT fk_product
    FOREIGN KEY(variant_id)
      REFERENCES variants(id)
      ON DELETE CASCADE

-- CREATE INDEX inventory_variant_id_asc ON inventory(variant_id ASC);
-- CREATE INDEX inventory_product_variant_id_asc ON inventory(product_variant_id ASC);

CREATE TABLE test_inventory (
  id SERIAL PRIMARY KEY,
  variant_id INT REFERENCES test_variants(id),
  size float(1),
  stock INT
);


COPY products(ratings, category_1, category_2, unisex)
  FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/products.csv'
  DELIMITER ','
  CSV HEADER;

COPY variants(product_id, variant_name, reg_price, color_1, color_2, color_3)
  FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/variants.csv'
  DELIMITER ','
  CSV HEADER;

COPY inventory(variant_id, size, stock)
  FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/inventory.csv'
  DELIMITER ','
  CSV HEADER;



-- CREATE TABLE sale_promos (
--   id INT SERIAL,
--   product_variant_id INT REFERENCES product_variants(id),
--   title TEXT,
--   content TEXT,
--   discount NUMERIC (3, 2)
-- );

-- CREATE TABLE colors (
--   id INT SERIAL,
--   product_id INT REFERENCES products_variants(id),
--   color TEXT
-- );

-- CREATE TABLE categories (
--   id INT SERIAL,
--   product_variant_id INT REFERENCES product_variants(id),
--   category TEXT
-- );