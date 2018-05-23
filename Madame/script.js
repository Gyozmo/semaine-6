class produit {

   constructor(name){
        this.name = name;
   } 

   price(){
       console.log(this.name + ' 30 ');
       
   }

}

let orange = new produit('Orange');
console.log(orange.name);



// ES6 Class adding a method to the Person prototype 
class Person {
    constructor(name) {
        this.name = name;
    }
         
    walk() {
        console.log(this.name + ' is walking.');
    }
}
         
let bob = new Person('Bob');
console.log(bob.name);  // Outputs 'Bob is walking'



