import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function ToDo() {

    const [goals, updateGoals] = useState([]);
    const [enteredGoal, setGoal] = useState('');

    const goalInputHandler = (text) => {
        setGoal(text);
    };

    const addGoal = () => {
        updateGoals([...goals, enteredGoal]);
    };

    const renderFlatListItem = ({ item, index }) => {
        return <View key={item + index} style={styles.goal}><Text>{item}</Text></View>;
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
            {/* If list size is known, use ScrollView */}
            {/*<ScrollView>
                {goals.map((goal) => <View key={goal + Math.random()} style={styles.goal}><Text>{goal}</Text></View>)}
            </ScrollView>*/}
            <FlatList data={goals}
                      renderItem={renderFlatListItem}
                      keyExtractor={(item, index) => item + index}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        paddingBottom: 20
    },
    textInput: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '80%'
    },
    buttonStyle: {
        width: '20%'
    },
    goal: {
        marginVertical: 5,
        backgroundColor: '#e6f2ff',
        padding: 10
    }
});
