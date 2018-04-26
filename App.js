import Timer from './src/components/timer.js'
import React, { Component } from 'react';
import {View, StatusBar, TouchableWithoutFeedback,ImageBackground, Button, Image, Text, TouchableNativeFeedback, PixelRatio, ScrollView, Dimensions, Alert} from 'react-native'
import RadioGroup from 'react-native-custom-radio-group';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './src/reducers/timerReducer'
import Choices from './src/components/choices.js'
import ProgressBar from './src/components/progressBar'
import PopupDialog from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/MaterialIcons'


class Io extends Component<{}>{
  constructor(props){
    super(props)
    this.state={inputTime:200}
    
  }
  render(){
    return <Text> {this.props.time} </Text>
  }
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default class App extends Component<{}>{
  constructor(props){
    super(props)
    this.getTime= this.getTime.bind(this)
    this.state={
      cooked:false,
      cookedTime : 5,
      normal:true,
      normalTime : 4,
      honey:false,
      honeyTime:3,
      time:300,
      
    }



  }

  renderElements(){
    
  }

  getTime(){
    if (this.state.cooked) {return <Timer timerTime={this.state.cookedTime}/>; console.log('cooked')}
    else if (this.state.normal) return <Timer timerTime={this.state.normalTime}/>
    else if (this.state.honey) return <Timer timerTime={this.state.honeyTime}/>
    else return <Timer timerTime={50}/>
  }
  test(){
    if(this.state.cooked) return <Timer timerTime={this.state.cookedTime}/>
    if(this.state.normal) return <Timer timerTime={this.state.normal}/>
  }


  showDialog(){
    this.popupDialog.show()
  }
  
  render(){
    return(
      <Provider store={store} >
      
      <View style={{paddingTop:0, flex:1, flexDirection:'column', alignItems:'center', justifyContent:'flex-start', backgroundColor:'rgb(230,230,230)'}}>
      <StatusBar
      backgroundColor="rgb(230,230,230)"
      barStyle="dark-content"
      /> 
      
      
      <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          width= {0.7*Dimensions.get('window').width}
          height={0.5*Dimensions.get('window').width}
          size={50}
          >
          <View style={{flex:1, justifyContent:'space-between', alignItems:'center', padding:20}}>
          <Text style={{fontFamily:'Vazir', textAlign:'center', textAlignVertical:'center'}}> برای توضیحات هر آیتم ,  روی آیتم مورد نظر نگه دارید</Text>
          <TouchableNativeFeedback onPress={()=>{this.popupDialog.dismiss()}}>
              <View style={{backgroundColor:'#ffb100',margin:0, borderRadius:5, padding:5}}>
              <Text style={{fontFamily:'Vazir-Bold-FD', fontSize:18, color:'white'}}> باشه </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          </PopupDialog>
                
      
      
        <Timer timerTime={this.state.time}  dialog={()=>this.popupDialog.show()} />        
        <Choices dialog={()=>this.popupDialog.show()}/>
        {/* <ProgressBar/> */}
     </View>
     </Provider>
    )
 
  }
}