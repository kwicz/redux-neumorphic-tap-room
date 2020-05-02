
export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, description, alcoholContent, price, remainingPints, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    description: description,
    alcoholContent: alcoholContent,
    price: price,
    remainingPints: remainingPints,
    id: id
  }
}

export const buyPint = (id) => {
  return {
    type: 'BUY_PINT',
    id: id    
  }
}

export const selectedKeg = (keg) => {
  const { name, brand, description, alcoholContent, price, remainingPints, id } = keg;
  return {
    type: 'SELECTED_KEG',
    name: name,
    brand: brand,
    description: description,
    alcoholContent: alcoholContent,
    price: price,
    remainingPints: remainingPints,
    id: id
  }
}

export const editing = () => {
  return {
    type: 'EDITING'
  }
}
