console.log('55');


// add event in top buy now button
const btn = document.getElementsByClassName('btnaction');
for (const i of btn) {
    i.addEventListener('click', function () {
        alert("Congratulation !!!");

    });
}


// change color of all h2 class named
const tmato = document.getElementsByClassName('h2');
for (const i of tmato) {
    i.style.backgroundColor = "gray";
    i.style.padding = '2%';
    i.style.color = 'white';
}



// change border radius by javaScript
const cardClass = document.getElementsByClassName('card');
for (const i of cardClass) {
    i.style.borderRadius = "30px";
}


// disable and enable of submit button
document.getElementById('inputField').addEventListener('keypress', function (){
    const btn = document.getElementById('submitID');
    
        btn.removeAttribute('disabled');
    
});
 


// add action for double click in footer
const card =document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});



