console.log("hello world !");

// variable
// esm el variable / el = affectation / Valeur

// chaine de caractere / string 
// numbers 
let x = 5 



let pi = 3.14

// mise7a mtaa cercle 
// mou7it mtaa cercle 
// rayon * rayon * pi
// rayon * 2 * pi

let rayon = 3 // 3 m 


let area = rayon * rayon * pi

let mou7it = rayon * 2 * pi


console.log(rayon+ " * "+ rayon + " * " + pi + " = " + area)
console.log(`${rayon} * ${rayon} * ${pi} = ${area}`)
console.log("mou7it = ",mou7it)


let name = "Ahmed";
// concatenation
console.log("hello " + name)

console.log(Math.pow(2,2))

// les structures conditionnelles
let age = 18

// ken l 3abd 3omrou > 18 sné 
    // rahou majeur
// sinon 
    // rahou mineur

/*if (age >= 18 ){
    console.log("majeur")
}else{
    console.log("mineur")
}*/


if (age < 18 && age >= 0){
    console.log("mineur")
}else if(age >=18 && age <= 200){
    console.log("majeur")
}else{
    console.log("rak tekdheb")
}


// exerice 1 : 

// house prices 

// ken soum dar akther men 100 malyoun
    // nekhou 9ardh
// sinon 
    // nechreha cash

// exercice 2 : 
    // un programme 
    // ye7seb mise7a w mouh7it mtaa 
    // mourabaa3 w mostatil

// input price 


let prixMaison = 100

if (prixMaison >=100){
    console.log("lezem nekhou 9ardh")
}else {
    console.log("najem techreha cache")
} 

// mourabaa3 
let side = 5
// square area 
let squareArea = side * side
console.log("square area is " +squareArea)

let squareCircumference = side * 4
console.log("square circumerence is " + squareCircumference)






// mostatil 
let width = 10
let length = 20

let A = width * length
let C = (width + length) * 2 

console.log("Rectange area is " + A)
console.log("Rectange circumference is " + C)



let i = 1

// structure iterative
while(i<=5){
    console.log(" hello " )
    i= i +1
}

let a = 10
let b = 20 
let aux

aux = a
a = b
b = aux

// i  = 1
// i = 2 


let notePhysique = 10
let noteMath = 12
let noteFrancais = 15

let moyenne = (notePhysique + noteFrancais + noteMath) / 3



let moy = 17
let tresbien = moy> 15
console.log(tresbien)

if (tresbien){
    console.log("très bien")
}
let y = 12
console.log(y*20)

let notes = [14,12,16,18,21]

let veg = [3,2,1,0.5,2]

veg.push(5)


let names = ["aziz","ahmed","aziz","mohsen","taher","trump"]
let azizMawjoud = false
for(let i=0;i<names.length;i++){
    if (names[i] == "aziz"){
        console.log("aziz fel bit noumrou "+i)
        azizMawjoud = true
    }
}

if(azizMawjoud == false){
    console.log("aziz mouch mawjoud")
}


/*
let firstName = "Kais"
let lastName = "Said"

let fullName = "Hello " + firstName + " " + lastName
console.log(fullName)

let firstName1 = "Donald"
let lastName1 = "Trump"

let fullName1 = "Hello " + firstName1 + " " + lastName1
console.log(fullName1)
*/

function sayHello(firstName,lastName){
    let fullname = firstName + " " + lastName
    console.log("Hello  " +fullname )
}

function sum(x,y){
    console.log(x + " + " +y+"  = " + (x+y) )
}

sum(5,2)



let names1 = ["aziz","ahmed","aziz","mohsen","taher","trump"]

function searchForPerson(t,esm){
    let exists = false
    for(let i=0;i<t.length;i++){
        if (t[i] == esm){
            console.log(esm +" exists at "+i)
            exists = true
        }
    }
    if(exists == false){
        console.log(esm + " mouch mawjoud")
    }
}

searchForPerson(names,"khalil")
searchForPerson(names,"ali")
searchForPerson(names,"taher")

console.log("hello".toUpperCase())

//input
let letters = ["a","b","c","d"]
function lettersToUppercase(t){
    for (let i=0;i<t.length;i++){
        t[i] = t[i].toUpperCase()
    }
    console.log(t)
}
// letters = ["A","B","C","D"]

lettersToUppercase(names)