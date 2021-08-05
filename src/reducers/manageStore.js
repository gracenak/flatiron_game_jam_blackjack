export default function manageStore(state = { cards: [] }, action) {

    switch (action.type) {
        case 'FETCH_CARDS':
            return { ...state, cards: action.payload }
        default:
            return state

    }
}