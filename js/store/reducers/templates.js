export default (state = [], action) => {
  //console.log("Dispatched action: " + action.type);
  switch (action.type) {
    case "SAVE_TEMPLATE":
      // Read: Return original state + object with args
      return [...state, {name: action.name, values: action.item}];
    case "UPDATE_TEMPLATE":
      return state.map((item, index) => {
        if (index != action.index) {
          return item;
        } else {
          return {
            ...item,
            ...action.item
          }
        }
      });
    case "DELETE_TEMPLATE":
      // define new array that doesn't include the wanted object index
      let newArr = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      // update ids of objects
      return newArr.map( (item, index) => {
        item.id = index;
        return item;
      });

    case "LOAD_TEMPLATES":
      return action.items;

    default:
      return state;
  }
}