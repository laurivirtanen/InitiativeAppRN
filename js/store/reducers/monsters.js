export default (state = [], action) => {
    //console.log("Dispatched action: " + action.type);
    switch (action.type) {
        case "LOAD_MONSTERS":
            return action.monsters;
        default:
            return state;

    }
}