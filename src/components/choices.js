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







class Choices extends Component<{}>{
    render(){

          var myItemStyles=[styles.disableItem, styles.normalItem, styles.disSelectedItem ,styles.selectedItem]
          var myItemTextStyles=[styles.disableItemText, styles.normalItemText, styles.disSelectedItemText ,styles.selectedItemText]
          var myDisable = [ true, false, true, false ]
        return(
          <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <View style={styles.rowContainer}>
            <TouchableWithoutFeedback disabled={myDisable[this.props.sangi]} onPress={()=>{this.props.selectEggStatus('sangi', 20);this.props.calculateTime()}} onLongPress={()=>{this.props.selectEggStatus('sangi', 20);this.props.calculateNewTime();}}>
              <View style={ myItemStyles[this.props.sangi] }>
              <Text style={ myItemTextStyles[this.props.sangi] }> سنگی </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled={myDisable[this.props.pokhte]} onPress={()=>{this.props.selectEggStatus('pokhte', 50);this.props.calculateTime()}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.pokhte]}>
              <Text style={myItemTextStyles[this.props.pokhte]}> پخته </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled={myDisable[this.props.asaly]} onPress={()=>{this.props.selectEggStatus('asaly', 60);this.props.calculateTime()}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.asaly]}>
              <Text style={myItemTextStyles[this.props.asaly]}> عسلی </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.rowContainer}>
          <TouchableWithoutFeedback disabled={myDisable[this.props.bozorg]} onPress={()=>{this.props.selectSize('bozorg', 3 );this.props.calculateTime()}} onLongPress={()=>{}}>
            <View style={myItemStyles[this.props.bozorg]}>
            <Text style={myItemTextStyles[this.props.bozorg]}> بزرگ </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback disabled={myDisable[this.props.motevasset]} onPress={()=>{this.props.selectSize('motevasset', 2 );this.props.calculateTime()}} onLongPress={()=>{}}>
            <View style={myItemStyles[this.props.motevasset]}>
            <Text style={myItemTextStyles[this.props.motevasset]}> متوسط </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback disabled={myDisable[this.props.kouchak]} onPress={()=>{this.props.selectSize('kouchak', 1 );this.props.calculateTime()}} onLongPress={()=>{}}>
            <View style={myItemStyles[this.props.kouchak]}>
            <Text style={myItemTextStyles[this.props.kouchak]}> کوچک </Text>
            </View>
          </TouchableWithoutFeedback>

          </View>

          <View style={styles.rowContainer}>
            <TouchableWithoutFeedback disabled={myDisable[this.props.joush]} onPress={()=>{this.props.selectWaterStatus('joush', 50);this.props.calculateTime()}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.joush]}>
              <Text style={myItemTextStyles[this.props.joush]}> جوش </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled={myDisable[this.props.dagh]} onPress={()=>{this.props.selectWaterStatus('dagh', 40);this.props.calculateTime()}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.dagh]}>
              <Text style={myItemTextStyles[this.props.dagh]}> داغ </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled={myDisable[this.props.velarm]} onPress={()=>{this.props.selectWaterStatus('velarm', 30);this.props.calculateTime()}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.velarm]}>
              <Text style={myItemTextStyles[this.props.velarm]}> ولرم </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback disabled={myDisable[this.props.sard]} onPress={()=>{this.props.selectWaterStatus('sard', 20);this.props.calculateTime()}} onLongPress={()=>{}}>
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