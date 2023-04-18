import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { css } from '../assets/css/Css';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(props) {
    return (
        <SafeAreaView style={css.container}>
            <Text>SEXTA DO YUGI</Text>
            <Button title='Search' onPress={() => props.navigation.navigate('Search')} > </Button>
            <Button title='Decks' onPress={() => props.navigation.navigate('Decks')} > </Button>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}