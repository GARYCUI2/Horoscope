DROP TABLE IF EXISTS astrologies;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS recommend;

CREATE TABLE astrologies(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(225) NOT NULL,
  img_url varchar(225),
  description varchar(225)
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(225) NOT NULL,
  description TEXT,
  category varchar(10) NOT NULL REFERENCES category(id),
  price DECIMAL NOT NULL,
  img_url varchar(225) NOT NULL,
  quantity INTEGER,
  created_at TIMESTAMP
);

CREATE TABLE category(
  id SERIAL PRIMARY KEY NOT NULL,
  category_name varchar(225) NOT NULL
);

CREATE TABLE order_items(
  id SERIAL PRIMARY KEY NOT NULL,
  order_id varchar(225) NOT NULL REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id)  ON DELETE CASCADE,
  quantity INTEGER
);

CREATE TABLE orders(
  id varchar(20) PRIMARY KEY NOT NULL,
  buyer_name varchar(225) NOT NULL,
  buyer_email varchar(225) NOT NULL,
  credit_card_number varchar(16) NOT NULL,
  status varchar(100) NOT NULL,
  mobile varchar(20),
  created_at TIMESTAMP
);

CREATE TABLE recommend(
  id SERIAL PRIMARY KEY NOT NULL,
  astrology_id INTEGER REFERENCES astrologies(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id)  ON DELETE CASCADE,
);