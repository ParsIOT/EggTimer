import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Easing,
  Image,
  I18nManager,
  PanResponder
} from 'react-native';

import myStyle from '../../appStyle/style.js'

const styles = {
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButton: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animated: {
    borderRadius: 50,
    borderWidth: 0,
    position: 'absolute',
    // padding:10,
    // margin:10,
    // backgroundColor:'red'
  }
};

export default class SwitchSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.initial ? this.props.initial : 0,
      position : new Animated.Value(0)
    };
    this.animatedValue = new Animated.Value(
      this.props.initial
        ? I18nManager.isRTL
            ? -(this.props.initial / this.props.options.length)
            : this.props.initial / this.props.options.length
        : 0
    );
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.shouldSetResponder,
      onMoveShouldSetPanResponder: this.shouldSetResponder,
      onPanResponderRelease: this.responderEnd,
      onPanResponderTerminate: this.responderEnd
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.toggleItem(nextProps.value);
    }
  }

  shouldSetResponder = (evt, gestureState) => {
    return (
      evt.nativeEvent.touches.length === 1 &&
      !(Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5)
    );
  };

  responderEnd = (evt, gestureState) => {
    const swipeDirection = this._getSwipeDirection(gestureState);
    if (
      swipeDirection === 'RIGHT' &&
      this.state.selected < this.props.options.length - 1
    ) {
      this.toggleItem(this.state.selected + 1);
    } else if (swipeDirection === 'LEFT' && this.state.selected > 0) {
      this.toggleItem(this.state.selected - 1);
    }
  };

  _getSwipeDirection(gestureState) {
    const { dx, dy, vx } = gestureState;
    // 0.1 velocity
    if (Math.abs(vx) > 0.1 && Math.abs(dy) < 80) {
      return dx > 0 ? 'RIGHT' : 'LEFT';
    }
    return null;
  }

  getBgColor() {
    const { selected } = this.state;
    const { options, buttonColor } = this.props;
    return options[selected].activeColor || buttonColor;
  }

  animate = (value, last) => {
    this.animatedValue.setValue(last);
    Animated.timing(this.animatedValue, {
      toValue: value,
      duration: this.props.animationDuration,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  };

  toggleItem = index => {
    const { options, returnObject, onPress } = this.props; 
    if (options.length <= 1) return;
    this.animate(
      I18nManager.isRTL
        ? -(index / options.length)
        : index / options.length,
      I18nManager.isRTL
        ? -(this.state.selected / options.length)
        : this.state.selected / options.length
    );
    if (onPress) {
      onPress(returnObject ? options[index] : options[index].value);
    } else {
      console.log('Call onPress with value: ', options[index].value);
    }
    this.setState({ selected: index });
  };

  longToggleItem = index => {
    const { options, returnObject, onPress, onLongPress, onPressOut } = this.props; 
    if (options.length <= 1) return;
    if (onLongPress) {
      onLongPress(returnObject ? options[index] : options[index].value);
    } else {
      console.log('Call onPress with value: ', options[index].value);
    }
    this.setState({ selected: index });
  };

  render() {
    const {
      textColor,
      selectedColor,
      fontSize,
      backgroundColor,
      borderColor,
      hasPadding,
      valuePadding,
      height,
      bold
    } = this.props;

    const options = this.props.options.map((element, index) => (
      <View
        key={index}
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          // style={{borderBottomWidth:1, borderBottomColor:'red'}}
          onPress={() => this.toggleItem(index)}
          onLongPress={()=>this.longToggleItem(index)}
          onPressOut={()=>this.props.onPressOut()}>
          {typeof element.customIcon === 'function'
            ? element.customIcon(this.state.selected == index)
            : element.customIcon}
          {element.imageIcon &&
            <Image
              source={element.imageIcon}
              style={{
                height: 30,
                width: 30,
                tintColor: this.state.selected == index
                  ? selectedColor
                  : textColor
              }}
            />}
            <View style={{flex:1}}>
          <Text
            style={{
              fontSize,
              fontWeight: bold ? 'bold' : 'normal',
              textAlign: 'center',
              color: this.state.selected == index ? selectedColor : textColor,
              fontFamily:this.state.selected == index ? 'Vazir-Bold-FD' : 'Vazir',
              backgroundColor: 'transparent',
              // margin:10
            }}>
            {element.label}
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

    return (
      <View style={{ flexDirection: 'row',margin:myStyle.MARGIN_ITEMS, marginRight:20 }}>
        <View {...this._panResponder.panHandlers} style={{ flex: 1 }}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: backgroundColor,
              height
            }}
            onLayout={event => {
              const { width } = event.nativeEvent.layout;
              this.setState({
                sliderWidth: width - (hasPadding ? valuePadding : 0),
              });
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderColor: borderColor || '#c9c9c9',
                borderRadius: 60,
                borderWidth: hasPadding ? 1 : 0,
                
              }}>
              {this.state.sliderWidth &&
                <Animated.View
                  style={[
                    {
                      // backgroundColor: 'transparent',

                      
                      height: hasPadding ? height - 4 : height,
                      backgroundColor: this.getBgColor(),
                      borderBottomColor:'white',
                      borderBottomWidth:1,
                      width: this.state.sliderWidth /
                        this.props.options.length -
                        (hasPadding ? valuePadding : 0),
                      transform: [
                        {
                          translateX: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                              hasPadding ? valuePadding : 0,
                              this.state.sliderWidth -
                                (hasPadding ? valuePadding : 0)
                            ],
                          }),
                        },
                      ],
                      marginTop: hasPadding ? valuePadding : 0,
                      // marginBottom:20,
                    },
                    styles.animated
                  ]}
                />}
              {options}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

SwitchSelector.defaultProps = {
  textColor: '#ffffff',
  selectedColor: '#ffb100',
  fontSize: myStyle.FONT_SIZE_SMALL,
  backgroundColor: '#333333',
  borderColor: 'red',
  hasPadding: false,
  valuePadding: 10,
  height: myStyle.ITEM_HEIGHT,
  bold: false,
  // buttonColor: '#ffb100',
  returnObject: false,
  animationDuration: 100
};
