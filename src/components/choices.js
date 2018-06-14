import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import styles from '../../appStyle/styleSheet.js'
import myStyle from '../../appStyle/style.js'
import {connect} from 'react-redux'
import * as actions from '../actions'
import PopupDialog from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/MaterialIcons'
import MultiSlider from '../slider/MultiSwitch'
import TwoSlider from '../slider/twoSlider'
import SwitchSelector from '../slider2/index'


const options = [
  { label: 'عسلی', value: 2 },
  { label: 'نیمه پخته', value: 1 },
  { label: 'پخته', value: 0 },
  
];

const options2 = [
  { label: 'کوچک', value: 2 },
  { label: 'متوسط', value: 1 },
  { label: 'بزرگ', value: 0 },  
];

const options3 = [
  { label: 'سرد', value: 3 },
  { label: 'ولرم', value: 2 },
  { label: 'داغ', value: 1 },
  { label: 'جوش', value: 0 },
  
];

const options4 = [
  { label: 'دمای یخچال', value: 0 },
  { label: 'دمای اتاق', value: 1 },
  
];



var positions=[ new Animated.Value(0),
  new Animated.Value(myStyle.CONTAINER_WIDTH_2 / 2 - myStyle.SWITCHER_WIDTH_2 / 2),
  new Animated.Value(myStyle.CONTAINER_WIDTH_2 - myStyle.SWITCHER_WIDTH_2 - 2),
  ]

class Choices extends Component<{}>{
  constructor(props){
    super(props)
    this.state={
      AnimatedUnderLine:{
        kouchak: new Animated.Value(0),
        motevasset: new Animated.Value(0),
        bozorg : new Animated.Value(0)
      }
    }
  }
    fadeIn(val){
      // val.setValue(0)
      Animated.timing(                  
        val,            
        {
          toValue: 1,           
          duration: 900,             
        }
      ).start();
    }

    whichPressToRun(value, func){
      func(value)
    }
    whichLongPressed(value,base){
      this.props.setDetailId(base+value);this.props.pressedLong()
    }

    funcSize(){
      console.warn('hi')
    }

    eggStatus=(val)=>{
      let statues = ['asaly','sangi', 'pokhte']
      let value = parseInt(val);
      this.props.selectEggStatus(statues[value], Math.abs(value-2)); this.props.calculateTime()
        }
    
    waterStatus=(val)=>{
      let statues = ['sard','velarm','dagh','joush']
      let value = parseInt(val);
      this.props.selectWaterStatus(statues[value],Math.abs(value-3));this.props.calculateTime()
        }

    sizeStatus=(val)=>{
      let statues = [ 'kouchak','motevasset','bozorg', ]
      let value = parseInt(val);
      this.props.selectSize(statues[value],Math.abs(value-2));this.props.calculateTime()
    }
    eggTempStatus=(val)=>{
      let statues = ['fridge', 'room']
      let value = parseInt(val);
      this.props.selectEggTemp(statues[value],Math.abs(value-1));this.props.calculateTime()
    }

    render(){
          var myItemStyles=[styles.disableItem, styles.normalItem, styles.disSelectedItem ,styles.selectedItem, styles.selectedItemHelp, styles.selectedItemHelp, styles.selectedItemHelp, styles.selectedItemHelpSelected ]
          var myItemTextStyles=[styles.disableItemText, styles.normalItemText, styles.disSelectedItemText ,styles.selectedItemText, styles.selectedItemTextHelp, styles.selectedItemTextHelp, styles.selectedItemTextHelp, styles.selectedItemTextHelp]
          var myDisable = [ true, false, true, false ]
        return(
          <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:60}}>
       
