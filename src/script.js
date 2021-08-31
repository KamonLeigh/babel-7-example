const main = document.querySelector('#main');
const arr = [1, 2, 3, 4];
 let str = "";

 for(const item of arr) {
     str += `<p>${item}</p>`
 }

 main.innerHTML  = str;

 class Person {
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }

     sayHi() {
         console.log(`Hi ${this.name}`)
     }
 }

 const billy = new Person('Billy', 29);

 billy.sayHi();