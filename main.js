const target = document.querySelector('.target');
const info = document.querySelector('.info');
//nav바 클릭시 경고창
const navbox = document.querySelector('.nav');

navbox.addEventListener('click', ()=>{
    window.alert("클릭하지 마세요!!");
});

navbox.addEventListener('mouseenter', ()=>{
    info.innerHTML += `<div class="navbox_mouseEnter">"네브박스"에 mouseenter 이벤트 발생!!</div></br>`;
    info.scrollTop = info.scrollHeight;
});

navbox.addEventListener('mouseover', ()=>{
    info.innerHTML += `<div class="navbox_mouseOver">"네브박스"에 mouseover 이벤트 발생!!</div></br>`;
    info.scrollTop = info.scrollHeight;
});

// btn_bubble 버튼 클릭이벤트
const btn_bubble = document.querySelector('.btn_bubble');

btn_bubble.addEventListener('click', (e)=>{
    e.stopPropagation();
    let color = randomColor();
    target.style.background = color;
});

btn_bubble.addEventListener('mouseenter', ()=>{
    info.innerHTML += `<div class="bubblebox_mouseEnter">btn_bubble에서 mouseenter발생!!</div></br>`;
    info.scrollTop = info.scrollHeight;
});
btn_bubble.addEventListener('mouseover', ()=>{
    info.innerHTML += `<div class="bubblebox_mouseOver">btn_bubble에서 mouseover발생!!</div></br>`;
    info.scrollTop = info.scrollHeight;
});

// btn 버튼 클릭 이벤트
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    let color = randomColor();
    target.style.background = color;
});

function randomColor(){
    const colorSet = ['black', 'pink', 'blue', 'green', 'yellow', 'pupple', 'red'];

    let color = colorSet[Math.round(Math.random() * (colorSet.length-1))];
    return color; 
}

//speed 조절{
const speedUp = document.querySelector('.speedUp');
const speedDown = document.querySelector('.speedDown');
const speed_sign = document.querySelector('.speed_sign');
let speed = 1;

speedUp.addEventListener('click', ()=>{
    if(speed <= 10){        
        speed += 1;
        speed_sign.textContent = `${speed}`;
    }
});

speedDown.addEventListener('click',()=>{
    if(speed > 1){
        speed -= 1;
        speed_sign.textContent = `${speed}`;
    }
});

//key 입력 이벤트
window.addEventListener('keypress', (e)=>{
    
    let target_top = Number(getComputedStyle(target).top.replace(/\D+/, ''));
    let target_left = Number(getComputedStyle(target).left.replace(/\D+/, ''));

    if(e.key == "d"){
        console.log(target_left);
        if(target_left < 1200){
            target.style.left = `${target_left+speed*10}px`;
        }
    }
    else if(e.key == "a"){
        if(target_left > 0 ){
            target.style.left = `${target_left-speed*10}px`;
        }
    }
    else if(e.key == "w"){
        if(target_top > 0 ){
            target.style.top = `${target_top-speed*10}px`;
        }
    }
    else if(e.key == "s"){
        if( target_top < 400){
            target.style.top = `${target_top+speed*10}px`;
        }
    }
});
