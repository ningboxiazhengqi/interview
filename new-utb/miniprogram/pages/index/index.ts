// index.ts
// 获取应用实例
const app = getApp<IAppOption>()


class Student {
  
  fullName: string;
  private _foo: string = "foo";
  protected bar: string = "bar";
  constructor(public firstName: any, public middleInitial: any, public lastName: any) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
  @enumerable(false)
  get name() {
    return this._foo
  }
  @enumerable(false)
  set setname(value: string) {
    this._foo = value
  }
}
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(target)
      console.log(propertyKey)
      console.log(descriptor)
     // descriptor.enumerable = value;
  };
}
Page({
  data: {
    value: '',
  },
  // 事件处理函数
  bindViewTap(e: any): void {
    console.log(e)
    const { type } = e.currentTarget.dataset
    console.log(this.testTnterface({ firstName: '1', lastName: '2' }))

  },
  onLoad() {
    let user = new Student("Jane", "M.", "User")
    user.setname = 'hahaha'
    console.log(user.name)

    console.log(this.getResult<number>(123)) 
  },
  testTnterface(person: Person): string {
    let arr1: string[];
    arr1 = ['1']
    const { firstName, lastName } = person
    console.log(firstName, lastName)
    return firstName + lastName
  },
  testToype(person: Foobar, msg = 1) {
    let arr1: Foobar[];
    arr1 = [{ foo: '1', bar: '232' }]
    let uni: string | number
    uni = 1;
    uni = '12321'
    let nui2: First
    nui2 = { first: 1 }
    let nui3: FirstAndSecond;
    nui3 = {
      first: 1,
      second: 2
    }
  },
  bindinput: function (e: any) {
    console.log(e)
  },
  getResult<T>(data: T): Result<T> {
    return { ok: 1, data };
  }
})

function rec(target: any, name: string, descriptor: any) {
  // 这⾥通过修改descriptor.value扩展了bar⽅法
  const baz = descriptor.value;
  descriptor.value = function(val: string) {
  console.log('run method', name,descriptor.value);
  baz.call(this, val);
  }
 }
 //属性装饰器
 function mua(target:any, name:string) {
  target[name] = 'mua~~~'
 }
 class Foo {
  bar:string = '123';
  @rec
  setBar(val: string) {
    this.bar = val
  }
  @mua ns!:string;

 }
 let foo = new Foo()
 foo.setBar('lalala')
 console.log(foo.ns)
