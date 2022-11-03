const id = document.getElementById("id");
const psword = document.getElementById("psw");
const loginbtn = document.getElementById("btn");

console.dir(id);
console.dir(psword);
console.dir(loginbtn);

loginbtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  // console.log(req);

  //브라우저에 입력한 아이디/비번을 서버에 전달 -이러한 데이터를 서버에서 받으려면 api가 마련이 되어있어야함
  fetch("/login", {
    method: "POST", //body를 통해서 데이터를 전달 할때는 post메서드를 사용해야한다.
    headers: {
      //헤더로 JSON형식으로 보내는것을 알린다.
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
    //strigfy -문자열로 바꿔준다
    //json 데이터 타입을 이용해서 데이터를 전달
  });
}
