import {
  AsyncStorage
} from 'react-native';

let newState;

export default (state = [], action) => {
  //console.log("Dispatched action: " + action.type);
  switch (action.type) {
    case "SAVE_TEMPLATE":
      SaveDataToStorage([...state, {name: action.name, values: action.item}]);
      // Read: Return original state + object with args
      return [...state, {name: action.name, values: action.item}];
    case "UPDATE_TEMPLATE":
      newState = state.map((item, index) => {
        if (index != action.index) {
          return item;
        } else {
          return {
            ...item,
            ...action.item
          }
        }
      });
      SaveDataToStorage(newState);
      return newState;
    case "DELETE_TEMPLATE":
      // define new array that doesn't include the wanted object index
      let newArr = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      // update ids of objects
      newState = newArr.map( (item, index) => {
        item.id = index;
        return item;
      });
      SaveDataToStorage(newState);
      return newState;

    case "LOAD_TEMPLATES":
      return action.items;

    default:
      return state;
  }
}

async function SaveDataToStorage(state) {
  let jsonData = JSON.stringify(state);
  try {
    console.log("Saving to local storage...");
    await AsyncStorage.setItem("InitiativeTemplates", jsonData);
  } catch (error){
    console.log("Storage saving failed!");
    console.log(error);
  }
}