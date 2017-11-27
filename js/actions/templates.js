export function SAVE_TEMPLATE(name,item) {
    return {
      type: "SAVE_TEMPLATE",
      item: item,
      name: name
    };
}
export function UPDATE_TEMPLATE(item, index) {
    return {
        type: "UPDATE_TEMPLATE",
        item: item,
        index: index
    };
}

export function DELETE_TEMPLATE(index) {
    return {
        type: "DELETE_TEMPLATE",
        index: index
    };
}

export function LOAD_TEMPLATES(items) {
    return {
        type: "LOAD_TEMPLATES",
        items: items
    };
}