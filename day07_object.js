// OBJECT => {...}
// CASE : simpanlah 3 data user yg isinya username, age, hobby

//1. SOLVE DENGAN VARIABEL => tidak efektif dan susah di maintain
let users1 = 'Lia'
let ageUsers1 = 19
let hobbyUsers1 = 'Menulis'

let users2 = 'Elsa'
let ageUsers2 = 25
let hobbyUsers2 = 'Menyanyi'

let users3 = 'Lisa'
let ageUsers3 = 24
let hobbyUsers3 = 'Menari'

//2. SOLVE DENGAN ARRAY => [...]
//kekurangan => kalo user banyak, index nya bingung

let users = ['Lia', 'Elsa', 'Lisa']
let age = [19, 25, 24]
let hobby = ['Menulis', 'Menyanyi', 'Menari']

//3. SOLVE WITH OBJECT !!!
// object {...} => collection of object atau object didalam array
// mengelompokkan data yg punya hubungan menjadi satu kelompok object
// let user = [{x,1,a},{y,2,b},{z,3,c}]
let user = [
    {
        name : 'Lia',
        age : 19,
        hobby : 'Menulis',
    },
    {
        name : 'Elsa',
        age : 25,
        hobby : 'Menyanyi',
    },
    {
        name : 'Lisa',
        age : 24,
        hobby : 'Menari',
    }
]
console.log(user[1])

// BGMN CARA MEMBUAT OBJECT
// CRUD Operation Object => get, add, edit/update, delete
// OBJECT USING CLASS AS OBJECT CONSTRUCTOR
// PROPERTY AND METHOD