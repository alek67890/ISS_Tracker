import { combineReducers } from 'redux';

import time from './time';
import data from './data';
import distance from './distance';
import speed from './speed';


export default combineReducers({
  time,
  data,
  distance,
  speed,
});
