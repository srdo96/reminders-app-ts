import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
// const reminder: Reminder[] = [
//   {
//     id: 1,
//     title: "Reminder1",
//   },
// ];

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminder();
  }, []);

  const loadReminder = async () => {
    const reminder = await reminderService.getReminder();
    setReminders(reminder);
  };
  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };
  return (
    <div className="App">
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
