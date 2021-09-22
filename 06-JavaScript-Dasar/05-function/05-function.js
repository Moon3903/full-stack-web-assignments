/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    if(salary <= 5*1e6){
        return 0;
    }
    if(salary <= 1e7){
        return salary*0.05;
    }
    if(salary <= 2*1e7){
        return salary*0.1;
    }
    return salary*0.2;
}

// console.log(taxCalc(10000000));

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang 
// itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah 
// fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(weight,height) { 
    bmi = (weight/(height*height)) * 10000;

    if (bmi < 18.5){
        return "under weight";
    }
    if (bmi < 24.9){
        return "normal";
    }
    if (bmi < 29.9){
        return "over weight";
    }
    if (bmi < 34.9){
        return "obese";
    }
    return "extremely obese";
}

// console.log(checkBMI(80,160));


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(str) {
    let space = true;
    for(let i=0; i < str.length; i++){
        if(space){
            space = false;
            str = str.slice(0,i) + str.charAt(i).toUpperCase() + str.slice(i+1);
        }
        if(str[i]==" "){
            space = true;
        }
    }
    return str;
}

// console.log(convToUpperCase("hello bandung"));

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE

function firstNonRepeatedChar(str) { 
    let data = [];
    // if(str.includes(" ")){
    //     return "kata tidak boleh dipisah";
    // }
    for(let i = 0; i<str.length ; i++){
        if(str[i] == " "){
            return "kata tidak boleh dipisah";
        }
        if(!data[str[i]]){
            data[str[i]] = 1;
        }
        else{
            data[str[i]]++;
        }
    }
    for(let i = 0; i<str.length; i++){
        if(data[str[i]]==1){
            return str[i];
        }
    }
    return "";
}

// console.log(firstNonRepeatedChar("alloha"));
