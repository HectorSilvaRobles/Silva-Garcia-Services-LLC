const initialState = {
    service: null
}

const SET_SERVICE = "SET_SERVICE"

export default function reducer(state = initialState, action) {
    switch(action.type){
        case SET_SERVICE:
            console.log('this is the service', action.payload)
            return {...state, service: action.payload};
        default: 
            return 'this is the initial state', state
    }
}

export function setService(service){
    return {
        type: SET_SERVICE,
        payload: service
    }
}