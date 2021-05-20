let startBtn = document.getElementById('start'),

	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),

	btn = document.getElementsByTagName('button'),
	expensesItemBtn = btn[0],
	optionalExpensesBtn = btn[1],
	countBudgetBtn = btn[2],

	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

	chooseIncome = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;


startBtn.addEventListener('click', function () {

	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt("Ваш бюджет на месяц?", '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
	
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
			a != '' && b != '' && a.length < 50) {
			console.log(a, b);
			appData.expenses[a] = b;
			sum += +b;
		} else {
			console.log("Vy vveli nekorrektnyje dannyje, poprobujte jesze raz");
			i--;
		}
	}
	expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let c = optionalExpensesItem[i].value;

		if ((typeof (c)) === 'string' && (typeof (c)) != null && c != '' && c.length < 50) {
			console.log(c);
			appData.optionalExpenses[i] = c;
			optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
		}
	}
});

countBudgetBtn.addEventListener('click', function () {

	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Minimalnyj uroven dostatka";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Srednij uroven dostatka";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Vysokij uroven dostatka";
		} else {
			levelValue.textContent = "Proizoszla oszybka";
		}
	} else {
		dayBudgetValue.textContent = 'Proizoshla oshybka';
	}

});

//chooseIncome.addEventListener('change', function() {} // change - izmeniajet dannyje pri klike vne pola vvoda

chooseIncome.addEventListener('input', function () {
	let items = chooseIncome.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

chooseSum.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value;
		percent = +choosePercent.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
		appData.yearIncome = (sum / 100 * percent).toFixed(1);

		monthsavingsValue.textContent = appData.monthIncome;
		yearsavingsValue.textContent = appData.yearIncome;
	}
});

choosePercent.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value;
		percent = +choosePercent.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
		appData.yearIncome = (sum / 100 * percent).toFixed(1);

		monthsavingsValue.textContent = appData.monthIncome;
		yearsavingsValue.textContent = appData.yearIncome;
	}
});










let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};

// for (let key in appData) {
// 	console.log("Наша программа включает в себя данные: " + key + ": "+ appData[key]);
// }