import React, { useState } from 'react';
import { css } from "aphrodite";
import { tableStyles } from "./table.styles";
import { thingsToDoHeader, dummyTasks } from "../../assets/base-data";
import TableBodyRow from './subcomponents/table-body-row.subcomponent';

const Table = ({
  headArray = thingsToDoHeader,
  bodyArray = dummyTasks,
  ...otherProps
}) => {
  const [thingsToDo,setThingsToDo] = useState(bodyArray)
  const deleteTask = (task) =>{
    const filteredArray = thingsToDo.filter(t=>t.thing!==task.thing)
    setThingsToDo(filteredArray)
  }
  
  return (
    <table className={css(tableStyles.table)}>
      <thead className={css(tableStyles.tHead)}>
        <tr className={css(tableStyles.tHeadTr)}>
          {headArray.map(({ name }, i) => (
            <td
              key={i}
              onClick={() =>
                otherProps.setIsVisible ? otherProps.setIsVisible(false) : null
              }
            >
              {name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {thingsToDo.map((task, i) => (
        <TableBodyRow key={i} task={task} deleteTask={deleteTask}/>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
