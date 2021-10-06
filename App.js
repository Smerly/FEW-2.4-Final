import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { useDispatch } from './actions';
// import reducers from './reducers';
// import { addManga } from './actions';
// import { useSelector } from 'react-redux';

export default function App() {
	const [titleIn, setTitle] = useState('');
	const [genreIn, setGenre] = useState('');
	const [summaryIn, setSummary] = useState('');
	const [authorIn, setAuthor] = useState('');

	const [info, setInfo] = useState([]);

	return (
		<View style={styles.container}>
			<View style={styles.part}>
				<TextInput
					style={styles.input}
					onChangeText={setTitle}
					placeholder="Title"
				/>
				<TextInput
					style={styles.input}
					onChangeText={setGenre}
					placeholder="Genre"
				/>
				<TextInput
					style={styles.input}
					onChangeText={setSummary}
					placeholder="Summary..."
				/>
				<TextInput
					style={styles.input}
					onChangeText={setAuthor}
					placeholder="Author"
				/>

				<Button
					title="Press me"
					onPress={(e) => {
						setInfo([titleIn, genreIn, summaryIn, authorIn]);
					}}
					title="Submit"
					color="#ffc000"
				/>

				{/* {mangas.map((manga, index) => {
						return (
							<View>
								<Text>{manga.title}</Text>
								<Text>{manga.genre}</Text>
								<Text>{manga.summary}</Text>
								<Text>{manga.author}</Text>
							</View>
						);
					})} */}
			</View>
			<View style={styles.output}>
				<Text style={styles.title}>{info[0]}</Text>
				<Text>Author: {info[3]}</Text>
				<Text style={styles.genre}>Genre: {info[1]}</Text>
				<Text>Summary: {info[2]}</Text>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffc000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	part: {
		width: '70%',
		backgroundColor: 'white',
		minHeight: 100,
		padding: 20,
	},

	output: {
		width: '70%',
		backgroundColor: 'white',
		marginTop: 10,
		minHeight: 200,
		padding: 20,
	},
	title: {
		fontSize: 50,
	},
});
