DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

\c sdc;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  ratings INT DEFAULT 0,
  category_1 TEXT,
  category_2 TEXT,
  unisex BOOLEAN
);

-- CREATE TABLE test_products (
--   id SERIAL PRIMARY KEY,
--   ratings INT DEFAULT 0,
--   category_1 TEXT NOT NULL,
--   category_2 TEXT,
--   unisex BOOLEAN NOT NULL
-- );

ALTER TABLE products
ALTER COLUMN ratings SET DEFAULT 0;

-- CREATE INDEX products_asc ON products (id ASC);

CREATE TABLE variants (
  id SERIAL PRIMARY KEY,
  product_id INT,
  variant_name TEXT,
  reg_price INT,
  color_1 TEXT,
  color_2 TEXT,
  color_3 TEXT
);
--  NOT NULL REFERENCES test_products(id)
  -- CONSTRAINT fk_product
  --   FOREIGN KEY(product_id)
  --     REFERENCES products(id)
  --     ON DELETE CASCADE

-- CREATE TABLE test_variants (
--   id SERIAL PRIMARY KEY,
--   product_id INT NOT NULL REFERENCES test_products(id),
--   variant_name TEXT NOT NULL,
--   reg_price INT NOT NULL,
--   color_1 TEXT NOT NULL,
--   color_2 TEXT,
--   color_3 TEXT,
--   CONSTRAINT fk_product
--     FOREIGN KEY(product_id)
--       REFERENCES products(id)
--       ON DELETE CASCADE
-- );


-- CREATE INDEX product_variants_asc ON variants(product_id ASC, id ASC);

CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  variant_id INT,
  size float(1),
  stock INT
);
-- REFERENCES variants(id)
  -- CONSTRAINT fk_product
  --   FOREIGN KEY(variant_id)
  --     REFERENCES variants(id)
  --     ON DELETE CASCADE

-- CREATE INDEX variant_id_asc ON inventory(variant_id ASC);




COPY products(ratings, category_1, category_2, unisex)
  FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/products.csv'
  DELIMITER ','
  CSV HEADER;

  -- COPY products(ratings, category_1, category_2, unisex)
  -- FROM 'C:\SDC_CSVs\products.csv'
  -- DELIMITER ','
  -- CSV HEADER;

-- COPY variants(product_id, variant_name, reg_price, color_1, color_2, color_3)
--   FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/variants.csv'
--   DELIMITER ','
--   CSV HEADER;

-- COPY inventory(variant_id, size, stock)
--   FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/inventory.csv'
--   DELIMITER ','
--   CSV HEADER;
