"use strict"; 

//클래스 생성 
class UserStorage{
    static #users = { 
      //static - 인스턴스를 만들지 않고,클래스자체에서 변수에 접근하고자 할때 static을 붙여주면된다.
      //변수에 #을 붙이면 public한 변수에서 private한 변수로 바꿔준다. 외부에서 함부러 불러올 수가 없다.
        id:["woorimIT","나개발","김팀장"],
        psword:["1234","1234","123456"],
        name:["우리밋","나개발","김팀장"]
      }; 
 
   static getUsers(){ //static변수를 사용하기에 static을 꼭 붙여줘야한다.
        return this.#users;
      }
      
}

module.exports = UserStorage;