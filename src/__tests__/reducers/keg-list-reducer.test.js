import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'Isolation Vacation',
    brand: 'Corona',
    description: 'A little bit boring, just like your life now.',
    alcoholContent: '5.5',
    price: 5,
    id: 1
  };

  const currentState = {
    1: {name: 'Isolation Vacation',
    brand: 'Corona',
    description: 'A little bit boring, just like your life now.',
    alcoholContent: '5.5',
    price: 5,
    id: 1 },
    2: {name: 'Flamingo Dreams',
    brand: 'Ecliptic Brewing',
    description: 'Guave Blonde Ale',
    alcoholContent: '6.5',
    price: 6,
    id: 2 }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, description, alcoholContent, price, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      description: description,
      alcoholContent: alcoholContent,
      price: price,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        description: description,
        alcoholContent: alcoholContent,
        price: price,
        id: id
      }
    });
  });
  
  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Flamingo Dreams',
      brand: 'Ecliptic Brewing',
      description: 'Guave Blonde Ale',
      alcoholContent: '6.5',
      price: 6,
      id: 2 }
    });
  });
});