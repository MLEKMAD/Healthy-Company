import {SET_QUESTIONNAIRE_ID, SET_TYPING_VALUE, SEND_RECOMMENDATION} from "../constants/action-types";
export const setActiveUserId =(id)=> ({
    type :SET_QUESTIONNAIRE_ID,
    payload : id 
})

export const setTypingValue =(value) => ({
    type : SET_TYPING_VALUE,
    payload : value

})

export const sendMessage = (message, userId) =>({
    type : SEND_RECOMMENDATION,
    payload : {
        userId,
        message
    }
})