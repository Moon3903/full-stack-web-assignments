CREATE DATABASE skilvulbookstore;

USE skilvulbookstore;

CREATE TABLE penerbit(
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) DEFAULT NULL,
    kota VARCHAR(50) DEFAULT NULL
);

INSERT INTO penerbit VALUES 
	(NULL, 'haha', 'surabaya'),
    (NULL, 'hehe', 'yogyakarta'),
    (NULL, 'hihi', 'jakarta');

CREATE TABLE penulis(
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) DEFAULT NULL,
    kota VARCHAR(50) DEFAULT NULL
);

INSERT INTO penulis VALUES 
	(NULL, 'Mirabel Madrigal', 'surabaya'),
    (NULL, 'Mirabel Madrigal', 'yogyakarta'),
    (NULL, 'Bruno Madrigal', 'jakarta');

create table buku(
    id int(10) auto_increment primary key not null,
    isbn varchar(50),
    judul varchar(50),
    penulis int(10),
    penerbit int(10),
    harga int(10),
    stock int(10),
    constraint fk_buku_penulis foreign key(penulis) references penulis(id),
    constraint fk_buku_penerbit foreign key(penerbit) references penerbit(id)
);

INSERT INTO buku VALUES 
	(NULL, '9781603090773', 'Any Empire', 1, 1, 20, 6),
    (NULL, '9781603094429', 'Belzebubs', 2, 2, 15, 3),
    (NULL, '9781603093699', 'Apocrypha Now', 3, 3, 20, 69);

SELECT * FROM  buku
	INNER JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT * FROM  buku
	LEFT JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT * FROM  buku
	RIGHT JOIN penerbit
    ON buku.penerbit = penerbit.id;

SELECT MAX(harga) FROM buku WHERE stock < 10;

SELECT MIN(harga) FROM buku;

SELECT COUNT(*) FROM buku WHERE harga < 100000;
