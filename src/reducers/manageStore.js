export default function manageStore(state = { cards: [], dealerCards: [] }, action) {

    switch (action.type) {
        case 'FETCH_CARDS':
            return { ...state, cards: action.payload }
        case 'FETCH_DEALER_CARDS':
            return { ...state, dealerCards: action.payload }
        default:
            return state

    }
}