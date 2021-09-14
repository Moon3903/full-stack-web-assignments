# 01-Unix-Command-Line
Zulfiqar Fauzul Akbar</br>
group 04</br>
Greenpeace

## Daftar Isi

[Soal 1](https://github.com/Moon3903/full-stack-web-assignments/tree/main/01-Unix-Command-Line#soal-1) </br>
[Soal 2](https://github.com/Moon3903/full-stack-web-assignments/tree/main/01-Unix-Command-Line#soal-2) </br>
[Soal 3](https://github.com/Moon3903/full-stack-web-assignments/tree/main/01-Unix-Command-Line#soal-3) </br>
[Soal 4](https://github.com/Moon3903/full-stack-web-assignments/tree/main/01-Unix-Command-Line#soal-4) </br>
[Soal 5](https://github.com/Moon3903/full-stack-web-assignments/tree/main/01-Unix-Command-Line#soal-5) </br>
[Soal 6](https://github.com/Moon3903/full-stack-web-assignments/tree/main/01-Unix-Command-Line#soal-6) </br>

# Soal 1
## Penjelasan
membuat sebuah folder kosong dengan nama-mu sendiri
## Penyelesaian
menggunakan mkdir untuk membuat sebuah folder
`mkdir zulfiqar`
![Screenshot from 2021-09-13 20-47-07](https://user-images.githubusercontent.com/62832487/133098826-ae688d7a-4462-489b-8035-476317072eb6.png)

# Soal 2
## Penjelasan
pada folder tersebut membuat folder lagi dengan nama `sekolah` dan `kerja`, pertama masuk kedalam folder nama setelah itu sama seperti yang nomor 1 masih menggunakan mkdir
## Penyelesaian
menggunakan mkdir untuk membuat folder yang dipisah dengan spasi, setelah itu di tampilkan dengan ls
```
cd zulfiqar
mkdir sekolah kerja
ls
```
![Screenshot from 2021-09-13 20-47-46](https://user-images.githubusercontent.com/62832487/133099299-50e661ee-ab5d-4b40-b362-033abb2ac7ee.png)

# Soal 3
## Penjelasan
masuk kedalam folder `sekolah` dan membuat file bernama `ijazah.txt` dimana di isi dengan sesuatu sesuai modul kemudian di tampilkan. </br>
membuat file bernama `portfolio.txt` dimana di isi dengan sesuatu sesuai modul kemudian di tampilkan.
## Penyelesaian
masuk ke dalam folder sekolah dengan
```
cd sekolah
```
lalu membuat file bernama `ijazah.txt` dengan `touch` dan mengisinya setelah itu di tampilkan dengan command `cat`.
```
touch ijazah.txt
printf "Perkenalkan namaku Zulfiqar\n\nAku berasal dari Surabaya\n\nSalam Kenal :D\n" > ijazah.txt 
cat ijazah.txt 
```
lalu membuat file bernama `portfolio.txt` dengan `touch` dan mengisinya setelah itu di tampilkan dengan command `cat`.
```
touch portfolio.txt
printf "Saya pernah bekerja pada beberapa perusahaan salah satu \ndiantaranya ialah\n\n- Google\n- Tesla\n- Microsoft\n" > portfolio.txt
cat portfolio.txt 
```
![Screenshot from 2021-09-13 20-54-45](https://user-images.githubusercontent.com/62832487/133100307-008a2054-e94b-4986-bd45-3e9a8b0681ab.png)

# Soal 4
## Penjelasan
keluar dari folder sekolah
## Penyelesaian
menggunakan command `cd` dengan `..` untuk menuju parent folder
```
cd ..
```
![Screenshot from 2021-09-13 20-55-21](https://user-images.githubusercontent.com/62832487/133100361-5afa0557-cc66-412f-812b-00da042d3cf9.png)

# Soal 5
## Penjelasan
masuk kedalam folder `kerja` dan membuat file bernama `cv.txt` dimana di isi dengan sesuatu sesuai modul kemudian di tampilkan.
## Penyelesaian
masuk ke dalam folder kerja dengan
```
cd kerja
```
lalu membuat file bernama `cv.txt` dengan `touch` dan mengisinya setelah itu di tampilkan dengan command `cat`.
```
touch cv.txt
printf "Salam,\n\nPerkenalkan namaku Zulfiqar, saya memiliki kegemaran\n- Main Game\n- Tidur\n- Mager\n" > cv.txt
cat cv.txt
```
![Screenshot from 2021-09-13 20-57-37](https://user-images.githubusercontent.com/62832487/133100949-1be5d4e4-03b8-42a6-bca2-16ab853d10c3.png)

# Soal 6
## Penjelasan
memindahkan `portfolio.txt` dari folder `sekolah` ke folder `kerja`
## Penyelesaian
menggunakan mv 
```
mv ../sekolah/portfolio.txt .
```
![Screenshot from 2021-09-13 20-58-26](https://user-images.githubusercontent.com/62832487/133101185-70cae9ec-88bc-4e79-baa2-1264ed2cf92b.png)
