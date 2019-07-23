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
    savings: true
};

function chooseExpenses() {
    for (i=1 ; i<=2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        if ( typeof(a) === 'string' && typeof(a) != null && a != '' && typeof(b) === 'string' && typeof(b) != null && a != '' && a.length < 50 ){
            appData.expenses[a] = b;
        } else {
            i--
        }
    }
}
chooseExpenses();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Низкий уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 500) {
        console.log('Высокий уровень достатка')
    } else {
        console.log('Произошла ошибка');
    }
}

let question1, question2, question3;

function chooseOptExpenses() {                             // Функция для определения необязательных расходов
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Ваших сбережений " + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();


