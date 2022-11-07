"use strict";

//클래스 생성
class UserStorage {
  static #users = {
    //static - 인스턴스를 만들지 않고,클래스자체에서 변수에 접근하고자 할때 static을 붙여주면된다.
    //변수에 #을 붙이면 public한 변수에서 private한 변수로 바꿔준다. 외부에서 함부러 불러올 수가 없다.
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  //19-20강 듣기
  static getUsers(...fields) {
    //static변수를 사용하기에 static을 꼭 붙여줘야 반환이 된다.
    //파라미터로 받는 값은 자동으로 배열로 받아진다 (...변수명)console.log(변수명);
    const users = this.#users;

    const newUsers = fields.reduce((newUsers, field) => {
      //hasOwnProperty 객체가 특정 프로퍼티를 가지고 있는지를 불리언 값을 반환한다
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers; //리턴해주면 반환값이 파라미터로 들어가게 된다⭐.
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
