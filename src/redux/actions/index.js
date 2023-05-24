export const addWallet= (value) => {
    return {
        type: 'CONNECT',
        payload: value
    };
}

export const removeWallet = () => {
    return {
        type: 'DISCONNECT',
    };
}

export const clearCart = () => {
    return {
        type: 'CLEAR',
    };
}

export const addToCart = (value) => {
    return {
        type: 'ADD',
        payload: value
    };
}

export const removeFromCart = (value) => {
    return {
        type: 'REMOVE',
        payload: value
    };
}