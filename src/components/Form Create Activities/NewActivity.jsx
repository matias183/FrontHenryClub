
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getSport, getTeacher, loginMember } from "../../redux/Actions/Action";
import validate from "../Form Create Activities/validate"
import s from './NewActivity.module.css';

export default function NewActivity() {

  const dispatch = useDispatch()

  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getTeacher())
    dispatch(getSport())
  }, [])

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(
    {

    });


  // const categorias = [{name:"infantil", categoryId: 1},
  //   {name:"recreativo", categoryId: 2},
  //   {name:"senior", categoryId: 3}

  // ];

  // const Sport =

  // [{name:"Tenis",  sportId: 1},
  //   {name:"Futbol",  sportId: 2},
  //   {name:"Hockey",  sportId: 3},
  //   {name:"Natacion",  sportId: 4},
  //   {name:"Pileta-Libre",  sportId: 5},

  // ];

  // console.log(Sport);

  // const  Instructor = [
  //   {name: "Carlos", teacherId: 1},
  //   {name: "Juan", teacherId: 2},
  //   {name: "Lara", teacherId: 3},
  // ]; dispatch(deleteComment(id))

  const [errors, setErrors] = useState({
  })

  const handleSelect = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    console.log(e.target.name)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const HandleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  };
  console.log(input)



  const handleSelectcategoryId = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      categoryId: [...new Set([...input.categoryId, e.target.value])],
    });

  };
  const handleSelectInstructor = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      teacherId: [...new Set([...input.teacherId, e.target.value])],
    });

  };
  const handleSelectSport = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      sportId: [...new Set([...input.sportId, e.target.value])],
    });
  };


  const handleTeacher = (e) => {
    e.preventDefault();
    let filtro = input.teacherId.filter((f) => f === e.target.value);
    setInput({
      ...input,
      teacherId: [...filtro],
    });

  };


  const handleSport = (e) => {
    e.preventDefault();
    let filtro = input.sportId.filter((f) => f === e.target.value);
    setInput({
      ...input,
      sportId: [...filtro],
    });

  };

  const handleCategory = (e) => {
    e.preventDefault();
    let filtro = input.categoryId.filter((f) => f === e.target.value);
    setInput({
      ...input,
      categoryId: [...filtro],
    });

  };



  const onSubmit = (e) => {
    e.preventDefault();
    if (input.start !== "" && input.days !== "" && input.finish !== "" &&
      input.fee !== "" && input.teacherId !== "" && input.sportId !== "" && input.description !== "" && input.categoryId !== "");
    else if (
      !Object.keys(errors).length) {
      setLoading(true);
      dispatch(loginMember())
      setInput({
        // days: "",
        // start: "",
        // finish: "",
        // fee: "",
        // teacherId: "",
        // sportId: "",
        // categoryId: "",
        // description: "",
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
            value={input.days}
            name="days"
            id="days"
            type="days"
            placeholder="Days of the activity"
            autoComplete="off"
          />
          {errors.days && <p className={s.errors}>{errors.days}</p>}

          <input className={s.input}
            onChange={HandleChange}
            value={input.start}
            name="start"
            id="start"
            type="time"
            placeholder="Start activity"
            autoComplete="off"
          />
          {errors.start && <p className={s.errors}>{errors.start}</p>}

          <input className={s.input}
            onChange={HandleChange}
            value={input.finish}
            name="finish"
            id="finish"
            type="time"
            placeholder="Finish activity"
            autoComplete="off"
          />
          {errors.finish && <p className={s.errors}>{errors.finish}</p>}

          <input className={s.input}
            onChange={HandleChange}
            value={input.fee}
            name="fee"
            id="fee"
            type="fee"
            placeholder="pesos fee"
            autoComplete="off"
          />
          {errors.fee && <p className={s.errors}>{errors.fee}</p>}

          <div>
            <select className={s.input} onChange={handleSelect} name="teacher">
              <option value=""> Select Instructor</option>
              {state.teacher &&
                state.teacher.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <select className={s.input} onChange={handleSelect} name="sport">
              <option value=""> Select Deporte</option>
              {state.sport &&
                state.sport.map((sport) => (
                  <option key={sport.id} value={sport.id}>
                    {sport.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <select className={s.input} onChange={handleSelect} name="category">
              <option value=""> Select Category</option>
              {state.category &&
                state.category.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>

          {/* <div>     
                <div >
              <label >Instructor</label>
              <select className={s.input} onChange={handleSelectInstructor}>
                <option value="" hidden> Select Instructor</option>
               
                {  input.teacherId.length<1?
             
               Instructor?.map((e) => { 
                return( <option key={e.teacherId} value={e.teacherId}>{e.name}</option>)
                })
               : <option value="" hidden> Select Instructor</option>
                }
                  </select>
                 </div>
                   {errors.teacherId && <p className={s.errors}>{errors.teacherId}</p>}  
                   </div>
                   <div>
                    
            {input.teacherId &&input.teacherId.map((e) => (
              <div  key={e.teacherId}>
                <button
                  key={e.teacherId}
                  type="button"
                  value={e.teacherId}
                  onClick={handleTeacher}
                >
                  {e.toUpperCase()}
                </button>
              </div>
            ))
            }
          </div>



                  <div>     
                <div >
              <label >Sport</label>
              <select className={s.input} onChange={handleSelectSport}>
                <option value="" hidden> Select Sport</option>
                { input.sportId.length<1?
             Sport?.map((e) => { 
              return (   <option key={e.sportId} value={e.sportId}>{e.name}</option>) }
             )
             : <option value="" hidden>Select Sport</option>
                }
                  </select>
                 </div>
                 {errors.sportId && <p className={s.errors}>{errors.sportId}</p>}
                   </div>

                   <div>
                    
                    {input.sportId &&input.sportId.map((e) => (
                      <div  key={e.sportId}>
                        <button
                          key={e.sportId}
                          type="button"
                          value={e.sportId}
                          onClick={handleSport}
                        >
                          {e.toUpperCase()}
                        </button>
                      </div>
                    ))
                    }
                  </div>




                   <div>     
                <div >
              <label >categoria</label>
              <select className={s.input} onChange={handleSelectcategoryId}>
                <option value="" hidden> Select categoria</option>
                {  input.categoryId.length<1?
               categorias?.map((e) => (
                <option key={e.categoryId} value={e.categoryId}>{e.name}</option>))
                : <option value="" hidden>Select categoria</option>
                }
                  </select>
                 </div>
                 {errors.categoryId && <p className={s.errors}>{errors.categoryId}</p>}
                   </div>

                   <div>
                    
                    {input.categoryId &&input.categoryId.map((e) => (
                      <div  key={e.categoryId}>
                        <button
                          key={e.categoryId}
                          type="button"
                          value={e.categoryId}
                          onClick={handleCategory}
                        >
                          {e.toUpperCase()}
                        </button>
                      </div>
                    ))
                    }
                  </div> */}



          <textarea className={s.input}
            onChange={HandleChange}
            value={input.description}
            name="description"
            id="description"
            type="text"
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


