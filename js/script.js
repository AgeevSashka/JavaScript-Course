'use strict';
let money , time;

let start = function() {
    money =  +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while(isNaN(money) || typeof(money) == 'string' || money == ''){
        money =  +prompt("Ваш бюджет на месяц?", '');
    }
};

start();

var appData = {
    budget: money,
    timeData: time,
    savings: true,
    expenses:{},
    optionalExpenses:{},
    income:[]
};




let chooseExpenses = function() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется", '');
    
    
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            console.log('done');
        } else {
    
        }
    }
};
chooseExpenses();

let detectDayBudget = function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert('Ежедневный бюджет ' + appData.moneyPerDay + 'p');
}  
detectDayBudget();


function detectLevel() {                           
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings ==  true) {
        var save = +prompt('Кааова сумма накоплений'),
            percent = +prompt('Под какой процент');
    }

    appData.monthIncome = save/100/12*percent;
    alert('Доход в месяц с вашео депозита' + appData.monthIncome);
};

checkSavings();


function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let questionOptExpenses = +prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = questionOptExpenses;
    } 
}
chooseOptExpenses();
console.log(appData)












// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется", '');
//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length < 50) {
//     appData.expenses[a] = b;
//     console.log('done');
//     } else {
//         console.log ("bad result");
//         i--;
//     }
    
//     i++; 
// } while(i < 2);
// while(i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется", '');
//         if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//         console.log('done');
//         } else {

//         }
        
//         i++;
// };
// 