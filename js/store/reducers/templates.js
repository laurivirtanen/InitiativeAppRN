export default (state = [], action) => {
    //console.log("Dispatched action: " + action.type);
    switch (action.type) {
    case "SAVE_TEMPLATE":
      // Read: Return original state + object with args
      console.log([...state, action.item]);
      //return [...state, action.item];
      return state;

    case "LOAD_TEMPLATES":
      return state;

    default:
      return state;
    }
}