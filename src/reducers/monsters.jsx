import {createAction, createReducer} from 'redux-act';

let uuid = 1;

let initialState = {
  monsters: [{
    name: "Warg",
    notes: "+5 toHit, 1d6+3 damage. When you are hit by a warg, roll str DC13 or get knocked prone.",
    stats: {
      str: 12,
      dex: 16,
      con: 12,
      wiz: 8,
      int: 4,
      cha: 10
    }
  }],
};

export const addMonster = createAction('addMonster');
export const deleteMonster = createAction('addMonster');
export const updateMonster = createAction('addMonster');

const reducer = createReducer(
  {
    [addMonster]: (state, payload) => ({
      monsters: [...state.monsters, {...payload, id: uuid++}],
    }),
    [deleteMonster]: (state, payload) => ({
      monsters: state.monsters.filter(e => e.id === payload.id),
    }),
    [updateMonster]: (state, payload) => ({
      monsters: state.monsters.map(e => (e.id === payload.id ? payload : e)),
    }),
  },
  initialState,
);

export default reducer;
