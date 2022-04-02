export default reducer = (state = 0, action) => {
    if (action.type === "addItem") {
        return state + action.payload
    }
    else if (action.type === "removeItem"){
        return state - action.payload
    }

    else{
        return state;
    }
}
