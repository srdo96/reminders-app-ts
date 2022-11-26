import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";

// const reminder: Reminder[] = [
//   {
//     id: 1,
//     title: "Reminder1",
//   },
// ];

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: "Reminder1",
    },
  ]);
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
