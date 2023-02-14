let signin_form = document.getElementById("signin-form");
let btn_login = document.getElementById("btn-login");
let darkmode_toggle = document.getElementById("darkmode-toggle");

// 화살표 함수(arrow function)
// 정규 함수 표현식보다 훨씬 간결하게 함수를 만들 수 있다.

// let num1 = function(x,y) {
//   return x + y;
// }

// let num2 = (x,y) => x = y;

document.querySelectorAll(".animate-input").forEach((e) => {
  // e : animate-inpiut이라는 클래스를 뜻한다.
  let input = e.querySelector("input");
  let button = e.querySelector("button");

  // onkey(up, down) 키보드에 관련된 이벤트로 사용자가
  // 키보드에 키를 눌렀다가 떼었을 때 발생하는 이벤트이다.
  // trim() : 공백을 제거하는 함수.
  input.onkeyup = () => {
    if(input.value.trim().length > 0) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }

    if(input.value.trim().length != 0) {
      btn_login.removeAttribute("disabled");
    } else {
      btn_login.setAttribute("disabled", "true");
    }
  }

  // 비밀번호 숨기기 및 표시
  if(button) {
    button.onclick = () => {
      if(input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        button.innerHTML = "비밀번호 표시";
      } else {
        input.setAttribute("type", "text");
        button.innerHTML = "비밀번호 숨김";
      }
    }
  }
})

// 다크모드 토글을 위한 스크립트

darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  let body = document.querySelector("body");
  body.classList.toggle("dark");


  // 삼항연산자
  darkmode_toggle.innerHTML = body.classList.contains("dark") ? "Lightmode" : "Darkmode";
}