// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Alert } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// const Camera = () => {

//     const [camref, setCamera] = useState(null);

//     const onReady = () => {
//         console.log('Im Here...');
//         setTimeout(takePicture, 5 * 1000);
//     };

//     /* Handling Picture Taken From Camera */
//     const takePicture = async () => {
//         if (camref !== null) {
//             const options = {
//                 quality: 0.5,
//                 fixOrientation: true,
//                 forceUpOrientation: true,
//                 pauseAfterCapture: false,
//             };

//             /* Assigning Picture Path */
//             const { uri, codec = 'jpg' } = await camref.takePictureAsync(options);
//             console.log(uri);

//         }
//     };

//     return (
//         <View style={styles.container}>
//             <RNCamera
//                 ref={ref => setCamera(ref)}
//                 style={styles.preview}
//                 type={RNCamera.Constants.Type.front}
//                 flashMode={RNCamera.Constants.FlashMode.off}
//                 autoFocus={RNCamera.Constants.AutoFocus.on}
//                 onCameraReady={onReady}
//                 androidCameraPermissionOptions={{
//                     title: 'Permission to use camera',
//                     message: 'We need your permission to use your camera',
//                     buttonPositive: 'Ok',
//                     buttonNegative: 'Cancel',
//                 }}
//                 androidRecordAudioPermissionOptions={{
//                     title: 'Permission to use audio recording',
//                     message: 'We need your permission to use your audio',
//                     buttonPositive: 'Ok',
//                     buttonNegative: 'Cancel',
//                 }}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     preview: {
//         flex: 1,
//     },
// });

// export default Camera;
