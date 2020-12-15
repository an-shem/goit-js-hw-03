// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// let id = 0;

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     id += 1;
//     return {
//       id,
//       type,
//       amount,
//     };
//   },

//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   withdraw(amount) {
//     if (amount > balance) {
//       console.log(`Снятие такой суммы не возможно, недостаточно средств.`);
//       return;
//     }
//     this.transactions.puch(createTransaction(amount, DEPOSIT));
//   },

//   getBalance() {
//     console.log(`Текущий баланс: ${this.balance}`);
//   },

//   getTransactionDetails(id) {
//     for (const obj of transactions) {
//       if (obj.id === id) {
//         console.log(obj);
//         return obj;
//       }
//     }
//   },

//   getTransactionTotal(type) {
//     let total = 0;
//     for (const obj of transactions) {
//       if (obj.type === type) {
//         total += obj.amount;
//         console.log(`Общая сумма ${type}: ${total}`);
//         return total;
//       }
//     }
//   },
// };
// account.deposit(15000);
// console.table(account);

// account.deposit(4000);
// console.table(account);
