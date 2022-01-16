import React from 'react';
import { Modal, View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './UIModalStyles';

const UIModal = (props) => {

    const { showModal, children, toggleModal } = props;

    return <Modal visible={showModal} animationType='slide'>
        <View style={styles.modalContainer}>
            <View>{children}</View>
            <TouchableWithoutFeedback onPress={toggleModal.bind(this, false)}>
                <Text>Cancel</Text>
            </TouchableWithoutFeedback>
        </View>
    </Modal>;
};

export default UIModal;
