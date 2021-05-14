let money, time;

function start(){
	money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null){
		money = +prompt("Ваш бюджет на месяц?", '')
	}
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
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
		
			if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
				console.log(a, b);
				appData.expenses[a] = b;
			} else {
				console.log("Vy vveli nekorrektnyje dannyje, poprobujte jesze raz");
				i--;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Budzet na dien = " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log("Minimalnyj uroven dostatka");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
			console.log("Srednij uroven dostatka");
		} else if(appData.moneyPerDay > 2000) {
			console.log("Vysokij uroven dostatka");
		} else {
			console.log("Proizoszla oszybka");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Kakova summa nakoplenij?");
				percent = +prompt("Pod kakoj procent?");
	
			appData.monthIncome = (save/100/12*percent).toFixed();
			alert("Dohod v mesiac s vaszego depozita: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let c = prompt("Введите не обязательную статью расходов в этом месяце", ''),
				d = prompt("Во сколько обойдется?", '');
		
			if( (typeof(c))=== 'string' && (typeof(c)) != null && (typeof(d)) != null
			&& c != '' && d != '' && c.length < 50) {
				console.log(c, d);
				appData.optionalExpenses[c] = d;
			} else {
				console.log("Vy vveli nekorrektnyje dannyje, poprobujte jesze raz");
				i--;
			}
		}
	},
	chooseIncome: function() {
		for (let i = 0; i < 1; i++) {
		let items = prompt("4to prineset dopolnitelnyj dohod? (Pere4islite 4erez zapiatuju)", "");

		if ( (typeof(items)) === "string" && (typeof(items)) != null && items != '') {
			appData.income = items.split(', ');
			appData.income.push(prompt("Mozet 4to-to jesz4e?"));
			appData.income.sort();
		} else {
			console.log("Vy vveli niekorrectnyje dannyje. Poprobujte jeszcze raz");
			i--;
		};
		console.log("Способы доп. заработка: ");
		appData.income.forEach(function(item, i, mass) {
			
			console.log( (i+1) + ': ' + item);
		});

		}
		

	},
};
  
appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel(); 
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();


for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + ": "+ appData[key]);
}

// for (let i = 0; i < 2; i++) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');

// 	if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
// 	&& a != '' && b != '' && a.length < 50) {
// 		console.log(a, b);
// 		appData.expenses[a] = b;
		
// 	} else {
// 		console.log("Vy vveli nekorrektnyje dannyje, poprobujte jesze raz");
// 		i--;
		
// 	}
// };

// let i = 0; 
// 	do {
// let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = prompt("Во сколько обойдется?", '');
	
// 		if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
// 		&& a != '' && b != '' && a.length < 50) {
// 			console.log(a, b);
// 			appData.expenses[a] = b;
			
// 		} else {
// 			console.log("Vy vveli nekorrektnyje dannyje, poprobujte jesze raz");
// 			i--;
// 		}
// 		i++;
// } while (i < 2) ;

// let i = 0;
// while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = prompt("Во сколько обойдется?", '');
// 	if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
// 		&& a != '' && b != '' && a.length < 50) {
// 			console.log(a, b);
// 			appData.expenses[a] = b;
			
// 		} else {
// 			console.log("Vy vveli nekorrektnyje dannyje, poprobujte jesze raz");
// 			i--;
// 		}
// 		i++;
// }








