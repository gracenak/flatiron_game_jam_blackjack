export default function manageStore(state = { cards: [], hitCard: [], dealerCards: [], stand: [] }, action) {


    switch (action.type) {
        case 'FETCH_CARDS':
            return { ...state, cards: action.payload }
        case 'FETCH_ANOTHER_CARD':
            return { ...state, hitCard: action.payload }
        case 'FETCH_DEALER_CARDS':
            return { ...state, dealerCards: action.payload }
        case 'FETCH_STAND':
            return { ...state, stand: action.payload }
        default:
            return state

    }
}