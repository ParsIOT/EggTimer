import React, { Dimensions } from "react-native";



// Precalculate Device Dimensions for better performance
const baseHeight= 640
const baseWidth = 360
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

function normalize(val){
  return ((y/baseHeight) * val)
}



// We set our base font size value
const base_unit = 15;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function 
function em(value) {
  return unit * value;
}

// Then we set our styles with the help of the em() function
export default Style = {
  
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),
  paddingTouch : normalize(35),//30
  helpIconMargin : normalize(15),
  paddingTouch2 : normalize(32), //32
  FILLED_PIE_COLOR : '#ffcc80',
  BORDER_PIE_COLOR : '#ffffff',
  UNFILLED_PIE_COLOR:'#ffb100',
  DETAIL_TEXT_MARGIN_BOTTOM : normalize(0),

  // CARD
  ICON_WIDTH : normalize(25),
  PIE_WIDTH : normalize(135), //151
  ASALY_WIDTH : normalize(157), //177.45
  ASALY_MARGIN_TOP : normalize(10),
  EGG_MARGIN_TOP : normalize(25),
  START_OR_STOP_ICON : normalize(50),
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: (x - em(1.25) * 2) * (3/5),
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),
  progressBar_PaddingB : normalize(0), //48

  dialogWidth: normalize(300),
  dialogheight: normalize(175),
  dialogheightDetail : normalize(200),
  PADDING_HELP_LEFT_RIGHT : normalize(30),
  PADDING_HELP_TOP : normalize(30),
  PADDING_HELP_BOTTOM : normalize(20),
  MARGIN_BOTTOM_HELP_TITLE : normalize(20),
  MARGIN_TOP_HELP_BASHE : normalize(40),
  PADDING_BOTTOM_HELP_TITLE : normalize(10),
  
  BORDER_RADIUS : normalize(20),
  itemMargin : normalize(10),
  HELP_MARGIN : normalize(20),
  // FONT
  
  FONT_SIZE_SMALLER: normalize(12),
  FONT_SIZE_SMALL: normalize(14),
  FONT_SIZE_TITLE: normalize(18),
  FONT_SIZE_REALY_SMALL : normalize(10),

  SWITCHER_WIDTH_1: normalize(105),
  CONTAINER_WIDTH_1: normalize(300),
  CONTAINER_MARGIN_BOTTOM : normalize(10),
  CONTAINER_WIDTH_2: normalize(330),
  SWITCHER_WIDTH_2: normalize(133),
  THRESHOLD_DISTANCE : normalize(202),



  
  
};