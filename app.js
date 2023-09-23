const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function unload(){
  loader.style.zIndex = 0;
  loader.style.opacity = 0;
}

function show() {
     hover.classList.add('active');
     modal.classList.add('show');
}

function hide() {
     hover.classList.remove('active');
     modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);

var chkbtn = document.getElementById("chkbtn");
const sidebar = document.getElementById('sidebar');

function toogle() {
     var chk = document.getElementById('check').checked;
     if (!chk) {
        sidebar.style.display = 'block'
        sidebar.style.animtaion = 'all fadeIn 0.25s linear'
     } else {
        sidebar.style.display = 'none'
        sidebar.style.animation = 'all fadeOut 0.25s linear forwards'
     }
}

chkbtn.addEventListener('click', toogle);