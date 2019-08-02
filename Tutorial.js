import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput,AsyncStorage } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isim: '',
      check_isim:'',
    }
    this.FirstLogin = this.FirstLogin.bind(this);
  }



  FirstLogin(){
    AsyncStorage.setItem('isim', this.state.isim);
    const {navigate} = this.props.navigation
      navigate('AppScreen', {isim: this.state.isim})
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ justifyContent: 'center', alignItems: 'center', height: 100, width: 100 }} source={require('../GetLocation/img/image.png')} />
        </View>
        <Text style={styles.welcome}>Konum Bildir La !</Text>
        <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: 'black' }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Lütfen İsminizi Giriniz</Text>
          <TextInput style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, fontWeight: 'bold', padding: 15, margin: 10 }} onChangeText={(text) => this.setState({ isim: text })} />
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
          <TouchableOpacity onPress={() => this.FirstLogin()} style={styles.button}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23
  },
});
