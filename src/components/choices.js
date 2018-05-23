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
  TouchableOpacity
} from 'react-native';
import styles from '../../appStyle/styleSheet.js'
import {connect} from 'react-redux'
import * as actions from '../actions'
import PopupDialog from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/MaterialIcons'
import PopoverTooltip from 'react-native-popover-tooltip'




// var Sound = require('react-native-sound')
// Sound.setCategory('Playback');


// const whoosh = new Sound('toggle_switch.mp3', Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   // loaded successfully
//   console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

// });
// whoosh.setVolume(2)



class Choices extends Component<{}>{

  

  constructor(props){
    super(props)


    
    // whoosh.play((success) => {
    //   if (success) {
    //     console.log('successfully finished playing');
    //   } else {
    //     console.log('playback failed due to audio decoding errors');
    //     // reset the player to its uninitialized state (android only)
    //     // this is the only option to recover after an error occured and use the player again
    //     whoosh.reset();
    //   }
    // })
    
    
  }

    componentDidMount(){
      
    }

    render(){
      

          var myItemStyles=[styles.disableItem, styles.normalItem, styles.disSelectedItem ,styles.selectedItem, styles.selectedItemHelp, styles.selectedItemHelp, styles.selectedItemHelp, styles.selectedItemHelpSelected ]
          var myItemTextStyles=[styles.disableItemText, styles.normalItemText, styles.disSelectedItemText ,styles.selectedItemText, styles.selectedItemTextHelp, styles.selectedItemTextHelp, styles.selectedItemTextHelp, styles.selectedItemTextHelp]
          var myDisable = [ true, false, true, false ]
        return(


          

          <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:40}}>
          {/* <Text style={{textAlign:'center', fontFamily:'Vazir-Bold-FD', fontSize:11}}>میزان پخنگی تخم مرغ</Text> */}
          

        

          
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

          {/* <Text style={{textAlign:'center', fontFamily:'Vazir-Bold-FD', fontSize:11}}>سایز تخم مرغ</Text> */}
          <View style={styles.rowContainer}>
          
          <TouchableWithoutFeedback disabled={myDisable[this.props.bozorg]} onPress={()=>{this.props.selectSize('bozorg', 2 );this.props.calculateTime();}} onLongPress={()=>{this.props.setDetailId(3);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
            <View style={myItemStyles[this.props.bozorg]}>
            <Text style={myItemTextStyles[this.props.bozorg]}> بزرگ </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback disabled={myDisable[this.props.motevasset]} onPress={()=>{this.props.selectSize('motevasset', 1 );this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(4);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
            <View style={myItemStyles[this.props.motevasset]}>
            <Text style={myItemTextStyles[this.props.motevasset]}> متوسط </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback disabled={myDisable[this.props.kouchak]} onPress={()=>{this.props.selectSize('kouchak', 0 );this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(5);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
            <View style={myItemStyles[this.props.kouchak]}>
            <Text style={myItemTextStyles[this.props.kouchak]}> کوچک </Text>
            </View>
          </TouchableWithoutFeedback>
          
          </View>
          
          {/* <Text style={{textAlign:'center', fontFamily:'Vazir-Bold-FD', fontSize:11}}>دمای اولیه آب</Text> */}
          <View style={styles.rowContainer}>
         
            <TouchableWithoutFeedback disabled={myDisable[this.props.joush]} onPress={()=>{this.props.selectWaterStatus('joush', 3);this.props.calculateTime()}} onLongPress={()=>{this.props.setDetailId(6);this.props.pressedLong()}} onPressOut={()=>{this.props.pressedUp()}}>
              <View style={myItemStyles[this.props.joush]}>
              <Text style={myItemTextStyles[this.props.joush]}> جوش </Text>
              </View>
            </TouchableWithoutFeedback>
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
              <Text style={myItemTextStyles[this.props.sard]}> سرد </Text>
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
    
  }
}

export default connect(mapStateToProps , actions)(Choices)