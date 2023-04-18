import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../assets/css/Css';
const axios = require('axios').default;

export default function Decks(props) {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get('http://192.168.15.17:3000/decks').then(res => {
            setUserData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const decklist = userData.map((deck) => {
        return <Button title={deck} key={deck} onPress={() => props.navigation.navigate('Deck', {deck: deck})} />
    })

    return (
        <SafeAreaView style={css.container}>
            <Button title='Novo Deck' />
            {decklist}

        </SafeAreaView>
    )
} 