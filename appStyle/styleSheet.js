import {StyleSheet} from 'react-native'

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
        margin:5,
        padding:10,
        paddingBottom:4,
        paddingTop:2,
        borderRadius:18,
        // borderWidth:3,
        // borderColor:'white',
        backgroundColor:'#ffcc80'
        
      },
    selectedItemText:{
        fontSize:15,
        // fontWeight:'bold', 
        fontFamily:'Vazir-Bold',
        color:'white'
      },

    normalItem:{
        margin:5,
        padding:10,
        borderRadius:20,
    },

    normalItemText:{
        fontSize:15,
        fontFamily:'Vazir',
        color:'black'
    },

    disableItem:{
        margin:5,
        padding:10,
        borderRadius:20,
        
    },

    disableItemText:{
        fontSize:15,
        fontFamily:'Vazir',
        color:'rgb(190,190,190)'
    },

    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    disSelectedItem:{
        margin:5,
        padding:10,
        paddingBottom:4,
        paddingTop:2,
        borderRadius:18,
        // borderWidth:2,
        // borderColor:'rgb(249, 208, 16)',
        backgroundColor:'rgb(260, 240, 200)'
    },
    disSelectedItemText:{
        fontSize:15,
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
        fontSize:25, 
        textAlign:'center', textAlignVertical:'center',
        // fontWeight:'bold', 
        marginBottom:15,
        fontFamily:'Vazir-Bold-FD'
    }
    

})

export default styles