let p= document.getElementById("p");
let button = document.getElementById("button");


let person = {
    name:"hira",
    age : 25,
    city : "Islamabad"
};
console.log(person);
console.log(person.name);
console.log(person.age);
button.onclick =() => {
 p.innerText = person.age;
    
}

let p2= document.getElementById("p2");
let button2 = document.getElementById("button2");
let person2 = {
    name:"Sana",
    age : 26,
};
  person2.city= "islamabad";
  console.log(person2.city);
 button2.onclick=() =>{
     p2.innerText = person2.city
 }

let p3= document.getElementById("p3");
let button3 = document.getElementById("button3");

 let employee = {
    name: "Hira",
    job: {
        title: "Developer",
        salary: 50000
    }
};

console.log(employee.job.salary);
button3. onclick=() =>{
p3.innerText = employee.job.salary;
}
