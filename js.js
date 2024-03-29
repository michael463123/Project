let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');    
    while(isNaN(money) || money == '' || money == null) {
        alert('Введите число');
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
start();


let appData = {
    budget: money,     
    expenses: {}, 
    optionalExpenses: {}, 
    income: [],
    timeData: time, 
    savings: true,
    chooseExpenses: function() {
        for (i=1 ; i<=2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
            if ( typeof(a) === 'string' && typeof(a) != null && a != '' && typeof(b) === 'string' && typeof(b) != null && a != '' && a.length < 50 ){
                appData.expenses[a] = b;
            } else {
                i--
            }
        }    
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);    
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 500) {
            console.log('Высокий уровень достатка')
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Ваших сбережений " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let opt = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = opt;
        } 
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) === 'string' && typeof(items) != null && items != '') {
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        }else{
            alert('Введите корректные данные');
            appData.chooseIncome();
        }
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

appData.chooseIncome();




