//화면 rendering 
const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
}; 


const user = {
  id:["woorimIT","나개발","김팀장"],
  psword:["1234","1234","123456"]
}

const process = {
  login: (req, res) => {
//    console.log(req.body); 
    const req_id = req.body.id,
    req_psword = req.body.psword 

    //includes - 배열이 항목사이에 특정값을 포함하는지 여부를 확인하여 true/false
    if(user.id.includes(req_id)){ //아이디가 존재하는 지 확인
    //indexof - 문자열에서 특정 문자의 위치를 찾아 해당위치를 출력 
      const idx = user.id.indexOf(req_id); 
       if(user.psword[idx] === req_psword){ //아이디와 패스워드가 일치하는지 확인
        return res.json({ //프론트엔드에 로그인 성공여부를 json형식으로 리턴해준다.
          success: true, 
          msg:"로그인 하셨습니다."
        });
       }
    }

    return res.json({
      success:false,
      msg:"로그인에 실패하였습니다"
    });
  },
};

module.exports = {
  output,
  process,
};
