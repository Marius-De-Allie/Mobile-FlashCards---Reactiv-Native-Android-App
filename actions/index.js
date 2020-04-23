import { _getDecks } from '../_DATA';

const RECEIVE_DECKS = 'RECEIVE_DECKS';
const ADD_DECK = 'ADD_DECK';
const ADD_CARD = 'ADD_CARD';

const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks
});

// Thunk action creator.
const handleReceiveDecks = () => {
    return(dispatch) => {
        _getDecks()
        .then(decks => {
            console.log(decks);
            dispatch(receiveDecks(decks));
        })
    } 
};

// ADD DECK ACTION CREATOR.
const addDeck = (deckId, title, questions) => ({
    type: ADD_DECK,
    deckId,
    title,
    questions
});

export {RECEIVE_DECKS, ADD_DECK, handleReceiveDecks, addDeck};

// catch(e) {
//     console.log('Error retreiving decks, please try again', e);
// }