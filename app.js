


let myStudents = ["ahmed", "omar", "enas","rawan", "rami","feras","ghadeer"]

let smallletter = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
'y', 'z' ]

let myrandomindex = Math.floor(Math.random()*smallletter.length)
let genertedletter = smallletter[myrandomindex]

function selectname() {
    for (let i = 0; i < myStudents.length; i++) {
        if (myStudents[i][0]==genertedletter) {
         console.log("student name " + myStudents[i] + " is starting with " + myStudents[i][0])
         
        }
        else{
            if (myStudents[i][myStudents[i].length-1] == genertedletter) {
                console.log("student name " + myStudents[i] + " end with letter " + genertedletter)
            }
        }
         
     }
}

selectname()

