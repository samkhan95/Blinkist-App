const initialState = false;
type actionOptions ={
    type: string
}

const AddToFinish = (action:actionOptions,state = initialState) => {
    switch (action.type) {
        case "ADD": return !state;
        default: return state;
    }
}

export default AddToFinish;