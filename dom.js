// let value = document;
// value = document.body;
// value = document.head;
// value = document.all;
// value = document.links;
// value = document.forms;
// value = document.body.className;
// value = document.forms[0].method;
// value = document.forms[0].action;
// console.log(value);


// //window -- global
// setTimeout(() => {
//     console.log('hi');
// },3000)



//selecting element
//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()


// let val;
// val = document.getElementById('container');
// // console.log(val);
// val = document.getElementsByClassName('container')[0];
// val = document.getElementsByTagName('body')[0];
// val = document.querySelectorAll('.product-collection-list')[0];
// console.log(val);




//difference between htmlCollection and NodeList

let val;
// val = document.getElementsByClassName('product-collection-list');
// console.log(val)

// for(let i = 0; i < val.length; i++){
//     console.log(val[i]);
// }
// for(let i of val){
//     console.log(i);
// }


// val.forEach(element => {
//     console.log(element);
// });


// ***Do not access all the array methods using HTMLCollections ***

// val = document.querySelectorAll('.product-collection-list');
// console.log(val);

// for(let i = 0; i < val.length; i++){
//     console.log(val[i]);
// }

// val.forEach(elem => {
//     console.log(elem);
// })

// for(let x of val){
//     console.log(x);
// }

// *** Access all the array methods using NodeLists ***


//Manipulation

//first one is selection 
val = document.querySelector(".product-collection-list");

//then manipulation
// val.style.color = 'red';
// val.style.backgroundColor = 'green';
// val.textContent = 'Microphone';
// val.style.padding = '20px';
// val.style.fontSize = '24px';
// val.innerText = 'Shoes';
// val.innerHTML = '<i>Money Bag</i>';
// val.className = 'MyClass';
// console.log(val);
// console.log(val.getAttribute('class'));
// val.setAttribute('id', 'first-class');

// let a = document.createElement('a');
// a.textContent = 'Link';
// a.setAttribute('href','https://google.com');
// a.style.textDecoration = 'none';
// console.log(a);
// let body = document.querySelector('body');
// body.innerHTML = a;
// val.classList.add('myClass');
// console.log(val);


// Traversing html dom 
val = document.querySelector('.product-collection');
// console.log(val);


//to select child element use children or childNodes
//to select the beside sibling use nextElementSibline
//where childNodes is used to select child with text element
//children is used to select the child element of a parent tag
// val = val.children[0].nextElementSibling;
// console.log(val);


// val = val.children[0].nextElementSibling.parentElement.parentElement;
// console.log(val);

// Interacting and child Nodes 
// val = val.childNodes[1].nodeType;
// val = val.childNodes[1].nodeName;

//1 -- element
//2 -- Attribute
//3 -- Text node
//8 -- Comment
//9 -- Document itself
//10 -- Doctype

// if(val.childNodes[1].nodeType !== 3){
//     val.childNodes[1].classList.add("MyClass");
// }
// console.log(val);


//creating Element

// let li = document.createElement('li');
// let ul = document.querySelector('ul');
// // li.textContent = 'Honey';
// let textNode = document.createTextNode('MyItem');
// li.classList.add('product-collection-list');
// li.appendChild(textNode);
// ul.prepend(li);
// console.log(li);


//Replacing child

// const oldHeading = document.querySelector('h1');
// const h1 = document.createElement('h1');
// h1.appendChild(document.createTextNode("My Updated Product List"));
// const container = document.querySelector('.container');
// // container.replaceChild(h1, oldHeading);
// oldHeading.replaceWith(h1);
// console.log(newHeading);

//Removing child

// const list = document.querySelector('.product-collection');
// // list.lastElementChild.remove();
// list.removeChild(list.lastElementChild);
// console.log(list);

//Dom Events
// const h1 = document.querySelector('h1');
// const li = document.querySelector("li");
// const lis = document.querySelectorAll('li');
// const form = document.forms[0];
// const input = document.getElementById('productName');
// function evtInformation(evt){
//     evt.preventDefault();
//     console.log("Type :", evt.type);
//     console.log('Target: ', evt.target);
//     console.log('Input value :',input.value);
//     console.log('Target Value: ', evt.target.innerText);
//     console.log('Get text content: ', evt.target.getTextContent);
//     console.log("Offset-x:", evt.offsetX);    
//     console.log("Offset-y :", evt.offsetY);    
//     console.log("Client:", evt.clientY);
//     console.log('HI');    
// }
// h1.addEventListener('click',evtInformation);

// lis.forEach(li =>{
//     li.addEventListener("click", evtInformation);
// })

// form.addEventListener("submit", evtInformation);

//Event Bubbling
// -- Children to parents 
//nich thaika opore 


//Event Delegation
// -- parents to children 


const li = document.querySelector('li');
const ul = document.querySelector('ul');
const form = document.forms[0];
const input = document.getElementById('productName');
const container = document.querySelector('.container');
// li.addEventListener('click', ()=>{
//     console.log('You clicked li');
// })
// ul.addEventListener('click', ()=>{
//     console.log('You clicked ul');
// })


//event delegation 

// container.addEventListener('click', (evt)=>{
//     if(evt.target.id === 'sample'){
//         evt.target.classList.add('custom')
//     }
// })
function evtInformation(evt)
{
    evt.preventDefault();
    console.log('Type:', evt.type);
    console.log('Target:', evt.target);
    const li = document.createElement('li');
    li.textContent = input.value;
    li.className = 'product-collection-list';
    ul.appendChild(li);
}

form.addEventListener("submit", evtInformation);









