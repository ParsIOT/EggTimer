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
  AsyncStorage,
  StatusBar
  
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
import Modal from 'react-native-modalbox';
// import {} from 'react-native-popup-dialog'





const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var PushNotification = require('react-native-push-notification');
PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
          console.log( 'TOKEN:', token );
      },
  
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
  
          // process the notification
  
          
      },
  
      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "YOUR GCM SENDER ID",
  
      
  
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
  
      /**
        * (optional) default: true
        * - Specified if permissions (ios) and token (android and ios) will requested or not,
        * - if not, you must call PushNotificationsHandler.requestPermissions() later
        */
      requestPermissions: true,
  });




async function getiOSNotificationPermission() {     // for alarm
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}




const storage = new Storage({
    size:20,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true
    
    
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
      TIMES:0,
      detailes:[
      ' حالت نهایی تخم مرغ :\n\n کاملا پخته'
      ,
      ' حالت نهایی تخم مرغ :\n\n پخته'
      ,
      ' حالت نهایی تخم مرغ :\n\n عسلی'
      ,
      '  سایز تخم مرغ :\n\n بین 100 تا 250 گرم'
      ,
      '  سایز تخم مرغ :\n\n بین 250 تا 350 گرم'
      ,
      '  سایز تخم مرغ :\n\n بین 350 تا 450 گرم'
      ,
      '  دمای اولیه آب :\n\n بین 60 تا 100 درجه سانتیگراد'
      ,
      '  دمای اولیه آب :\n\n بین 40 تا 60 درجه سانتیگراد'
      ,
      '  دمای اولیه آب :\n\n بین 20 تا 40 درجه سانتیگراد'
      ,
      '  دمای اولیه آب :\n\n بین 4 تا 20 درجه سانتیگراد'
      ,
      ],
      detailId:0,
      fadeAnim : new Animated.Value(1),
      fadeinMain : new Animated.Value(0),
      fadeAsaly : new Animated.Value(0),
      fadePie : new Animated.Value(1),
      springValue : new Animated.Value(1)
      
      
      
    }
    

    var started = new Date
    // RNCalendarEvents.authorizationStatus().then((promise)=>{console.log( "1" + promise )})
    // RNCalendarEvents.authorizeEventStore().then((promise)=>{console.log( "2" + promise )})
    // RNCalendarEvents.findCalendars().then((promise)=>{console.log( "list = > " + promise )})
    // RNAlarm.initAlarm(null)
    // RNAlarm.setAlarm("Meeting",'hi','','',()=>{},()=>{})
}

  componentDidMount(){
    
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

  fo()
    {
            
      // val.setValue(1)
      Animated.timing(                  // Animate over time
        this.state.fadePie,            // The animated value to drive
        {
          toValue: 0,                   // Animate to opacity: 1 (opaque)
          duration: 1000,              // Make it take a while
        }
      ).start(()=> {this.fadeIn(this.state.fadeAnim)} );
    }
  

  showDetail(){
    if(this.props.longPressed){
      if (this.props.detailId == 2){
        this.fadeIn(this.state.fadeAsaly)

        return(
          
           <View style={{padding:0,paddingBottom:0,marginBottom:40}}>
           
           <Text style={styles.progressBarTime}>{Math.trunc((this.props.counter)/60)}' {('0'+(this.props.counter)%60).slice(-2)}''</Text>        
           <TouchableOpacity activeOpacity={0.85}  style={{paddingRight:12,paddingLeft:12,paddingBottom:30}} onPress={()=>{
           if (!this.props.startedValue)
           {this.startTimer(this.props.counter)}
            else if (this.props.startedValue)
            {this.stopTimer()}
          }}>
   
   
           
          

           <Animated.View style={{opacity:this.state.fadePie}}>
           <Progress.Pie size={(0.24*Dimensions.get('window').height)} progress={this.props.progressNumber} color={"#ffcc80"} borderColor={"#fff"} unfilledColor={"#ffb100"}>
           {this.startOrStopIcon()}
           <Text></Text>
           </Progress.Pie>
           </Animated.View>
           <Animated.Image
             resizeMode={'contain'}  source={require('../../statics/honey2.png')} style={{opacity:this.state.fadeAsaly,position:'absolute',width:0.28*Dimensions.get('window').height, height:0.28*Dimensions.get('window').height}}/>
          
           
   
   
   
        </TouchableOpacity>
    
        </View>)



        
      // return(
      // <View style={{alignItems:'center', marginBottom:45, justifyContent:'flex-end', width:0.25*Dimensions.get('window').height, height:0.25*Dimensions.get('window').height, flex:1}}>
      //   {/* <Text style={{fontSize:15, fontFamily:'Vazir-Bold-FD',textAlign:'center', textAlignVertical:'center'}}>{this.state.detailes[this.props.detailId]}</Text> */}
      //   <Animated.View
      //   style={{
      //     opacity: this.state.fadeAnim,         // Bind opacity to animated value
      //   }}>
      //   <Image resizeMode={'contain'}  source={require('../../statics/honey2.png')} style={{width:0.28*Dimensions.get('window').height, height:0.28*Dimensions.get('window').height}}/>
      //   </Animated.View>
      //   {/* <View style={{height:0.24*Dimensions.get('window').height, width:0.24*Dimensions.get('window').height, backgroundColor:'#ffcc80', borderRadius:0.12*Dimensions.get('window').height}}/> */}
      // </View> )
      }

      else if (this.props.detailId == 5){
        this.spring(0.94)
        this.fo()
        // this.fadeIn(this.state.fadeAnim)
        return(
          <View style={{alignItems:'center', marginBottom:45, justifyContent:'center', width:0.25*Dimensions.get('window').height, height:0.25*Dimensions.get('window').height, flex:1}}>
             <Animated.View
            style={{
              opacity: this.state.fadeAnim,         // Bind opacity to animated value
        }}>
            <Text style={{fontSize:15, fontFamily:'Vazir-Bold-FD',textAlign:'center', textAlignVertical:'center'}}>{this.state.detailes[this.props.detailId]}</Text>
            {/* <Image resizeMode={'contain'}  source={require('../../statics/honey2.png')} style={{width:0.28*Dimensions.get('window').height, height:0.28*Dimensions.get('window').height}}/> */}
            {/* <View style={{height:0.24*Dimensions.get('window').height, width:0.24*Dimensions.get('window').height, backgroundColor:'#ffcc80', borderRadius:0.12*Dimensions.get('window').height}}/> */}
            </Animated.View>

          </View> )
      }
      else if (this.props.detailId == 4){
        this.spring(0.96)
        
        this.fadeIn(this.state.fadeAnim)
        return(
          <View style={{alignItems:'center', marginBottom:45, justifyContent:'center', width:0.25*Dimensions.get('window').height, height:0.25*Dimensions.get('window').height, flex:1}}>
             <Animated.View
            style={{
              opacity: this.state.fadeAnim,         // Bind opacity to animated value
        }}>
            <Text style={{fontSize:15, fontFamily:'Vazir-Bold-FD',textAlign:'center', textAlignVertical:'center'}}>{this.state.detailes[this.props.detailId]}</Text>
            {/* <Image resizeMode={'contain'}  source={require('../../statics/honey2.png')} style={{width:0.28*Dimensions.get('window').height, height:0.28*Dimensions.get('window').height}}/> */}
            {/* <View style={{height:0.24*Dimensions.get('window').height, width:0.24*Dimensions.get('window').height, backgroundColor:'#ffcc80', borderRadius:0.12*Dimensions.get('window').height}}/> */}
            </Animated.View>

          </View> )
      }
      else if (this.props.detailId == 3){
        this.spring(0.98)
        
        this.fadeIn(this.state.fadeAnim)
        return(
          <View style={{alignItems:'center', marginBottom:45, justifyContent:'center', width:0.25*Dimensions.get('window').height, height:0.25*Dimensions.get('window').height, flex:1}}>
             <Animated.View
            style={{
              opacity: this.state.fadeAnim,         // Bind opacity to animated value
        }}>
            <Text style={{fontSize:15, fontFamily:'Vazir-Bold-FD',textAlign:'center', textAlignVertical:'center'}}>{this.state.detailes[this.props.detailId]}</Text>
            {/* <Image resizeMode={'contain'}  source={require('../../statics/honey2.png')} style={{width:0.28*Dimensions.get('window').height, height:0.28*Dimensions.get('window').height}}/> */}
            {/* <View style={{height:0.24*Dimensions.get('window').height, width:0.24*Dimensions.get('window').height, backgroundColor:'#ffcc80', borderRadius:0.12*Dimensions.get('window').height}}/> */}
            </Animated.View>

          </View> )
      }
      else{
        this.fadeIn(this.state.fadeAnim)
        return(
          <View style={{alignItems:'center', marginBottom:45, justifyContent:'center', width:0.25*Dimensions.get('window').height, height:0.25*Dimensions.get('window').height, flex:1}}>
             <Animated.View
            style={{
              opacity: this.state.fadeAnim,         // Bind opacity to animated value
        }}>
            <Text style={{fontSize:15, fontFamily:'Vazir-Bold-FD',textAlign:'center', textAlignVertical:'center'}}>{this.state.detailes[this.props.detailId]}</Text>
            {/* <Image resizeMode={'contain'}  source={require('../../statics/honey2.png')} style={{width:0.28*Dimensions.get('window').height, height:0.28*Dimensions.get('window').height}}/> */}
            {/* <View style={{height:0.24*Dimensions.get('window').height, width:0.24*Dimensions.get('window').height, backgroundColor:'#ffcc80', borderRadius:0.12*Dimensions.get('window').height}}/> */}
            </Animated.View>

          </View> )
      }
    }
    else{
      
      if (!this.props.startedValue)
      {
        // this.fadeIn(this.state.fadePie)
        this.fadeOut(this.state.fadeAsaly)
        // this.fadeIn(this.state.fadePie)
        this.spring2()
      }
      return(
       
        <View style={{padding:0,paddingBottom:0,marginBottom:40}}>
        
        <Text style={styles.progressBarTime}>{Math.trunc((this.props.counter)/60)}' {('0'+(this.props.counter)%60).slice(-2)}''</Text>        
        <TouchableOpacity activeOpacity={0.85}  style={{paddingRight:12,paddingLeft:12,paddingBottom:30}} onPress={()=>{
        if (!this.props.startedValue)
        {this.startTimer(this.props.counter)}
         else if (this.props.startedValue)
         {this.stopTimer()}
       }}>

       
        
       

        <Animated.View style={{opacity:this.state.fadePie}}>
        <Progress.Pie size={(0.24*Dimensions.get('window').height)} progress={this.props.progressNumber} color={"#ffcc80"} borderColor={"#fff"} unfilledColor={"#ffb100"}>
        {this.startOrStopIcon()}
        <Text></Text>
        </Progress.Pie>
        </Animated.View>

      
        <Animated.Image
          resizeMode={'contain'}  source={require('../../statics/honey2.png')} style={{opacity:this.state.fadeAsaly,position:'absolute',width:0.28*Dimensions.get('window').height, height:0.28*Dimensions.get('window').height}}/>
       
        
       



     </TouchableOpacity>
 
     </View>

     )
    }
  }

  notif(remainTime){
    PushNotification.localNotificationSchedule({
      message: "تخم مرغ شما آماده است . نوش جان", // (required)
      date: new Date(Date.now() + (remainTime * 1000)), // in 60 secs
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      autoCancel: true, // (optional) default: true
      
      
    });
  }

  notif1(remainTime){
    // var a= new Date(Date.now()+ remainTime*1000 )
    var a = this.props.finishingTime
    PushNotification.localNotification({
      /* Android Only Properties */
      // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      // ticker: "My Notification Ticker", // (optional)
      // autoCancel: true, // (optional) default: true
      largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
      // subText: "This is a subText", // (optional) default: none
      color: "white", // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      // tag: 'some_tag', // (optional) add tag to message
      // group: "group", // (optional) add group to message
      // ongoing: false, // (optional) set whether this is an "ongoing" notification
  
      /* iOS and Android properties */
      title: "Egg Timer", // (optional)
      message: "  تخم مرغ شما در "+ a.getHours() + ":" +a.getMinutes() + ":"+a.getSeconds() + " آماده میشود ", // (required)
      // playSound: false, // (optional) default: true
      // soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      // number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
      // repeatType: 'day', // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
      // actions: '["باشه"]',  // (Android only) See the doc for notification actions to know more
  });
  }


  setFinishingTime(){
    var time = new Date(Date.now() + this.props.counter*1000)
    this.props.saveFinishingTime(time)
  }

  fadeIn(val){
    val.setValue(0)
    Animated.timing(                  // Animate over time
      val,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 400,              // Make it take a while
      }
    ).start();
  }

  fadeOut(val){
    // val.setValue(1)
    Animated.timing(                  // Animate over time
      val,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 400,              // Make it take a while
      }
    ).start();
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
      if (this.props.startedValue){
      this.notif1(this.props.counter)
      this.notif(this.props.counter)
      }
      // if (this.props.startedValue){
      //   this.saveData()
      // }
      // this.saveData()
    }
    else if (nextAppState == "active"){
      // this.onResume()
      PushNotification.cancelAllLocalNotifications()
      this.getData()
      
    }
  }


  onPause(){
    
    this.props.inBackground()
    this.pauseTimer()
    // this.setState({notification:NotificationsAndroid.localNotification({
    //   title: "Egg timer",
    //   body: " we will alarm you when your egg is ready! ",
    //   extra: "data",
    //   category: "interactiveNotification"

    // })})
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
  

  spring (val) {
    this.state.springValue.setValue(1)
    Animated.spring(
      this.state.springValue,
      {
        toValue: val,
        // friction: 4,
        velocity:0,
        // tension:5,
        speed:10,
        bounciness:3
      }
    ).start()
  }



  spring2(){

    // this.state.springValue.setValue(0.8)
    Animated.spring(
      this.state.springValue,
      {
        toValue: 1,
        // friction: 4,
        velocity:0,
        // tension:5,
        speed:10,
        bounciness:3
      }
    ).start()

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
    RNAlarm.setAlarm('1523644752586',
    'Meeting with customer',
    '', 
    '',
 () => {
   // Success callback function
 },
 () => {
   // Fail callback function
 });

    if(!this.props.startedValue)
    this.setFinishingTime()

    this.saveData()
    // this.props.inForeground()
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

  stopTimer(jahesh=1){
    
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

          
      <View>
       <View style={{justifyContent:'flex-end', alignItems:'center', flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={()=>{this.props.dialog()}}>
        <Icon name={'help'} size={40} style={{margin:15, marginLeft:5}} color={'#aaaaaa'}/>
        </TouchableWithoutFeedback>
      </View>
        
        <View style={{alignItems:'center', justifyContent:'center'}}>  
        <Animated.View style={{transform: [{scale: this.state.springValue}] }}>
        <ImageBackground resizeMode={'contain'} source={require('../../statics/egg_main.png')} style={{paddingTop:0, paddingBottom:0,justifyContent:'flex-end', alignItems:'center',  width:  Dimensions.get('window').width, height:(0.5*Dimensions.get('window').height)}}>
          
          {this.showDetail()} 
        </ImageBackground>
        </Animated.View>
       

        
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
    progressNumber: state.progressNumber,
    finishingTime : state.finishingTime,
    longPressed : state.longPressed,
    detailId : state.detailId
    
  }
}

export default connect(mapStateToProps, actions)(Timer)

