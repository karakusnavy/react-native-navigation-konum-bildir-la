import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import GetLocation from 'react-native-get-location';



export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: ''
        }


    }
    KonumuGor(konum)
    {
        const {navigate} = this.props.navigation;
        navigate('KonumuGorScreen', {konum: konum});
        

    }
    componentDidMount() {
        return fetch('http://location.somee.com/list')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.lokasyonlar,

                }, function () {
                    

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ justifyContent: 'center', alignItems: 'center', height: 100, width: 100 }} source={require('../GetLocation/img/image.png')} />
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={styles.card} onPress={()=>this.KonumuGor(item.konum)}>
                                <Text style={styles.welcome}>Konumu Bildiren: <Text style={{ color: 'yellow' }}>{item.isim}</Text></Text>
                                <Text style={styles.cardText}>Tarih: <Text style={{ color: 'yellow' }}>{item.tarih}</Text></Text>
                                <Text style={styles.cardText}>(Konumu Görmek İçin Tıkla)</Text>
                            </TouchableOpacity>
                        }
                        keyExtractor={({ id }, index) => id}
                    />

                </ScrollView>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'black',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,

    },
    cardText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        margin: 10,

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'black',
        padding: 20,
        marginTop: 10,
        width: 200
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    welcome: {

        margin: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
});
