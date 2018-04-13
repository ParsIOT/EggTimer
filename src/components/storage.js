'use strict';
import React, {Component} from 'react';
import { StyleSheet,Text,
ListView,View, DeviceEventEmitter,
Alert, PermissionsAndroid, WebView,
Button,
Image,
TextInput,
ScrollView,
AsyncStorage,
TouchableNativeFeedback,
Vibration} from 'react-native';

import Storage from 'react-native-storage'


const storage = new Storage({
    size:20,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
    
})
export{storage}
