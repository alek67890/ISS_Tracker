import { FETCH_FIRST_DATA, FETCH_DATA, NEW_TIME_AND_DIST, NEXT_SPEED } from '../const';
import issApi from '../../apis/issApi';

export const fetchFirstData = () => async dispatch => {
  const response = await issApi.get('/iss-now.json');

  dispatch({ type: FETCH_FIRST_DATA, payload: response.data });
};

export const fetchDataAndCal = () => async (dispatch, getState) => {
  await dispatch(fetchData());
  await dispatch(nextTimeAndDist());
  await dispatch(nextSpeed());
    
};

export const fetchData = () => async dispatch => {
  const response = await issApi.get('/iss-now.json');

  dispatch({ type: FETCH_DATA, payload: response.data });
};

export const nextTimeAndDist = () => async (dispatch, getState) => {
  dispatch({
    type: NEW_TIME_AND_DIST,
    payload: getState().data,
  });
};

export const nextSpeed = () => async (dispatch, getState) => {
  dispatch({
    type: NEXT_SPEED,
    payload: {
      firstTimestamps : getState().data.firstTimestamps,
      timestamp : getState().data.timestamp,
      distance: getState().distance,
    } 
    ,
  });
};

