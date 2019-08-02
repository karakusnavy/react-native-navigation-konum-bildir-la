import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList,WebView } from 'react-native';
import GetLocation from 'react-native-get-location';



export default class KonumuGor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: ''
        }


    }
 
   
    render() {
        const konumbilader = this.props.navigation.getParam('konum', 'NO-ID');
        var baba = konumbilader.replace('/','+');        
        const uri = 'https://www.google.com/maps/search/'+baba;
        return (
          <WebView
            ref={(ref) => { this.webview = ref; }}
            source={{ uri }}
            onNavigationStateChange={(event) => {
              if (event.url !== uri) {
                this.webview.stopLoading();
               
              }
            }}
          />
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
