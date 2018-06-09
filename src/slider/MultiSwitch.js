import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    PanResponder,
    View,
    Platform,
    Alert
} from 'react-native';
import Button from './Button';
import styles from './styles';
const { width } = Dimensions.get('window');
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import * as actions from '../actions'
import myStyle from '../../appStyle/style'

var positions=[ 0,
    myStyle.CONTAINER_WIDTH_2 / 2 - myStyle.SWITCHER_WIDTH_2 / 2,
    myStyle.CONTAINER_WIDTH_2 - myStyle.SWITCHER_WIDTH_2 - 2,
    ]

class MultiSwitch extends Component {
    constructor(props) {
        super(props);
            this.a=100
        this.myPos = new Animated.Value(positions[this.props.pos])
        this.state = {
            isComponentReady: false,
            position: new Animated.Value(positions[this.props.pos]),
            posValue: 0,
            selectedPosition: 0,
            duration: 100,
            mainWidth: myStyle.CONTAINER_WIDTH_2,
            switcherWidth: myStyle.SWITCHER_WIDTH_2,
            thresholdDistance: myStyle.THRESHOLD_DISTANCE, //width - 8 - width / 2.4
            
        };
        this.isParentScrollDisabled = false;
        this.long_press_timeout = null
        this.dis= false
       
    }

