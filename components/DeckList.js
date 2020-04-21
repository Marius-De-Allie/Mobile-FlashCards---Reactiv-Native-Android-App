import React, { Component }from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import DeckListItem from './DeckListItem';

const DeckList = (props) => {
    const { decks } = props;
    // Array of all decks.
    const deckIds = Object.keys(decks);
    console.log('DECKIDS', deckIds);
    return (
        <View>
            {deckIds.map(id => 
                <DeckListItem 
                    key={id} 
                    title={decks[id].title}
                    cards={decks[id].questions.length} 
                />
            )}
        </View>

    );
} 

const mapStateToProps = (state) => ({
    decks: state
})

export default connect(mapStateToProps)(DeckList);