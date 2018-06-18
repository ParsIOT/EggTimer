import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import styles from '../../appStyle/styleSheet.js'
// import myStyle from '../../appStyle/style.js'
import {connect} from 'react-redux'
import * as actions from '../actions'

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
      // console.warn('hi')
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
            <TouchableWithoutFeedback disabled={myDisable[this.props.dagh]} onPress={()=>{this.props.selectWaterStatus('dagh', 2);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(7);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
              <View style={myItemStyles[this.props.dagh]}>
              <Text style={myItemTextStyles[this.props.dagh]}> داغ </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled={myDisable[this.props.velarm]} onPress={()=>{this.props.selectWaterStatus('velarm', 1);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(8);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
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