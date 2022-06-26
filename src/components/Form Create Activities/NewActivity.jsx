
  
  import React, { useState } from "react";
  import {useDispatch} from "react-redux";
  import {loginMember} from "../../redux/Actions/Action";
  import {useLocalStorage} from "../../custom/useLocalStorage"
  import validate from "../Form Create Activities/validate"
  import s from './NewActivity.module.css';
  
  export default function NewActivity() {
    const dispatch= useDispatch()
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useLocalStorage("input",
     { name: "",
     days: "",
     hours:"",
     fee: "",
     instructor: "",
     location: "",
     maxCapacity:"",
     description: "",
    });
    const{name,days,hours,fee, instructor,location,maxCapacity,description} =input   
    const [errors, setErrors]=useState({})
  
    const HandleChange = (e) => {
      e.preventDefault();
      setInput({ 
        ...input,
         [e.target.name]: e.target.value });
         setErrors( validate({ 
          ...input,
           [e.target.name]: e.target.value }));
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      if (name !== "" && days !== "" && hours !== "" && fee !== ""&& location !== ""&& maxCapacity !== ""&& description !== "");
      else if( 
        !Object.keys(errors).length )
      {
       setLoading(true);
       dispatch(loginMember())
        setInput({ name: "",
        days: "",
        hours:"",
        fee: "",
        instructor: "",
        location: "",
        maxCapacity:"",
        description: "",
       });
        setLoading(false);
      }
    };
  
    return (
      <div className={s.new}>
        <div className={s.wrapper}>
            <div className={s.loginTitle2}> <h3 >Create New Activity</h3> </div>
          <form className={s.Form} onSubmit={onSubmit}>

                <input className={s.input}
                  onChange={HandleChange}
                  value={name}
                  name="name"
                  id="name"
                  type="name"
                  placeholder="Name Activity"
                  autoComplete="off"
                />
            {errors.name && <p className={s.errors}>{errors.name}</p>}
                <input className={s.input}
                  onChange={HandleChange}
                  value={days}
                  name="days"
                  id="days"
                  type="days"
                  placeholder="Days of the activity"
                  autoComplete="off"
                />
                   {errors.days && <p className={s.errors}>{errors.days}</p>}
                  <input className={s.input}
                  onChange={HandleChange}
                  value={hours}
                  name="hours"
                  id="hours"
                  type="hours"
                  placeholder="Hours of the activity"
                  autoComplete="off"
                />
                   {errors.hours && <p className={s.errors}>{errors.hours}</p>}
                  <input className={s.input}
                  onChange={HandleChange}
                  value={fee}
                  name="fee"
                  id="fee"
                  type="fee"
                  placeholder="pesos fee"
                  autoComplete="off"
                />
                   {errors.fee && <p className={s.errors}>{errors.fee}</p>}


                   <input className={s.input}
                  onChange={HandleChange}
                  value={instructor}
                  name="instructor"
                  id="instructor"
                  type="instructor"
                  placeholder=" designated instructor"
                  autoComplete="off"
                />
                   {errors.instructor && <p className={s.errors}>{errors.instructor}</p>}

                <input className={s.input}
                  onChange={HandleChange}
                  value={ location}
                  name=" location"
                  id=" location"
                  type=" location"
                  placeholder=" location"
                  autoComplete="off"
                />
                   {errors.location && <p className={s.errors}>{errors.location}</p>}
                <input className={s.input}
                  onChange={HandleChange}
                  value={ maxCapacity}
                  name=" maxCapacity"
                  id=" maxCapacity"
                  type=" maxCapacity"
                  placeholder=" maxCapacity for Activity"
                  autoComplete="off"
                />
                   {errors.maxCapacity && <p className={s.errors}>{errors.maxCapacity}</p>}
                 <input className={s.input}
                  onChange={HandleChange}
                  value={ description}
                  name=" description"
                  id=" description"
                  type=" description"
                  placeholder=" Description for Activity"
                  autoComplete="off"
                />
                   {errors.description && <p className={s.errors}>{errors.description}</p>}
            <button className={s.submit} type="submit">{loading ? "Cargando..." : "Crear"}</button>
          </form>
        </div>
      </div>
    );
  }
  

