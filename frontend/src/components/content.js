import React from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';

export class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<KeyboardAvoidingView {...this.props} behavior="padding" enabled>
				<ScrollView keyboardShouldPersistTaps={'handled'} alwaysBounceVertical={true}>
					{this.props.children}
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}
