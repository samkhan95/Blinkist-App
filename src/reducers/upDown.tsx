const initialState = false;
type actionOptions ={
    type: string
}

const AddToFinish = (state = initialState, action:actionOptions) => {
    switch (action.type) {
        case "ADD": return !state;
        default: return state;
    }
}

export default AddToFinish;