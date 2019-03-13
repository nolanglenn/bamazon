DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INTEGER(11),
  stock_quantity INTEGER(11),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('mug', 'kitchen', 5, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('apple', 'food', 1, 29);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('phone', 'electronics', 800, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('paperclip', 'office', 20, 500);
