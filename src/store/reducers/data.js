import { FETCH_FIRST_DATA, FETCH_DATA } from '../const';
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      action.payload.old_iss_position = state.iss_position;
      action.payload.iss_position = cordsObjToArr(action.payload.iss_position);
      action.payload.firstTimestamps = state.firstTimestamps;
      return action.payload;
    case FETCH_FIRST_DATA:
        action.payload.old_iss_position = cordsObjToArr(action.payload.iss_position);
        action.payload.iss_position = cordsObjToArr(action.payload.iss_position);
        action.payload.firstTimestamps = action.payload.timestamp;
        return action.payload;
    default:
      return state;
  }
};

function cordsObjToArr(data){
  return [Number(data.longitude), Number(data.latitude)];
}
