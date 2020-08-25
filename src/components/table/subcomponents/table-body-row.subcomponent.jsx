import React from "react";
import { css } from "aphrodite/no-important";
import { tableBodyRowStyles as tBDS } from "./table-body-row.substyles";
import { payloadAction, getMillisecondsDate } from "../../../assets/functions";
import { userTypes } from "../../../redux/user/user.types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserId } from "../../../redux/user/user.selectors";

const TableBodyRow = ({ task, userId }) => {
  const deleteTask = () =>
    payloadAction(userTypes.REMOVE_THING_TO_DO_START, {
      userId,
      thingToDo: task,
    });
  const isLate =
    getMillisecondsDate(task.dueDate.value, task.time.value) <
    new Date().getTime();
  const tableBodyRowStyles = tBDS(isLate);
  return (
    <tr className={css(tableBodyRowStyles.tBodyTr)}>
      <td className={css(tableBodyRowStyles.tBodyTd)}>
        <i
          onClick={deleteTask}
          className={`far fa-trash-alt ${css(tableBodyRowStyles.delete)}`}
        ></i>{" "}
        {task.thing.value}
      </td>
      <td className={css(tableBodyRowStyles.tBodyTd)}>
        {task.dueDate.value} 
      </td>
      <td className={css(tableBodyRowStyles.tBodyTd)}>{task.time.value}</td>
    </tr>
  );
};
const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
});
export default connect(mapStateToProps)(TableBodyRow);