    componentWillMount() {
        var _this = this;

        
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (evt, gestureState) => {
                let finalValue = gestureState.dx + this.state.posValue;

                // disable parent scroll if slider is inside a scrollview
                if (!this.isParentScrollDisabled) {
                    // this.props.disableScroll(false);
                    this.isParentScrollDisabled = true;
                }
                // this.notStartedSelected();
                if (!this.props.disableVal){
                this.long_press_timeout = setTimeout(function(){
                if (gestureState.dx > 0) {
                    if (finalValue >= 0 && finalValue <= 30) {
                        // _this.notStartedSelected();
                        // Alert.alert('long pressed 1')
                        _this.props.item1OnLongPress()
                        // console.warn(this.props.sangi)
                        // this.props.selectSize('motevasset', 1 );this.props.calculateTime()
                    } else if (finalValue >= 30 && finalValue <= 121) {
                        // _this.inProgressSelected()
                        // Alert.alert('long pressed 2')
                        _this.props.item2OnLongPress()

                    } else if (finalValue >= 121 && finalValue <= 280) {
                        if (gestureState.dx > 0) {
                            // _this.completeSelected();
                            // Alert.alert('long pressed 3')
                            _this.props.item3OnLongPress()

                        } else {
                            // _this.inProgressSelected()
                            // Alert.alert('long pressed 2')
                            _this.props.item2OnLongPress()


                        }
                    }
                } else {
                    if (finalValue >= 78 && finalValue <= 175) {
                        // _this.inProgressSelected()
                        // Alert.alert('long pressed 2')
                        _this.props.item2OnLongPress()


                    } else if (finalValue >= -100 && finalValue <= 78) {
                        // _this.notStartedSelected()
                        // Alert.alert('long pressed 1')
                        _this.props.item1OnLongPress()
                        // this.props.selectSize('motevasset', 1 );this.props.calculateTime()
                        // console.warn(this.)


                    } else {
                        // Alert.alert('long pressed 3')
                        _this.props.item3OnLongPress()


                        // _this.completeSelected();
                    }
                }
            }, 
            500);

        }
                

                // this.long_press_timeout = setTimeout(function(){
                //     if (gestureState.x0 <= width/2 )
                //     {
                //        Alert.alert('long pressed left')
                //     }
                //     else {
                //         Alert.alert('long pressed right')
                //     }
                // }, 
                // 500);
            
            },

            onPanResponderMove: (evt, gestureState) => {

                if (!this.props.disableVal){
                if (gestureState.dx >=7 || gestureState.dx<=-7){console.warn('cleared');clearTimeout(this.long_press_timeout)}
                // clearTimeout(this.long_press_timeout);
                let finalValue = gestureState.dx + this.state.posValue;
                if (
                    finalValue >= 0 &&
                    finalValue <= this.state.thresholdDistance
                )
                    this.myPos.setValue(
                        this.state.posValue + gestureState.dx
                    );
            }},

            onPanResponderTerminationRequest: () => true,

            onPanResponderRelease: (evt, gestureState) => {
                clearTimeout(this.long_press_timeout);
                if (!this.props.disableVal){
                let finalValue = gestureState.dx + this.state.posValue;
                this.isParentScrollDisabled = false;
                // this.props.disableScroll(true);
                if (gestureState.dx > 0) {
                    if (finalValue >= 0 && finalValue <= 30) {
                        this.notStartedSelected();
                        this.props.onPressOut()
                    } else if (finalValue >= 30 && finalValue <= 121) {
                        this.inProgressSelected();
                        this.props.onPressOut()
                    } else if (finalValue >= 121 && finalValue <= 280) {
                        if (gestureState.dx > 0) {
                            this.completeSelected();
                            this.props.onPressOut()

                        } else {
                            this.inProgressSelected();
                            this.props.onPressOut()

                        }
                    }
                } else {
                    if (finalValue >= 78 && finalValue <= 175) {
                        this.inProgressSelected();
                        this.props.onPressOut()
                    } else if (finalValue >= -100 && finalValue <= 78) {
                        this.notStartedSelected();
                        this.props.onPressOut()

                        
                    } else {
                        this.completeSelected();
                        this.props.onPressOut()

                    }
                }
            }},

            onPanResponderTerminate: () => {},
            onShouldBlockNativeResponder: () => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
            handlePanResponderEnd(e, gestureState) {
                clearTimeout(this.long_press_timeout);
                console.log('Finger pulled up from the image');
            }
        });
    }

    notStartedSelected = () => {
        Animated.timing(this.myPos, {
            toValue: Platform.OS === 'ios' ? -2 : 0,
            duration: this.state.duration
        }).start();
        setTimeout(() => {
            this.setState({
                posValue: Platform.OS === 'ios' ? -2 : 0,
                selectedPosition: 0
            });
        }, 100);
        if (this.state.isComponentReady) this.props.onStatusChanged('Open');
        this.props.item1onPress()
    };

    

    inProgressSelected = () => {
        Animated.timing(this.myPos ,{
            toValue: this.state.mainWidth / 2 - this.state.switcherWidth / 2,
            duration: this.state.duration
        }).start();
        setTimeout(() => {
            this.setState({
                posValue:
                    this.state.mainWidth / 2 - this.state.switcherWidth / 2,
                selectedPosition: 1
            });
        }, 100);
        if (this.state.isComponentReady)
            this.props.onStatusChanged('In Progress');
        this.props.item2onPress()

    };

    completeSelected = () => {
        Animated.timing(this.myPos, {
            toValue:
                Platform.OS === 'ios'
                    ? this.state.mainWidth - this.state.switcherWidth
                    : this.state.mainWidth - this.state.switcherWidth - 2,
            duration: this.state.duration
        }).start();
        setTimeout(() => {
            this.setState({
                posValue:
                    Platform.OS === 'ios'
                        ? this.state.mainWidth - this.state.switcherWidth
                        : this.state.mainWidth - this.state.switcherWidth - 2,
                selectedPosition: 2
            });
        }, 100);
        if (this.state.isComponentReady) this.props.onStatusChanged('Complete');
        this.props.item3onPress()

    };

    getStatus = () => {
        switch (this.state.selectedPosition) {
        case 0:
            return 'Open';
        case 1:
            return 'In Progress';
        case 2:
            return 'Complete';
        }
    };

    whichLongPressed=()=>{
        console.warn('whichLongPressed')
        this.props.item1onPress.bind(this)
    //     switch (this.state.selectedPosition) {
    //         case 0:
    //         return this.props.item1OnLongPress
    //         // console.warn('item1').bind(this)
    //         case 1:
    //         return this.props.item2OnLongPress
    //         case 2:
    //         return this.props.item3OnLongPress
    // }
}

    render() {
        return (
            
            <View style={styles.container}>
                <Button 
                item1={this.props.item1} 
                item2={this.props.item2} 
                item3={this.props.item3} 
                type="Open" 
                onPress={this.notStartedSelected} 
                onLongPress={()=>{this.props.item1OnLongPress()}} 
                onPressOut={this.props.onPressOut}
                itemStyle={this.props.item1Style}
                textStyle1={this.props.textStyle1}
                disableVal = {this.props.disableVal}
                />

                <Button 
                item1={this.props.item1} 
                item2={this.props.item2} 
                item3={this.props.item3} 
                type="In Progress"
                onPress={this.inProgressSelected} 
                onLongPress={()=>{this.props.item2OnLongPress()}} 
                onPressOut={this.props.onPressOut}
                itemStyle={this.props.item2Style}
                textStyle2={this.props.textStyle2}
                disableVal = {this.props.disableVal}
                />

                <Button 
                item1={this.props.item1} 
                item2={this.props.item2} 
                item3={this.props.item3} 
                type="Complete" 
                onPress={this.completeSelected} 
                onLongPress={()=>{this.props.item3OnLongPress()}} 
                onPressOut={this.props.onPressOut} 
                itemStyle={this.props.item3Style}
                textStyle3={this.props.textStyle3}
                disableVal = {this.props.disableVal}
                />

                <Animated.View
                    // onLongPress={()=>{console.warn('long pressed')}}
                    {...this._panResponder.panHandlers}
                    style={[
                        styles.switcher,
                        {
                            transform: [{ translateX: this.myPos }]
                        }
                    ]}
                >
                    <Button  
                    item1={this.props.item1} 
                    item2={this.props.item2} 
                    item3={this.props.item3} 
                    type={this.getStatus()}
                    // onPressOut={this.props.onPressOut} 
                    // onPress={()=>{}}
                    // onLongPress={()=>{this.props.item3OnLongPress()}} 
                    active={true} />
                </Animated.View>
            </View>
        );
    }
}

MultiSwitch.propTypes = {
    disableScroll: PropTypes.func,
    onStatusChanged: PropTypes.func
};


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
      fridge : state.fridge
      
    }
  }
  
  export default connect(mapStateToProps , actions)(MultiSwitch)