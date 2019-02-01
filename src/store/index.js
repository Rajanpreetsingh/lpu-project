import {combineReducers} from 'redux';

import { userStore } from './nasa/reducer'

export const rootReducer = combineReducers(
    {
    userStore}
)