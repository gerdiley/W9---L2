var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Son Account
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 0; }
        this.balanceInit = _balanceInit;
        SonAccount.counter++;
    }
    SonAccount.prototype.oneDeposit = function (deposit) {
        this.balanceInit = this.balanceInit + deposit;
        return deposit;
    };
    SonAccount.prototype.oneWithDraw = function (withDraw) {
        this.balanceInit = this.balanceInit - withDraw;
        return withDraw;
    };
    SonAccount.prototype.fixedDeposit = function () {
        this.oneDeposit(100);
        return 100;
    };
    SonAccount.prototype.fixedWithDraw = function () {
        this.oneWithDraw(100);
        return 100;
    };
    SonAccount.counter = 0;
    return SonAccount;
}());
//   class Mother Account 
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        if (balanceInit === void 0) { balanceInit = 0; }
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.oneDeposit = function (deposit) {
        this.balanceInit = this.balanceInit + deposit + this.addInterest(deposit);
        return deposit + this.addInterest(deposit);
    };
    MotherAccount.prototype.oneWithDraw = function (withDraw) {
        this.balanceInit = this.balanceInit - withDraw - this.addInterest(withDraw);
        return withDraw - this.addInterest(withDraw);
    };
    MotherAccount.prototype.addInterest = function (deposit) {
        return ((deposit * 10) / 100);
    };
    return MotherAccount;
}(SonAccount));
var newSonAccount = new SonAccount();
// Son account movements
console.log("Son Balance = ".concat(newSonAccount.balanceInit));
console.log("Movement 1 - Son Deposit  = ".concat(newSonAccount.oneDeposit(20)));
console.log("Son Balance 1 = ".concat(newSonAccount.balanceInit));
console.log("Movement 2 - Son Deposit  = ".concat(newSonAccount.oneDeposit(30)));
console.log("Son Balance 2 = ".concat(newSonAccount.balanceInit));
console.log("Movement 3 - Son Withdraw  = ".concat(newSonAccount.oneWithDraw(20)));
console.log("Balance 3 = ".concat(newSonAccount.balanceInit));
console.log("Movement 4 - Son Withdraw = ".concat(newSonAccount.oneWithDraw(30)));
console.log("Balance 4 = ".concat(newSonAccount.balanceInit));
var newMotherAccount = new MotherAccount();
// Mother account movements
console.log("Mother Balance = ".concat(newMotherAccount.balanceInit));
console.log("Movement 1 - Mother Deposit  = ".concat(newMotherAccount.oneDeposit(20)));
console.log("Mother Balance 1 = ".concat(newMotherAccount.balanceInit));
console.log("Movement 2 - Mother Deposit  = ".concat(newMotherAccount.oneDeposit(30)));
console.log("Mother Balance 2 = ".concat(newMotherAccount.balanceInit));
console.log("Movement 3 - Mother Withdraw  = ".concat(newMotherAccount.oneWithDraw(20)));
console.log("Balance 3 = ".concat(newMotherAccount.balanceInit));
console.log("Movement 4 - Mother Withdraw = ".concat(newMotherAccount.oneWithDraw(30)));
console.log("Balance 4 = ".concat(newMotherAccount.balanceInit));
// Quante istanze ho creato
console.log(SonAccount.counter);
