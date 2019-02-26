var money =  "Ваш бюджет на месяц?",
    time = "Введите дату в формате YYYY-MM-DD";

var appData = {
    moneyNow: money,
    timeData: time,
    savings: false,
    expenses:{},
    optionalExpenses:{},
    income:[]
};

let sum = prompt("Введите сумму расходов за этот месяц", '');

alert(sum / 30);