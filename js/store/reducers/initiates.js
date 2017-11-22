import { RollD20 } from '../../functions/functions';

export default (state = [], action) => {
  //console.log("Dispatched action: " + action.type);
  switch (action.type) {
  case "ADD_INITIATE":
    // Read: Return original state + object with args
    console.log(action.item);
    return [...state, {
        id: state.length,
        name: action.item.name,
        showDetail: false,
        mod: action.item.mod,
        isPC: action.item.isPC,
        adv: action.item.adv,
        init: null,
      }
    ];
  case "REMOVE_INITIATE":
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

  case "UPDATE_INITIATE":
    return state.map( (item, index) => {
      if(index !== action.id) {
          // This isn't the item we care about - keep it as-is
          return item;
      }
      // Otherwise, this is the one we want - return an updated value
      console.log({
        ...item,
        ...action.item
      });
      return {
          ...item,
          ...action.item
      };    
    });
  case "ROLL_INITIATIVES":
    return state.map((item) => {
      // Close panel
      item.showDetail = false;
      // Roll the dice
      let roll1 = RollD20();
      let roll2 = RollD20();
      switch(item.adv) {
        case "normal":
          item.init = roll1 + item.mod;
          return item;
        case "adv":
          item.init = Math.max(roll1, roll2) + item.mod;
          return item;
        case "disadv":
          item.init = Math.min(roll1, roll2) + item.mod;
          return item;
      }
    });
  case "LOAD_MOCKDATA":
    return mockData;
  case "SAVE_STATE_TO_JSON":
    // Null rolled initiatives
    let stateToJSON = state.map((item) => {
      return {
        ...item,
        init: null
      };
    });
    let json = JSON.stringify(stateToJSON);
    console.log(json);
    return state;
  default:
    return state;
  }
}


// Delete this after testing!
const mockData = [
  { id: 0, name: "test0", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 1, name: "test1", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 2, name: "test2", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 3, name: "test3", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 4, name: "test4", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 5, name: "test5", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 6, name: "test6", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 7, name: "test7", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 8, name: "test8", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 9, name: "test9", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null},
  { id: 10, name: "test10", mod: 0, adv: "normal", isPC: true, showDetail: false, init: null}
];