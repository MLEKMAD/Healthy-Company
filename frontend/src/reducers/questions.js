import { getQuestions } from "../static-data";
// import {SEND_RECOMMENDATION} from "../constants/action-types"
import _ from "lodash";

export default (state = getQuestions(10), action) => {
  switch (action.type) {
    // case SEND_RECOMMENDATION:
    //   const { message, userId } = action.payload;
    //   const allUserMsgs = state[userId];
    //   const number = +_.keys(allUserMsgs).pop() + 1;

    //   return {
    //     ...state,
    //     [userId]: {
    //       ...allUserMsgs,
    //       [number]: {
    //         number,
    //         text: message,
    //         is_user_msg: true
    //       }
    //     }
    //   };

    default:
      return state;
  }
};
