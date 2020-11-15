// FUNCTION : 
// Didefinisikan sebagai block kode yg berisi perintah yg bisa dipakai berkali - kali
// Jika kita ingin menjlnkan perintah, tinggal panggil kodenya

// CASE :
// TAMPILKAN 'Saya belajar Javascript' 100 kali
/*
let msg = 'Saya belajar Javascript'
for (let i = 0; i < 0; i++) {
    console.log(msg)
}
*/

// Kadang, kita ingin melakukan perintah yg sama 
/*
for (let i = 0; i < 0; i++) {
    console.log(msg)
}

for (let i = 0; i < 0; i++) {
    console.log(msg)
}
*/

// CASE : verifikasi input user saat login atau register
// uname dan pass harus lebih dr 6 karakter
// uname dan pass harus unique, include numbers & special char

// E-COMMERCE kita punya data, datanya berupa activity dr user 
// (bulan ini dibeli apa aja, keluar duit brp)
// hitung dong rata rata perbulan user
// kan berlaku untuk setiap user
// jadi ga perlu bikin berkali kali unutk setiap user, sekali aja bisa

// dengan menggunakan function (function = kita bikin alat)
// function kyk kita bikin serutan, supaya jalan, harus diambil dan diputer serutannya
// function setelah di declare/dibuat, tdk akan jalan sampai function itu dipanggil

// FUNCTION DECLARATION / 
function PrintPesan () {
    for (let i = 0; i < 10; i++) {
    console.log('Saya belajar Javascript')
    }
}

// INVOKE A FUNCTION / MEMANGGIL FUNCTION
// Function kalo mau dipanggil
// namaFungsi()
PrintPesan()

// CASE : Buat fungsi u/ memperkenalkan diri
function Kenalan () {
    console.log(`Nama Saya, Jane`)
    console.log(`Saya Suka Masak`)
    console.log(`Sekian`)
}

Kenalan()

// FUNCTION WITH PARAMETER / FUNCTION DENGAN INPUT
// Juicer butuh input listrik dan buah uhntuk menghasilkan juice
// gergaji listrik butuh listrik untuk jalan

// FUNCTION WITH PARAMETER / FUNCTION DENGAN INPUT
// Parameter berfungsi sbg input di function
// Parameter itu spt sebuah variabel yg berfungsi untuk menyimpan input dari user
function KenalanV2 (nama) {
    console.log(`Hello, Nama Saya ${nama}`)
    console.log(`Saya Suka Masak`)
    console.log(`Sekian`)
}

// cara masukin inputnya :
KenalanV2(`Marie`) //inputnya berupa value yg div=beri user, akan dimasukkan ke dlm parameter nama

// PARAMETER atau INPUT lebih dr satu
// nama parameter dipisah dengan , (koma)
// nama dibawah ga tabrakan karena beda scope
function KenalanV3 (nama, hobi) {
    console.log(`Hello, Nama Saya ${nama}`)
    console.log(`Saya Suka ${hobi}`)
    console.log(`Sekian`)
}

KenalanV3 (`Olaf` , `Menyanyi`)

// NOTE : URUTAN DARI PARAMETER ITU PENTING
KenalanV3 (`Nyanyi`,`Olaf`) // nama = Nyanyi, hobi = olaf
//Hello, Nama Saya Nyanyi
//Saya Suka Olaf
//Sekian

// BGMN JIKA FUNCTION YG BUTUH INPUT KITA PANGGIL TANPA MEMASUKAN INPUTNYA
KenalanV3 ()
// JADINYA UNDEFINED (KARENA BUTUH INPUT RAPI GA DIKASIH INPUT => JADI UNDEFINED)
// nama = undefined , hobi = undefined

// CASE BARU :
// BUATLAH FUNGSI UNTUK MENGHITUNG PENJUMLAHAN DUA BUAH BILANGAN, a dan b

function Penjumlahan (a, b) {
    console.log(a + b)
}

Penjumlahan(10, 9)
Penjumlahan(7, 5)

//RULE PENAMAAN FUNCTION
// SEPERTI VARIABLE
// 1. TIDAK BOLEH DIAWALI ANGKA => function 0kosong () => ga boleh
// 2. NAMA FUNCTION TDK BLH MENGGUNAKAN KATA KUNCI ATAU KEYWORD YG SUDAH DIPAKAI DI JS
// => function function () {} X | function variable () {} X
// 3. KALAU NAMA FUNCTION LEBIH DARI SATU KATA, GUNAKAN ATURAN :
// => PISAH DENGAN UNDERSCORE (_) ATAU NEGATIF (-)
// => GUNAKAN LOWER ATAU UPPER CAMELCASE

// CASE : Variable VS Function Name
//let pengurangan = 3 - 5
//function engurangan (a, b) {
    //console.log(a - b)
//}
// KALO LET KARENA NAMA SAMA PASTI ERROR

//pengurangan(3 - 6)
// NAMA VARIABEL TIDKA BOLEH SAMA DENGAN FUNCTION YG SUDAH DIBUAT

//var pengurangan = 3 - 5
//function engurangan (a, b) {
    //console.log(a - b)
//}

//pengurangan(3 - 6)
// KALO DI VAR, KRN NAMA SAMA, JS PANGGIL DULUAN SI VAR
// ERRORNYA KETIKA DIPANGGIL PENGURANGAN, AKAN DIPANGGIL DULUAN SI VAR
// JDNYA PENGURANGAN is not a function

// LOCAL SCOPE => {....}
// Variable yg didalam function
function Perkalian (a, b) {
    //local variabel
    let hasil = a * b
    console.log(hasil)
}

//JIKA KITA anggil variabel hasil diluar function
//console.log(hasil) // hasilnya : hasil is not defined => karena hny bisa diakses dlm function

// bgmn jika kita ingin MENGAKSES VALUE DARI VARIABEL DIDLM FUNCTION ?
// CASE : akses value dari variabel hasil didlm fungsi Perkalian

// FUNCTION WITH RETURN VALUE
// Function yg menghasilkan suatu value yg bisa diakses/dipakai untuk next perintah
// JUICER = AMBIL GELAS BUAT KELUARIN ISINYA

function PerkalianV2 (a, b) {
    //local variabel
    let hasil = a * b

    //give return value, spy value dr hasil bisa dipake diluar
    return hasil
}

//fungsi ini akan menghslkan value dr return
PerkalianV2(9, 8)
//TAMPUNG HASIL DR FUNGSI PerkalianV2 () ke suatu variabel
let hasilPerkalian = PerkalianV2(9, 8)
let bagi = hasilPerkalian / 2 //karena mau dipake disini, harus dibawa pake RETURN
console.log(hasilPerkalian)
console.log(PerkalianV2(5, 5))
console.log(PerkalianV2(3, 4))

//NOTE : value yg direturn oleh suatu function bisa berupa apapun
// => string, number, variabel, array, object, bahkan fungsi juga
