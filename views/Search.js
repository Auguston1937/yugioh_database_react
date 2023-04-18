import React, { useState } from 'react';
import { View, Button, Text, TextInput, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../assets/css/Css';
const axios = require('axios').default;


export default function Search(props) {

    const [searchData, setSearchData] = useState([])
    const [responseData, setResponseData] = useState([])

    function buscarCarta(text) {
        let url = `http://192.168.15.17:3000/?nomeDesc=${text}`
        axios.get(url).then(res => {

            setResponseData(res.data)

        }).catch(err => {
            console.log(err)
        })
    }

    const renderItem = ({ item }) => (
        <View style={css.item}>
            <Button title={item.name} onPress={() => props.navigation.navigate('Detalhe', item)}/>
        </View>
    );

    return (
        <SafeAreaView style={css.container}>
            <Text>buscar cartas</Text>
            <TextInput style={css.input} onChangeText={(text) => setSearchData(text)} />
            <Button title='Buscar' onPress={() => buscarCarta(searchData)} />

            <View>
                <FlatList data={responseData} renderItem={(item) => {return (renderItem(item))}} keyExtractor={item => item.id} />
            </View>
        </SafeAreaView>
    )
}