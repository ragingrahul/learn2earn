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