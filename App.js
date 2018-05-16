import Timer from './src/components/timer.js'
import React, { Component } from 'react';
import {View, StatusBar, TouchableWithoutFeedback,ImageBackground, Button, Image, Text, TouchableNativeFeedback, PixelRatio, ScrollView, Dimensions, Alert} from 'react-native'
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
    startedValue= store.getState().startedValue
    if (!startedValue)
    this.popupDialog.show()
    // this.props.popup
    else
    this.detailDialog()
  }
    

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
      <ScrollView style={{backgroundColor:"rgb(230,230,230)", margin:0, padding:0}} contentContainerStyle={{flex:1}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
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
            <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:0}}>
              <Text style={styles.helpText}> برای توضیحات هر آیتم، روی آیتم مورد نظر نگه دارید</Text>
              <TouchableNativeFeedback onPress={()=>{this.popupDialog.dismiss()}}>
                  <View style={{backgroundColor:'#ffb100',marginTop:20, borderRadius:20, padding:10}}>
                  <Text style={styles.bashe}> باشه </Text>
                  </View>
              </TouchableNativeFeedback>
            </View>
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
            <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:0}}>

              <Text style={styles.helpTextBold}> در حال آماده شدن ... </Text>
              <Text style={styles.helpText}> زمان باقیمانده : 
                <Text style={styles.helpTextBold}>{Math.trunc(this.state.counter/60)}</Text>
                <Text style={styles.helpText}> دقیقه و </Text>
                <Text style={styles.helpTextBold}>{this.state.counter%60}</Text>
                <Text style={styles.helpText}> ثانیه </Text>
              </Text>
              <Text style={styles.helpText}>  حالت مطلوب : 
                <Text style={styles.helpTextBold}> {this.state.es1}</Text>
              </Text>
              <TouchableNativeFeedback onPress={()=>{this.popupDialogDetail.dismiss()}}>
                  <View style={{backgroundColor:'#ffb100',marginTop:20, borderRadius:20, padding:10}}>
                  <Text style={styles.bashe}> باشه </Text>
                  </View>
              </TouchableNativeFeedback>
            </View>
        </PopupDialog>
       
        <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row', width:Dimensions.get('window').width, backgroundColor:"rgb(230,230,230)"}}> 
        <View style={{ flexDirection:'row'}}>
        <TouchableNativeFeedback onPress={()=>{this.showDialog()}}>
          <Icon name={'star'} size={myStyle.ICON_WIDTH} style={{margin: myStyle.helpIconMargin, marginRight:5}} color={'#aaaaaa'}/>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback onPress={()=>{this.showDialog()}}>
          <Icon name={'info'} size={myStyle.ICON_WIDTH} style={{margin: myStyle.helpIconMargin, marginLeft:5}} color={'#aaaaaa'}/>
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={()=>{this.showDialog()}}>
          <Icon name={'help'} size={myStyle.ICON_WIDTH} style={{margin:myStyle.helpIconMargin}} color={'#aaaaaa'}/>
        </TouchableWithoutFeedback>
        
          
        </View>
        <Provider store={store} >
        <View style={{margin:0,paddingTop:0, flex:2, flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'rgb(230,230,230)'}}>        
          <Timer timerTime={this.state.time}  dialog={()=>this.popupDialog.show()} />        
          <Choices dialog={()=>this.popupDialog.show()}/>
          {/* <ProgressBar/> */}
      </View>
     </Provider>
     </ScrollView>
    )
 
  }
}