//  Answer Number 1

function closure(a) {
    function number(n) {
       return a + n; 
    }
    return number;
};

let addNumber = closure(5);
let result = addNumber(4);
document.write(result + "<br>");

// Answer Number 2

let array = [1, 2, 3, 4, 5, 6, 7];
function searchArray(array, val) {
    if (array.includes(val)) {
        return true;
    } else {
        return false;
    }
};
document.write(searchArray(array, 6));


// Answer Number 3

function paragraph(content) {

    let para = document.createElement("p");

    para.innerText = content;

    document.body.appendChild(para);
};

paragraph("hello world");


//  Answer Number 4

function listItem(content) {

    let item = document.createElement("li");

    item.innerText = content;

    ul = document.getElementById("unorderedList");

    ul.appendChild(item);
};

listItem("Zebra");


// Answer Number 5

function changeBackground(heading, color) {

    heading.style.backgroundColor = color;

}

changeBackground(heading, "lightgreen");


// Answer Number 6

function saveObject(key, object) {
    
    let jsonString = JSON.stringify(object);

    localStorage.setItem(key, jsonString);
};

const object = {
    name: "Waseem", 
    age: 30, 
    teacher: "Fahad",
};

saveObject("object", object);



//  Answer Number 7

function getObject(key) {

    const jsonString = localStorage.getItem(key);
    
    const object = JSON.parse(jsonString);

    return object;
}

const retriveObject = getObject("object");

console.log(retriveObject);



//  Answer Number 8

function saveObject(object) {
    
    for (const key in object) {

      const value = object[key];
  

      const jsonString = JSON.stringify(value);
  
      localStorage.setItem(key, jsonString);
    }
  
    const savedObject = {};

    for (const key in object) {
 
      const jsonString = localStorage.getItem(key);
  

      const value = JSON.parse(jsonString);
  
      savedObject[key] = value;
    }
  
    return savedObject;
  }


const myObject = {
    name: "Adil",
    age: 30,
    teacher: "Asif",
  };
  

  const savedObject = saveObject(myObject);
  
  console.log(savedObject);
