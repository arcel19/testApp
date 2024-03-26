import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const messages = [
    { 
        id:1,
        title:"t1",
        image:require('../assets/favicon.png')
    },
    { 
        id:2,
        title:"t2",
        image:require('../assets/favicon.png')
    }
]

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message =>message.id.toString}
            renderItem={({item})=> 
            <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image} /> }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;