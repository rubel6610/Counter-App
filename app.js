const count = document.querySelector('.text-value');
const plusBtn = document.querySelector('.plusBtn');
const minusbtn = document.querySelector('.minusBtn');
const input = document.querySelector('.input');
const reset = document.querySelector('.resetBtn');

plusBtn.addEventListener('click', function(){
     const countValue = parseInt(count.innerText);
     const inputValue = parseInt(input.value);
     count.innerText = countValue + inputValue;

});

minusbtn.addEventListener('click', function(){
     const countValue = parseInt(count.innerText);
     const inputValue = parseInt(input.value);
     count.innerText = countValue - inputValue;

});
reset.addEventListener('click', () => {
     input.value = 0;
     count.innerText = 0;
})