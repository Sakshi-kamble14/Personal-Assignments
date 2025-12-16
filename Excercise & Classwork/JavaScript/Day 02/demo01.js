// const s1={} // JS Object --> Empty Object
// s1.name="Anil" // Properties
// s1.age=20; // Properties
// console.log(`type of(s1)-${typeof(s1)}`)
// console.log(s1);

// const s2={}
// console.log(s2) // Empty Object
// s2.name="Mukesh"
// s2.age=10
// s2.mobile="9876543210"

// const s3={}
// s3["first name"]="Sakshi"
// s3.last_name="Kamble"
// // Using subscript we can use space with the name
// // can not in dot operator
// console.log(s3)

// const s4={}
// s4["name"]="Suresh"
// s4["age"]=45
// s4.mobile="9786534210"
// console.log(s4)
// console.log(`type of(s4)-${typeof(s4)}`)

// const s5={
//     // prperties defined the form of 
//     // key(string) :value (number/boolean/string/object)
//     "name":"Ram",
//     "age":20,
//     "canVote":true,
//     skills:["C","CPP","Java"]
// }

// console.log(s5)

// const s6={
//     lang:["Marathi","Hindi","English"],
//     OS:["Windows","Linux","Mac"]
// }

// console.log(s6)
// s6.lang.push("Kannada")


// const s7 = {}
// s7.first_name = "A"
// s7.last_name = "B"

// s7.greet = function () {
//     console.log(this.first_name + " " + this.last_name); 
// }

// s7.greet();

// console.log(s7.first_name + " " + s7.last_name);

const s8 = {
    full_name: {
        f_name:"A",
        l_name:"B"
    }
}

console.log(s8.full_name);
console.log(s8.full_name["f_name"]);
