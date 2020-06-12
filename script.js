let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet: money,
    TimeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
    if (typeof (a) === "string" && typeof (b) === "string" && a !== null && b !== null && a !== "" && b !== null && a.length > 50){
        console.log("done");
        appData[a] = b;
    }else{
    }
}

appData.moneyPerDay = appData.budjet /34;


alert("Ежедневный бюджет: " + appData.moneyPerDay);

