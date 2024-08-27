/* Создайте тип Status с возможными значениями: "pending", "in-progress", "completed".
Создайте тип User с полями: name: string, age: number, status: Status.
Создайте функцию updateStatus, которая принимает объект User и новый status: Status и возвращает обновленный объект User.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var updateStatus = function (_a, status) {
    var User = _a.User;
    return __assign(__assign({}, User), { status: status });
};
