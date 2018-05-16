import { AppRegistry , View, Button, Text, TouchableNativeFeedback} from 'react-native';
import App from './App';
import React, { Component } from 'react';
import PopupDialog , {DialogButton} from 'react-native-popup-dialog';


export default class kjj extends Component<{}>{

    popup(){
        this.popupDialog.show()
        
    }

    render(){
        return (
            <View style={{flex:1}}>
            
        <Button title={'click me'} onPress={()=>{this.popup()}}/>
        <Text>hi man </Text>
        <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            width= {100}
            height= {100}
            size={50}
            style={{flex:1}}
            haveOverlay={true}
            // overlayOpacity={1}
            // overlayBackgroundColor={'white'}
            >
            <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:0}}>
              <Text> برای توضیحات هر آیتم، روی آیتم مورد نظر نگه دارید</Text>
              <TouchableNativeFeedback onPress={()=>{this.popupDialog.dismiss()}}>
                  <View style={{backgroundColor:'#ffb100',marginTop:20, borderRadius:20, padding:10}}>
                  <Text> باشه </Text>
                  </View>
              </TouchableNativeFeedback>
            </View>
        </PopupDialog>
            <App popup={this.popup}></App>
            </View>
        
        )
    }
}    