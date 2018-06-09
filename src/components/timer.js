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
  ImageBackground,
  Dimensions,
  Animated,
  Image,
  AppState,
  AsyncStorage,
  YellowBox
} from 'react-native';
import {connect} from 'react-redux'
import styles from '../../appStyle/styleSheet.js'
import * as actions from '../actions'
import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Storage from 'react-native-storage'
import myStyle from '../../appStyle/style.js'
var PushNotification = require('react-native-push-notification');
var Sound = require('react-native-sound');
Sound.setCategory('Playback');
var whoosh = new Sound('chicken.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }})
whoosh.setVolume(0.9);
  // loaded successfully

const storage = new Storage({
  size:60,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true
})


const springValue = new Animated.Value(1)

PushNotification.configure({
      onRegister: function(token) {
          // console.log( 'TOKEN:', token );
      },
        onNotification: function(notification) {
          // console.log( 'NOTIFICATION:', notification ); 
      },
      popInitialNotification: true,
      requestPermissions: true,
  });


// async function getiOSNotificationPermission() {     // for alarm
//   const { status } = await Permissions.getAsync(
//     Permissions.NOTIFICATIONS
//   );
//   if (status !== 'granted') {
//     await Permissions.askAsync(Permissions.NOTIFICATIONS);
//   }
// }

class Timer extends Component<{}> {
  constructor(props){
    super(props)

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillUpdate is deprecated',
      'Warning: Timer is accessing findNodeHandle'
    ]);

    this.state={
      url:'../../statics/honey2.png',
      time:this.props.timerTime,
      shownTime:this.props.counter,
      backgroundColor:'white',
      timers:[],
      paused:true,
      stoped:true,
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
      '  سایز تخم مرغ :\n\n بین 55 تا 60 گرم'
      ,
      '  سایز تخم مرغ :\n\n بین 50 تا 55 گرم'
      ,
      '  سایز تخم مرغ :\n\n بین 30 تا 50 گرم'
      ,
      '  دمای اولیه آب :\n\n 60-100 °C'
      ,
      '  دمای اولیه آب :\n\n 27-60 °C'
      ,
      '  دمای اولیه آب :\n\n 27°C حدود'
      ,
      '  دمای اولیه آب :\n\n  حدود ۴ درجه سانتیگراد'
      ,
      '  دمای اولیه تخم مرغ :\n\n در یخجال'
      ,
      '  دمای اولیه تخم مرغ :\n\n در دمای اتاق'
      ],
      detailId:0,
      eggImages : ['../../statics/honey2.png', '../../statics/semi_soft2.png'],
      fadeAnim : new Animated.Value(1),
      fadeinMain : new Animated.Value(0),
      fadeAsaly : new Animated.Value(0),
      fadePie : new Animated.Value(1),
      springValue : new Animated.Value(1)
    }
}

  componentDidMount(){
    AppState.addEventListener('change', this._handleAppStateChange);
    this.props.onRef(this)

    // this.getData()
    // this.startTimer(this.props.counter)
    // console.log('initial data is got')
    // Alert.alert('hi')
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    this.props.onRef(undefined)
    this.pauseTimer()
    // this.saveData()
  }

  playSound(){
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        // reset the player to its uninitialized state (android only)
        // this is the only option to recover after an error occured and use the player again
        whoosh.reset();
      }
    });
  }

  fo(){
      // val.setValue(1)
      Animated.timing(                  
        this.state.fadePie, 
        {
          toValue: 0,
          duration: 1000,
        }
      ).start(()=> {this.fadeIn(this.state.fadeAnim)} );
    }
  

    // foo(){
    //   this.setState({url:})
    // }

  showDetail(){

    if(this.props.longPressed){
      if (this.props.detailId == 5){
        this.spring(0.94)
        this.fadeIn(this.state.fadeAnim)
        return(
          <View style={{alignItems:'center', marginBottom: myStyle.DETAIL_TEXT_MARGIN_BOTTOM, justifyContent:'center', flex:1}}>
            <Animated.View style={{ opacity: this.state.fadeAnim }}>
                <Text style={styles.detailInEgg}>{this.state.detailes[this.props.detailId]}</Text>
            </Animated.View>
          </View> 
            )
      }
      else if (this.props.detailId == 4){
        this.spring(0.975)
        this.fadeIn(this.state.fadeAnim)
        return(
          <View style={{alignItems:'center', marginBottom: myStyle.DETAIL_TEXT_MARGIN_BOTTOM, justifyContent:'center', flex:1}}>
            <Animated.View style={{ opacity: this.state.fadeAnim }}>
              <Text style={styles.detailInEgg}>{this.state.detailes[this.props.detailId]}</Text>
            </Animated.View>
        </View> 
        )
      }
      else if (this.props.detailId == 3){
        this.spring(1.07)
        this.fadeIn(this.state.fadeAnim)
        return(
          <View style={{alignItems:'center', marginBottom: myStyle.DETAIL_TEXT_MARGIN_BOTTOM, justifyContent:'center', flex:1}}>
            <Animated.View style={{ opacity: this.state.fadeAnim }}>
              <Text style={styles.detailInEgg}>{this.state.detailes[this.props.detailId]}</Text>
            </Animated.View>
          </View> 
          )
      }

      else if (this.props.detailId == 2){
        this.fadeIn(this.state.fadeAsaly)
        return(
          <View style={{marginBottom : myStyle.progressBar_PaddingB }}>
            <Text style={styles.progressBarTime}> {Math.trunc((this.props.counter)/60)}' {('0'+(this.props.counter)%60).slice(-2)}'' </Text>        
            <TouchableOpacity activeOpacity={0.85}  style={{padding:14, paddingBottom:myStyle.paddingTouch, paddingTop:0}} onPress={()=>{
              if (!this.props.startedValue)
                {this.startTimer(this.props.counter)}
              else if (this.props.startedValue)
                {this.props.dialogStop()}//this.stopTimer()
              }}>
              <Animated.View style={{opacity:this.state.fadePie}}>
                <Progress.Pie size={myStyle.PIE_WIDTH} progress={this.props.progressNumber} color={myStyle.FILLED_PIE_COLOR} borderColor={myStyle.BORDER_PIE_COLOR} unfilledColor={myStyle.UNFILLED_PIE_COLOR}>
                  {this.startOrStopIcon()}
                  <Text></Text> 
                </Progress.Pie>
              </Animated.View>
              <Animated.Image
                resizeMode={'contain'}  
                source={require('../../statics/honey2.png')}
                style={{marginTop:myStyle.ASALY_MARGIN_TOP,opacity:this.state.fadeAsaly, position:'absolute', alignSelf:'center', width : myStyle.ASALY_WIDTH, height : myStyle.ASALY_WIDTH}}/>
            </TouchableOpacity>
          </View>
        )
      }

      else if (this.props.detailId == 1){
        this.fadeIn(this.state.fadeAsaly)
        return(
          <View style={{marginBottom : myStyle.progressBar_PaddingB }}>
            <Text style={styles.progressBarTime}> {Math.trunc((this.props.counter)/60)}' {('0'+(this.props.counter)%60).slice(-2)}'' </Text>        
            <TouchableOpacity activeOpacity={0.85}  style={{padding:14, paddingBottom:myStyle.paddingTouch, paddingTop:0}} onPress={()=>{
              if (!this.props.startedValue)
                {this.startTimer(this.props.counter)}
              else if (this.props.startedValue)
                {this.props.dialogStop()}
              }}>
              <Animated.View style={{opacity:this.state.fadePie}}>
                <Progress.Pie size={myStyle.PIE_WIDTH} progress={this.props.progressNumber} color={myStyle.FILLED_PIE_COLOR} borderColor={myStyle.BORDER_PIE_COLOR} unfilledColor={myStyle.UNFILLED_PIE_COLOR}>
                  {this.startOrStopIcon()}
                  <Text></Text> 
                </Progress.Pie>
              </Animated.View>
              <Animated.Image
                resizeMode={'contain'}  
                source={require('../../statics/semi_soft2.png')} 
                style={{marginTop:myStyle.ASALY_MARGIN_TOP,opacity:this.state.fadeAsaly, position:'absolute', alignSelf:'center', width : myStyle.ASALY_WIDTH, height : myStyle.ASALY_WIDTH}}/>
            </TouchableOpacity>
          </View>
        )
      }

      else if (this.props.detailId == 0){
        this.fadeIn(this.state.fadeAsaly)
        return(
          <View style={{marginBottom : myStyle.progressBar_PaddingB }}>
            <Text style={styles.progressBarTime}> {Math.trunc((this.props.counter)/60)}' {('0'+(this.props.counter)%60).slice(-2)}'' </Text>        
            <TouchableOpacity activeOpacity={0.85}  style={{padding:14, paddingBottom:myStyle.paddingTouch, paddingTop:0}} onPress={()=>{
              if (!this.props.startedValue)
                {this.startTimer(this.props.counter)}
              else if (this.props.startedValue)
                {this.props.dialogStop()}
              }}>
              <Animated.View style={{opacity:this.state.fadePie}}>
                <Progress.Pie size={myStyle.PIE_WIDTH} progress={this.props.progressNumber} color={myStyle.FILLED_PIE_COLOR} borderColor={myStyle.BORDER_PIE_COLOR} unfilledColor={myStyle.UNFILLED_PIE_COLOR}>
                  {this.startOrStopIcon()}
                  <Text></Text> 
                </Progress.Pie>
              </Animated.View>
              <Animated.Image
                resizeMode={'contain'}  
                source={require('../../statics/hard.png')} 
                style={{marginTop:myStyle.ASALY_MARGIN_TOP,opacity:this.state.fadeAsaly, position:'absolute', alignSelf:'center', width : myStyle.ASALY_WIDTH, height : myStyle.ASALY_WIDTH}}/>
            </TouchableOpacity>
          </View>
        )
      }

      else{
        this.fadeIn(this.state.fadeAnim)
        return(
          <View style={{alignItems:'center', marginBottom: myStyle.DETAIL_TEXT_MARGIN_BOTTOM, justifyContent:'center', flex:1}}>
            <Animated.View style={{opacity: this.state.fadeAnim}}>
              <Text style={styles.detailInEgg}>{this.state.detailes[this.props.detailId]}</Text>
            </Animated.View>
          </View> 
          )
      }
    }
    else{
      
      if (!this.props.startedValue){
        this.fadeOut(this.state.fadeAsaly)
        this.spring2()
        
      }
      // console.log(this.props.detailId) 

      return(
        <View style={{marginBottom : myStyle.progressBar_PaddingB}}>
          <Text style={styles.progressBarTime}>{Math.trunc((this.props.counter)/60)}' {('0'+(this.props.counter)%60).slice(-2)}''</Text>        
          <TouchableOpacity activeOpacity={0.85}  style={{padding:14 ,paddingBottom:myStyle.paddingTouch, paddingTop:0}} onPress={()=>{
          if (!this.props.startedValue)
          {this.startTimer(this.props.counter)}
          else if (this.props.startedValue)
          {this.props.dialogStop()}
        }}>
            <Animated.View style={{opacity:this.state.fadePie}}>
              <Progress.Pie 
              size={myStyle.PIE_WIDTH} 
              progress={this.props.progressNumber} 
              color={myStyle.FILLED_PIE_COLOR} 
              borderColor={myStyle.BORDER_PIE_COLOR} 
              unfilledColor={myStyle.UNFILLED_PIE_COLOR}
              >
                {this.startOrStopIcon()}
                <Text></Text>
              </Progress.Pie>
            </Animated.View>
            <Animated.Image
              resizeMode={'contain'}  
              // source={require('../../statics/semi_soft2.png')}
              source={[require('../../statics/hard.png'), require('../../statics/semi_soft2.png'), require('../../statics/honey2.png') ][this.props.detailId ]}
              style={{marginTop:myStyle.ASALY_MARGIN_TOP,opacity:this.state.fadeAsaly, alignSelf:'center',position:'absolute',width:myStyle.ASALY_WIDTH, height:myStyle.ASALY_WIDTH}}
              />

          </TouchableOpacity>
     </View>
     )
    }
  }

  notif(remainTime){
    PushNotification.localNotificationSchedule({
      id : '0',
      message: "تخم مرغ شما  است . نوش جان", // (required)
      date: new Date(Date.now() + (remainTime * 1000)), // in 60 secs
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      autoCancel: false, // (optional) default: true
      playSound: true, // (optional) default: true
      vibration: 600, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      soundName: 'chicken1', // (optional) Sound to play when the notification is shown. Value of 'default' pl
      color: "white", 
      
    });
  }

  notif1(remainTime){
    // var a= new Date(Date.now()+ remainTime*1000 )
    var a = this.props.finishingTime
    var b = false
    if (this.props.counter < 60){
      b = true
    }
    PushNotification.localNotification({
      id : '0',
      largeIcon: "ic_launcher",
      smallIcon: "ic_notification", 
      color: "white", 
      autoCancel: true,  
      vibrate: true, 
      ongoing:true,
      vibration: 300,
      title: "تخم مرغی",
      // message: "  تخم مرغ شما در "+ a.getHours() + ":" +a.getMinutes() + ":"+a.getSeconds() + " آماده میشود ", // (required)
      message : !b ? " تخم مرغ شما حدود " + Math.trunc(this.props.counter/60) + " دقیقه دیگر آماده میشود " : "کمتر از یک دقیقه دیگر تخم مرغ شما آماده میشود",
      bigText: "زمان پایان : "+ a.getHours() + ":" +a.getMinutes() + ":"+a.getSeconds(),
      number: '0',
      playSound: true, 
      soundName: 'default', 
      
    });
  }

  setFinishingTime(){
    var time = new Date(Date.now() + this.props.counter*1000)
    this.props.saveFinishingTime(time)
  }

  fadeIn(val){
    val.setValue(0)
    Animated.timing(                  
      val,            
      {
        toValue: 2,           
        duration: 1000,             
      }
    ).start();
  }

  fadeOut(val){
    // val.setValue(1)
    Animated.timing(                  
      val,          
      {
        toValue: 0,                  
        duration: 400,  
      }
    ).start();
  }

  

  saveVoted(bool){
    storage.save({
      key: 'VOTED', 
      data: bool ,
      expires: null
    }).then((rett)=>{});  
  }

  getVoted(){
    // console.log('getting data ...')
      storage.load({key:'VOTED',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {
        },
        someFlag: true}}).then((ret)=>{if (ret){console.log('he has voted') 
;          } else {this.props.dialogNazar(); this.saveVoted(true)}}).catch(err => {
          this.saveVoted(true)
          console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
            this.props.dialogNazar()
                break;
              case 'ExpiredError':
              this.props.dialogNazar()
              break;
        }
      }
    )

  }

  saveStatus(){

var data= { 
    factorEggStatus:this.props.factorEggStatus,
    factorSize: this.props.factorSize,
    factorWaterStatus: this.props.factorWaterStatus,
    sangi: this.props.sangi,
    pokhte: this.props.pokhte,
    asaly: this.props.asaly,
    bozorg: this.props.bozorg,
    motevasset: this.props.motevasset,
    kouchak: this.props.kouchak,
    joush: this.props.joush,
    dagh: this.props.dagh,
    velarm: this.props.velarm,
    sard: this.props.sard,
    fridge : this.props.fridge,
    room : this.props.room,
    factorEggTemp : this.props.factorEggTemp,
}
    storage.save({
      key: 'STATUS', 
      data: data,
      expires: 1000 * 3600
    }).then((rett)=>{console.warn("the saved data --> ", data)
  });    
  }

  getStatus(){
    // console.log('getting data ...')
      storage.load({key:'STATUS',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {
        },
        someFlag: true}}).then((ret)=>{this.props.set_status(ret)}).catch(err => {
        
        
      //   .then((ret1)=>{storage.load({key:'INITIALS',
      // autoSync: true,
      // syncInBackground: true,
      // syncParams: {
      //   extraFetchOptions: {
      //   },
      //   someFlag: true}})})
        
        
          console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
              // this.onResume({ time: this.props.time, current_time: 0, seconds_remaining: 0}) 
                break;
              case 'ExpiredError':
                // this.onResume({ time: this.props.time, current_time: 0, seconds_remaining: 0}) 
              break;
        }
      }
    )
  }
  

  saveData() {
    storage.save({
      key: 'TIMES', 
      data: { 
        time: this.props.time,
        current_time: Date.now(),
        seconds_remaining: this.props.counter,
        wasInBackground : true,
        startedValue : this.props.startedValue,
        progressNumber : this.props.progressNumber,
        factorEggStatus: this.props.factorEggStatus,
        factorSize : this.props.factorSize,
        factorWaterStatus : this.props.factorWaterStatus,
        factorEggTemp : this.props.factorEggTemp,
        
      },
      expires: 1000 * 3600
    }).then((rett)=>{console.log(rett)});    
  }

  getData(){
    // console.log('getting data ...')
      storage.load({key:'TIMES',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {
        },
        someFlag: true}}).then((ret)=>{this.onResume(ret)}).catch(err => {
        
        
      //   .then((ret1)=>{storage.load({key:'INITIALS',
      // autoSync: true,
      // syncInBackground: true,
      // syncParams: {
      //   extraFetchOptions: {
      //   },
      //   someFlag: true}})})
        
        
          console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
              this.onResume({ time: this.props.time, current_time: 0, seconds_remaining: 0}) 
                break;
              case 'ExpiredError':
                this.onResume({ time: this.props.time, current_time: 0, seconds_remaining: 0}) 
              break;
        }
      }
    )
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
    }
    else if (nextAppState == "active"){
      PushNotification.cancelAllLocalNotifications()
      this.getData()
    }
  }

  onPause(){
    this.props.inBackground()
    this.pauseTimer()
  }

  getStatusPromise(){
    return new Promise((resolve, reject) => {
      this.getStatus()
      resolve('statuses loaded')
    });
  }

  load(times, diff){
    return new Promise((resolve, reject) => {
      
      this.props.setProgressNumber(times.progressNumber)
      this.pauseTimer()
      this.props.setCounter(times.seconds_remaining ,diff, times.time)
      resolve('loaded')
    });
  }

  saveStatusPromise(){
    return new Promise((resolve, reject) => {
      
      this.props.setProgressNumber(times.progressNumber)
      this.pauseTimer()
      this.props.setCounter(times.seconds_remaining ,diff, times.time)
      resolve('loaded')
    });
  }

  onResume(times= { time: this.props.time, current_time: 0, seconds_remaining: 0, wasInBackground:true, startedValue:false, progressNumber:0, factorEggStatus:0, factorSize:1, factorWaterStatus:3, factorEggTemp:1}) 
   {
    if ((this.props.wasInBackground && this.props.startedValue) || (times.wasInBackground && times.startedValue)){
      var diff = Date.now() - times.current_time
      // console.log('the diff is ' + diff)
      if ( (Math.round(diff/1000) >= times.seconds_remaining) && (times.wasInBackground && times.startedValue)) 
        { 
        if(this.props.startedValue) {this.stopTimer(); this.props.dialog()}
        else{
          // Stora
          //   this.props.dialogNazar()
          //   this.props.voted(true)
          //   //save to storage 
          this.getVoted()
        }
        }       
      else {
        console.warn('now saved')
        this.getStatusPromise().then(()=>this.load(times, diff)).then(()=>{this.startTimer(this.props.counter)})
      }      
      this.props.inForeground()
    }
    this.props.inForeground()
    // console.log('resume  '+'background? = '+ this.props.wasInBackground +' startedValue = '+this.props.startedValue)
  }
  

  spring (val) {
    springValue.setValue(1)
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

    // this.state.springValue.setValue(0)
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

  disableItems(){
    return new Promise((resolve, reject) => {
      this.props.disableWhenStarted()
      resolve('disabled')
    });
  }

  


  startTimer(time){

    if(!this.props.startedValue)
    this.setFinishingTime()
    //this.saveStatus()
    this.saveData()
    // this.props.inForeground()
    this.props.started();
    // if (!this.props.wasInBackground)
    console.warn(this.props.wasInBackground)
      
    this.disableItems().then(()=>{this.saveStatus()})

      

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
      if (counter == 0) this.props.calculateLastProgressNumber()
      else this.props.calculateProgressNumber()
      // console.log(this.state.shownTime)
      if (counter <=0) {clearInterval(a);this.setState({ backgroundColor : 'rgb(255,255,60)' , paused:true, shownTime:0});     this.props.dialog(); this.playSound()
      ;this.stopTimer();this.props.calculateTime();this.props.stoped()}
      else this.setState((ps)=>{return({ shownTime:ps.shownTime -1 })}) 
    
      
    } , 1000)
    this.state.timers.push(a)
    //this.setState({backgroundColor:"green"})
}
  

  startOrStopIcon(){
    if (this.props.startedValue){
      // return(<Image source={require('../../statics/stop.png')} style={{width:50,height:50, position:'absolute'}} resizeMode={'contain'}/>
      return(<Icon name={'stop'} style={{position:'absolute', color:'white'}} size={myStyle.START_OR_STOP_ICON}/>)  
    
    }
    else 
    return(<Icon name={'play-arrow'} style={{position:'absolute', color:'white'}} size={myStyle.START_OR_STOP_ICON}/>)    
  }
  

  pauseTimer(){
    for(timer in this.state.timers) clearInterval( this.state.timers[timer] )

  }

  promiseStopTimer(){
    return new Promise((resolve, reject) => {
      this.props.stoped()
      resolve('loaded')
    });
  }

  stopTimer(jahesh=1){
    PushNotification.cancelAllLocalNotifications()
    for(timer in this.state.timers) clearInterval( this.state.timers[timer] )
    this.setState({shownTime:this.props.timerTime}) 
    this.setState({paused:true,stoped:true, backgroundColor:'white'})   
    this.promiseStopTimer().then(()=>{this.props.enableWhenStoped()})
    
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
    var timeee = this.state.stoped ? ("0"+Math.trunc(this.props.timerTime%60)).slice(-2) : ("0"+Math.trunc(this.state.shownTime%60)).slice(-2) 
    return (
      <View>
        <View style={{alignItems:'center', justifyContent:'center'}}>  
          <Animated.View style={{transform: [{scale: this.state.springValue}] }}>
            <ImageBackground resizeMode={'contain'} source={require('../../statics/egg_main1.png')} style={{marginBottom:10, marginTop:myStyle.EGG_MARGIN_TOP,justifyContent:'flex-end', alignItems:'center',  width:  Dimensions.get('window').width, height:(0.40*Dimensions.get('window').height)}}> 
              
              {this.showDetail()} 
              {/* <View style={{flexDirection:'column', position:'absolute', marginBottom:50, alignSelf:'flex-start'}}> */}
              {/* <View style={{backgroundColor:'#ffb100',  width:20, height : 60, margin:5}}>
                <Text> دمای اتاق</Text>
              </View> */}
              {/* <Image source={require('../../statics/room.png')} style={{width:40, height:40, margin:15}}/> */}
              {/* <Image source={require('../../statics/cold.png')} style={{width:40, height:40, margin:15}}/> */}

              {/* <View style={{backgroundColor:'blue', width:20, height : 60, margin:5}}/> */}
              {/* </View> */}
            </ImageBackground>
          </Animated.View>
        </View>
      </View>
    );
  }
}


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
    detailId : state.detailId,
    eggStatusList : state.eggStatusList,
    eggSizeList : state.eggSizeList,
    waterStatusList : state.waterStatusList,
    votedBool : state.votedBool,
    factorEggStatus:state.factorEggStatus,
    factorSize: state.factorSize,
    factorWaterStatus: state.factorWaterStatus,
    sangi: state.sangi,
    pokhte: state.pokhte,
    asaly: state.asaly,
    bozorg: state.bozorg,
    motevasset: state.motevasset,
    kouchak: state.kouchak,
    joush: state.joush,
    dagh: state.dagh,
    velarm: state.velarm,
    sard: state.sard,
    fridge : state.fridge,
    room : state.room,
    factorEggTemp : state.factorEggTempf

    
  }
}

export default connect(mapStateToProps, actions)(Timer)

