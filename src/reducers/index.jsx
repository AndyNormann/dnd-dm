import {combineReducers} from 'redux';

import monsterReducer from './monsters';

const reducer = combineReducers({monsters: monsterReducer});

export default reducer;
