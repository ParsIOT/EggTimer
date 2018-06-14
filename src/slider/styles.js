import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
import myStyle from '../../appStyle/style'

const Colors = {
    mBackColor: '#3333',
    mBorderColor: '#efefef',
    white: '#FFFFFF',
    shadowColor: '#A69E9E'
};

const Metrics = {
    containerWidth: myStyle.CONTAINER_WIDTH_1, //width - 60
    containerWidth2: myStyle.CONTAINER_WIDTH_222, //width - 60
    switchWidth: myStyle.SWITCHER_WIDTH_1 //width / 3.5
};

const styles = StyleSheet.create({

    container: {
        marginBottom:myStyle.CONTAINER_MARGIN_BOTTOM,
        width: Metrics.containerWidth,
        height: 55,
        flexDirection: 'row',
        backgroundColor: Colors.mBackColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderColor: Colors.mBorderColor,
        borderRadius: 27.5
    },
    container2: {
        marginBottom:myStyle.CONTAINER_MARGIN_BOTTOM,
        width: Metrics.containerWidth2,
        height: 55,
        flexDirection: 'row',
        backgroundColor: Colors.mBackColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderColor: Colors.mBorderColor,
        borderRadius: 27.5
    },
    
    switcher: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        borderBottomWidth:3,
        borderBottomColor : '#ffb100',
        // backgroundColor : 'rgba(255,255,255,0)',
        borderRadius: 28,
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        width: Metrics.switchWidth,
        elevation: 4,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowColor: Colors.shadowColor
    },
    buttonStyle: {
        flex: 1,
        width: Metrics.containerWidth / 3,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
