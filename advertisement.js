import React, { Component } from "react";
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ToastAndroid,
	Image,
	Button,
	ScrollView,
    Picker,
    Platform,
    TouchableNativeFeedback
} from "react-native";
import Tapsell, { AdVideo, BannerAd } from "react-native-tapsell";
import styles from './appStyle/styleSheet.js'
import myStyle from './appStyle/style.js'
import Icon from 'react-native-vector-icons/MaterialIcons'



const APP_KEY =
	"fbmnggcikoiknoeotnflkecrimdfjsrcreapbopsbqksfmtjbqqodbkkltikdqkijflhtr";
const NATIVE_ZONE_ID = "5b22749b8d956d000162e628";
const NATIVE_BANNER_AD_TYPE = "native-banner";

Tapsell.initialize(APP_KEY)


export default class  Advertisement extends Component{

    constructor(props){
        super(props)
        this.state={
            title:"nothing",
            nativeAdData: {title:'loading Ad ..'},
            onAdClicked : () => {},
            onAdShown : () => {},
            ad:false,
            timeOuts:[]

        }
        
    }

    componentDidMount(){
        this.requestAdd()
        // for(timer in this.state.timeOuts) clearTimeout( this.state.timeOuts[timer] )
        //  var a = setTimeout(this.requestAdd.bind(this), 10000)
        //  this.state.timeOuts.push(a)
   
    }

    onAdAvailable(){
        console.log('add is available')
    }

    onAdShown(){

    }

    onNativeAdClicked() {
		if (this.state.onAdClicked) {
			this.state.onAdClicked(this.state.nativeAdData.ad_id);
		}
	}

     requestAdd(){
        Tapsell.requestNativeBannerAd(
			NATIVE_ZONE_ID,
			(adData, onAdShown, onAdClicked) => {
				this.setState(
					{
                        nativeAdData: adData,
						onAdClicked: onAdClicked
					},
					() => {
						onAdShown(adData.ad_id);
					}
                );
                this.setState({ad:true})
			},
			() => {
                this.setState({ad:false})
                //add is not available
			},
			() => {
                this.setState({ad:false})

                //network error
			},
			error => {
                this.setState({ad:false})

                //other errors
			}
		);
    }
    
    dismissAd(){
        this.setState({ad:false})
        // for(timer in this.state.timeOuts) clearTimeout( this.state.timeOuts[timer] )
        // var b= setTimeout(()=>
        //     this.setState({ad:true})
        // , 20000);

        // this.state.timeOuts.push(b)
    }
    
    showAd(){
        if (this.state.ad){
            return(
                <View style={{padding:3, marginBottom:0, borderTopLeftRadius:myStyle.BORDER_RADIUS, borderTopRightRadius:myStyle.BORDER_RADIUS, backgroundColor:'white', flex:1, position:'absolute', left: 0, right: 0, bottom: 0}}>
                    <View style={{flexDirection:'column'}}>
                        <TouchableNativeFeedback onPress={()=>{this.dismissAd()}}>
                            <Icon name={'close'} size={myStyle.CLOSE_ICON} style={{position:'absolute', margin: myStyle.CLOSE_MARGIN}}/>
                        </TouchableNativeFeedback>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
                            <View style={{flexDirection:'column', justifyContent:'center'}}>
                                <TouchableNativeFeedback onPress={()=>{this.onNativeAdClicked(); this.dismissAd()}}>
                                    <View>
                                        <Text style={styles.advertisementText}>{this.state.nativeAdData.title}</Text>
                                        <Text style={styles.advertisementDetailText}>{this.state.nativeAdData.description}</Text>
                                    </View>
                                </TouchableNativeFeedback>

                            </View>
                            <TouchableNativeFeedback onPress={()=>{this.onNativeAdClicked(); this.dismissAd()}}>
                                <Image source={{uri:this.state.nativeAdData.icon_url}} style={{width:32, height:32, margin:8, marginTop:8}}/>
                            </TouchableNativeFeedback>

                        </View>


                    </View>
                    {/* <Button title={'click '} onPress={()=>this.onNativeAdClicked()}/> */}
                </View>
                )
        }
    else {
        return
    }
    }

    render(){
        return(
            <View>
            {this.showAd()}
            </View>
        )
    }
}