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
} from 'react-native';
import {connect} from 'react-redux'
import styles from '../../appStyle/styleSheet.js'
import * as actions from '../actions'
import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Storage from 'react-native-storage'
import myStyle from '../../appStyle/style.js'
var PushNotification = require('react-native-push-notification');


const storage = new Storage({
  size:20,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true
})

const springValue = new Animated.Value(1)

PushNotification.configure({
      onRegister: function(token) {
          console.log( 'TOKEN:', token );
      },
        onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );  
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
      '  دمای اولیه آب :\n\n بین 60 تا 100 درجه سانتیگراد'
      ,
      '  دمای اولیه آب :\n\n بین 27 تا 60 درجه سانتیگراد'
      ,
      '  دمای اولیه آب :\n\n  حدود 27 درجه سانتیگراد'
      ,
      '  دمای اولیه آب :\n\n  حدود ۴ درجه سانتیگراد'
      ,
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
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    this.pauseTimer()
    // this.saveData()
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
                {this.stopTimer()}
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
                {this.stopTimer()}
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
                {this.stopTimer()}
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
                      {console.log(this.state.eggImages[this.state.detailId]) }

        
      }
      console.log(this.props.detailId) 

      return(
        <View style={{marginBottom : myStyle.progressBar_PaddingB}}>
          <Text style={styles.progressBarTime}>{Math.trunc((this.props.counter)/60)}' {('0'+(this.props.counter)%60).slice(-2)}''</Text>        
          <TouchableOpacity activeOpacity={0.85}  style={{padding:14 ,paddingBottom:myStyle.paddingTouch, paddingTop:0}} onPress={()=>{
          if (!this.props.startedValue)
          {this.startTimer(this.props.counter)}
          else if (this.props.startedValue)
          {this.stopTimer()}
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
      message: "تخم مرغ شما آماده است . نوش جان", // (required)
      date: new Date(Date.now() + (remainTime * 1000)), // in 60 secs
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      autoCancel: true, // (optional) default: true
      playSound: true, // (optional) default: true
      vibration: 600, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      
      soundName: 'chicken', // (optional) Sound to play when the notification is shown. Value of 'default' pl
      
      
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
      largeIcon: "ic_launcher",
      smallIcon: "ic_notification", 
      color: "white", 
      autoCancel: false,  
      vibrate: true, 
      vibration: 300,
      title: "Egg Timer",
      // message: "  تخم مرغ شما در "+ a.getHours() + ":" +a.getMinutes() + ":"+a.getSeconds() + " آماده میشود ", // (required)
      message : !b ? " تخم مرغ شما حدود " + Math.trunc(this.props.counter/60) + " دقیقه دیگر آماده میشود " : "کمتر از یک دقیقه دیگر تخم مرغ شما آماده میشود",
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
        toValue: 1,           
        duration: 400,             
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
  
  saveData() {
    storage.save({
      key: 'TIMES', 
      data: { 
        time: this.props.time,
        current_time: Date.now(),
        seconds_remaining: this.props.counter
      },
      expires: 1000 * 3600
    }).then((rett)=>{console.log(rett)});    
  }

  getData(){
    console.log('getting data ...')
      storage.load({key:'TIMES',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {
        },
        someFlag: true}}).then((ret)=>{this.onResume(ret);console.log(ret)}).catch(err => {
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

  


  startTimer(time){

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
      return(<Icon name={'stop'} style={{position:'absolute', color:'white'}} size={myStyle.START_OR_STOP_ICON}/>)  
    
    }
    else 
    return(<Icon name={'play-arrow'} style={{position:'absolute', color:'white'}} size={myStyle.START_OR_STOP_ICON}/>)    
  }
  

  pauseTimer(){
    for(timer in this.state.timers) clearInterval( this.state.timers[timer] )

  }

  stopTimer(jahesh=1){
    PushNotification.cancelAllLocalNotifications()
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
       
        
        <View style={{alignItems:'center', justifyContent:'center'}}>  
        <Animated.View style={{transform: [{scale: this.state.springValue}] }}>
        <ImageBackground resizeMode={'contain'} source={require('../../statics/egg_main.png')} style={{marginTop:myStyle.EGG_MARGIN_TOP,justifyContent:'flex-end', alignItems:'center',  width:  Dimensions.get('window').width, height:(0.5*Dimensions.get('window').height)}}>
          {this.showDetail()} 
        </ImageBackground>
        </Animated.View>
        {/* <Image resizeMode={'contain'} source = {require('../../statics/egg_main.png')} style={{position:'absolute',paddingTop:0, paddingBottom:0, width:  Dimensions.get('window').width, height:(0.5*Dimensions.get('window').height)}}/> */}
       

        
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

