import * as React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';
import styles from '../common-styles';

// Based on https://docs.expo.io/versions/latest/sdk/imagepicker/

const initialState = {
	image: null
};

export default class PhotoPicker extends React.Component {
	state = Object.assign({}, initialState);

	componentDidMount() {
		this.getPermissionAsync();
	}

	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
	};

	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1]
		});

		if (!result.cancelled) {
			this.setState({ image: result.uri }, () => {
				this.props.onImageChanged && this.props.onImageChanged(result.uri);
			});
		}
	};

	render() {
		return (
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-start',
					paddingBottom: 34
				}}
			>
				<Image source={{ uri: this.state.image || '#' }} style={styles.sheets.photo} />
				<TouchableOpacity onPress={this._pickImage}>
					<Text style={[{ marginLeft: 16 }, styles.sheets.action]}>Upload Photo</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
