export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, description, alcoholContent, price, remainingPints, id } = ticket;
  return {
    type: c.ADD_TICKET,
    name: name,
    brand: brand,
    description: description,
    alcoholContent: alcoholContent,
    price: price,
    remainingPints: remainingPints,
    id: id
  }
}