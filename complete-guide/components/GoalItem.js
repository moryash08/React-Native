import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
    return (
        <View style={styles.courseGoalList}>
            <Text>{props.goal}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    courseGoalList: {
        padding: 10,
        marginTop: 10,
        backgroundColor: "grey",
        borderColor: "black",
        borderWidth: 1,
    },
});

export default GoalItem;