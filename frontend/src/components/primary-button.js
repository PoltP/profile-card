import React from 'react';
import { TouchableHighlight, Text, ActivityIndicator } from 'react-native';
import styles from '../common-styles';

export class PrimaryButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<TouchableHighlight
				onPress={this.props.onPress}
				activeOpacity={1}
				disabled={this.props.disabled}
				underlayColor={styles.colors.button.pressed}
				style={[
					buttonStyles.container(this.props.disabled && !this.props.loading),
					this.props.style
				]}
			>
				{this.props.loading ? (
					<ActivityIndicator size="small" color={styles.colors.button.foreground} />
				) : (
					<Text style={buttonStyles.title}>{this.props.title}</Text>
				)}
			</TouchableHighlight>
		);
	}
}

const buttonStyles = {
	container: isDisabled =>
		Object.assign({}, styles.sheets.containerCentered, {
			backgroundColor: isDisabled ? styles.colors.button.disabled : styles.colors.primary,
			height: styles.common.buttonHeight,
			borderRadius: 4,
			borderWidth: 0
		}),
	title: Object.assign({}, styles.sheets.action, {
		color: styles.colors.button.foreground
	})
};
