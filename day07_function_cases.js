// tolong buatlah sebuah fungsi untuk mengecek apakah suatu bilangan itu ganjil
// inputnya angka, outputnya boolean
// isOdd(6) => false
// isOdd(7) => true

function cekGanjil (a=0) {
    if (a%2 === 0) {
        console.log(`Bilangan Genap`,false)
    } else {
        console.log(true)
    }
}

cekGanjil (4)

/* INI JUGA BISA
function cekGanjil (angka) {
    let hasil = 
    if (angka%2!==0) {
        hasil = true
    } else {
        hasil = false
    }
    return hasil
}
*/

//CASE 
//buatlah suatu fungsi untuk membalik suatu string
//input = string => string hasil dibalik
// BalikStr('alee') -> 'eela'

function BalikStr (str) {
    //convert string to array
    let arrStr = str.split('')

    //array direverse
    let arrReverse = arrStr.reverse()

    //convert ke string
    let result = arrReverse.join()

    //give a return value
    return result
}

console.log(BalikStr('javascript'))
