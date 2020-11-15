// FUNCTION PART 2
// DEFAULT VALUE
// Kalau misal kita panggil suatu function yg butuh parameter/input, tetapi 
// parameter/input tdk diberikan saat panggil fungsinya

//a=0, b=0 =>value ini dipakai kalo user ga ngasih input/para
function Penjumlahan (a = 0, b = 0) { 
    //check input
    console.log(`a =`,a)
    console.log(`b =`,b)
    
    //execute task
    let hasil = a + b

    //give a return value
    return hasil
}

console.log(`Result =`, Penjumlahan (4, 6))
//kalo ga dipakein return => Result = Undefined
//console.log(`Result =`, Penjumlahan()) // Result = NaN (undefined tambah undefined)
console.log(`Result =`, Penjumlahan()) //dikasih DEFAULT VALUE diatas, jadi 0 walaupun tdk ksh input

//RETURN didalam function
// bisa sebagai penanda bahwa function tsb berakhir (sudah sls eksekusi)
// jika masih ada program dibawah kode RETURN, maka kode tdk akan di eksekusi

function Pembagian (a, b) {
    //check input
    console.log(`a =`,a)
    console.log(`b =`,b)

    //execute task
    let hasil = a / b
    
    //return value
    return hasil //return ibarat break di loop
    console.log(hasil) //kode ini tidak akan di eksekusi, karena dibawah return
}

console.log(`Hasil Bagi =`, Pembagian(10, 2))


// HOISTING : Salah satu feature dari JS
// => jika ada kata kunci function dlm program JS, maka JS akan men-define function terlebih dahulu
// sehingga memungkinkan kita memanggil function sebelum function di declare

// invoke function before declaration
console.log(Pengurangan(10, 9)) // console.log nya jalan karena HOISTING

function Pengurangan(a, b) {
    return a - b // a- b dijalankan dulu, hasil dr a - b dikeluarkan
}

// FUNCTION EXPRESSION & ANONYMOUS FUNCTION
// FUNCTION EXPRESSION : cara kedua untuk membuat fungsi
// => dgn cara memasukan fungsi ke suatu variabel
// => krn di JS, function is a value
let LuasPersegi = function (p, l) { // ANONYMOUS FUNCTION
    return p * l
}
console.log(LuasPersegi(10, 10))

// ini anonymous function krn function nya gada nama
// krn gada nama masukan ke variabel, itu adalah FUNCTION EXPRESSION

// ANONYMOUS FUNCTION (BACA DIATAS)
/*
function (a, b) { //function statement require a function name, krn itu dimasukin ke function expression
    console.log(a + b)
}*/

// BAHAN BACAAN
// IIFE (Immediately Invoke Function Expression)
// function yg lgsg dipanggil (sekali aja)
// running nya dlm HTML kalo disini dia ga support

/*
(function (a, b) {
    return a+b
})(1, 2)
*/

// CALLBACK FUNCTION
// => function sebagai input/parameter didlm function lain

function PrintPesan (pesan) {
    console.log(pesan)
}

function LuasSegitiga (alas, tinggi, print) {
    //parameter print ini akan diisi suatu function
    //makanya disebut CALLBACK FUNCTION
    let luas = 0.5 * alas * tinggi

    //invoke / panggil callback function didlm fungsi LuasSegitiga
    print(luas)
}

LuasSegitiga (5, 11, PrintPesan)

// TRACK PROGRAM
// INVOKE FUNCTION
// LuasSegitiga dipanggil, (5, 11, PrintPesan)
// => Parameter dlm fungsi, alas = 5, tinggi = 11, print = PrintPesan
// => hitung luas
// => Panggil fungsi print(luas) => PrintPesan(luas)

// .sort((a.b) => a - b)
// .sort(function (a, b)) {
    //return a - b
//})

// FUNCTION THAT RETURN A FUNCTION
// Fungsi yg me return fungsi
function CubeVolume (panjang) {
    // calculate volume nya CUbe
    let volume = Math.pow(panjang, 3)

    return function () {
        console.log(volume)
    }
}
// tampung hasil dr fungsi
let hasilVolume = CubeVolume(5)
// krn CubeVolume() mereturn atau menghasilkan suatu fungsi
// maka value dari variabel hasilVolume mjd sebuah fungsi

console.log(hasilVolume)
hasilVolume()

