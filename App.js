import Timer from './src/components/timer.js'
import React, { Component } from 'react';
import {Linking, View, StatusBar, TouchableWithoutFeedback,ImageBackground, Button, Image, Text, TouchableNativeFeedback, PixelRatio, ScrollView, Dimensions, Alert} from 'react-native'
import RadioGroup from 'react-native-custom-radio-group';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './src/reducers/timerReducer'
import Choices from './src/components/choices.js'
import ProgressBar from './src/components/progressBar'
import PopupDialog , {DialogButton, SlideAnimation, ScaleAnimation} from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './appStyle/styleSheet.js'
import myStyle from './appStyle/style.js'
import { started } from './src/actions/index';
// import {storage} from './src/components/timer'
var PushNotification = require('react-native-push-notification');



const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});


class Io extends Component<{}>{
  constructor(props){
    super(props)
    this.state={inputTime:200, es1:0, s1:0, ws1:0, counter:0}
    
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

// componentDidMount(){
//   Tapsell.requestNativeBannerAd(
//     '5afd2b18a7996d000189043c	',
//     (adData, onAdShown, onAdClicked) => {
//         console.log("Native Banner Ad Available")
//     },
//     () => {
//         console.log("No Native Ad Available")
//     },
//     () => {
//          console.log("No Network Available")
//     },
//     error => {
//         console.log("Error: " + error)
//     }
// );
// }

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
    startedValue= store.getState().startedValue
    if (!startedValue)
    this.popupDialog.show()
    // this.props.popup
    else
    this.detailDialog()
  }

  // saveVoted(bool){
  //   storage.save({
  //     key: 'VOTED', 
  //     data: bool ,
  //     expires: 1000 * 3600
  //   }).then((rett)=>{console.log(rett)});  
  // }
    

  detailDialog(){
    es0 = store.getState().factorEggStatus
    es1 = store.getState().eggStatusSet[ store.getState().factorEggStatus ]
    s0 = store.getState().factorSize
    s1 = store.getState().sizeSet[s0]
    ws0 = store.getState().factorWaterStatus
    ws1 = store.getState().waterStatusSet[ws0]
    counter = store.getState().counter
    seconds = counter % 60
    mins  = Math.trunc(counter / 60)
    // detail = 'در حال آبپز شدن ...' + '\n\n' + 'زمان باقیمانده :'  + mins + 'دقیقه و' + seconds + 'ثانیه' + '\n' + 'حالت نهایی مورد نظر : ' + es1 + '\n' + 'اندازه تخم مرغ : ' + s1 + '\n' + 'دمای اولبه آب : ' + ws1
    this.setState({counter : counter, es1: es1, s1 : s1, ws1 : ws1})
    this.popupDialogDetail.show()
  }
  
  render(){

    return(
      <ScrollView style={{backgroundColor:"rgb(230,230,230)"}} contentContainerStyle={{flex:1}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      
      <PopupDialog
            ref={(popupDialogStop) => { this.popupDialogStop = popupDialogStop; }}
            width= {myStyle.dialogWidth}
            height= {myStyle.dialogheight}
            size={50}
            style={{flex:1}}
            haveOverlay={true}
            dialogAnimation={slideAnimation}
            
            // overlayOpacity={0.9}
            // overlayBackgroundColor={'rgb(230,230,230)'}
            >
            <ScrollView contentContainerStyle={{flex:1, padding: myStyle.PADDING_HELP_LEFT_RIGHT, paddingTop:myStyle.PADDING_HELP_TOP, paddingBottom:myStyle.PADDING_HELP_BOTTOM }}>
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginBottom:myStyle.MARGIN_BOTTOM_HELP_TITLE, paddingBottom: myStyle.PADDING_BOTTOM_HELP_TITLE}}>
              <Text style={styles.helpTitle}>توقف</Text>
            </View>

            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
              <Text style={styles.helpText}>آیا میخواهید زمان سنج متوقف شود ؟</Text>
            </View>
            {/* <Text style={styles.parsiot}>Parsiot  گروه توسعه پارسیوت</Text> */}
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              
              <TouchableNativeFeedback onPress={()=>{this.child.stopTimer(),this.popupDialogStop.dismiss()}}>
              <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end',marginTop:myStyle.MARGIN_TOP_HELP_BASHE, padding:8, backgroundColor:'#ef5350', borderRadius:myStyle.BORDER_RADIUS}}>
                    <Text style={styles.nazar}> توقف </Text>
                    </View>
                </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>{this.popupDialogStop.dismiss()}}>
              <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end',marginTop:myStyle.MARGIN_TOP_HELP_BASHE, backgroundColor:'#8bc34a', padding:8, borderRadius:myStyle.BORDER_RADIUS}}>
                  <Text style={styles.nazar}> ادامه </Text>
                </View>
              </TouchableNativeFeedback>
              </View>
            </ScrollView>
            
