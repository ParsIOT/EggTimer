import Timer from './src/components/timer.js'
import React, { Component } from 'react';
import {View, ImageBackground, Button, Text, TouchableNativeFeedback, PixelRatio, ScrollView, Dimensions} from 'react-native'
import RadioGroup from 'react-native-custom-radio-group';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './src/reducers/timerReducer'
import Choices from './src/components/choices.js'


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
      time:200,
      
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

  
  render(){
    var eggSize = [{
      label: 'کوچک',
      value: 15
    }, {
      label: 'متوسط',
      value: 10
    }];

    var eggStatus = [{
      label: 'پخته',
      value: 15
    }, {
      label:"سنگ پز",
      value: 10
    }, {
      label: 'عسلی',
      value: 6
    }];

    var waterStatus = [{
      label: 'سرد',
      value: 25
    }, {
      label: 'ولرم',
      value: 70
    }, {
      label: 'جوش',
      value: 100
    }];

    var waterStatus2 = [{
      label: 'سرد',
      value: 25
    }]
    return(
      <Provider store={store}>
      
      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'flex-start', backgroundColor:'white'}}>
                 
       
        <Timer timerTime={this.state.time}/>
        <Text>{this.state.time}</Text>
        <Choices/>
        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent: 'center'}}>
          <Button title={"عسلی"} onPress={()=>{this.setState({time:this.state.honeyTime,  cooked:false, normal:false, honey:true})}}/>
          <Button title={"معمولی"} onPress={()=>{this.setState({time:this.state.normalTime, cooked:false, normal:true, honey:false})}}/>
          <Button title={"غیر معمولی"} onPress={()=>{this.setState({time:5, cooked:false, normal:true, honey:false})}}/>
          <Button title={"کاملا پخته"} onPress={()=>{this.setState({time:7, cooked:true, normal:false, honey:false})}}/>
        </View>

        

     </View>
     </Provider>
    )
 
  }
}