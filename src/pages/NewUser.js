import React from 'react';
import NewUserComponent from '../components/UsersComponents/NewUserComponent/NewUserComponent';
import useFetch from '../Hooks/use-fetch';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const NewUser = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const { sendRequest } = useFetch();

   const formDataHandler = async (data) => {
      await sendRequest(
         {
            url: 'https://react-app-12cc2-default-rtdb.firebaseio.com/userData.json',
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: data
         }
      );

      dispatch(uiActions.showSnackbar(true));
      history.push('/users');
   }

   return (
      <>
         <NewUserComponent onSubmit={formDataHandler} />
      </>
   );
};

export default NewUser;