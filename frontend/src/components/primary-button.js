import styles from '../common-styles';
import React from 'react';
import { Dimensions, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

export class PrimaryButton extends React.Component {
	render() {
		return (
			<Button
				Component={TouchableHighlight}
				title={this.props.title}
				onPress={this.props.onPress}
				disabled={this.props.disabled}
				loading={this.props.loading}
				titleStyle={{
					color: this.props.color || 'white',
					fontSize: 16,
					textAlign: 'center',
					lineHeight: 16,
					textTransform: 'none',
					fontFamily: styles.fontFamilies.normal
				}}
				disabledStyle={{
					backgroundColor: styles.colors.button.disabled
				}}
				disabledTitleStyle={{
					color: styles.colors.button.foreground
				}}
				containerStyle={Object.assign(
					{
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%'
					},
					this.props.style
				)}
				buttonStyle={{
					backgroundColor: this.props.background || styles.colors.primary,
					width: width - 2 * styles.common.padding,
					height: styles.common.buttonHeight,
					borderRadius: 4,
					borderWidth: 0
				}}
				underlayColor={styles.colors.button.pressed}
			/>
		);
	}
}
