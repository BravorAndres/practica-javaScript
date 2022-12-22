const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color")
btn.addEventListener('click',function(){

    const randomNumber = getRandomNamber();
    var miColor = getRandomNamber2();
    document.body.style.backgroundColor = miColor;
    color.textContent = miColor;
});

function getRandomNamber(){
    return Math.floor(Math.random()*colors.length);
}


function getRandomNamber2(){
    var color2 = new Array(3);
    for (i=0;i<3;i++){
        color2[i] = (Math.round(Math.random()*255));
    }
    return "rgb("+color2[0]+","+color2[1]+","+color2[2]+")";
}