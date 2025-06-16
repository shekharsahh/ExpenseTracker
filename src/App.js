import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "New Year",
    date: new Date(2024, 0, 1),
    price:1000,
  },
  {
    title: "Cookies",
    date: new Date(2024, 0, 11),
    price:400,
  },
  {
    title: "wifi bill",
    date: new Date(2024, 0, 24),
    price:700,
  },
  {
    title: "Petrol",
    date: new Date(2024, 0, 22),
    price:1500,
  },
  {
    title: "Groceries",
    date: new Date(2023, 0, 5),
    price: 300
  },
  {
    title: "Utility Bill",
    date: new Date(2023, 0, 15),
    price: 200
  },
  {
    title: "Dinner with Friends",
    date: new Date(2023, 0, 28),
    price: 600
  },
  {
    title: "Movie Tickets",
    date: new Date(2023, 1, 8),
    price: 200
  },
  {
    title: "Valentine's Day Gift",
    date: new Date(2023, 1, 14),
    price: 100
  },
  {
    title: "Monthly Subscription",
    date: new Date(2023, 1, 25),
    price: 150
  },
  {
    title: "New Clothes",
    date: new Date(2023, 2, 10),
    price: 400
  },
  {
    title: "Restaurant Dinner",
    date: new Date(2023, 2, 20),
    price: 250
  },
  {
    title: "Weekend Getaway",
    date: new Date(2023, 2, 30),
    price: 800
  },
  {
    title: "Electronics Purchase",
    date: new Date(2023, 3, 5),
    price: 1200
  },
  {
    title: "Gardening Supplies",
    date: new Date(2023, 3, 18),
    price: 100
  },
  {
    title: "Car Maintenance",
    date: new Date(2023, 3, 25),
    price: 300
  },
  {
    title: "Mother's Day Gift",
    date: new Date(2023, 4, 10),
    price: 50
  },
  {
    title: "Books",
    date: new Date(2023, 4, 22),
    price: 150
  },
  {
    title: "Home Decor",
    date: new Date(2023, 4, 30),
    price: 200
  },
  {
    title: "Utility Bill",
    date: new Date(2023, 5, 12),
    price: 180
  },
  {
    title: "Father's Day Gift",
    date: new Date(2023, 5, 18),
    price: 80
  },
  {
    title: "Summer Clothes",
    date: new Date(2023, 5, 28),
    price: 350
  },
  {
    title: "Picnic Supplies",
    date: new Date(2023, 6, 4),
    price: 100
  },
  {
    title: "Beach Trip",
    date: new Date(2023, 6, 15),
    price: 600
  },
  {
    title: "Ice Cream Treat",
    date: new Date(2023, 6, 29),
    price: 50
  },
  {
    title: "Back to School Shopping",
    date: new Date(2023, 7, 10),
    price: 500
  },
  {
    title: "School Supplies",
    date: new Date(2023, 7, 20),
    price: 150
  },
  {
    title: "Lunch with Colleagues",
    date: new Date(2023, 7, 30),
    price: 100
  },
  {
    title: "Labor Day BBQ",
    date: new Date(2023, 8, 5),
    price: 300
  },
  {
    title: "Charity Donation",
    date: new Date(2023, 8, 18),
    price: 50
  },
  {
    title: "Fitness Class",
    date: new Date(2023, 8, 25),
    price: 80
  },
  {
    title: "Halloween Costume",
    date: new Date(2023, 9, 10),
    price: 80
  },
  {
    title: "Pumpkin Patch Visit",
    date: new Date(2023, 9, 22),
    price: 20
  },
  {
    title: "Candy for Trick-or-Treaters",
    date: new Date(2023, 9, 30),
    price: 30
  },
  {
    title: "Thanksgiving Dinner",
    date: new Date(2023, 10, 15),
    price: 400
  },
  {
    title: "Travel Expenses",
    date: new Date(2023, 10, 25),
    price: 800
  },
  {
    title: "Christmas Decorations",
    date: new Date(2023, 11, 5),
    price: 200
  },
  {
    title: "Gift Shopping",
    date: new Date(2023, 11, 20),
    price: 600
  },
  {
    title: "New Year's Eve Party",
    date: new Date(2023, 11, 31),
    price: 300
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES) ;
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
