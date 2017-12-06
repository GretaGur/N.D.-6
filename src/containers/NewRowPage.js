import React from 'react';
import NewRow from "../components/NewRow";


const NewRowPage = (props) => {

  return (
    <div>
      <NewRow data={props.data} id={props.dataTableRowId} addRowToData={props.addRowToData} />
    </div>
  );
};


export default NewRowPage;