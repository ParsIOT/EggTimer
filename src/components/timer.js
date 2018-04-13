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
  TabBarIOS,
  ImageBackground,
  Dimensions,
  Animated,
  Easing,
  Image,
  AppState,
  AsyncStorage
} from 'react-native';
import {connect} from 'react-redux'
import styles from '../../appStyle/styleSheet.js'
import * as actions from '../actions'
import { NotificationsAndroid } from 'react-native-notifications'
import RNCalendarEvents from 'react-native-calendar-events';
import RNAlarm from 'react-native-alarm';
import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import {storage} from './storage'
import Storage from 'react-native-storage'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





const storage = new Storage({
    size:20,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
    
})



class Timer extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      time:this.props.timerTime,
      shownTime:this.props.counter,
      backgroundColor:'white',
      timers:[],
      paused:true,
      stoped:true,
      notification:null,
      appState: AppState.currentState,
      d:0,
      TIMES:0
      
      
    }
    

    var started = new Date
    this.springValue= new Animated.Value(0.3)
    // RNCalendarEvents.authorizationStatus().then((promise)=>{console.log( "1" + promise )})
    // RNCalendarEvents.authorizeEventStore().then((promise)=>{console.log( "2" + promise )})
    // RNCalendarEvents.findCalendars().then((promise)=>{console.log( "list = > " + promise )})
    // RNAlarm.initAlarm(null)
    // RNAlarm.setAlarm("Meeting",'hi','','',()=>{},()=>{})
}

  componentDidMount(){
    this.spring()
    AppState.addEventListener('change', this._handleAppStateChange);
    
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    this.pauseTimer()
    // this.saveData()
  }

  async savqeData(){
    
    await AsyncStorage.setItem('MAIN_TIME:key', this.props.time)
    await AsyncStorage.setItem('SECONDS_REMAINING', this.props.counter)
    await AsyncStorage.setItem('BACKGROUN_TIME', Date.now())
    
    
  }


  saveData() {
   
    storage.save({
      key: 'TIMES',   // Note: Do not use underscore("_") in key!
      data: { 
        time: this.props.time,
        current_time: Date.now(),
        seconds_remaining: this.props.counter
      },
      
      // if not specified, the defaultExpires will be applied instead.
      // if set to null, then it will never expire.
      expires: 1000 * 3600
    }).then((rett)=>{console.log(rett)});    
  }

  getData(){
    console.log('getting data ...')
      storage.load({key:'TIMES',
      // autoSync(default true) means if data not found or expired,
      // then invoke the corresponding sync method
      autoSync: true,
      
      // syncInBackground(default true) means if data expired,
      // return the outdated data first while invoke the sync method.
      // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
      syncInBackground: true,
      
      // you can pass extra params to sync method
      // see sync example below for example
      syncParams: {
        extraFetchOptions: {
          // blahblah
        },
        someFlag: true}}).then((ret)=>{this.onResume(ret);console.log(ret)}).catch(err => {
        // any exception including data not found 
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
              case 'ExpiredError':
                  // TODO
                  break;
        }
      })
    
  }
    
    
  
  

  _handleAppStateChange = (nextAppState) => {
    console.log(nextAppState)
    this.setState({appState: nextAppState});
    if (nextAppState=="background"){
      this.onPause()
      this.saveData()
      // if (this.props.startedValue){
      //   this.saveData()
      // }
      // this.saveData()
    }
    else if (nextAppState == "active"){
      // this.onResume()
      this.getData()
      
    }
  }


  onPause(){
    
    this.props.inBackground()
    this.pauseTimer()
    this.setState({notification:NotificationsAndroid.localNotification({
      title: "Egg timer",
      body: " we will alarm you when your egg is ready! ",
      extra: "data",
      category: "interactiveNotification"
    })})
    // this.props.paused()
    // console.log('pause  '+'background? = '+ this.props.wasInBackground +' startedValue = '+this.props.startedValue)
    
  }

  onResume(times= { time: this.props.time, current_time: 0, seconds_remaining: 0}) 
   {
    if (this.props.wasInBackground && this.props.startedValue){
      var diff = Date.now() - times.current_time
      if (diff/1000 >= times.seconds_remaining ) this.stopTimer()
      else {
        this.pauseTimer()
        this.props.setCounter(times.seconds_remaining ,diff)
        this.startTimer(this.props.counter)
      }      
      this.props.inForeground()
      
    }
    this.props.inForeground()
    // console.log('resume  '+'background? = '+ this.props.wasInBackground +' startedValue = '+this.props.startedValue)
  }
  

  spring () {
    this.springValue.setValue(0.985)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        // friction: 4,
        velocity:0,
        // tension:5,
        speed:10,
        bounciness:3
      }
    ).start(() => {
      if(this.props.startedValue)
      this.spring2()
    })
  }



  spring2(){

    this.springValue.setValue(1)
    Animated.spring(
      this.springValue,
      {
        toValue: 0.985,
        friction: 4,
        velocity:0,
        tension:3
      }
    ).start(() => this.spring())

  }
  // componentWillReceiveProps(myprops){
  //   if (props.newTime - this.props.time != 0 && this.props.changedDuringTiming){
  //     this.startTimer()
  //   }
  // }


  gettime(){
    this.setState({ time:this.props.timerTime })
  }

  


  startTimer(time){
    this.saveData()
    // this.props.inForeground()
    this.spring2()
    this.props.started();
    console.log(this.props.wasInBackground)
    if (!this.props.wasInBackground)
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
      console.log(this.state.timers)
      if (counter == 0) this.props.calculateLastProgressNumber()
      else this.props.calculateProgressNumber()
      // console.log(this.state.shownTime)
      if (counter <=0) {clearInterval(a);this.setState({ backgroundColor : 'rgb(255,255,60)' , paused:true, shownTime:0}); Alert.alert("Your Egg is ready to eat");this.stopTimer();this.props.calculateTime();this.props.stoped()}
      else this.setState((ps)=>{return({ shownTime:ps.shownTime -1 })}) 
    
      
    } , 1000)
    this.state.timers.push(a)
    //this.setState({backgroundColor:"green"})
}
  

  startOrStopIcon(){
    if (this.props.startedValue){
      // return(<Image source={require('../../statics/stop.png')} style={{width:50,height:50, position:'absolute'}} resizeMode={'contain'}/>
      return(<Icon name={'stop'} style={{position:'absolute', color:'white'}} size={50}/>)  
    
    }
    else 
    return(<Icon name={'play-arrow'} style={{position:'absolute', color:'white'}} size={50}/>)    
  }
  

  pauseTimer(){
    for(timer in this.state.timers) clearInterval( this.state.timers[timer] )

  }

  stopTimer(){
    if (this.state.notification)
      NotificationsAndroid.cancelLocalNotification(this.state.notification);
    for(timer in this.state.timers) clearInterval( this.state.timers[timer] )
    this.setState({shownTime:this.props.timerTime}) 
    this.setState({paused:true,stoped:true, backgroundColor:'white'})   
    this.props.enableWhenStoped()
    this.props.stoped()
    this.props.calculateTime()
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
      {/* <Button title={'save'} onPress={()=>this.saveData()}/>
      <Button title={'get'} onPress={()=>this.getData()}/> */}
      {/* <Text>{this.state.TIMES}</Text> */}
      <ImageBackground resizeMode={'contain'} source={require('../../statics/egg_main.png')} style={{marginTop:20,paddingTop:60, justifyContent:'flex-end', alignItems:'center',  width:  Dimensions.get('window').width, height:(0.5*Dimensions.get('window').height)}}>
          {/* <Text style={{fontSize:35, fontFamily:'main', marginTop:20,fontWeight:'100'}}> 7' 47" </Text> */}
          
          <Text style={styles.progressBarTime}>{Math.trunc((this.props.counter)/60)} '{('0'+(this.props.counter)%60).slice(-2)} ''</Text>

         <TouchableOpacity activeOpacity={0.85} onPress={()=>{
           if (!this.props.startedValue)
           {this.startTimer(this.props.counter)}
            else if (this.props.startedValue)
            {this.stopTimer()}
          }
           }>



           <Progress.Pie size={(0.20*Dimensions.get('window').height)} progress={this.props.progressNumber} style={{marginBottom:0}} color={"#ffb100"} borderColor={"#fff"} unfilledColor={"#ffcc80"}>
           {this.startOrStopIcon()}
           </Progress.Pie>


          </TouchableOpacity>
          {/* {this.startOrStopIcon()} */}
          {/* <Text style={{position:'absolute', textAlign:'center', textAlignVertical:'center'}}>Must be in </Text> */}

          

          {/* <Text style={{textAlign:'center', textAlignVertical:'center',bottom:80+65,fontFamily:'Vazir-Bold-FD', position:'absolute'}}>شروع</Text> */}
       </ImageBackground>
       

        
      {/* <View style={{ alignContent:'center', justifyContent:'center'}}>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{
          if (this.state.paused){
            this.setState({ paused:false }) 
            if ( this.state.shownTime < 1 ) {this.startTimer(this.props.timerTime); this.setState({shownTime:this.props.timerTime})} //restart
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
       */}


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
    startedValue : state.startedValue,
    wasInBackground : state.wasInBackground,
    progressNumber: state.progressNumber
    
  }
}

export default connect(mapStateToProps, actions)(Timer)

