import {combineReducers} from 'redux';
import MenuReducer from './Menu/counter/reducer/MenuReducer'
import TableReducer from './Table/counter/reducer/TableReducer'
import BeverageReducer from './Beverage/counter/reducer/BeverageReducer'
import OrderReducer from './Order/counter/reducer/OrderReducer'

export default combineReducers({
    menu: MenuReducer,
    table: TableReducer,
    beverage: BeverageReducer,
    order:OrderReducer
})