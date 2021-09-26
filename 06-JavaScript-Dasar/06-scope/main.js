/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

/*
ada 3 scope
    Block scope
        Variables declared inside a { } block cannot be accessed from outside the block:
    Function scope
        Variables defined inside a function are not accessible (visible) from outside the function.
    Global scope
        A variable declared outside a function, becomes GLOBAL.

https://www.w3schools.com/js/js_scope.asp
*/

//block scope
if(1){ 
    let carName = "Volvo";
}

// function scope
function myFunction() {
    var carName = "Volvo";   // Function Scope
}

// global
let carName = "Volvo";

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
/*
apa yang akan tampil didalam comsole.log ? Mariah

apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
    karena local variable akan di prioritaskan
*/
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
