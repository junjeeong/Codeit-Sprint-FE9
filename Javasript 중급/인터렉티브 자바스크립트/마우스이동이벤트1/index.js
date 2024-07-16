/**
 * [마우스 이동 이벤트]
 *
 * > MouseEvent.type
 * mousemove: 마우스 포인터가 이동할 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때
 *
 * > MouseEvent.clientX, clientY
 * : 화면에 표시되는 창 기준 마우스 포인터 위치
 *
 * > MouseEvent.pageX, pageY
 * : 웹 문서 전체 기준 마우스 포인터 위치
 *
 * > MouseEvent.offsetX, offsetY
 * : 이벤트가 발생한 요소 기준 마우스 포인터 위치
 */



// 1. query셀렉터로 tag를 선택한다. 변수에 저장 -> 2. 해당 tag에 대한 정보가 담긴 변수에 이벤트 헨들러를 등록한다. -> (변수명).addEventListneer("이벤트 종류", 이벤트헨들러함수) -> 2번에서 이벤트 헨들러는 안에서 정의하기보다는 바깥에서 정의하고 이름만 가져온다. ->
// 이벤트헨들러 함수의 인자는 이벤트 객체인 e이다. e.target, e.type, e
const box1 = document.querySelector("#box1");

function onMouseMove(e) {
    //콘솔창에 띄우기 이벤트핸들러는 첫번째 인자로 이벤트 객체(보통 e)를 전달받음.
    console.log(`client: (${e.clientX}, ${e.clientY})`);
    console.log(`page: (${e.pageX}, ${e.pageY})`);
    console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
    console.log("------------------------------------");
}

box1.addEventListener("mousemove", onMouseMove); //box1 node에 이벤트 핸들러 추가. -> onMouseMove핸들러.
