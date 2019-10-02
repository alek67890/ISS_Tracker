import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import fromUnixTime from 'date-fns/fromUnixTime'
import {NEW_TIME_AND_DIST } from '../const';

export default (state = "", action) => {
  switch (action.type) {
    case NEW_TIME_AND_DIST:
        return formatDistanceStrict(fromUnixTime(action.payload.timestamp), fromUnixTime(action.payload.firstTimestamps));
    default:
      return state;
  }
};
