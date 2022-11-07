//화면 rendering
const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    //    console.log(req.body);
    const req_id = req.body.id,
      req_psword = req.body.psword;

    const UserStorage = require("../../model/userStorage"); //UserStorage의 클래스를 가져온다.

    const users = UserStorage.getUsers("id", "psword");

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
    console.log(users);
    const response = {}; //객체 생성
    //includes - 배열이 항목사이에 특정값을 포함하는지 여부를 확인하여 true/false
    if (users.id.includes(req_id)) {
      //아이디가 존재하는 지 확인
      //indexof - 문자열에서 특정 문자의 위치를 찾아 해당위치를 출력
      const idx = users.id.indexOf(req_id);
      if (users.psword[idx] === req_psword) {
        //아이디와 패스워드가 일치하는지 확인
        response.success = true;
        return res.json(response); //프론트엔드에 로그인 성공여부를 json형식으로 리턴해준다.
      }
    }
    response.success = false;
    response.msg = "로그인에 실패하였습니다.";
    return res.json(
      response //response객체를 json형식으로 응답(res)하면서 return해줌
    );
  },
};

module.exports = {
  output,
  process,
};
