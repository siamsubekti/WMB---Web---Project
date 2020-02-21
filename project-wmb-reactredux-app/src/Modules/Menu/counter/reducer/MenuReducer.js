const intialState = {
    menus: [],
    loading: true,

    menu:{
    id:null,
    name:"",
    price:null,
    menuType:"",
    stock:null,
    image:undefined
    }
}

function MenuReducer(state = intialState, action) {
    const { type, loading, menus, menu } = action;
    switch (type) {
        case 'MENU_LIST':
            return { ...state, loading: true, menus };

        case 'MENU_LIST_DONE':
            console.log('reducermenu', menus)
            return { ...state, loading, menus };

        case 'MENU_SAVE':
            return {...state, menu}

        default:
            return state;
    }
}

export default MenuReducer;