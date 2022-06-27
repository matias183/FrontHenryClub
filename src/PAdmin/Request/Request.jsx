
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow, Modal, Button} from "@material-ui/core";
import {Edit, Delete} from "@material-ui/icons";
import {getMembers,deleteMember} from "../../redux/Actions/Action";

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

export default function Request () {
  const styles =useStyles()
  const dispatch= useDispatch()
  const members = useSelector((state) => state.members);
  const [deleteModal, setdeleteModal]= useState (false);


  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);



  const BorrarMember = (id) => {
    // dispatch(deleteMember(id));
    abricerrarMEliminar()
  };

  const abricerrarMEliminar=() =>{
    setdeleteModal(!deleteModal)
  };


  const bodyEliminar=(
    <div className={styles.modal}>
    <p>Estas seguro que deseas eliminar la noticia ?</p>
      <div align="right">
        <Button color="primary" onClick={BorrarMember} >SI</Button>
        <Button onClick={abricerrarMEliminar} >NO</Button>
      </div>
    </div>
  )
  
  return (
    <>
     <br />
     <p> REQUEST</p>
    <br />
  <TableContainer>
<Table>
<TableHead>

<TableRow>
<TableCell>Id</TableCell>
<TableCell>Title</TableCell>
<TableCell>Comments</TableCell>
<TableCell>Eliminar</TableCell>
</TableRow>

</TableHead>

<TableBody>
    {members.map( e=>(
      <TableRow key={e.id}> 
      <TableCell>{e.id}</TableCell>
      <TableCell>{e.name}</TableCell>
      <TableCell>{e.username}</TableCell>
      <TableCell>
      <Delete className={styles.iconos} onClick={()=> abricerrarMEliminar()}
      />
      </TableCell>
      </TableRow>
    )
    )}

</TableBody>

</Table>

  </TableContainer>
<Modal
open={deleteModal}
onClose={abricerrarMEliminar}
>{bodyEliminar}
</Modal>

    </>
  );

 };
    
