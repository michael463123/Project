let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,     
    expenses: {}, 
    optionalExpenses: {}, 
    income: [],
    timeData: time, 
    savings: false
};

for (i=1 ; i<=2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    if ( typeof(a) === 'string' && typeof(a) != null && a != '' && typeof(b) === 'string' && typeof(b) != null && a != '' && a.length < 50 ){
        appData.expenses[a] = b;
    } else {
        i--
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Низкий уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 500) {
    console.log('Высокий уровень достатка')
} else {
    console.log('Произошла ошибка');
}



