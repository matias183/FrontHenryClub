
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow, Modal, Button, TextField} from "@material-ui/core";
import {Edit, Delete} from "@material-ui/icons";
import {getMembers,deleteMember,createMember,updateMember } from "../../redux/Actions/Action";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

export default function Socios () {
  const styles =useStyles()
  const dispatch= useDispatch()
  const members = useSelector((state) => state.members);
  const [insertModal, setinsertModal]= useState (false);
  const [putModal, setputModal]= useState (false);
  const [deleteModal, setdeleteModal]= useState (false);

  const [input,setInput]= useState({
    name: "", surname: "", address: "", phone: "", email: "", username: "", dni: "", password: "",
  })
 
  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  const HandleChange = (e) => {
     e.preventDefault();
    const{name, value}=e.target;
    setInput({...input,[name]:value})
  };


  const CrearMember = () => {
    // dispatch(createMember())
    abricerrarMInsert()
 };

  const BorrarMember = (id) => {
    // dispatch(deleteMember(id));
    abricerrarMEliminar()
  };

  const EditarMember = (id) => {
    // dispatch(updateMember(id))
    abricerrarMEdit()
 };



 const abricerrarMInsert=() =>{
    setinsertModal(!insertModal)
  };
  const abricerrarMEdit=() =>{
    setputModal(!putModal)
  };

  const abricerrarMEliminar=() =>{
    setdeleteModal(!deleteModal)
  };

  const selectAction = (e, caso) => {
    setInput(e);
    (caso === "Editar")?abricerrarMEdit():abricerrarMEliminar()
   };

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>New User</h3>
      <TextField className={styles.inputMaterial} label="Name" name="name" onChange={HandleChange} />          
      <br />
        <TextField className={styles.inputMaterial} label="Surname" name="surname" onChange={HandleChange} />
      <br />
      <TextField className={styles.inputMaterial} label="Address" name="address" onChange={HandleChange} />
      <br />
      <TextField className={styles.inputMaterial} label="Phone" name="phone" onChange={HandleChange} />
      <br />
      <TextField className={styles.inputMaterial} label="Email" name="email" onChange={HandleChange} />          
      <br />
      <TextField className={styles.inputMaterial} label="UserName" name="username" onChange={HandleChange} />
      <br />
      <TextField className={styles.inputMaterial} label="Dni" name="dni" onChange={HandleChange} />
      <br />
      <TextField className={styles.inputMaterial} label="Password" name="password" onChange={HandleChange} />          
      <br />   
      <br />
      <div align="right">
        <Button color="primary" onClick={CrearMember} >Insertar</Button>
        <Button onClick={abricerrarMInsert} >Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Edit User</h3>
      <TextField  className={styles.inputMaterial} label="Id" name="id" onChange={HandleChange} value={input&&input.id} />
      <br />
      <TextField className={styles.inputMaterial} label="Name" name="name" onChange={HandleChange} value={input&&input.name} />          
      <br />
      <TextField className={styles.inputMaterial} label="UserName" name="username" onChange={HandleChange} value={input&&input.username} />


      <TextField className={styles.inputMaterial} label="Name" name="name" onChange={HandleChange} value={input&&input.name}/>          
      <br />
        <TextField className={styles.inputMaterial} label="Surname" name="surname" onChange={HandleChange}  value={input&&input.surname}/>
      <br />
      <TextField className={styles.inputMaterial} label="Address" name="address" onChange={HandleChange} value={input&&input.address} />
      <br />
      <TextField className={styles.inputMaterial} label="Phone" name="phone" onChange={HandleChange} value={input&&input.phone} />
      <br />
      <TextField className={styles.inputMaterial} label="Email" name="email" onChange={HandleChange}  value={input&&input.email}/>          
      <br />
      <TextField className={styles.inputMaterial} label="UserName" name="username" onChange={HandleChange} value={input&&input.username}/>
      <br />
      <TextField className={styles.inputMaterial} label="Dni" name="dni" onChange={HandleChange} value={input&&input.dni}/>
      <br />
      <TextField className={styles.inputMaterial} label="Password" name="password" onChange={HandleChange} value={input&&input.password}/>          
      <br />   


      <br /><br />
      <div align="right">
        <Button color="primary" onClick={EditarMember} >Editar</Button>
        <Button onClick={abricerrarMEdit} >Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
    <p>Estas seguro que deseas eliminar al socio <b>{input&&input.name}</b>?</p>
      <div align="right">
        <Button color="primary" onClick={BorrarMember} >SI</Button>
        <Button onClick={abricerrarMEliminar} >NO</Button>
      </div>
    </div>
  )
  

 
console.log(members)

  return (
    <>
    <br />
    <Button onClick={abricerrarMInsert}> Nuevo User</Button>
    <br />
    <br />
  <TableContainer>
<Table>
<TableHead>

<TableRow>
<TableCell>Name</TableCell>
<TableCell>surname</TableCell>
<TableCell>address</TableCell>
<TableCell>phone</TableCell>
<TableCell>email</TableCell>
<TableCell>username</TableCell>
<TableCell>dni</TableCell>
<TableCell>password</TableCell>
<TableCell>Acciones</TableCell>
</TableRow>

</TableHead>


<TableBody>
    {members.map( e=>(
      <TableRow key={e.id}> 
      <TableCell>{e.id}</TableCell>
      <TableCell>{e.name}</TableCell>
      <TableCell>{e.username}</TableCell>
      <TableCell>
        <Edit 
        className={styles.iconos} 
       onClick={()=>selectAction(e,"Editar")}
        />
      &nbsp;&nbsp;&nbsp; 
      <Delete className={styles.iconos} onClick={()=> selectAction( e,"Eliminar")}
      />
      </TableCell>
      </TableRow>
    )
    )}

</TableBody>

</Table>

  </TableContainer>
 
<Modal
open={insertModal}
onClose={abricerrarMInsert}
>{bodyInsertar}
</Modal>

<Modal
open={putModal}
onClose={abricerrarMEdit}
>{bodyEditar}
</Modal>

<Modal
open={deleteModal}
onClose={abricerrarMEliminar}
>{bodyEliminar}
</Modal>

    </>
  );

 };
    
