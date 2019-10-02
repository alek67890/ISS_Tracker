import * as turf from '@turf/turf';
import {NEW_TIME_AND_DIST } from '../const';

export default (state = 0, action) => {
  switch (action.type) {
    case NEW_TIME_AND_DIST:
        let from = turf.point(action.payload.old_iss_position);
        let to = turf.point(action.payload.iss_position);
        return state + turf.distance(from, to);
    default:
      return state;
  }
};



// npm install @turf/distance

