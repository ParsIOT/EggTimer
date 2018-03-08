import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';
import styles from '../appStyle/styleSheet.js'



    

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Timer extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      time:this.props.timerTime,
      shownTime:this.props.timerTime,
      backgroundColor:'white',
      timers:[],
      paused:true,
      stoped:true,
    }
  }


  gettime(){
    this.setState({time:this.props.timerTime})
  }


  startTimer(time){
    //   this.notif("Your egg is Ready To eat")
      console.log(this.props.timerTime)
    // var time=this.state.time
    // this.setState({shownTime : this.state.time})
    this.setState({backgroundColor:'white'})
    for(timer in this.state.timers) clearTimeout(this.state.timers[timer])
    this.state.timers=[]
    var counter=time;
    var a=setInterval(()=>{

      counter--
      // console.log(this.state.shownTime)
      if (counter <=0) {clearInterval(a);this.setState({ backgroundColor : 'rgb(255,255,60)' , paused:true, shownTime:0}); Alert.alert("Your Egg is ready to eat")}
      else this.setState((ps)=>{return({ shownTime:ps.shownTime -1 })})
    
      
    } , 1000)
    this.state.timers.push(a)
    //this.setState({backgroundColor:"green"})

  }

  pauseTimer(){
    for(timer in this.state.timers) clearInterval( this.state.timers[timer] )

  }

  stopTimer(){
    for(timer in this.state.timers) clearInterval( this.state.timers[timer] )
    this.setState({shownTime:this.props.timerTime}) 
    this.setState({paused:true,stoped:true, backgroundColor:'white'})   
  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <View style={{backgroundColor:'rgb(250,250,60)', flex:1}}>
        <Text style={styles.TimerFont}>{("0"+Math.trunc(this.state.shownTime/60)).slice(-2)} : {("0"+this.state.shownTime%60).slice(-2)}</Text>
        <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Button styles={styles.Button} title={'اتمام'} onPress = {()=>{this.stopTimer()}} />
        <Button styles={styles.Button} title={this.state.paused ? 'شروع' : 'توقف'} onPress={()=>{
          if (this.state.paused){
            this.setState({paused:false}) 
            if (this.state.shownTime < 1) {this.startTimer(this.props.timerTime); this.setState({shownTime:this.props.timerTime})} //restart
            else if (this.state.stoped){this.startTimer(this.props.timerTime); this.setState({shownTime:this.props.timerTime, stoped:false})}
            else {this.startTimer(this.state.shownTime)} //pause
          }
          else if (!this.state.paused){
            this.setState({paused:true})
            this.pauseTimer()
          }
          }}/>
          </View>
        </View>
      </View>
    );
  }
}


//rgb(255,0,0)
//rgb(200, 0, 50)
//rgb(150,0,100)
//rgb(100, 0, 150)
//rgb(50, 0, 200)
//rgb(0,0,250)

