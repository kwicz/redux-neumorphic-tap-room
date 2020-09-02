
export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const editing = () => {
  return {
    type: 'EDITING'
  }
}

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

export const refillKeg = (keg) => {
  const { name, brand, description, alcoholContent, price, id } = keg;
  return {
    type: 'REFILL_KEG',
    name: name,
    brand: brand,
    description: description,
    alcoholContent: alcoholContent,
    price: price,
    remainingPints: 124,
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
    remainingPints: remainingPints,
    id: id
  }
}

export const selectedKeg = (keg) => {
  console.log("action selectedKeg: ", keg);
  if (!keg) {
    return {
      type: 'SELECTED_KEG_NULL'
    }
  } else {
    const { name, brand, description, alcoholContent, price, remainingPints, id } = keg;
    console.log("return SELECTED_KEG as action type: ", keg.type)
    console.log("return SELECTED_KEG as keg: ", keg)
    const selectedKeg = {
      type: 'SELECTED_KEG',
      name: name,
      brand: brand,
      description: description,
      alcoholContent: alcoholContent,
      price: price,
      remainingPints: remainingPints,
      id: id
    }
    console.log("ACTION SELECTEDKEG: ", selectedKeg);
    return selectedKeg;
  }
}

