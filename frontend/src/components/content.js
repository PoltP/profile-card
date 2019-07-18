import React from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';

export class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" enabled>
				<ScrollView
					style={Object.assign({ height: '100%' }, this.props.style)}
					keyboardShouldPersistTaps={'handled'}
					alwaysBounceVertical={true}
				>
					{this.props.children}
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}
