export default function manageStore(state = { cards: [] }, action) {

    switch (action.type) {
        case 'FETCH_CARDS':
            return { ...state, cards: action.payload }
        case 'FETCH_ANOTHER_CARD':
            return { ...state, cards: action.payload }
        default:
            return state

    }
}