"use strict";
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
        this.titlet = "this is ts.....";
        var titlet = "sdfsdf";
        console.log("This is ts... ", titlet);
        this.titlet = "this is modified here....";
        this.m1("2", this.titlet);
    }
    A.prototype.m1 = function (varA, varB) {
    };
    return A;
}());
exports.A = A;
