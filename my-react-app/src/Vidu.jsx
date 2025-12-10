class Member {
  constructor() {
    this.name = "nguyễn văn a";
  }
  memberName() {
    return this.name;
  }
}
class User extends Member {
  constructor(name, age) {
    super(name);
    this.age = 4;
  }
  memberInfo() {
    return this.memberName() + 'Tuổi:' + this.age;
  }
}
var x = new User();
console.log(x.memberInfo());

export default Member