import React, { useState } from 'react';
import { Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from "./ToDoStyles";

export default function ToDo() {

    const [goals, updateGoals] = useState([]);
    const [enteredGoal, setGoal] = useState('');

    const goalInputHandler = (text) => {
        setGoal(text);
    };

    const addGoal = () => {
        updateGoals([...goals, enteredGoal]);
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
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                           placeholder='Enter a goal'
                           onChangeText={goalInputHandler}
                           value={enteredGoal}
                />
                <Button title='+' style={styles.buttonStyle} onPress={addGoal}/>
            </View>
            <FlatList data={goals}
                      renderItem={renderFlatListItem}
                      keyExtractor={(item, index) => item + index}
            />
        </View>
    );
}
