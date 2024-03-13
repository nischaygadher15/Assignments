// let inpArr = ['num1', 'num2a', '2b', '3a', '3b', '4', '5a', '5b', '5c']
let num1 = document.getElementById('num1');
let num2a = document.getElementById('num2a');
let num2b = document.getElementById('num2b');
let num3a = document.getElementById('num3a');
let num3b = document.getElementById('num3b');
let num4 = document.getElementById('num4');
let num5a = document.getElementById('pcp');
let num5b = document.getElementById('tm');
let num5c = document.getElementById('rt');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let result4 = document.getElementById('result4');


function square()
{
    result1.value = parseInt(num1.value)**2;
}

function cube()
{
    result1.value = parseInt(num1.value)**3;
}

function add()
{
    result2.value = parseInt(num2a.value) + parseInt(num2b.value);
}

function subtract()
{
    result2.value = parseInt(num2a.value) - parseInt(num2b.value);
}

function multiply()
{
    result2.value = parseInt(num2a.value) * parseInt(num2b.value);
}

function division()
{
    result2.value = parseInt(num2a.value) / parseInt(num2b.value);
}

function modulus()
{
    result2.value = parseInt(num2a.value) % parseInt(num2b.value);
}

function swap()
{
    let x = num3a.value;
    num3a.value = num3b.value;
    num3b.value = x;
}

function area()
{
    result3.value = Math.PI * parseInt(num4.value) * parseInt(num4.value);
}

function si()
{
    console.log(num5a.value, num5b.value, num5c.value);
    result4.value = parseInt(num5a.value)*parseInt(num5b.value)*(parseInt(num5c.value)/100);
}

function ci()
{
    result4.value = (parseInt(num5a.value)*((1 + (parseInt(num5c.value)/100))**parseInt(num5b.value))) - parseInt(num5a.value);
}
