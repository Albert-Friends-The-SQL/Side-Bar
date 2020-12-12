DROP KEYSPACE IF EXISTS sdc;

CREATE KEYSPACE sdc
  WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  };

USE sdc;

CREATE TABLE variants (
  variant_id INT,
  product_id INT,
  variant_name TEXT,
  ratings INT,
  category_1 TEXT,
  category_2 TEXT,
  unisex BOOLEAN,
  reg_price INT,
  color_1 TEXT,
  color_2 TEXT,
  color_3 TEXT,
  PRIMARY KEY (variant_id)
);
-- WITH CLUSTERING ORDER BY (product_id ASC);
-- Find sizes with a given product_variant_id
CREATE TABLE inventory_by_variant_id (
  variant_id INT,
  product_id INT,
  size DECIMAL,
  stock INT,
  PRIMARY KEY (variant_id, size)
);
-- WITH CLUSTERING ORDER BY (size ASC);

-- RUN CQL FILE
-- SOURCE '/home/jason/hackreactor/SDC/Side-Bar/database/cass_schema.cql'

-- IMPORTING CSV TO TABLE
-- COPY sdc.variants (variant_id,product_id,variant_name,ratings,category_1,category_2,unisex,reg_price,color_1,color_2,color_3) FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/cassandra/variants2.csv' WITH DELIMITER=',' AND HEADER=TRUE ;

-- COPY sdc.inventory_by_variant_id (variant_id,size,stock) FROM '/home/jason/hackreactor/SDC/Side-Bar/database/seeding/cassandra/inventory.csv' WITH DELIMITER=',' AND HEADER=TRUE ;