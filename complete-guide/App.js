import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ScrollView,
    FlatList,
} from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    
    // Hook for Goals List
    const [courseGoalList, setCourseGoalList] = useState([]);

    const addGoalHandler = (goal) => {
        setCourseGoalList((currentGoals) => [
            ...currentGoals,
            { id: Math.random().toString(), value: goal },
        ]);
    };

    return (
        <View style={styles.mainContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoalList}
                renderItem={(itemData) => <GoalItem goal={itemData.item.value} />}
            />
        </View>
    );
}

// Stylesheet Equivalent to styles.css
const styles = StyleSheet.create({
    mainContainer: {
        padding: 50,
    },
});
