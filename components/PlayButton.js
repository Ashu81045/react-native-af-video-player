import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const backgroundColor = 'transparent';

const styles = StyleSheet.create({
	playButton: {
		opacity: 0.9,
	},
	playContainer: {
		flex: 1,
		backgroundColor,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
});

const PlayButton = (props) => (
	<View style={styles.playContainer}>
		<TouchableOpacity
			style={{ marginHorizontal: 40 }}
			onPress={() =>{
				let percent = (props.currentTime - 10)/props.duration;
				props.onSeekRelease(percent)}
			}
		>
			<Icons
				style={styles.playButton}
				name={'replay-10'}
				color={props.theme}
				size={50}
			/>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => props.onPress()}>
			<Icons
				style={styles.playButton}
				name={props.paused ? 'play-circle-outline' : 'pause-circle-outline'}
				color={props.theme}
				size={75}
			/>
		</TouchableOpacity>
		<TouchableOpacity
			style={{ marginHorizontal: 40 }}
			onPress={() =>{
				let percent = (props.currentTime + 10)/props.duration;
				props.onSeekRelease(percent)}
			}
		>
			<Icons
				style={styles.playButton}
				name={'forward-10'}
				color={props.theme}
				size={50}
			/>
		</TouchableOpacity>
	</View>
);

PlayButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	paused: PropTypes.bool.isRequired,
	theme: PropTypes.string.isRequired,
};

export { PlayButton };
