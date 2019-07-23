import React from 'react';
import { Font } from 'expo';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import { NativeRouter as Router, Route } from 'react-router-native';
import styles from './common-styles';
import ProfilePage from './pages/profile';

const initialState = {
	loading: true,
	loadingMessage: 'Loading...'
};

export default class App extends React.Component {
	state = Object.assign({}, initialState);

	constructor(props){
		super(props);
	}

	componentDidMount = async () => {
		Font.loadAsync({
			// https://docs.expo.io/versions/latest/guides/using-custom-fonts/
			'pt-root-ui-regular': require('../assets/fonts/PTRootUI_Regular.otf'),
			'pt-root-ui-medium': require('../assets/fonts/PTRootUI_Medium.otf'),
			'pt-root-ui-bold': require('../assets/fonts/PTRootUI_Bold.otf'),
			// http://javascriptrambling.blogspot.com/2018/03/expo-icon-fonts-with-react-native-and.html
			'FontAwesome': require('../assets/fonts/FontAwesome.ttf')
		}).then(() => {
			this.setState({ loading: false, loadingMessage: '' })
		});
	};

	render() {
		if(this.state.loading)
			return (
				<View style={styles.sheets.containerCentered}>
					<Text style={styles.sheets.loading}>{this.state.loadingMessage}</Text>
					<ActivityIndicator size="large" color={styles.colors.loading} />
				</View>
			);
		return (
			<View>
				<StatusBar barStyle="dark-content" hidden={false} translucent={false} currentHeight="50" />
				<Router>
					<Route
						exact
						path="/"
						component={props => (
							<ProfilePage {...props} />
						)}
					/>
				</Router>
			</View>
		);
	}
}
