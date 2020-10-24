class BankAccount {
    constructor(current, history) {
        this.current = current;
        this.history = history;
    }
}

getCurrent() {
    return this.current;
}

append(ammount) {
    if (ammount < 0) {
        return current;
    }
    else{
        current = current + ammount;
        history.append("append " + ammount);
        return current;
    }
} 

substract(ammount) {
    if (ammount < 0) {
        return current;
    }
    else{
        current = current + ammount;
        history.append("append " + ammount);
        return current;
    }
} 

getHistory()  {
    return history;
}

mergeAccounts(bankB) {
    if (bankB.getCurrent() < 0) {
        this.current = this.current + bankB.current;
    }
    else{
        this.current = this.current + bankB.current;
    }
    this.history.append(bankB.getHistory());
}