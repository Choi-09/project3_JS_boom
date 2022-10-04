<<<<<<< HEAD

//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];
    

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//메세지 출력 함수
const msgShow = (m) => {
    const msg = document.getElementById("msg");
    msg.innerHTML = `<h2>${m}</h2>`;
}

//초기화 함수
const init = () => {
    msgShow(' ');

// 재시작할때 "폭탄을 섞어주세요" 나오면 그림지우기
    for(let i = 1; i <=9; i++) {
        document.getElementById(`box${n}`).innerHTML = ' ';
    }
    //선택했던 숫자 재배열
    selNum = [];
}



//숫자박스가 선택된 경우
/*
function show(n) {
    console.log(n);
}
*/ 
//화살표 함수
const show = (n) => {
    if (!shuffleFlag) {
        msgShow("폭탄을 섞어 주세요.")
        return
    }

// 눌러진 번포한 번호를 배열에 추가
selNum.push(n);
// cnt++ ;

console.log(selNum, cnt, selNum.length);

// dd
    //폭탄이 있는 배열을 참고하여 그림 변경
    let imgSrc = null; // img 변수안에 초기값 준다
    if (num[n-1]==1) imgSrc = "bom" ; 
    else imgSrc = "hart" ;
    
    //현재 눌러진 숫자 박스에 그림 표시
    document.getElementById(`box${n}`).innerHTML = `<img src = ./images/hart.png>`
    // document.getElementById('box' + n).innerHTML = '<img src = ./images/' + imgSrc + '.png>'
    // console.log(n) ;

    // 눌러진 번포한 번호를 배열에 추가
    if (!selNum.includes(n)) selNum.push(n);
    // cnt++ ;

    console.log(selNum, cnt, selNum.length);

    //성공체크
    if (selNum.length == 9) {
        let fn =[1,2,3,4,5,6,7,8,9].filter((i)=>selNum.includes(i));
        console.log(fn[0]);
        document.getElementById(`box${fn[0]}`).innerHTML = `<img src = ./images/hart.png>`
        msgShow('성공!');
    }

    
    //실패체크
    //폭탄을 찾으면 더이상 나머지 번호가 클릭되지 않는다.
    if (imgSrc == "boom") {
        shuffleFlag = false;
        msgShow ('실패o(TヘTo)');
    }
}

//폭탄섞기 함수
const bexShuffle = () => {
    num.sort(()=> Math.random() - 0.5)
    shuffleFlag = true;

//초기화 함수 호출
    init();
    console.log(num);
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   //DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
   for(let i = 0; i <num.length; i++) {
    num.push(0) ;
   }
   num.push[1] ;
   console.log(num);
=======

//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;


/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   
>>>>>>> 78cd54f0991cda3a5d9fdd701a177717ac963773
});