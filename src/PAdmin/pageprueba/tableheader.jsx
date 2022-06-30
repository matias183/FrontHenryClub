import React from 'react'
import {Table,TableContainer, TableSortLabel,TableHead,TableCell,TableBody,TableRow, Modal, Button, TextField} from "@material-ui/core";

export default function TableHeader() {
  return (
 <>
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

 </>
  )
}

