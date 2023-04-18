import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../assets/css/Css';
const axios = require('axios').default;

export default function Deck(props) {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        let deck = props.route.params.deck
        let url = `http://192.168.15.17:3000/decks/${deck}`
        axios.get(url).then(res => {

            setUserData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const decklist = userData.map((carta) => {
        return (
            <View>
                <Text key={carta.id}> {carta.name}</Text>
                <Image style={css.image} source={{ uri: carta.card_images[0].image_url }} />
            </View>
        )
    })

    return (
        <SafeAreaView style={css.container}>
            <ScrollView>
                {decklist}
            </ScrollView>
        </SafeAreaView>
    )
} 