import { useState, useEffect } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/ReminderModel'
import axios from 'axios'
import NewReminder from './components/NewReminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    axios.get<Reminder[]>('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setReminders(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const removeReminder = (id: number) => {
    const filtered = reminders.filter(reminder => reminder.id !== id);
    setReminders(filtered);
  };

  const addReminder = (title: string) => {
    axios.post<Reminder>('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(response => {
        setReminders([response.data,...reminders]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <NewReminder addReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </>
  );
}

export default App;
