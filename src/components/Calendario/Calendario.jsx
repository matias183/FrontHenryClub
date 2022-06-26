import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './Calendario.css'
// import Modal from 'react-bootstrap/Modal'
// import ModalTitle from 'react-bootstrap/ModalTitle'
// import ModalBody from 'react-bootstrap/ModalBody'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalFooter from 'react-bootstrap/ModalFooter'

export default function MyCalendar () {
    // si user.role === admi => (mostrar formulario para evento)
    const [myEvents, setMyEvents] = useState([])
    const [newEvent, setNewEvent] = useState({title: '', description: '', startTime: '', endTime: '', startRecur: '', endRecur: '', daysOfWeek: []})
    const [modal, setModal] = useState(false)
    const handleChangeInput = (e) => {
      if (e.target.name === 'daysOfWeek') {
        setNewEvent({
          ...newEvent,
          [e.target.name] : [...newEvent.daysOfWeek, Number(e.target.value)]
      })
      } else {
        setNewEvent({
            ...newEvent,
            [e.target.name] : e.target.value
        })
      
      }
    }

    const handleSubmit = () => {
        setMyEvents([...myEvents, newEvent])
    } 

    const handleChangeEvent = () => {
        setModal(true)
    }

    return (
        <div className='calendarioContainer'>
            <button onClick={handleChangeEvent}>Crear Evento</button>
            <div className='evento' style={{display: !modal ? 'none' : ''}}>
                <p>Crea un evento</p>
                <form className='formCalendario'>
                    <input type="text" name='title' value={newEvent.title} onChange={handleChangeInput} placeholder="Nombre del evento"/>
                    <input type='text' name='description' value={newEvent.description} onChange={handleChangeInput} placeholder="Descripción"/>
                    <input type={'time'} name='startTime' value={newEvent.startTime} onChange={handleChangeInput} />
                    <input type={'time'} name='endTime' value={newEvent.endTime} onChange={handleChangeInput} />
                    <input type={'date'} name='startRecur' value={newEvent.startRecur} onChange={handleChangeInput} />
                    <input type={'date'} name='endRecur' value={newEvent.endRecur} onChange={handleChangeInput} />
                    <select name="daysOfWeek" id="daysOfWeek" onChange={handleChangeInput}>
                      {[
                        {Label: 'Lunes', value: 1}, 
                        {Label: 'Martes', value: 2}, 
                        {Label: 'Miercoles', value: 3},
                        {Label: 'Jueves', value: 4},
                        {Label: 'Viernes', value: 5},
                        {Label: 'Sábado', value: 6},
                        {Label: 'Domingo', value: 7}]
                        .map(day => (
                        <option key={day.value} value={day.value}>{day.Label}</option>
                      ))}
                    </select>
                </form>
                <button type='submit' onClick={handleSubmit}>Agregar Evento</button>
            </div>
            <div className='calendario'>
                <FullCalendar
                    plugins = {[ dayGridPlugin, timeGridPlugin, listPlugin ]}
                    initialView="dayGridMonth"
                    locale={'es'}
                    headerToolbar = {{
                        left: 'prev, next, today',
                        center: 'title',
                        right: 'dayGridMonth, timeGridWeek, listWeek'
                    }}
                    events={myEvents}
                />
            </div>
        </div>
    )
}

