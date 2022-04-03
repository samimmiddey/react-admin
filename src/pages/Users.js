import React, { useState, useEffect } from 'react';
import UserComponent from '../components/UsersComponents/UserComponent';
import useFetch from '../Hooks/use-fetch';
import Progress from '../components/UI/Progress';
import { useSelector } from 'react-redux';
import SuccessSnakcbar from '../components/UI/Snackbar';

const Users = () => {
   const show = useSelector(state => state.ui.showSuccess);
   const [userData, setUserData] = useState([]);

   const {
      isLoading: isUserListLoading,
      error: isUserListError,
      sendRequest: sendUserDataRequest
   } = useFetch();

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
   }, [sendUserDataRequest]);

   const component = (
      <>
         {show && <SuccessSnakcbar />}
         <UserComponent rows={userData} />
      </>
   );

   return (
      <>
         {isUserListLoading && <Progress />}
         {!isUserListLoading && component}
         {isUserListError && <p>Could not fetch data!</p>}
      </>
   );
};

export default Users;