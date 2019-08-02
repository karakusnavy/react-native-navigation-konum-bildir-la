import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import GetLocation from 'react-native-get-location';

export default class Home extends Component {
   constructor(props) {
    super(props)
    this.state = {
      enlem:'',
      boylam:''
    }
    
    
  }

  KonumBildir()
  {
    const ismi = this.props.navigation.getParam('isim', 'NO-ID');
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      var cevap = request.responseText;
     
      if(cevap=="success")
      {
        alert('Konum bildirildi '+cevap)
        return;
      }
          
     
      
    };
    request.open('Get', 'http://location.somee.com/add?isim='+ismi+'&konum='+this.state.enlem+'/'+this.state.boylam);
    request.send();
  }

  componentDidMount()
  {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
    .then(location => {
      this.setState({enlem:location.latitude,boylam:location.longitude})    
    
    })
    .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
    })
  }
  render() {
    const {navigate} = this.props.navigation;
    const ismi = this.props.navigation.getParam('isim', 'NO-ID');
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{justifyContent:'center',alignItems:'center',height:100,width:100}} source={require('../GetLocation/img/image.png')} />
        </View>        
        <Text style={styles.welcome}>Konum Bildir La !</Text>
        <View style={{backgroundColor:'black',padding:10,borderRadius:10}}>
        <Text style={{color:'yellow',fontWeight:'bold',fontSize:15}}>İsminiz</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>{ismi}</Text>
          <Text style={{color:'yellow',fontWeight:'bold',fontSize:15}}>Şuanki Konum Kordinatlarınız</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Enlem: {this.state.enlem}</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Boylam: {this.state.boylam}</Text>
        </View>
        
        <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
          <TouchableOpacity onPress={() => this.KonumBildir()} style={styles.button}>
            <Text style={styles.buttonText}>Konum Bildir !</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={()=> navigate('LocationsScreen', {isim: this.state.isim})}>Konum Bildirenler</Text>
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
    margin:10,
    
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'black',
    padding:20,
    marginTop:10,
    width:200
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  welcome: {    
    textAlign: 'center',
    margin: 10,
    color:'black',
    fontWeight:'bold',
    fontSize:23
  },
});
