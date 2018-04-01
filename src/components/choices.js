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

          var myItemStyles=[styles.disableItem, styles.normalItem, styles.selectedItem]
          var myItemTextStyles=[styles.disableItemText, styles.normalItemText, styles.selectedItemText]

        return(
          <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <View style={styles.rowContainer}>
            <TouchableWithoutFeedback onPress={()=>{this.props.selectEggStatus('sangi', 20)}} onLongPress={()=>{}}>
              <View style={ myItemStyles[this.props.sangi] }>
              <Text style={ myItemTextStyles[this.props.sangi] }> سنگی </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={()=>{this.props.selectEggStatus('pokhte', 50)}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.pokhte]}>
              <Text style={myItemTextStyles[this.props.sangi]}> پخته </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.selectEggStatus('asaly', 60)}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.asaly]}>
              <Text style={myItemTextStyles[this.props.sangi]}> عسلی </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
          <TouchableNativeFeedback onPress={()=>{this.props.selectSize('bozorg', 3 )}} onLongPress={()=>{}}>
            <View style={myItemStyles[this.props.bozorg]}>
            <Text style={styles.selectedItemText}> بزرگ </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>{this.props.selectSize('motevasset', 2 )}} onLongPress={()=>{}}>
            <View style={myItemStyles[this.props.motevasset]}>
            <Text style={styles.selectedItemText}> متوسط </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>{this.props.selectSize('kouchak', 1 )}} onLongPress={()=>{}}>
            <View style={myItemStyles[this.props.kouchak]}>
            <Text style={styles.selectedItemText}> کوچک </Text>
            </View>
          </TouchableNativeFeedback>

          </View>

          <View style={styles.rowContainer}>
            <TouchableNativeFeedback onPress={()=>{this.props.selectWaterStatus('joush', 50)}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.joush]}>
              <Text style={styles.selectedItemText}> جوش </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{this.props.selectWaterStatus('dagh', 40)}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.dagh]}>
              <Text style={styles.selectedItemText}> داغ </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{this.props.selectWaterStatus('velarm', 30)}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.velarm]}>
              <Text style={styles.selectedItemText}> ولرم </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{this.props.selectWaterStatus('sard', 20)}} onLongPress={()=>{}}>
              <View style={myItemStyles[this.props.sard]}>
              <Text style={styles.selectedItemText}> سرد </Text>
              </View>
            </TouchableNativeFeedback>
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
    sard : state.sard
    
  }
}

export default connect(mapStateToProps , actions)(Choices)