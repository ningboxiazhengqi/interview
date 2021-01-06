"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app = getApp();
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this._foo = "foo";
        this.bar = "bar";
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._foo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setname", {
        set: function (value) {
            this._foo = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        enumerable(false)
    ], Student.prototype, "name", null);
    __decorate([
        enumerable(false)
    ], Student.prototype, "setname", null);
    return Student;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
Page({
    data: {
        value: '',
    },
    bindViewTap: function (e) {
        console.log(e);
        var type = e.currentTarget.dataset.type;
        console.log(this.testTnterface({ firstName: '1', lastName: '2' }));
    },
    onLoad: function () {
        var user = new Student("Jane", "M.", "User");
        user.setname = 'hahaha';
        console.log(user.name);
        console.log(this.getResult(123));
    },
    testTnterface: function (person) {
        var arr1;
        arr1 = ['1'];
        var firstName = person.firstName, lastName = person.lastName;
        console.log(firstName, lastName);
        return firstName + lastName;
    },
    testToype: function (person, msg) {
        if (msg === void 0) { msg = 1; }
        var arr1;
        arr1 = [{ foo: '1', bar: '232' }];
        var uni;
        uni = 1;
        uni = '12321';
        var nui2;
        nui2 = { first: 1 };
        var nui3;
        nui3 = {
            first: 1,
            second: 2
        };
    },
    bindinput: function (e) {
        console.log(e);
    },
    getResult: function (data) {
        return { ok: 1, data: data };
    }
});
function rec(target, name, descriptor) {
    var baz = descriptor.value;
    descriptor.value = function (val) {
        console.log('run method', name, descriptor.value);
        baz.call(this, val);
    };
}
function mua(target, name) {
    target[name] = 'mua~~~';
}
var Foo = (function () {
    function Foo() {
        this.bar = '123';
    }
    Foo.prototype.setBar = function (val) {
        this.bar = val;
    };
    __decorate([
        rec
    ], Foo.prototype, "setBar", null);
    __decorate([
        mua
    ], Foo.prototype, "ns", void 0);
    return Foo;
}());
var foo = new Foo();
foo.setBar('lalala');
console.log(foo.ns);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFHaEM7SUFLRSxpQkFBbUIsU0FBYyxFQUFTLGFBQWtCLEVBQVMsUUFBYTtRQUEvRCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQUs7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRjFFLFNBQUksR0FBVyxLQUFLLENBQUM7UUFDbkIsUUFBRyxHQUFXLEtBQUssQ0FBQztRQUU1QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFDbkUsQ0FBQztJQUVELHNCQUFJLHlCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBTzthQUFYLFVBQVksS0FBYTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQTtRQUNuQixDQUFDOzs7T0FBQTtJQU5EO1FBREMsVUFBVSxDQUFDLEtBQUssQ0FBQzt1Q0FHakI7SUFFRDtRQURDLFVBQVUsQ0FBQyxLQUFLLENBQUM7MENBR2pCO0lBQ0gsY0FBQztDQUFBLEFBaEJELElBZ0JDO0FBQ0QsU0FBUyxVQUFVLENBQUMsS0FBYztJQUNoQyxPQUFPLFVBQVUsTUFBVyxFQUFFLFdBQW1CLEVBQUUsVUFBOEI7UUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7SUFFM0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtR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SSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuXG5jbGFzcyBTdHVkZW50IHtcbiAgXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Zvbzogc3RyaW5nID0gXCJmb29cIjtcbiAgcHJvdGVjdGVkIGJhcjogc3RyaW5nID0gXCJiYXJcIjtcbiAgY29uc3RydWN0b3IocHVibGljIGZpcnN0TmFtZTogYW55LCBwdWJsaWMgbWlkZGxlSW5pdGlhbDogYW55LCBwdWJsaWMgbGFzdE5hbWU6IGFueSkge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBmaXJzdE5hbWUgKyBcIiBcIiArIG1pZGRsZUluaXRpYWwgKyBcIiBcIiArIGxhc3ROYW1lO1xuICB9XG4gIEBlbnVtZXJhYmxlKGZhbHNlKVxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9vXG4gIH1cbiAgQGVudW1lcmFibGUoZmFsc2UpXG4gIHNldCBzZXRuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb28gPSB2YWx1ZVxuICB9XG59XG5mdW5jdGlvbiBlbnVtZXJhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgICAgY29uc29sZS5sb2codGFyZ2V0KVxuICAgICAgY29uc29sZS5sb2cocHJvcGVydHlLZXkpXG4gICAgICBjb25zb2xlLmxvZyhkZXNjcmlwdG9yKVxuICAgICAvLyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB2YWx1ZTtcbiAgfTtcbn1cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdmFsdWU6ICcnLFxuICB9LFxuICAvLyDkuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoZTogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XG4gICAgY29uc29sZS5sb2codGhpcy50ZXN0VG50ZXJmYWNlKHsgZmlyc3ROYW1lOiAnMScsIGxhc3ROYW1lOiAnMicgfSkpXG5cbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGxldCB1c2VyID0gbmV3IFN0dWRlbnQoXCJKYW5lXCIsIFwiTS5cIiwgXCJVc2VyXCIpXG4gICAgdXNlci5zZXRuYW1lID0gJ2hhaGFoYSdcbiAgICBjb25zb2xlLmxvZyh1c2VyLm5hbWUpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldFJlc3VsdDxudW1iZXI+KDEyMykpIFxuICB9LFxuICB0ZXN0VG50ZXJmYWNlKHBlcnNvbjogUGVyc29uKTogc3RyaW5nIHtcbiAgICBsZXQgYXJyMTogc3RyaW5nW107XG4gICAgYXJyMSA9IFsnMSddXG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH0gPSBwZXJzb25cbiAgICBjb25zb2xlLmxvZyhmaXJzdE5hbWUsIGxhc3ROYW1lKVxuICAgIHJldHVybiBmaXJzdE5hbWUgKyBsYXN0TmFtZVxuICB9LFxuICB0ZXN0VG95cGUocGVyc29uOiBGb29iYXIsIG1zZyA9IDEpIHtcbiAgICBsZXQgYXJyMTogRm9vYmFyW107XG4gICAgYXJyMSA9IFt7IGZvbzogJzEnLCBiYXI6ICcyMzInIH1dXG4gICAgbGV0IHVuaTogc3RyaW5nIHwgbnVtYmVyXG4gICAgdW5pID0gMTtcbiAgICB1bmkgPSAnMTIzMjEnXG4gICAgbGV0IG51aTI6IEZpcnN0XG4gICAgbnVpMiA9IHsgZmlyc3Q6IDEgfVxuICAgIGxldCBudWkzOiBGaXJzdEFuZFNlY29uZDtcbiAgICBudWkzID0ge1xuICAgICAgZmlyc3Q6IDEsXG4gICAgICBzZWNvbmQ6IDJcbiAgICB9XG4gIH0sXG4gIGJpbmRpbnB1dDogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH0sXG4gIGdldFJlc3VsdDxUPihkYXRhOiBUKTogUmVzdWx0PFQ+IHtcbiAgICByZXR1cm4geyBvazogMSwgZGF0YSB9O1xuICB9XG59KVxuXG5mdW5jdGlvbiByZWModGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSB7XG4gIC8vIOi/meK+pemAmui/h+S/ruaUuWRlc2NyaXB0b3IudmFsdWXmianlsZXkuoZiYXLivYXms5VcbiAgY29uc3QgYmF6ID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKHZhbDogc3RyaW5nKSB7XG4gIGNvbnNvbGUubG9nKCdydW4gbWV0aG9kJywgbmFtZSxkZXNjcmlwdG9yLnZhbHVlKTtcbiAgYmF6LmNhbGwodGhpcywgdmFsKTtcbiAgfVxuIH1cbiAvL+WxnuaAp+ijhemlsOWZqFxuIGZ1bmN0aW9uIG11YSh0YXJnZXQ6YW55LCBuYW1lOnN0cmluZykge1xuICB0YXJnZXRbbmFtZV0gPSAnbXVhfn5+J1xuIH1cbiBjbGFzcyBGb28ge1xuICBiYXI6c3RyaW5nID0gJzEyMyc7XG4gIEByZWNcbiAgc2V0QmFyKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5iYXIgPSB2YWxcbiAgfVxuICBAbXVhIG5zITpzdHJpbmc7XG5cbiB9XG4gbGV0IGZvbyA9IG5ldyBGb28oKVxuIGZvby5zZXRCYXIoJ2xhbGFsYScpXG4gY29uc29sZS5sb2coZm9vLm5zKVxuIl19