import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './Calendario.css'

export default function MyCalendar () {
    // si user.role === admi => (mostrar formulario para evento)
    const [myEvents, setMyEvents] = useState([{ title: 'Clase 1', description: 'Fútbol', houres: '14:20', date: '2022-06-24' }])
    const handleChangeInput = (e) => {
        setMyEvents({
            ...myEvents,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className='calendarioContainer'>
            <div>
                <p>Crea un evento</p>
                <form className='formCalendario'>
                    <input type="text" name='title' value={myEvents.title} onChange={handleChangeInput} placeholder="Nombre del evento"/>
                    <input type='text' name='description' value={myEvents.description} onChange={handleChangeInput} placeholder="Descripción"/>
                    <input type={'time'} name='time' value={myEvents.time} onChange={handleChangeInput} />
                    <input type={'date'} name='date' value={myEvents.date} onChange={handleChangeInput} />
                </form>
                <button type='submit'>Agregar Evento</button>
            </div>
            <FullCalendar
                plugins = {[ dayGridPlugin, timeGridPlugin, listPlugin ]}
                initialView="dayGridMonth"
                headerToolbar = {{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,listWeek'
                }}
                events={myEvents}
            />
        </div>
    )
}

