import React from "react";
import { css } from "aphrodite";
import { tableStyles } from "./table.styles";
import { thingsToDoHeader } from "../../assets/base-data";
import TableBodyRow from "./subcomponents/table-body-row.subcomponent";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserThingsToDo } from "../../redux/user/user.selectors";

const Table = ({ headArray = thingsToDoHeader, bodyArray, ...otherProps }) => {
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
        {bodyArray.map((task, i) => (
          <TableBodyRow key={i} task={task} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = createStructuredSelector({
  bodyArray: selectUserThingsToDo,
});

export default connect(mapStateToProps)(Table);
