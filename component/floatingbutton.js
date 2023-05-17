import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MyModal from './Modal';

const FloatingButton = () => {
    return (
        <TouchableOpacity
            style={styles.floatingButton}
            onPress={() =>
          console.log('alert')
            }>
            <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = {
    floatingButton: {
        backgroundColor: '#ff5722',
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 30
    }
};

export default FloatingButton;
