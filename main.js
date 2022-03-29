"use strict"

// there type variable var let and const
function variables() {
    let enterValue = prompt("Please enter var or let or const");
 
        if (enterValue == 'var') {
            document.getElementById("defination").innerHTML =  enterValue + " global scop variable, not declareAble and not resighnable value,";
        } else if (enterValue == 'let') {
            document.getElementById("defination").innerHTML =  enterValue + " blocked scop variable, not declareAble but resighnable value,";
        } else if (enterValue == 'const') {
            document.getElementById("defination").innerHTML =  enterValue + " blocked scop variable, not declareAble and not resighnable value,";

        }else{
            alert('Please Enter valid Value');
        }
    
  }
  

  // template string is used to back tick this is very usefull multipul value concate

  function templateString() {

      let template = 'Template string';
      document.getElementById("defination").innerHTML =  `${template} is here. concate using back tick without concate sign and cotation's`;
      }

      //// Arrow function 
     let arrowFunction = arrowFunction =>{
        document.getElementById("defination").innerHTML =  `Arrow function siplest way  to create  function`;
    }

     // Rest Operator use to multipul value action like sum subtraction etc.
     function restOperator(name,...args) {
        let sum = 0;
        for (let i in args) {
           sum += args[i];
        }
        document.getElementById("defination").innerHTML =  `Rest Operator use to multipul value action like sum subtraction etc...Result Display Console`;
         console.log(args)
         console.log(sum)
     }

     // Spread oprator very usef to marging multipul arrays and objet,and action perfome 
     function speardOprator() {
        let arr1 = [1,2,3,4];
        let arr2 = [4,6,7];
        let arr3 = [arr1,arr2];
         console.log(arr3);
        let margArraySpreadOprator = [...arr1,...arr2];
        console.log(margArraySpreadOprator);
        let sum = 0;
        for (let i in margArraySpreadOprator) {
           sum += margArraySpreadOprator[i];
        }
        document.getElementById("defination").innerHTML =  `Speard Oprator use to marging array's with out concat and actions perfom like sum, "firstly givin 2 array's. second marg each other and last sum of givin array using speard oprator, Please check console for result"`;
        console.log(sum);
       
     }
      

     // this function use to array indexing easy way
     function destructuringArray() {
         let user = ['Shahid',26,'Male','Lahore'];
         //display single value 
         
         let[name,age,gender,city] = user;
          console.log(`display destructuring array single value "${name}"`);
        //   console.log(`display destructuring array single value "${age}"`);
        //   console.log(`display destructuring array single value "${gender}"`);
        //   console.log(`display destructuring array single value "${city}"`);
         
        // display all value using rest oprator

         let[...args] = user;
          console.log(`display destructuring array all value using rest oprator "${args}"`);
         // destructing array use funtion example
          function destrustingArrayFunction([name,age = 22,gender,city]) {
            console.log(`display value on function using destructing array "${name}" "${age}"`);
          }
          destrustingArrayFunction(['Ahmad',,'Male','Pir Mahal']);
          
          function destrustingArrayReturnFunction() {
            return ['Umar',,'Male','Pir Mahal'];
          }
         let [fname,loction] = destrustingArrayReturnFunction();
         console.log(`destructing arry display using return function "${fname}"`);
         
         document.getElementById('defination').innerHTML = `Destructring Array use to  array indexing short way, "Result display on console" `
     }
    
     // this function is use to get Object properties singel line code 
     function destructuringObject() {
         let userObj = {
             name : 'Shahid',
             lastName : 'Minhas'
         }
         
          let {name,lastName} = userObj;
          
         console.log(name,lastName);
         document.getElementById('defination').innerHTML = `Destructring Object use to  all object properties getting by easy way "Result on console`
         
     }

     function calssMethods() {
         class student{
             // constructor function auto called any time when create class object
             constructor(name,age) {
                 this.name = name;
                 this.age = age;
                 console.log(`'this is constructor method . just object create class. this called'`);
             }
             // this is prototype method. can't called whithot class object
             hello(){
                 console.log(`'this is prototype method. create object and call this method. set value via constructor' ${this.name} ${this.age}`)
             }
             // this is static method called without class object 
             static staticMethod(){
                 console.log('this is static method . call without create object')
             }
            
         }
         let obj = new student();
         obj.hello();
         student.staticMethod();
         document.getElementById('defination').innerHTML = `Method's of 3 types, Constructor,protoType,and static methods.constructor called every time when create object. ProtoType metod can call object. Static method can call without class object. Result display console`     
     }

     function fetchAPI() {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch(error => console.log('cant fetch data'))
         /////// Insert data using fetch API
         let obj = {
            title: 'Add',
            body: 'Data',
            userId: 200,
          }
         fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
            
            // Update Method
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify({
                  id: 1,
                  title: 'foo',
                  body: 'bar',
                  userId: 1,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((data) => console.log(data));   
               
                // delete Method
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'DELETE',
                  });  
                  
                  document.getElementById('defination').innerHTML = `get json data using "Fetch function" display resut console`

        }

        function iterators() {
          
          let numbers = [100,200,3000,4000];

          let iter = numbers[Symbol.iterator]();
          
          // console.log(iter.next());
          // console.log(iter.next());
          // console.log(iter.next());
          // console.log(iter.next());

          //****** iterator display loop */
          let result = iter.next();

          console.log(result);
          while (!result.done) {
            console.log("iterator using loop " + result.value);
            result = iter.next();

          }
          document.getElementById('defination').innerHTML = `Iterator use to tversing spcific array,object and string value. Result console`

        }
        
        function strictMod() {
          document.getElementById('defination').innerHTML = `Strict mod use to find error that not show on conole or web`

        }