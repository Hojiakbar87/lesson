let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    for (;;) {
        if (isNaN(money) || money == "" || money == null){
            money = +prompt("Ваш бюджет на месяц?", "");
            continue;
        }
        break;

    }
}

start();

let appData = {
    budjet: money,
    TimeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function chooseOptExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется?", "");
        if (typeof (a) == "string" && typeof (b) == "string" && a != null && b != null && a != "" && b != null && a.length > 50) {
            console.log("done");
            appData[a] = b;
        } else {
        }
    }
}

chooseOptExpenses();


(appData.moneyPerDay = appData.budjet / 30).toFixed(1);


alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровен доставка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средный уровен доставка");
} else {
    console.log("Призошла ошибка");
}

function checkSaving() {
    if (appData.savings == false){

    }

}