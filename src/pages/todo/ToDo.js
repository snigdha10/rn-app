import React, { useState } from 'react';
import { Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from "./ToDoStyles";
import UIModal from "../../common/modal/UIModal";

export default function ToDo() {

    const [goals, updateGoals] = useState([]);
    const [enteredGoal, setGoal] = useState('');
    const [showModal, updateShowModal] = useState(false);

    const goalInputHandler = (text) => {
        setGoal(text);
    };

    const addGoal = () => {
        updateGoals([...goals, enteredGoal]);
        toggleModal(false);
        setGoal('');
    };

    const toggleModal = (show) => {
        updateShowModal(show);
    }

    const clearAllGoals = () => {
        updateGoals([]);
    };

    const deleteGoal = (item) => {
        const updatedGoals = goals.filter(goal => goal !== item);
        updateGoals(updatedGoals);
    };

    const renderFlatListItem = ({ item, index }) => {
        return <TouchableOpacity onPress={deleteGoal.bind(this, item)}>
            <View key={item + index} style={styles.goal}><Text>{item}</Text></View>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <UIModal showModal={showModal} toggleModal={toggleModal}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput}
                               placeholder='Enter a goal'
                               onChangeText={goalInputHandler}
                               value={enteredGoal}
                    />
                    <Button title='+' onPress={addGoal}/>
                </View>
            </UIModal>
            <View style={styles.buttonViewStyle}>
                <Button title='Add new goal' onPress={toggleModal.bind(this, true)}/>
            </View>
            <View style={styles.buttonViewStyle}>
                <Button title='Clear all goals' color='#ffb3b3' onPress={clearAllGoals}/>
            </View>
            <View style={styles.goalsHeading}>
                <Text style={styles.goalsText}>Goals:</Text>
            </View>
            {goals.length === 0 && <View>
                <Text>Let's get started by adding some goals!</Text>
            </View>}
            <FlatList data={goals}
                      renderItem={renderFlatListItem}
                      keyExtractor={(item, index) => item + index}
            />
        </View>
    );
}
