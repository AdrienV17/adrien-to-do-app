import React from 'react';
import { css } from 'aphrodite';
import { tableBodyRowStyles } from './table-body-row.substyles';


const TableBodyRow = ({task,deleteTask}) => {
    return (
        <tr  className={css(tableBodyRowStyles.tBodyTr)}>
        <td className={css(tableBodyRowStyles.tBodyTd)}>
        <i onClick={()=>deleteTask(task)} className={`far fa-trash-alt ${css(tableBodyRowStyles.delete)}`}></i>              {task.thing.value}</td>
        <td className={css(tableBodyRowStyles.tBodyTd)}>
          {task.dueDate.value} - {task.time.value}
        </td>
        <td className={css(tableBodyRowStyles.tBodyTd)}>{task.status}</td>
      </tr>
     );
}
 
export default TableBodyRow;