import {StyleSheet, PixelRatio} from 'react-native'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                import myStyle from './style.js'
var fontts = myStyle.FONT_SIZE_SMALLER
var fontt =myStyle.FONT_SIZE_SMALL
var fontt2 =myStyle.FONT_SIZE_TITLE
var fontTiltle = myStyle.FONT_SIZE_TITLE
var myMargin = myStyle.itemMargin
var fontSmall = myStyle.FONT_SIZE_REALY_SMALL

const Metrics = {
    containerWidth: myStyle.CONTAINER_WIDTH_1, //width - 60
    switchWidth: myStyle.SWITCHER_WIDTH_1 //width / 3.5
};




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
        borderRadius:myStyle.BORDER_RADIUS ,//myStyle.BORDER_RADIUS
        // borderWidth:3,
        // borderColor:'white',
        // backgroundColor:'#ffb100',
        borderBottomWidth:2,
        borderBottomColor:'#ffb100'
        
        //#ffcc80

        // flex: 1,
        // width: Metrics.containerWidth / 3,
        // height: 54,
        // justifyContent: 'center',
        // alignItems: 'center'
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
        borderRadius:myStyle.BORDER_RADIUS    
        // flex: 1,
        // width: Metrics.containerWidth / 3,
        // height: 54,
        // justifyContent: 'center',
        // alignItems: 'center'
    },

    normalItemText:{
        fontSize:fontt,
        fontFamily:'Vazir',
        color:'white'
    },

    disableItem:{
        margin:myMargin,
        padding:8,
        borderRadius:myStyle.BORDER_RADIUS    
        // flex: 1,
        // width: Metrics.containerWidth / 3,
        // height: 54,
        // justifyContent: 'center',
        // alignItems: 'center'  
          
    },

    disableItemText:{
        fontSize:fontt,
        fontFamily:'Vazir',
        color:'rgb(180,180,180)',
        color:'#888888'

    },

    rowContainer:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:0,
        borderBottomColor:'white'
    },

    disSelectedItem:{

        margin:myMargin,
        padding:8,
        borderRadius:myStyle.BORDER_RADIUS ,
        borderBottomWidth:2,
        borderBottomColor:'rgb(190,190,190)'

          },
    disSelectedItemText:{
        fontSize:fontt,
        fontFamily:'Vazir-Bold-FD',
        // color:'red'
        color:'rgb(190,190,190)',
        color:'#888888'
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
        fontSize:fontt, 
        textAlign:'center', textAlignVertical:'center',
        // fontWeight:'bold', 
        marginBottom:0,
        fontFamily:'Vazir-Bold-FD'
    },
    selectedItemHelp:{
        margin:5,
        padding:10,
        marginBottom:5+6,
        marginTop:5+8,
        borderRadius:myStyle.BORDER_RADIUS,
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
        borderRadius:myStyle.BORDER_RADIUS,
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
        fontFamily:'Vazir-Bold-FD', fontSize:fontt, color:'#ffb100'
      },

      basheBadan:{
        fontFamily:'Vazir', fontSize:fontt, color:'#808080'
      },

      nazar:{
        fontFamily:'Vazir-Bold-FD', fontSize:fontt, color:'white'
      },
      aboutText:{
        fontFamily:'Vazir', textAlign:'right', textAlignVertical:'center', margin:0, fontSize:fontts
        },
        aboutTextBold:{
            fontFamily:'Vazir-Bold-FD', textAlign:'right', textAlignVertical:'center', margin:0, fontSize:fontts
            },    

      helpText:{
      fontFamily:'Vazir', textAlign:'right', textAlignVertical:'center', margin:0, fontSize:fontt
      },
      helpTextBold:{
      fontFamily:'Vazir-Bold-FD', textAlign:'right', textAlignVertical:'center',fontSize:fontt+2
      },
      detailInEgg:{
        fontSize:fontts, fontFamily:'Vazir-Bold-FD',textAlign:'center', textAlignVertical:'center'
      }
     ,parsiot:{
        fontFamily:'Vazir', textAlign:'center', textAlignVertical:'center', fontSize:fontts
        },
    helpTitle:{
        fontFamily:'Vazir-Bold-FD', textAlign:'center', textAlignVertical:'center', fontSize:fontTiltle
        },
    advertisementText:{
        flexWrap: 'wrap', flex:1,fontFamily:'Vazir-Bold-FD', textAlign:'right', textAlignVertical:'center', fontSize:fontSmall, color:'black'
    },
    advertisementDetailText:{
        flexWrap: 'wrap', flex:1,fontFamily:'Vazir', textAlign:'right', textAlignVertical:'center', fontSize:fontSmall, color:'black'

    },
    parsiot:{
        flexWrap: 'wrap',fontFamily:'Vazir', textAlignVertical:'center', fontSize:fontSmall, color:'black',marginTop:myStyle.MARGIN_TOP_HELP_BASHE
    }


})

export default styles