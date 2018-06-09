/* Switch Button Component class
 */
import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import myStyle from '../../appStyle/styleSheet'


export default class Button extends Component{

    constructor(props){
        super(props)
    }

    getIcon(type, active){
        let icn;
        switch (type) {
        case 'Open':
            icn = active
                 ? <Text></Text>
                : <Text style={this.props.textStyle1}>{this.props.item1}</Text>

            break;
        case 'In Progress':
            icn = active
                // ? require('./assets/slider/active/inprogress.png')
                // : require('./assets/slider/inactive/inprogress.png');
                ? <Text></Text>
                : <Text style={this.props.textStyle2}>{this.props.item2}</Text>
            break;
        case 'Complete':
            icn = active
                // ? require('./assets/slider/active/complete.png')
                // : require('./assets/slider/inactive/complete.png');
                ? <Text></Text>
                : <Text style={this.props.textStyle3}>{this.props.item3}</Text>
            break;
        }
        return icn;
    };


    render(){
        // console.warn(this.props.disable)
    return (
        <View>
            <TouchableOpacity
                onPress={this.props.onPress}
                // style={styles.buttonStyle}
                style={this.props.itemStyle}
                onLongPress = {this.props.onLongPress}
                onPressOut={this.props.onPressOut}
                disabled={this.props.disableVal}
            >
                {/* <Image source={getIcon(props.type, props.active)} /> */}
                {/* <Text>پخته</Text> */}
                {this.getIcon(this.props.type, this.props.active)}

                </TouchableOpacity>
        </View>
    );
}

    
}