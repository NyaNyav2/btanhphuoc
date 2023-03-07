var numberGeting =document.getElementById('input1').value;
var btn1 =document.getElementById('btn1');
var btn2 =document.getElementById('btn2');
const items= []; 


function getRandomElements(list){
    var numberGeting =document.getElementById('input1').value;
    return [...list].sort(()=>Math.random() >0.5 ?1:-1).slice(0,numberGeting);
}
function getNum() {
    document.getElementById('out1').innerHTML=getRandomElements(items);
    items.length=0;
    console.log(items);
}


function update(){
    var inputGeting =document.getElementById('input2').value.split(/\s*,+\s*/);
    items.push(...inputGeting);
    
    console.log(items);
}


btn1.addEventListener('click',getNum);
btn2.addEventListener('click',update);
