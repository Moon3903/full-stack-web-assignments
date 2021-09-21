git clone https://github.com/Moon3903/git-basic.git
git branch zulfiqar-fauzul-akbar
git checkout zulfiqar-fauzul-akbar
touch zulfiqarfauzulakbar.md
printf("Nama Lengkap: zulfiqar fauzul akbar\nUmur: 20\nPesan yang ingin disampaikan: pingin jajan\n") > zulfiqarfauzulakbar.md
git add zulfiqarfauzulakbar.md
git commit -m "zulfiqarfauzulakbar.md"
git checkout master
git merge zulfiqar-fauzul-akbar
git push