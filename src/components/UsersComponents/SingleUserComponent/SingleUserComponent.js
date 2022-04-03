import React from 'react';
import SingleUserCard from './SingleUserCard';
import SingleUserTable from './SingleUserTable';

const SingleUserComponent = (props) => {
   return (
      <>
         <SingleUserCard userData={props.userData} />
         <SingleUserTable tableData={props.tableData} />
      </>
   );
};

export default SingleUserComponent;