import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe("selectedKegReducer", () => {

  let action;
  const kegData = {
    name: 'Isolation Vacation',
    brand: 'Corona',
    description: 'A little bit boring, just like your life now.',
    alcoholContent: '5.5',
    price: 5,
    remainingPints: 124,
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should return selected keg from state', () => {
    const { name, brand, description, alcoholContent, price, remainingPints, id } = kegData;
    action = {
      type: 'SELECTED_KEG',
      name: name,
      brand: brand,
      description: description,
      alcoholContent: alcoholContent,
      price: price,
      remainingPints: remainingPints,
      id: id
    };

    expect(selectedKegReducer(null, action)).toEqual({
      name: name,
      brand: brand,
      description: description,
      alcoholContent: alcoholContent,
      price: price,
      remainingPints: remainingPints,
      id: id
    });
  });
});