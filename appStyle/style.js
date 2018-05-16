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
  paddingTouch : normalize(30),
  helpIconMargin : normalize(15),
  paddingTouch2 : normalize(30),
  FILLED_PIE_COLOR : '#ffcc80',
  BORDER_PIE_COLOR : '#ffffff',
  UNFILLED_PIE_COLOR:'#ffb100',
  DETAIL_TEXT_MARGIN_BOTTOM : normalize(45),

  // CARD
  ICON_WIDTH : normalize(30),
  PIE_WIDTH : normalize(151),
  ASALY_WIDTH : normalize(178.2),
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: (x - em(1.25) * 2) * (3/5),
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),
  progressBar_PaddingB : normalize(48),

  dialogWidth: normalize(300),
  dialogheight: normalize(200),
  dialogheightDetail : normalize(300),
  
  itemMargin : normalize(10),

  // FONT
  
  FONT_SIZE_SMALLER: normalize(15),
  FONT_SIZE_SMALL: normalize(14),
  FONT_SIZE_TITLE: normalize(22),
  
};