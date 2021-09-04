export function fetchAnotherCard() {

    return (dispatch) => {
        //fbokesklt4s7 this is the test deck, there are like 20 decks in this one
        fetch('http://deckofcardsapi.com/api/deck/lx9ytrd36wzo/draw/?count=1')
            .then(resp => resp.json())
            .then(card => dispatch({
                type: 'FETCH_ANOTHER_CARD',
                payload: card
            }))


    }

}