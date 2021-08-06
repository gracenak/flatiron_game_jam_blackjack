export function fetchAnotherCard() {

    return (dispatch) => {
        //fbokesklt4s7
        fetch('http://deckofcardsapi.com/api/deck/fbokesklt4s7/draw/?count=1')
            .then(resp => resp.json())
            .then(cards => dispatch({
                type: 'FETCH_ANOTHER_CARD',
                payload: cards
            }))


    }

}