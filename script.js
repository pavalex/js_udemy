let money;
let time;
let expense_item;
let expense_item_two;
let cost;
let cost_two;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
expense_item = prompt("Введите обязательную статью расходов в этом месяце");
cost = prompt("Во сколько обойдется?");
expense_item_two = prompt("Введите обязательную статью расходов в этом месяце");
cost_two = prompt("Во сколько обойдется?");

const appData = {
  timeData: money,
  timeData: time,
  expenses: {
    expense_item: cost,
    expense_item_two: cost_two
  },
  optionalExpenses: {},
  income: [],
  saving: false
};

alert("Ваш бюджет на 1 день: " + money/30);

console.log(money, time, expense_item, cost, expense_item_two, cost_two);