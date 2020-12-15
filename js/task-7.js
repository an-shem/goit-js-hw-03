const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
let id = 0;

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    id += 1;
    return {
      id,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Снятие такой суммы не возможно, недостаточно средств.`);
      return;
    }
    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );
  },

  getBalance() {
    return console.log(`Текущий баланс: ${this.balance}`);
  },

  getTransactionDetails(id) {
    for (const obj of this.transactions) {
      if (obj.id === id) {
        console.log(obj);
        return obj;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const obj of this.transactions) {
      if (obj.type === type) {
        total += obj.amount;
      }
    }
    console.log(`Общая сумма ${type}: ${total}`);
    return total;
  },
};

//
// ПРОВЕРКА

account.deposit(15000);
console.table(account);

account.deposit(4000);
console.table(account);
account.getBalance();

account.withdraw(12000);
console.table(account);
account.getBalance();

console.table(account.transactions);

account.getTransactionDetails(2);

account.getTransactionTotal('deposit');
account.getTransactionTotal('withdraw');
console.table(account);
