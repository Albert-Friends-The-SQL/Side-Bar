DROP DATABASE IF EXISTS sdc-side-bar;

CREATE DATABASE sdc-side-bar;

\c sdc-side-bar;

CREATE TABLE products (
  id INT SERIAL,
  product_name TEXT,
  ratings INT,
  category_1 TEXT,
  category_2 TEXT
);

-- CREATE INDEX product_variants ON product_name(city ASC);

CREATE TABLE product_variants (
  id INT SERIAL,
  product_id INT REFERENCES products(id),
  reg_price INT NOT NULL,
  color_1 TEXT,
  color_2 TEXT,
  color_3 TEXT,
  inventory JSON
  -- CONSTRAINT fk_product
  --   FOREIGN KEY(product_id)
  --     REFERENCES products(product_id)
  --     ON DELETE CASCADE
);

CREATE INDEX product_variants_asc ON product_variants(product_id ASC);

CREATE TABLE inventory (
  id INT SERIAL,
  product_id INT REFERENCES products(id),
  product_variant_id INT REFERENCES product_variants(id),
  size TEXT,
  stock INT
);

CREATE INDEX inventory_product_id_asc ON inventory(product_id ASC);
CREATE INDEX inventory_product_variant_id_asc ON inventory(product_variant_id ASC);

CREATE TABLE salePromos (
  id INT SERIAL,
  product_variant_id INT REFERENCES product_variants(id),
  title TEXT,
  content TEXT,
  discount NUMERIC (3, 2)
);

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