        </PopupDialog>


      <PopupDialog
            ref={(popupDialog2) => { this.popupDialog2 = popupDialog2; }}
            width= {myStyle.dialogWidth}
            height= {myStyle.dialogheight}
            size={50}
            style={{flex:1}}
            haveOverlay={true}
            dialogAnimation={slideAnimation}
            
            // overlayOpacity={0.9}
            // overlayBackgroundColor={'rgb(230,230,230)'}
            >
            <ScrollView contentContainerStyle={{flex:1, padding: myStyle.PADDING_HELP_LEFT_RIGHT, paddingTop:myStyle.PADDING_HELP_TOP, paddingBottom:myStyle.PADDING_HELP_BOTTOM }}>
            <View style={{justifyContent:'center', alignItems:'flex-end', marginBottom:myStyle.MARGIN_BOTTOM_HELP_TITLE, paddingBottom: myStyle.PADDING_BOTTOM_HELP_TITLE}}>
              <Text style={styles.helpTitle}>آماده شد</Text>
            </View>

            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
              <Text style={styles.helpText}>تخم مرغ شما آماده است . نوش جان</Text>
            </View>
            {/* <Text style={styles.parsiot}>Parsiot  گروه توسعه پارسیوت</Text> */}
            <TouchableNativeFeedback onPress={()=>{this.popupDialog2.dismiss()}}>
            <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end',marginTop:myStyle.MARGIN_TOP_HELP_BASHE}}>
                  <Text style={styles.bashe}> باشه </Text>
                  </View>
              </TouchableNativeFeedback>
            </ScrollView>
        </PopupDialog>
      

       <PopupDialog
            ref={(popupDialogNazar) => { this.popupDialogNazar = popupDialogNazar; }}
            width= {myStyle.dialogWidth}
            height= {myStyle.dialogheight}
            size={50}
            style={{flex:1}}
            haveOverlay={true}
            dialogAnimation={slideAnimation}
            
