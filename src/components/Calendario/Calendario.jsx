import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './Calendario.css'
import { useDispatch, useSelector } from 'react-redux';
import { getSport, postEvento } from '../../redux/Actions/Action';
// import Modal from 'react-bootstrap/Modal'
// import ModalTitle from 'react-bootstrap/ModalTitle'
// import ModalBody from 'react-bootstrap/ModalBody'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalFooter from 'react-bootstrap/ModalFooter'

export default function MyCalendar () {
  // const sport = [
  //   {
  //     "id": 1,
  //     "name": "Futbol"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Natacion"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Hockey"
  //   }
  // ]
    // si user.role === admi => (mostrar formulario para evento)
    const sport = useSelector(state => state.sport)
    console.log(sport)
    const [myEvents, setMyEvents] = useState([])
    const dispatch = useDispatch()
    const [newEvent, setNewEvent] = useState({title: '', startTime: '', endTime: '', startRecur: '', endRecur: '', calendarId: 0, daysOfWeek: []})
    const [modal, setModal] = useState(false)

    useEffect(() => {
      dispatch(getSport())
    }, [dispatch])

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

    const handleSubmit2 = (e) => {
      e.preventDefault()
      const eventNew = {
        title: newEvent.title, 
        startTime: newEvent.startTime, 
        endTime: newEvent.endTime, 
        startRecur: newEvent.startRecur, 
        endRecur: newEvent.endRecur, 
        calendarId: newEvent.calendarId,
        daysOfWeek: newEvent.daysOfWeek
      }
      dispatch(postEvento(eventNew))
      alert('Evento Creado')
      setNewEvent({
        title: '',  
        startTime: '', 
        endTime: '', 
        startRecur: '', 
        endRecur: '', 
        calendarId: 0,
        daysOfWeek: []
      })
    }
    const handleSelectSport = (e) => {
        setNewEvent({
          ...newEvent,
          calendarId : e.target.value
        })
    }
    

    return (
        <div className='calendarioContainer'>
            <button onClick={handleChangeEvent}>Crear Evento</button>
            <div className='evento' style={{display: !modal ? 'none' : ''}}>
                <p>Crea un evento</p>
                <form className='formCalendario' onSubmit={e => handleSubmit2(e)}>
                    <input type="text" name='title' value={newEvent.title} onChange={handleChangeInput} placeholder="Nombre del evento"/>
                    <input type={'time'} name='startTime' value={newEvent.startTime} onChange={handleChangeInput} />
                    <input type={'time'} name='endTime' value={newEvent.endTime} onChange={handleChangeInput} />
                    <input type={'date'} name='startRecur' value={newEvent.startRecur} onChange={handleChangeInput} />
                    <input type={'date'} name='endRecur' value={newEvent.endRecur} onChange={handleChangeInput} />
                    <select name="calendarId" id="calendarId" onChange={(e) => handleSelectSport(e)}>
                      <option value=''>Elegir Actividad</option>
                      {
                        sport.lenght !== 0 ? sport?.map(e => (
                          <option key={e.id} value={e.id}>{e.name}</option>
                        ))
                        : null
                      }
                    </select>
                    <select name="daysOfWeek" id="daysOfWeek" onChange={handleChangeInput}>
                      <option value=''>Días de la semana</option>
                      {[
                        {Label: 'Lunes', value: 1}, 
                        {Label: 'Martes', value: 2}, 
                        {Label: 'Miercoles', value: 3},
                        {Label: 'Jueves', value: 4},
                        {Label: 'Viernes', value: 5},
                        {Label: 'Sábado', value: 6},
                        {Label: 'Domingo', value: 7},]
                        .map(day => (
                        <option key={day.value} value={day.value}>{day.Label}</option>
                      ))}
                    </select>
                    <div className='diasSemanales'>
                      {
                        newEvent.daysOfWeek.length > 0 && newEvent.daysOfWeek?.map((e) => (
                          (e === 1) ?
                          <div>
                            Lunes
                          </div>
                          : 
                          (e === 2) ?
                          <div>
                            Martes
                          </div>
                          : (e === 3) ?
                          <div>
                            Miercoles
                          </div>
                          : (e === 4) ?
                          <div>
                            Jueves
                          </div>
                          : (e === 5) ?
                          <div>
                            Viernes
                          </div>
                          : (e === 6) ?
                          <div>
                            Sábados
                          </div>
                          : (e === 7) ?
                          <div>
                            Domingo
                          </div>
                          : <div>Días de la semana</div>
                        ))
                      }
                    </div>
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
