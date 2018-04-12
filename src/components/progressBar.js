import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
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







class ProgressBar extends Component<{}>{

    gpsOrNot(num){
        console.log('num is ' , num)
        var n = this.props.factorSize * this.props.factorWaterStatus
        if (num == n * 3 || num == n * 2 || num == n * 1) {return(<Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/>)}
        else {return(<View style={styles.gpsIconStyle} ></View>)}
    }

    render(){
        var myProgressBarStyle = [ styles.progressBarEmpty, styles.progressBarFull ]
        return(    
            <View style={{marginTop:25,flexDirection:'column'}}>                
                
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                    <Text style={styles.progressBarTime}>{Math.trunc((this.props.time - this.props.counter)/60)} '{('0'+(this.props.time-this.props.counter)%60).slice(-2)} ''</Text>
                    <Text style={styles.progressBarTime}>{Math.trunc(this.props.time/60)} '{('0'+this.props.time%60).slice(-2)} ''</Text>
                </View>

                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:1}}>
                    
                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(1)} */}
                        <View style={(1<=this.props.progressNumber) ? styles.beginningProgressBarFull : styles.beginningProgressBarEmpty}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(2)} */}
                        <View style={(2<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(3)} */}
                        <View style={(3<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(4)} */}
                        <View style={(4<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(5)} */}
                        <View style={(5<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(6)} */}
                        <View style={(6<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(7)} */}
                        <View style={(7<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(8)} */}
                        <View style={(8<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(9)} */}
                        <View style={(9<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(10)} */}
                        <View style={(10<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(11)} */}
                        <View style={(11<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(12)} */}
                        <View style={(12<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(13)} */}
                        <View style={(13<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(14)} */}
                        <View style={(14<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(15)} */}
                        <View style={(15<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(16)} */}
                        <View style={(16<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(17)} */}
                        <View style={(17<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(18)} */}
                        <View style={(18<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(19)} */}
                        <View style={(19<=this.props.progressNumber) ? myProgressBarStyle[1] : myProgressBarStyle[0]}></View>
                    </View>

                    <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                        {/* <Image source={require('../../statics/location-sign.png')} style={styles.gpsIconStyle}/> */}
                        {/* {this.gpsOrNot(20)} */}
                        <View style={(20<=this.props.progressNumber) ? styles.endProgressBarFull : styles.endProgressBarEmpty}></View>
                    </View>
                    
                </View>
            </View>
        )
    }
}


const mapStateToProps= state =>{
    return { 
      
        progressNumber : state.progressNumber,
        counter : state.counter,
        time : state.time,
        factorSize  : state.factorSize,
        factorWaterStatus : state.factorWaterStatus
      
    }
  }
  
  export default connect(mapStateToProps , actions)(ProgressBar)