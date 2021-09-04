export function fetchDealerCards() {

    return (dispatch) => {
        fetch('http://deckofcardsapi.com/api/deck/lx9ytrd36wzo/draw/?count=2')
            .then(resp => resp.json())
            .then(cards => dispatch({
                type: 'FETCH_DEALER_CARDS',
                payload: cards
            }))


    }

}