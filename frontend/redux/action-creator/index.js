export const addToCart = (item) =>{
    return (dispatch) =>{
        dispatch({
            type: "addItem",
            payload: item
        })
    }
}

export const removeFromCart = (item) =>{
    return (dispatch) => {
        dispatch({
            type: "removeItem",
            payload: item
        })
    }
}