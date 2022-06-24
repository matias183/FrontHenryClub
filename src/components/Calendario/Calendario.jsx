import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './Calendario.css'
import Modal from 'react-bootstrap/Modal'
// import ModalTitle from 'react-bootstrap/ModalTitle'
// import ModalBody from 'react-bootstrap/ModalBody'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalFooter from 'react-bootstrap/ModalFooter'


function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
            <button variant="primary">Understood</button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

// function RepetirEvento() {
    
// }

export default function MyCalendar () {
    // si user.role === admi => (mostrar formulario para evento)
    const [myEvents, setMyEvents] = useState([])
    const [newEvent, setNewEvent] = useState({title: '', description: '', time: '', date: ''})
    const [modal, setModal] = useState(false)
    const handleChangeInput = (e) => {
        setNewEvent({
            ...newEvent,
            [e.target.name] : e.target.value
        })
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
                    <input type={'time'} name='time' value={newEvent.time} onChange={handleChangeInput} />
                    <input type={'date'} name='date' value={newEvent.date} onChange={handleChangeInput} />
                </form>
                <button type='submit' onClick={handleSubmit}>Agregar Evento</button>
                <button>Repetir Evento</button>
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

