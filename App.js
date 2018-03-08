import Timer from './src/timer.js'
import React, { Component } from 'react';
import {View, Image, ImageBackground, Button, Text} from 'react-native'


class Io extends Component<{}>{
  constructor(props){
    super(props)
    this.state={inputTime:0}
    this.setState({time:this.children})
  }
  render(){
    return <Text> {this.props.time} </Text>
  }
}



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
      time:0}
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

  resetall= new Promise((resolve, reject)=>{
    this.setState({cooked:false, normal:false, honey:false})
    resolve('reset')
  })
  
  render(){
    return(
      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Timer timerTime={this.state.time}/>
       <Text>{this.state.time}</Text>
        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent: 'center'}}>
          <Button title={"عسلی"} onPress={()=>{this.setState({time:this.state.honeyTime,  cooked:false, normal:false, honey:true})}}/>
          <Button title={"معمولی"} onPress={()=>{this.setState({time:this.state.normalTime, cooked:false, normal:true, honey:false})}}/>
          <Button title={"غیر معمولی"} onPress={()=>{this.setState({time:5, cooked:false, normal:true, honey:false})}}/>
          <Button title={"کاملا پخته"} onPress={()=>{this.setState({time:this.state.cookedTime, cooked:true, normal:false, honey:false})}}/>
        </View>
        </View>
      // </View>
    )
 
  }
}