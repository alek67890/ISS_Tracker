import {NEXT_SPEED } from '../const';

export default (state = 0, action) => {
  switch (action.type) {
    case NEXT_SPEED:
      console.log(action.payload)
        let time = action.payload.timestamp - action.payload.firstTimestamps;
        time = time / 60 / 60;
        return action.payload.distance / time;
    default:
      return state;
  }
};
