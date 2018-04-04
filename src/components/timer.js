import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TabBarIOS
} from 'react-native';
import {connect} from 'react-redux'
import styles from '../../appStyle/styleSheet.js'
import * as actions from '../actions'



    

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Timer extends Component<{}> {
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

  // componentWillReceiveProps(myprops){
  //   if (props.newTime - this.props.time != 0 && this.props.changedDuringTiming){
  //     this.startTimer()
  //   }
  // }


  gettime(){
    this.setState({time:this.props.timerTime})
  }


  startTimer(time){
    this.props.started();
    this.props.disableWhenStarted()
    //   this.notif("Your egg is Ready To eat")
    // this.props.presetCounter(180)
    // console.log(this.props.timerTime)
    // var time=this.state.time
    // this.setState({shownTime : this.state.time})
    this.setState({backgroundColor:'white'})
    for(timer in this.state.timers) clearTimeout(this.state.timers[timer])
    this.state.timers=[]
    var counter=time; //this.props.counter
    var a=setInterval(()=>{
      counter--
      this.props.decCounter()
      // console.log(this.state.shownTime)
      if (counter <=0) {clearInterval(a);this.setState({ backgroundColor : 'rgb(255,255,60)' , paused:true, shownTime:0}); Alert.alert("Your Egg is ready to eat"),this.stopTimer()}
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
    this.props.enableWhenStoped()
  }

  showStop(){
    if (! this.state.stoped){
    return(
      <TouchableOpacity onPress = {()=>{this.stopTimer()}}>
      <View style={{borderColor:'white', borderWidth:2, backgroundColor:'#66a5ad', width:50, height:50, alignItems:'center', justifyContent:'center', borderRadius:50}}>
        <Text style={{color:'white'}}> اتمام </Text>
      </View>
    </TouchableOpacity>)
    }
    

    else return 
  }

  render() {
    // if ( this.props.newTime - this.props.time != 0 ) {this.startTimer(0)}
    var timeee = this.state.stoped ? ("0"+Math.trunc(this.props.timerTime%60)).slice(-2) : ("0"+Math.trunc(this.state.shownTime%60)).slice(-2) 
    return (
      
      <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text>{this.props.counter}</Text>
        <Text style={styles.TimerFont}>
        
        {this.state.stoped ? ("0"+Math.trunc(this.props.timerTime/60)).slice(-2) : ("0"+Math.trunc(this.state.shownTime/60)).slice(-2) } : {this.state.stoped ? ("0"+Math.trunc(this.props.timerTime%60)).slice(-2) : ("0"+this.state.shownTime%60).slice(-2) }
        
        
        </Text>
        {/* <Button styles={styles.Button} title={'اتمام'} onPress = {()=>{this.stopTimer()}} /> */}
        
      <View style={{ alignContent:'center', justifyContent:'center'}}>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{
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
          }}>
        <View style={{borderRadius:75,borderColor:'white', borderWidth:2 , backgroundColor:'#66a5ad', width:150, height:150, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white'}}> {this.state.paused ? 'شروع' : 'توقف'} </Text>
        </View>
        </TouchableOpacity>

        
        </View>

        <View style={{flexDirection:'row'}}>

          <View style={{width:100, height:50, alignItems:'center', justifyContent:'center'}}>
          </View>
        

          {this.showStop()}
        
        
          <View style={{width:150, height:50, alignItems:'center', justifyContent:'center'}}>
          </View>
          <View style={{width:150, height:50, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white'}}></Text>
          </View>
        </View>
        
      </View>
        {/* <Button styles={styles.Button} title={this.state.paused ? 'شروع' : 'توقف'} onPress={()=>{
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
          }}/> */}
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


const mapStateToProps= state =>{
  return { 
    time:state.time ,
    counter : state.counter,
    newTime : state.newTime,
    changeDuringTiming : state.changedDuringTiming,
    started : state.started
  }
}

export default connect(mapStateToProps, actions)(Timer)

