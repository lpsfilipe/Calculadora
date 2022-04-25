'use strict';

// the value of our calculation
let valueL;
let valueR;
let value=0;
let operator = 0;
let prevBut;
// what is being shown on screen
let screen = 0;

// reset
const reset = function () {
    valueL=0;
    valueR=0;
    value=0;
    operator=0;
    screen = 0;
    prevBut = 'symbol';
    document.querySelector('.screen').textContent = '0';
};

// reset value (saves last value)
const resetValue = function () {
    valueL=screen;
    valueR=0;
    operator=0;
    document.querySelector('.screen').textContent = screen;
};

// add input
const addInputNumber = function(n) {
if (operator == 0){
    // then its second argument
    valueR=n;
} else {
// then its first argument
valueL=n;
} 

  };

// updateScreen
const updateScreen = function() {
    //value = valueL;
    //screen = value;
    document.querySelector('.screen').textContent = screen;
};



// handle C (clear) button
document.getElementById('clear').addEventListener('click', reset);

// handle + button
document.getElementById('plus').addEventListener('click', function(){
    operator='+';
    screen = operator;
    updateScreen();
    prevBut='symbol';
});

// handle - button
document.getElementById('minus').addEventListener('click', function(){
    operator='-';
    screen = operator;
    updateScreen();
    prevBut='symbol';
});

// handle x button
document.getElementById('multiplication').addEventListener('click', function(){
    operator='*';
    screen = operator;
    updateScreen();
    prevBut='symbol';
});

// handle / button
document.getElementById('division').addEventListener('click', function(){
    operator='/';
    screen = operator;
    updateScreen();
    prevBut='symbol';
});

// handle , button
document.getElementById('comma').addEventListener('click', function(){
    operator=',';
    screen = operator;
    updateScreen();
    prevBut='symbol';
});

// handle 9 button
document.getElementById('nine').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=9;
        value=valueL;
    } else {
    // then its first argument
    valueR=9;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 8 button
document.getElementById('eight').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=8;
        value=valueL;
    } else {
    // then its first argument
    valueR=8;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 7 button
document.getElementById('seven').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=7;
        value=valueL;
    } else {
    // then its first argument
    valueR=7;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 6 button
document.getElementById('six').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=6;
        value=valueL;
    } else {
    // then its first argument
    valueR=6;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 5 button
document.getElementById('five').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=5;
        value=valueL;
    } else {
    // then its first argument
    valueR=5;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 4 button
document.getElementById('four').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=4;
        value=valueL;
    } else {
    // then its first argument
    valueR=4;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 3 button
document.getElementById('three').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=3;
        value=valueL;
    } else {
    // then its first argument
    valueR=3;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 2 button
document.getElementById('two').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=2;
        value=valueL;
    } else {
    // then its first argument
    valueR=2;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 1 button
document.getElementById('one').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=1;
        value=valueL;
    } else {
    // then its first argument
    valueR=1;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='number';
});

// handle 0 button
document.getElementById('zero').addEventListener('click', function(){
    if (operator == 0){
        // then its second argument
        valueL=0;
        value=valueL;
    } else {
    // then its first argument
    valueR=0;
    value=valueR;
    } 
    document.querySelector('.screen').textContent = value;
    prevBut='zero';
});


// handle = button
document.getElementById('equals').addEventListener('click', function(){
  if (operator === '+') {
    screen = Number(valueL + valueR);
  } else if (operator === '-') {
    screen = valueL - valueR;
  } else if (operator === '*') {
    screen = valueL * valueR;
  } else if (operator === '/') {
      if(valueR == 0){
          screen = 'NaN';
      } else {
    screen = valueL / valueR;
  }}
  else if(operator === ',') {
    valueL = valueL + valueR/10;
    valueR=0;
    operator=0;
    screen=valueL;
  } else {screen = 'error';}
  updateScreen();
  resetValue();
});

