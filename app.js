// let open = document.getElementById("open");
// let close = document.getElementById("close");
// let container =document.querySelector(".container");

// open.addEventlistner("click",()=>container.classList.add("show-nav"))

// close.addEventlistner("click",()=>container.classList.remove("show-nav"))

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))