import {StyleSheet, PixelRatio} from 'react-native'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                import myStyle from './style.js'

var fontt =myStyle.FONT_SIZE_SMALL
var fontt2 =myStyle.FONT_SIZE_TITLE
var myMargin = myStyle.itemMargin





const styles = StyleSheet.create ({
    Button:{
        color:'red'
    },
    TimerFont:{
        color:'#66a5ad',
        fontSize: 25,
        padding:20
    },
    selectedItem:{
        margin:myMargin,
        padding:8,
        // paddingBottom:4,
        // paddingTop:2,
        borderRadius:20,
        // borderWidth:3,
        // borderColor:'white',
        backgroundColor:'#ffb100'
        
        //#ffcc80
      },
    selectedItemText:{
        fontSize:fontt,
        // fontWeight:'bold', 
        fontFamily:'Vazir-Bold',
        color:'white'
      },

    normalItem:{
        margin:myMargin,
        padding:8,
        borderRadius:20,
    },

    normalItemText:{
        fontSize:fontt,
        fontFamily:'Vazir',
        color:'black'
    },

    disableItem:{
        margin:myMargin,
        padding:8,
        borderRadius:20,
        
    },

    disableItemText:{
        fontSize:fontt,
        fontFamily:'Vazir',
        color:'rgb(190,190,190)'
    },

    rowContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    disSelectedItem:{
        margin:myMargin,
        padding:8,
        // paddingBottom:4,
        // paddingTop:2,
        borderRadius:20,
        // borderWidth:2,
        // borderColor:'rgb(249, 208, 16)',
        backgroundColor:'rgb(260, 240, 200)'
    },
    disSelectedItemText:{
        fontSize:fontt,
        fontFamily:'Vazir',
        color:'rgb(190,190,190)'
    },
    progressBarEmpty:{
        marginTop:5,
        width:14,
        height:14,
        borderTopWidth:0.5,
        borderTopColor:'black',
        borderBottomWidth:0.5,
        borderBottomColor:'black'
    },

    progressBarFull:{
        
        
        
        borderTopWidth:0.5,
        borderTopColor:'black',
        borderBottomWidth:0.5,
        borderBottomColor:'black',
        marginTop:5,
        width:14,
        height:14,
        backgroundColor:'rgb(249, 190, 50)'
    },

    beginningProgressBarFull:{
        marginTop:5,
        width:14,
        height:14,
        // borderTopLeftRadius:20,
        // borderBottomLeftRadius:20,
        backgroundColor:'rgb(249, 190, 50)',
        borderTopWidth:0.5,
        borderTopColor:'black',
        borderLeftWidth:0.5,
        borderLeftColor:'black',
        borderBottomWidth:0.5,
        borderBottomColor:'black'
    },
    
    beginningProgressBarEmpty:{
        marginTop:5,
        width:14,
        height:14,
        borderTopWidth:0.5,
        borderTopColor:'black',
        borderLeftWidth:0.5,
        borderLeftColor:'black',
        borderBottomWidth:0.5,
        borderBottomColor:'black'
    },

    endProgressBarFull:{
        marginTop:5,
        width:14,
        height:14,
        borderTopWidth:0.5,
        borderTopColor:'black',
        borderRightWidth:0.5,
        borderRightColor:'black',
        borderBottomWidth:0.5,
        borderBottomColor:'black',
        backgroundColor:'rgb(249, 190, 50)'
    },

    endProgressBarEmpty:{
        marginTop:5,
        width:14,
        height:14,
        borderTopWidth:0.5,
        borderTopColor:'black',
        borderRightWidth:0.5,
        borderRightColor:'black',
        borderBottomWidth:0.5,
        borderBottomColor:'black',
    },


    

    gpsIconStyle:{
        width:14,
        height:14
    },
    progressBarTime:{
        fontSize:fontt2, 
        textAlign:'center', textAlignVertical:'center',
        // fontWeight:'bold', 
        marginBottom:15,
        fontFamily:'Vazir-Bold-FD'
    },
    selectedItemHelp:{
        margin:5,
        padding:10,
        marginBottom:5+6,
        marginTop:5+8,
        borderRadius:18,
        paddingBottom:4,
        paddingTop:2,
        
        // paddingTop:0,
        // paddingBottom:0,        
        // borderWidth:3,
        // borderColor:'white',
        backgroundColor:'#87CEFA'
        
      },
      selectedItemHelpSelected:{
        margin:5,
        padding:10,
        marginBottom:5+6,
        marginTop:5+8,
        borderRadius:18,
        paddingBottom:4,
        paddingTop:2,
        
        // paddingTop:0,
        // paddingBottom:0,        
        // borderWidth:3,
        // borderColor:'white',
        backgroundColor:'#00BFFF'
      },

    //   margin:5,
    //   padding:10,
    //   borderRadius:20,

    


    selectedItemTextHelp:{
        fontSize:15,
        // fontWeight:'bold', 
        fontFamily:'Vazir-Bold',
        color:'white'
      },

      bashe:{
        fontFamily:'Vazir-Bold-FD', fontSize:fontt2, color:'white'
      },
      helpText:{
      fontFamily:'Vazir', textAlign:'center', textAlignVertical:'center', margin:10, fontSize:fontt
      },
      helpTextBold:{
      fontFamily:'Vazir-Bold-FD', textAlign:'center', textAlignVertical:'center', margin:10, fontSize:fontt+2
      },
      detailInEgg:{
        fontSize:fontt, fontFamily:'Vazir-Bold-FD',textAlign:'center', textAlignVertical:'center'
      }


})

export default styles