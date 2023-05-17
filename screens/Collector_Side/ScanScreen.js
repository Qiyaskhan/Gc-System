
import * as React from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const ScanScreen = () => {
    // onSuccess=e=>{
        
    //     alert(e.data.toString());
    //            var qrcode=e.data;
    //              console.log(qrcode)

    // };
    onSuccess = e => {
       
        alert(e.data);
        // var qrcode=e.data;
        console.log(e.data)
    };
    const GetToken = () => {
    var formdata = new FormData();

    var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
    };alert(formdata);

        fetch(global.ip + "Collector/GetToken?Token_no=4rec149809", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
    return (
        <QRCodeScanner
            onRead={this.onSuccess}
            flashMode={RNCamera.Constants.FlashMode.off}
            topContent={
                <Text style={styles.centerText}>
                    Go to{' '}
                    <Text style={styles.textBold}>scan</Text> on
                    
                </Text>

            }
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    );
}


const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});

export default ScanScreen;