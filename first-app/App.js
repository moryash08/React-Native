import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
	/* State Hook which takes outputText as variable and setOutputText as function which updates the variable.
		useState is the default(initial) value of variable */
	const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
	return (
		<View style={styles.container}>
			<Text>{ outputText }</Text>
			<StatusBar style="auto" />
			{/* Here, on Pressing the button, inline function updates the value of outputText. */}
			<Button title="Change text" onPress={() => setOutputText('The text has changed!')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
