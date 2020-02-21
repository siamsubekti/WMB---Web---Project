const intialState = {
    tables: [],
    loading: true,
}

function TableReducer(state = intialState, action) {
    const { type, loading, tables = [] } = action;

    switch (type) {
        case 'TABLES_LIST':
            return { ...state, loading: true, tables };

        case 'TABLES_LIST_DONE':
            return { ...state, loading, tables };

        default:
            return state;
    }
}

export default TableReducer;