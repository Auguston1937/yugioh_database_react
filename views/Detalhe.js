import React, { useEffect, useState } from 'react';
import { View, Button, Text, TextInput, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '../assets/css/Css';

export default function Detalhe(props) {

    const data = props.route.params;

    return (
        <SafeAreaView style={css.container}>
            <View>
                <Image style={css.image} source={{ uri: data.card_images[0].image_url }} />
                <Text>{data.name}</Text>
                <Text>{data.name_en}</Text>
                <Text>{data.level}</Text>
                <Text>{data.attribute}</Text>
                <Text>{data.type}</Text>
                <Text>{data.race}</Text>
                <Text>{data.atk}</Text>
                <Text>{data.def}</Text>
                <Text>{data.desc}</Text>
                <Text>{data.archetype}</Text>

            </View>
        </SafeAreaView>
    )
}