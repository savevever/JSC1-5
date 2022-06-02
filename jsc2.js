document.getElementById('gray').onclick = switchgray;
document.getElementById('yellow').onclick = switcyellow;
document.getElementById('green').onclick = switchgreen;
document.getElementById('red').onclick = switchred;

function switchgray(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';  
}
function switcyellow(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';  
}
function switchgreen(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'green';  
}
function switchred(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'red';  
}