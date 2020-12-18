DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

\c sdc;


  CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    ratings SMALLINT DEFAULT 0,
    category_1 TEXT,
    category_2 TEXT,
    unisex BOOLEAN
  );
  CREATE INDEX products_asc ON products (id ASC);

  CREATE TABLE variants (
    id SERIAL PRIMARY KEY,
    product_id INT,
    variant_name TEXT,
    reg_price SMALLINT,
    color_1 TEXT,
    color_2 TEXT,
    color_3 TEXT
  ) PARTITION BY RANGE (id);
-- CREATE INDEX variant_id_asc ON inventory(variant_id ASC);
  CREATE TABLE variants_partition_1 PARTITION of variants FOR VALUES FROM (1) to (5000001);
  CREATE TABLE variants_partition_2 PARTITION of variants FOR VALUES FROM (5000001) to (10000001);
  CREATE TABLE variants_partition_1 PARTITION of variants FOR VALUES FROM (1) to (2500001);
  CREATE TABLE variants_partition_2 PARTITION of variants FOR VALUES FROM (2500001) to (5000001);
  CREATE TABLE variants_partition_3 PARTITION of variants FOR VALUES FROM (5000001) to (7500001);
  CREATE TABLE variants_partition_4 PARTITION of variants FOR VALUES FROM (7500001) to (10000001);
  CREATE INDEX variants_partition_index_1 ON variants_partition_1(id, product_id);
  CREATE INDEX variants_partition_index_2 ON variants_partition_2(id, product_id);
  CREATE INDEX variants_partition_index_3 ON variants_partition_3(id, product_id);
  CREATE INDEX variants_partition_index_4 ON variants_partition_4(id, product_id);

  ALTER TABLE variants ADD CONSTRAINT fk_product
      FOREIGN KEY(product_id)
        REFERENCES products(id)
        ON DELETE CASCADE;


CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  variant_id INT,
  size float(1),
  stock INT
);
REFERENCES variants(id)
  CONSTRAINT fk_product
    FOREIGN KEY(variant_id)
      REFERENCES variants(id)
      ON DELETE CASCADE

CREATE TABLE inventory (
  id SERIAL,
  variant_id INT,
  size float(1),
  stock INT,
  PRIMARY KEY (id, variant_id)
) PARTITION BY RANGE (variant_id);

ALTER TABLE inventory ADD CONSTRAINT fk_product
    FOREIGN KEY(variant_id)
      REFERENCES variants(id)
      ON DELETE CASCADE

CREATE TABLE inventory_partition_1 PARTITION of inventory FOR VALUES FROM (1) to (5000001);
CREATE TABLE inventory_partition_2 PARTITION of inventory FOR VALUES FROM (5000001) to (10000001);
-- CREATE TABLE inventory_partition_1 PARTITION of inventory FOR VALUES FROM (1) to (2500001);
-- CREATE TABLE inventory_partition_2 PARTITION of inventory FOR VALUES FROM (2500001) to (5000001);
-- CREATE TABLE inventory_partition_3 PARTITION of inventory FOR VALUES FROM (5000001) to (7500001);
-- CREATE TABLE inventory_partition_4 PARTITION of inventory FOR VALUES FROM (7500001) to (10000001);
CREATE INDEX inventory_partition_index_1 ON inventory_partition_1(variant_id);
CREATE INDEX inventory_partition_index_2 ON inventory_partition_2(variant_id);
CREATE INDEX inventory_partition_index_3 ON inventory_partition_3(variant_id);
CREATE INDEX inventory_partition_index_4 ON inventory_partition_4(variant_id);
-- CREATE INDEX id_asc ON variants(id ASC);

CREATE TABLE inventory_partition_1 (
  id SERIAL,
  variant_id INT,
  size float(1),
  stock INT,
  PRIMARY KEY (id, variant_id)
);



COPY products(ratings, category_1, category_2, unisex)
  FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/products2.csv'
  DELIMITER ','
  CSV HEADER;

COPY variants(product_id, variant_name, reg_price, color_1, color_2, color_3)
  FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/variants2.csv'
  DELIMITER ','
  CSV HEADER;

COPY inventory(variant_id, size, stock)
  FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/postgresql/inventory2.csv'
  DELIMITER ','
  CSV HEADER;

-- CREATE SERVER box1 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'box1', dbname 'sdc1');
-- CREATE USER MAPPING FOR jason SERVER box1 OPTIONS (user 'box1_jason');

IMPORT FOREIGN SCHEMA sdc_products LIMIT TO (products)
    FROM SERVER box1 INTO sdc;
  -- pg_dump -C -h localhost -U jason sdc | psql -h 54.183.181.200 -U postgres sdc

-- FOREIGN TABLES
CREATE FOREIGN TABLE variants_partition_1
    PARTITION OF variants_partition_0
    FOR VALUES FROM (1) TO (5000001)
    SERVER box1;

-- SCHEMAS
-- CREATE SCHEMA sdc_products
--   CREATE TABLE products (
--     id SERIAL PRIMARY KEY,
--     ratings SMALLINT DEFAULT 0,
--     category_1 TEXT,
--     category_2 TEXT,
--     unisex BOOLEAN
--   )
--   CREATE INDEX products_asc ON products (id ASC);


  -- OLD
  -- CREATE TABLE variants (
  --   id SERIAL PRIMARY KEY,
  --   product_id INT,
  --   variant_name TEXT,
  --   reg_price SMALLINT,
  --   color_1 TEXT,
  --   color_2 TEXT,
  --   color_3 TEXT
  -- );
-- CREATE TABLE variants_master (
--   id SERIAL PRIMARY KEY,
--   product_id INT,
--   variant_name TEXT,
--   reg_price SMALLINT,
--   color_1 TEXT,
--   color_2 TEXT,
--   color_3 TEXT
-- );

-- CREATE INDEX variants_id_asc ON variants(product_id ASC, id ASC);

-- psql -U ubuntu -d sdc -f ~/data/sdc.sql