             <View style={styles.rowContainer}>          
              <TouchableWithoutFeedback disabled={myDisable[this.props.sangi]} onPress={()=>{this.props.selectEggStatus('sangi', 2);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(0);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
                <View style={ myItemStyles[this.props.sangi] }>
                <Text style={ myItemTextStyles[this.props.sangi] }> پخته </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback disabled={myDisable[this.props.pokhte]} onPress={()=>{this.props.selectEggStatus('pokhte', 1);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(1);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
                <View style={myItemStyles[this.props.pokhte]}>
                <Text style={myItemTextStyles[this.props.pokhte]}> نیمه پخته </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback disabled={myDisable[this.props.asaly]} onPress={()=>{this.props.selectEggStatus('asaly', 0);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(2);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
                <View style={myItemStyles[this.props.asaly]}>
                <Text style={myItemTextStyles[this.props.asaly]}> عسلی </Text>
                </View>
              </TouchableWithoutFeedback>

            </View>

       
          
         

          <View style={styles.rowContainer}>
          
          <TouchableWithoutFeedback disabled={myDisable[this.props.bozorg]} onPress={()=>{this.props.selectSize('bozorg', 2 );this.props.calculateTime();}} onLongPress={()=>{this.props.setDetailId(3);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
            <Animated.View style={[myItemStyles[this.props.bozorg]]}>
              <Text style={myItemTextStyles[this.props.bozorg]}> بزرگ </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback disabled={myDisable[this.props.motevasset]} onPress={()=>{this.props.selectSize('motevasset', 1 );this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(4);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
            <View style={[myItemStyles[this.props.motevasset]]}>
            <Text style={[myItemTextStyles[this.props.motevasset]]}> متوسط </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback disabled={myDisable[this.props.kouchak]} onPress={()=>{this.props.selectSize('kouchak', 0 );this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(5);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
            <View style={myItemStyles[this.props.kouchak]}>
            <Text style={myItemTextStyles[this.props.kouchak]}>  کوچک </Text>
            </View>
          </TouchableWithoutFeedback>
          
          </View>
          
          <View style={styles.rowContainer}>
         
            {/* <TouchableWithoutFeedback disabled={myDisable[this.props.joush]} onPress={()=>{this.props.selectWaterStatus('joush', 2);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(6);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
              <View style={myItemStyles[this.props.joush]}>
              <Text style={myItemTextStyles[this.props.joush]}> جوش </Text>
              </View>
            </TouchableWithoutFeedback> */}
            <TouchableWithoutFeedback disabled={myDisable[this.props.dagh]} onPress={()=>{this.props.selectWaterStatus('dagh', 1);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(7);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
              <View style={myItemStyles[this.props.dagh]}>
              <Text style={myItemTextStyles[this.props.dagh]}> داغ </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled={myDisable[this.props.velarm]} onPress={()=>{this.props.selectWaterStatus('velarm', 0);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(8);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
              <View style={myItemStyles[this.props.velarm]}>
              <Text style={myItemTextStyles[this.props.velarm]}> ولرم </Text>
              </View>
            </TouchableWithoutFeedback>
             <TouchableWithoutFeedback disabled={myDisable[this.props.sard]} onPress={()=>{this.props.selectWaterStatus('sard', 0);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(9);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
              <View style={myItemStyles[this.props.sard]}>
              <Text style={myItemTextStyles[this.props.sard]}> آب سرد </Text>
              </View>
            </TouchableWithoutFeedback>
            
           </View>   

           

           <View style={styles.rowContainer}>

            
          
            <TouchableWithoutFeedback disabled={myDisable[this.props.room]} onPress={()=>{this.props.selectEggTemp('room', 1);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(11);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
              <View style={ myItemStyles[this.props.room] }>
              <Text style={ myItemTextStyles[this.props.room] }> دمای اتاق </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled={myDisable[this.props.fridge]} onPress={()=>{this.props.selectEggTemp('fridge', 0);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(10);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
              <View style={myItemStyles[this.props.fridge]}>
              <Text style={myItemTextStyles[this.props.fridge]}> دمای یخچال </Text>
              </View>
            </TouchableWithoutFeedback>


          </View> 

            

{/*        
          <MultiSlider 
          pos={this.props.factorEggStatus}
          item1={'عسلی'}  
          item1OnLongPress={()=>{this.props.setDetailId(2);this.props.pressedLong()}} 
          item1onPress={()=>{this.props.selectEggStatus('asaly', 0);this.props.calculateTime()}} 
          item2={'نیمه پخته'} 
          item2onPress={()=>{this.props.selectEggStatus('pokhte', 1);this.props.calculateTime()}} 
          item2OnLongPress={()=>{this.props.setDetailId(1);this.props.pressedLong()}}  
          item3={'پخته'} 
          item3onPress={()=>{this.props.selectEggStatus('sangi', 2);this.props.calculateTime()}} 
          item3OnLongPress={()=>{this.props.setDetailId(0);this.props.pressedLong()}} 
          onPressOut={()=>{this.props.pressedUp()}}
          item1Style = {myItemStyles[this.props.asaly]}
          item2Style = {myItemStyles[this.props.pokhte]}
          item3Style = {myItemStyles[this.props.sangi]}
          textStyle1 = {myItemTextStyles[this.props.asaly]}
          textStyle2 = {myItemTextStyles[this.props.pokhte]}
          textStyle3 = {myItemTextStyles[this.props.sangi]}
          disableVal = {myDisable[this.props.kouchak]}   
           />


          <MultiSlider 
          pos={this.props.factorSize}
          item1={'کوچک'} 
          item1onPress={()=>{this.props.selectSize('kouchak', 0 );this.props.calculateTime()}} 
          item1OnLongPress={()=>{this.props.setDetailId(5);this.props.pressedLong()}} 
          item2={'متوسط'}
          item2onPress={()=>{this.props.selectSize('motevasset', 1 );this.props.calculateTime()}}
          item2OnLongPress={()=>{this.props.setDetailId(4);this.props.pressedLong()}} 
          item3={'بزرگ'} 
          item3onPress={()=>{this.props.selectSize('bozorg', 2 );this.props.calculateTime()}} 
          item3OnLongPress={()=>{this.props.setDetailId(3);this.props.pressedLong()}} 
          onPressOut={()=>{this.props.pressedUp()}}
          item1Style = {myItemStyles[this.props.kouchak]}
          item2Style = {myItemStyles[this.props.motevasset]}
          item3Style = {myItemStyles[this.props.bozorg]}
          textStyle1 = {myItemTextStyles[this.props.kouchak]}
          textStyle2 = {myItemTextStyles[this.props.motevasset]}
          textStyle3 = {myItemTextStyles[this.props.bozorg]}
          disableVal  =  {myDisable[this.props.kouchak]}         

          />
          
          <MultiSlider 
          pos={this.props.factorWaterStatus}
          item1={'ولرم'} 
          item1onPress={()=>{this.props.selectWaterStatus('velarm', 0);this.props.calculateTime()}} 
          item1OnLongPress={()=>{this.props.setDetailId(8);this.props.pressedLong()}}
          item2={'داغ'} 
          item2onPress={()=>{this.props.selectWaterStatus('dagh', 1);this.props.calculateTime()}}  
          item2OnLongPress={()=>{this.props.setDetailId(7);this.props.pressedLong()}}
          item3={'جوش'} 
          item3onPress={()=>{this.props.selectWaterStatus('joush', 2);this.props.calculateTime()}} 
          item3OnLongPress={()=>{this.props.setDetailId(6);this.props.pressedLong()}}
          onPressOut={()=>{this.props.pressedUp()}}
          item1Style = {myItemStyles[this.props.velarm]}
          item2Style = {myItemStyles[this.props.dagh]}
          item3Style = {myItemStyles[this.props.joush]}
          textStyle1 = {myItemTextStyles[this.props.velarm]}
          textStyle2 = {myItemTextStyles[this.props.dagh]}
          textStyle3 = {myItemTextStyles[this.props.joush]}
          disableVal  =  {myDisable[this.props.kouchak]}         

          />
          
          <TwoSlider 
          pos={this.props.factorEggTemp}
          item1={'دمای یخچال'} 
          item1onPress={()=>{this.props.selectEggTemp('fridge', 0);this.props.calculateTime()}} 
          item1OnLongPress={()=>{this.props.setDetailId(10);this.props.pressedLong()}}
          item3={'دمای اتاق'} 
          item3onPress={()=>{this.props.selectEggTemp('room', 1);this.props.calculateTime()}} 
          item3OnLongPress={()=>{this.props.setDetailId(11);this.props.pressedLong()}}
          onPressOut={()=>{this.props.pressedUp()}}
          item1Style = {myItemStyles[this.props.fridge]}
          item3Style = {myItemStyles[this.props.room]}
          textStyle1 = {myItemTextStyles[this.props.fridge]}
          textStyle3 = {myItemTextStyles[this.props.room]}
          disableVal  =  {myDisable[this.props.kouchak]}         
          />   */}


           {/* <SwitchSelector 
          options={options} 
          initial={0} 
          onPressOut={()=>{this.props.pressedUp()}}
          onLongPress = { value => this.whichLongPressed(value,0) }
          onPress={value => {
            this.whichPressToRun(value,this.eggStatus)}}
             />

          <SwitchSelector 
          options={options2} 
          initial={0} 
          onPressOut={()=>{this.props.pressedUp()}}
          onLongPress = { value => this.whichLongPressed(value,3) }
          onPress={value => {
            this.whichPressToRun(value,this.sizeStatus)}}
             />

          <SwitchSelector 
          options={options3} 
          initial={0} 
          onPressOut={()=>{this.props.pressedUp()}}
          onLongPress = { value => this.whichLongPressed(value,6) }
          onPress={value => {
            this.whichPressToRun(value,this.waterStatus)}}
             />

          <SwitchSelector 
          options={options4} 
          initial={0} 
          onPressOut={()=>{this.props.pressedUp()}}
          onLongPress = { value => this.whichLongPressed(value,10) }
          onPress={value => {
            this.whichPressToRun(value,this.eggTempStatus)}}
            />  */}

          </View> 

          

          


        )
    }
}
const mapStateToProps= state =>{
  return { 
    
    sangi : state.sangi ,
    pokhte : state.pokhte,
    asaly : state.asaly,
    bozorg : state.bozorg,
    motevasset : state.motevasset,
    kouchak : state.kouchak,
    joush : state.joush,
    dagh : state.dagh,
    velarm : state.velarm,
    sard : state.sard,
    started : state.started,
    stoped : state.stoped,
    paused : state.paused,
    room : state.room,
    fridge : state.fridge,
    factorEggStatus:state.factorEggStatus,
    factorSize:state.factorSize,
    factorWaterStatus:state.factorWaterStatus,
    factorEggTemp:state.factorEggTemp
    
  }
}

export default connect(mapStateToProps , actions)(Choices)