/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}
//接口  Person接⼝定义了解构
interface Person {
  firstName: string;
  lastName: string;
}

//泛型 泛型（Generics）是指在定义函数、接⼝或类的时候，不预先指定具体的类型，⽽在使⽤的时候再指定类型的⼀种特性。以此增加代码通⽤性

interface Result<T> {
  ok: 0 | 1;
  data: T;
 }

//别名
type Foobar = { foo: string, bar: string }

type First = { first?: number };
type Second = { second: number };

type FirstAndSecond = First & Second

//类


//修饰器是一个对类进行处理的函数。修饰器函数的第一个参数，就是所要修饰的目标类
//第一个参数是类的原型对象；第二个参数是所要修饰的属性名；第三个参数是该属性的描述对象