            // overlayOpacity={0.9}
            // overlayBackgroundColor={'rgb(230,230,230)'}
            >
            <ScrollView contentContainerStyle={{flex:1, padding: myStyle.PADDING_HELP_LEFT_RIGHT, paddingTop:myStyle.PADDING_HELP_TOP, paddingBottom:myStyle.PADDING_HELP_BOTTOM }}>
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginBottom:myStyle.MARGIN_BOTTOM_HELP_TITLE, paddingBottom: myStyle.PADDING_BOTTOM_HELP_TITLE}}>
              <Text style={styles.helpTitle}>ثبت نظرات</Text>
            </View>

            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
              <Text style={styles.helpText}>پیشاپیش از ثبت نظرات شما متشکریم </Text>
            </View>
            {/* <Text style={styles.parsiot}>Parsiot  گروه توسعه پارسیوت</Text> */}
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              
              <TouchableNativeFeedback onPress={()=>{this.popupDialogNazar.dismiss()}}>
              <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end',marginTop:myStyle.MARGIN_TOP_HELP_BASHE, padding:5}}>
                    <Text style={styles.basheBadan}> باشه بعدا </Text>
                    </View>
                </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>{PushNotification.showBazar();this.popupDialogNazar.dismiss()}}>
              <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end',marginTop:myStyle.MARGIN_TOP_HELP_BASHE, backgroundColor:'#ffb100', padding:8, borderRadius:myStyle.BORDER_RADIUS}}>
                  <Text style={styles.nazar}> ثبت نظر </Text>
                </View>
              </TouchableNativeFeedback>
              </View>
            </ScrollView>
            
        </PopupDialog>


       <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            width= {myStyle.dialogWidth}
            height= {myStyle.dialogheight}
            size={50}
            style={{flex:1}}
            haveOverlay={true}
            dialogAnimation={slideAnimation}
            
            // overlayOpacity={0.9}
            // overlayBackgroundColor={'rgb(230,230,230)'}
            >
            <ScrollView contentContainerStyle={{flex:1, padding: myStyle.PADDING_HELP_LEFT_RIGHT, paddingTop:myStyle.PADDING_HELP_TOP, paddingBottom:myStyle.PADDING_HELP_BOTTOM }}>
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginBottom:myStyle.MARGIN_BOTTOM_HELP_TITLE, paddingBottom: myStyle.PADDING_BOTTOM_HELP_TITLE}}>
              <Text style={styles.helpTitle}>راهنما</Text>
            </View>

            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
              <Text style={styles.helpText}>برای توضیحات هر آیتم، روی آیتم مورد نظر نگه دارید</Text>
            </View>
            {/* <Text style={styles.parsiot}>Parsiot  گروه توسعه پارسیوت</Text> */}
            <TouchableNativeFeedback onPress={()=>{this.popupDialog.dismiss()}}>
            <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end',marginTop:myStyle.MARGIN_TOP_HELP_BASHE}}>
                  <Text style={styles.bashe}> باشه </Text>
                  </View>
              </TouchableNativeFeedback>
            </ScrollView>
        </PopupDialog>
      
        <PopupDialog
            ref={(popupDialogDetail) => { this.popupDialogDetail = popupDialogDetail; }}
            width= {myStyle.dialogWidth}
            height= {myStyle.dialogheightDetail}
            size={50}
            style={{flex:1}}
            haveOverlay={true}
            dialogAnimation={slideAnimation}
            
            // overlayOpacity={1}
            // overlayBackgroundColor={'white'}
            >
            <ScrollView contentContainerStyle={{flex:1, padding: myStyle.PADDING_HELP_LEFT_RIGHT, paddingTop:myStyle.PADDING_HELP_TOP, paddingBottom:myStyle.PADDING_HELP_BOTTOM }}>            
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', marginBottom:myStyle.MARGIN_BOTTOM_HELP_TITLE, paddingBottom: myStyle.PADDING_BOTTOM_HELP_TITLE}}>
              <Text style={styles.helpTitle}>در حال آماده شدن ...</Text>
            </View>

            <View style={{flex:1, justifyContent:'center', alignItems:'flex-end', padding:0}}>

              <Text style={styles.helpText}> زمان باقیمانده : 
                <Text style={styles.helpTextBold}>{Math.trunc(this.state.counter/60)}</Text>
                <Text style={styles.helpText}> دقیقه و </Text>
                <Text style={styles.helpTextBold}>{this.state.counter%60}</Text>
                <Text style={styles.helpText}> ثانیه </Text>
              </Text>
              <Text style={styles.helpText}>حالت مطلوب : 
                <Text style={styles.helpTextBold}> {this.state.es1}</Text>
              </Text>
              

            </View>
            <TouchableNativeFeedback onPress={()=>{this.popupDialogDetail.dismiss()}}>
              <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end',marginTop:myStyle.MARGIN_TOP_HELP_BASHE}}>
                <Text style={styles.bashe}> باشه </Text>
              </View>
            </TouchableNativeFeedback>
            </ScrollView>
        </PopupDialog>
       
        <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row', width:Dimensions.get('window').width, backgroundColor:"rgb(230,230,230)"}}> 
        <View style={{ flexDirection:'row'}}>
        <TouchableNativeFeedback onPress={()=>{PushNotification.showBazar()
}}>
          <Icon name={'star'} size={myStyle.ICON_WIDTH} style={{margin: myStyle.helpIconMargin, marginRight:5}} color={'#aaaaaa'}/>
        </TouchableNativeFeedback>
        {/* <TouchableWithoutFeedback onPress={()=>{this.showDialog()}}>
          <Icon name={'info'} size={myStyle.ICON_WIDTH} style={{margin: myStyle.helpIconMargin, marginLeft:5}} color={'#aaaaaa'}/>
        </TouchableWithoutFeedback> */}
        </View>
        <TouchableWithoutFeedback onPress={()=>{this.showDialog()}}>
          <Icon name={'help'} size={myStyle.ICON_WIDTH} style={{margin:myStyle.helpIconMargin}} color={'#aaaaaa'}/>
        </TouchableWithoutFeedback>
        
          
        </View>
        <Provider store={store} >
        <View style={{margin:0,paddingTop:0, flex:2, flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'rgb(230,230,230)'}}>        
          <Timer timerTime={this.state.time}  onRef={ref => (this.child = ref)}  dialogStop={()=>{this.popupDialogStop.show()}} dialogNazar={()=>{this.popupDialogNazar.show()}}  dialog={()=>{this.popupDialog.dismiss(), this.popupDialogStop.dismiss(),this.popupDialogDetail.dismiss(); this.popupDialog2.show()}} />        
          <Choices dialog={()=>this.popupDialog.show()}/>
          {/* <ProgressBar/> */}
      </View>
     </Provider>
     </ScrollView>
    )
 
  }
}