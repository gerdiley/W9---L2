// class Son Account
class SonAccount {
    static counter = 0;

    balanceInit: number;
    constructor(_balanceInit: number = 0) {
        this.balanceInit = _balanceInit;
        SonAccount.counter++
    }

    oneDeposit(deposit: number): number {
        this.balanceInit = this.balanceInit + deposit;
        return deposit;
    }
    oneWithDraw(withDraw: number): number {
        this.balanceInit = this.balanceInit - withDraw;
        return withDraw;
    }
    fixedDeposit(): number {
        this.oneDeposit(100);
        return 100;
    }
    fixedWithDraw(): number {
        this.oneWithDraw(100);
        return 100;
    }

}
//   class Mother Account 
class MotherAccount extends SonAccount {
    constructor(balanceInit: number = 0) {
        super(balanceInit)
    }

    oneDeposit(deposit: number): number {
        this.balanceInit = this.balanceInit + deposit + this.addInterest(deposit);
        return deposit + this.addInterest(deposit);
    }
    oneWithDraw(withDraw: number): number {
        this.balanceInit = this.balanceInit - withDraw - this.addInterest(withDraw);
        return withDraw - this.addInterest(withDraw);
    }

    addInterest(deposit: number): number {
        return ((deposit * 10) / 100);
    }

}



var newSonAccount = new SonAccount();

// Son account movements

console.log(`Son Balance = ${newSonAccount.balanceInit}`);

console.log(`Movement 1 - Son Deposit  = ${newSonAccount.oneDeposit(20)}`);
console.log(`Son Balance 1 = ${newSonAccount.balanceInit}`);

console.log(`Movement 2 - Son Deposit  = ${newSonAccount.oneDeposit(30)}`);
console.log(`Son Balance 2 = ${newSonAccount.balanceInit}`);

console.log(`Movement 3 - Son Withdraw  = ${newSonAccount.oneWithDraw(20)}`);
console.log(`Balance 3 = ${newSonAccount.balanceInit}`);

console.log(`Movement 4 - Son Withdraw = ${newSonAccount.oneWithDraw(30)}`);
console.log(`Balance 4 = ${newSonAccount.balanceInit}`);


var newMotherAccount = new MotherAccount();

// Mother account movements

console.log(`Mother Balance = ${newMotherAccount.balanceInit}`);

console.log(`Movement 1 - Mother Deposit  = ${newMotherAccount.oneDeposit(20)}`);
console.log(`Mother Balance 1 = ${newMotherAccount.balanceInit}`);

console.log(`Movement 2 - Mother Deposit  = ${newMotherAccount.oneDeposit(30)}`);
console.log(`Mother Balance 2 = ${newMotherAccount.balanceInit}`);

console.log(`Movement 3 - Mother Withdraw  = ${newMotherAccount.oneWithDraw(20)}`);
console.log(`Balance 3 = ${newMotherAccount.balanceInit}`);

console.log(`Movement 4 - Mother Withdraw = ${newMotherAccount.oneWithDraw(30)}`);
console.log(`Balance 4 = ${newMotherAccount.balanceInit}`);


// Quante istanze ho creato
console.log(SonAccount.counter);