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

export const buyPint = (keg) => {
  const { name, brand, description, alcoholContent, price, remainingPints, id } = keg;
  return {
    type: 'BUY_PINT',
    name: name,
    brand: brand,
    description: description,
    alcoholContent: alcoholContent,
    price: price,
    remainingPints: remainingPints - 1,
    id: id    
  }
}