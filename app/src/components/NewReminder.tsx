import React, { useState } from 'react'

interface AddReminderIn{
    addReminder:(title : string) => void;
}

function NewReminder({addReminder}:AddReminderIn): JSX.Element {
    
    const [title, settitle] = useState('')
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addReminder(title)
    }
  return (
        <form onSubmit={formSubmit} className="form-group p-3">
            <label>Title :</label>
            <input value={title} onChange={e => settitle(e.target.value)} className="form-control m-2" type="text" placeholder="type your note"/>
            <button className="btn btn-primary m-2">add note</button>
        </form>
  )
}

export default NewReminder