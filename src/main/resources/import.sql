INSERT INTO lobbee_store (storeid, name, rate) VALUES (1, 'Carreouf', 4);
INSERT INTO lobbee_store (storeid, name, rate) VALUES (2, 'Auchan', 3.5);

INSERT INTO category (categoryid, name) VALUES (1, 'laitage');

INSERT INTO product (productid, name, rate, category_categoryid) VALUES (1, 'le lanctot', 4.5, 1);
INSERT INTO product (productid, name, rate, category_categoryid) VALUES (2, 'Le caprice des dieux', 3, 1);
INSERT INTO product (productid, name, rate, category_categoryid) VALUES (3, 'Le saint agur', 5, 1);

INSERT INTO lobbee_store_stock (id, store_storeid, product_productid, price) VALUES (1,1,1, 10);
INSERT INTO lobbee_store_stock (id, store_storeid, product_productid, price) VALUES (2,1,2, 9);
INSERT INTO lobbee_store_stock (id, store_storeid, product_productid, price) VALUES (3,1,3, 8);

INSERT INTO lobbee_store_stock (id, store_storeid, product_productid, price) VALUES (4,2,1, 9);
INSERT INTO lobbee_store_stock (id, store_storeid, product_productid, price) VALUES (5,2,2, 7);