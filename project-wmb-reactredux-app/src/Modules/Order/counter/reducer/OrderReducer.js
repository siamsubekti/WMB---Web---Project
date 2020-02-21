const intialState = {
    orders: [],
    loading: true,
    order: {
        id: null,
        customerName: "",
        tables: null,
        quantityCustomer: null,
        priceTotal: null,
        payment: null,
        refund: null,
        statusTransaction: "",
        cashier: 1,
        orderDetails: [{
            menu: null,
            quantity: null,
        }]
    }
}

function OrderReducer(state = intialState, action) {

    console.log(state);
    const {
        type,
        loading,
        orders = [],
        order,
        tableId,
        menuId,
        orderDetails,
        table,
        jumlah,
        payment,
        quantityMenu,
        paymentOrder,
        orderan
    } = action;

    switch (type) {
        case 'ORDER_LIST':
            return {
                ...state, loading: true, orders
            };

        case 'ORDER_LIST_DONE':
            return {
                ...state, loading, orders
            };

        case 'ORDER_SAVE':
            return {
                ...state, order
            }

            case 'TABLE_ORDER_SAVE':
                return {
                    ...state, order: {
                        ...state.order,
                        tables: table
                    }
                }

                case 'PAYMENT_ORDER_SAVE':
                    return {
                        ...state, order: {
                            ...state.order,
                            payment: paymentOrder
                        }
                    }

                    case 'MENU_ORDER_SAVE':
                        return {
                            ...state, order: {
                                ...state.order,
                                orderDetails: state.order.orderDetails.map((detail) => {
                                    return ({
                                        ...detail,
                                        menu: menuId
                                    })
                                })
                            }
                        }

                        case 'MENU_QUANTITY_SAVE':
                            return {
                                ...state, order: {
                                    ...state.order,
                                    orderDetails: state.order.orderDetails.map((detail) => {
                                        return ({
                                            ...detail,
                                            quantity: quantityMenu
                                        })
                                    })
                                }
                            }
                            case 'PAYMENT':
                                return {
                                    ...state, order: {
                                        ...state.order,
                                        payment: payment
                                    }
                                }
                                case 'HANDLE_ORDERAN':
                                    return {
                                        ...state, order: {
                                            ...state.order,
                                            id: orderan.id,
                                            customerName: orderan.customerName,
                                            tables: orderan.tables,
                                            quantityCustomer: orderan.quantityCustomer,
                                            priceTotal: orderan.priceTotal,
                                            cashier: orderan.cashier,
                                        }
                                    }
                                    default:
                                        return state;
    }
}

export default OrderReducer;