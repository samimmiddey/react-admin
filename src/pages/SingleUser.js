import React, { useState, useEffect } from 'react';
import SingleUserComponent from '../components/UsersComponents/SingleUserComponent/SingleUserComponent';
import useFetch from '../Hooks/use-fetch';
import Progress from '../components/UI/Progress';

const SingleUser = () => {
   const [userData, setUserData] = useState([]);
   const [tableData, setTableData] = useState([]);

   const {
      isLoading: isUserLoading,
      error: isUserError,
      sendRequest: sendUserDataRequest
   } = useFetch();

   const {
      isLoading: isTableLoading,
      error: isTableError,
      sendRequest: sendTableDataRequest
   } = useFetch();

   // User Data
   useEffect(() => {
      const transformUserData = (data) => {
         const loadedData = [];
         for (const key in data) {
            loadedData.push({
               id: data[key].id,
               firstName: data[key].firstName,
               lastName: data[key].lastName,
               age: data[key].age,
               status: data[key].status,
               img: data[key].img,
               email: data[key].email
            });
         }
         setUserData(loadedData);
      };

      sendUserDataRequest({ url: 'https://react-app-12cc2-default-rtdb.firebaseio.com/userData.json' }, transformUserData);
      return () => {
         setUserData({});
      };
   }, [sendUserDataRequest]);

   // Table Data
   useEffect(() => {
      const transformTableData = (data) => {
         setTableData(data);
      };
      sendTableDataRequest({ url: 'https://react-app-12cc2-default-rtdb.firebaseio.com/data.json' }, transformTableData);
      return () => {
         setTableData({});
      };
   }, [sendTableDataRequest]);

   const isLoading = isUserLoading && isTableLoading;
   const isError = isUserError && isTableError;

   const template = (
      <>
         <SingleUserComponent
            userData={userData}
            tableData={tableData}
         />
      </>
   );

   return (
      <>
         {isLoading && <Progress />}
         {!isLoading && template}
         {isError && <p>Could not fetch data!</p>}
      </>
   );
};

export default SingleUser;