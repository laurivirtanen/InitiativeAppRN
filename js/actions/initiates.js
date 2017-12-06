

export function ADD_INITIATE(item) {
  return {
    type: "ADD_INITIATE",
    item: item
  };
}

export function REMOVE_INITIATE(index) {
  return {
    type: "REMOVE_INITIATE",
    index: index
  };
}

export function UPDATE_INITIATE(id, item) {
  return {
    type: "UPDATE_INITIATE",
    id: id,
    item: item
  };
}

export function ROLL_INITIATIVES() {
  return {
    type: "ROLL_INITIATIVES"
  };
}

export function SAVE_STATE_TO_JSON() {
  return {
    type: "SAVE_STATE_TO_JSON"
  };
} 

export function LOAD_MONSTERS(item) {
  return {
    type: "LOAD_MONSTERS",
    monsters: item
  };
}

export function SET_FROM_TEMPLATE(items) {
  return {
    type: "SET_FROM_TEMPLATE",
    items: items
  };
}

export function CLEAR_LIST() {
  return {
    type: "CLEAR_LIST"
  };
} 