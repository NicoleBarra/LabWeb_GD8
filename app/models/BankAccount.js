class BankAccount {
    constructor(current, history) {
        this.current = current;
        this.history = history; 
    }


getCurrent() {
    return this.current;
}

append(ammount) {
    if (ammount < 0) {
        return this.current;
    }
    else{
        this.current = this.current + ammount;
        this.history.push("append " + ammount);
        return this.current;
    }
} 

substract(ammount) {
    if (ammount < 0) {
        return this.current;
    }
    else{
        this.current = this.current - ammount;
        this.history.push("substract " + ammount);
        return this.current;
    }
} 

getHistory()  {
    return this.history;
}

merge(bankB) {
    if (bankB.getCurrent() < 0) {
        this.current = this.current + bankB.current;
    }
    else{
        this.current = this.current + bankB.current;
    }
    for(let value of bankB.getHistory()){
        this.history.push(value)
    }
}
}

module.exports = BankAccount; 