
import {
  DO_USER,
  DO_USER_SUCCESS,
  DO_USER_ERROR,
  INIT, LOADING, SUCCESS, ERROR,
} from './constants';
import { Alert } from 'react-native'
import axios from 'axios';
import {  NasaServer } from '../utils'


/* Actions */
export const doUser = (credentials) => {
  debugger
  return {type: DO_USER, payload: credentials}
};

export const doUserError = (credentials) => {
  debugger
  return {type: DO_USER_ERROR, payload: credentials}
};

export const doUserComplete = () => {
    debugger
  return dispatch =>{
   return axios.get(`${NasaServer}` )
          
          .then((response) => {
            console.log(response,'api response')
            // console.log(req.body)
             return dispatch(doUser(response.data))
          })

          .catch((error) => {
            console.log(error,'api error')
            return dispatch(doUserError(error))
          })
}
}

