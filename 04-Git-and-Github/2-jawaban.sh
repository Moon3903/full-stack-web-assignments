#!/bin/bash

mkdir zulfiqar
touch README.md
printf("Halo perkenalkan aku halaman utama") > README.md
git commit -m "Inisialisasi Git Repository"
git branch cv
git checkout cv
touch cv.txt
printf("Ini adalah file CV") > cv.txt
git commit -m "Inisialisasi CV"
printf("\nskilvul") >> cv.txt
git commit -m "skilvul"
printf("\ngoogle") >> cv.txt
git commit -m "google"
printf("\nITS") >> cv.txt
git commit -m "ITS"
git checkout master
printf("Ini adalah update pertama pada branch master") >> README.md
git commit -m "update master pertama"
git merge cv
git push
