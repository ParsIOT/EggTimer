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
        borderRadius:20,
        borderWidth:2,
        borderColor:'rgb(249, 208, 16)',
        backgroundColor:'rgb(249, 208, 50)'
      },
    selectedItemText:{
        fontSize:17,
        fontWeight:'bold', 
        fontFamily:'Vazir',
        color:'black'
      },

    normalItem:{
        margin:5,
        padding:10,
        borderRadius:20,
    },

    normalItemText:{
        fontSize:17,
        fontFamily:'Vazir',
        color:'black'
    },

    disableItem:{
        margin:5,
        padding:10,
        borderRadius:20,
        
    },

    disableItemText:{
        fontSize:17,
        fontFamily:'Vazir',
        color:'rgb(190,190,190)'
    },

    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default styles