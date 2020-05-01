import * as actions from './../../actions';

describe('tap room actions', () => {

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Isolation Vacation', brand: 'Corona', description: 'A little bit boring, just like your life now.', alchoholContent: '5.5', price: 5, id: 1})).toEqual({
      type: c.ADD_TICKET,
      name: 'Isolation Vacation',
      brand: 'Corona',
      description: 'A little bit boring, just like your life now.',
      alchoholContent: '5.5',
      price: 5,
      id: 1
    });
  });
});