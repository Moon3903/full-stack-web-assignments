```js
/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
Type error
    an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
    A TypeError may be thrown when:
        an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
        when attempting to modify a value that cannot be changed; or
        when attempting to use a value in an inappropriate way.

reference error
    an error when a non-existent variable is referenced.

Range Error
    an error when a value is not in the set or range of allowed values.

Syntax Error
    an error when trying to interpret syntactically invalid code. 
    It is thrown when the JavaScript engine encounters tokens or token order that 
    does not conform to the syntax of the language when parsing code.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#error_objects
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*
ReferenceError pada baris console.log(salaryWithConst) ini di karenakan mengakses variable yang belum di inisialisasi.
tidak error pada console.log(salaryWithVar) karena perlakuan javascript kepada var yang membuat dapat di akses sebelum inisialisasinya
namun tetap harus ada inisialisasinya
*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
```