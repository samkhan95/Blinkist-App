const initialState = false;
type actionOptions ={
    type: string
}

const AddToFinish = (state = initialState,action:actionOptions) => {
    switch (action.type) {
        case "ADD": return !state;
        case "" :return false;
        default: return state;
    }
}

export default AddToFinish;