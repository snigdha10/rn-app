import React from 'react';
import { Modal, View, Button } from 'react-native';
import styles from './UIModalStyles';

const UIModal = (props) => {

    const { showModal, children, toggleModal } = props;

    return <Modal visible={showModal} animationType='slide'>
        <View style={styles.modalContainer}>
            <View style={styles.modalChildren}>{children}</View>
            <Button title='Cancel' color='#ffb3b3' onPress={toggleModal.bind(this, false)}/>
        </View>
    </Modal>;
};

export default UIModal;
