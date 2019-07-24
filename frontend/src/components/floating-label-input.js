import React, { Component } from 'react';
import { View, TextInput, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../common-styles';

// Based on article from https://goshakkk.name/floating-label-input-rn-animated/

const initialState = {
	isFocused: false
};

export default class FloatingLabelInput extends Component {
	state = Object.assign({}, initialState);

	constructor(props) {
		super(props);
		this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
	}

	handleFocus() {
		this.changeFocus(true);
	}
	handleBlur() {
		this.changeFocus(false);
	}
	handleChangeText(text) {
		this.setState({ invalid: this.props.onChange(text) });
	}

	changeFocus(isFocused) {
		this.setState({ isFocused: isFocused }, () => {
			Animated.timing(this._animatedIsFocused, {
				toValue: isFocused || this.props.value !== '' ? 1 : 0,
				duration: 200
			}).start();
		});
	}

	render() {
		const { label, ...props } = this.props;
		const fontSize = styles.sheets.label.fontSize;
		const paddingTop = 16;
		const labelStyle = Object.assign({}, styles.sheets.label, {
			position: 'absolute',
			left: 0,
			color: this.state.invalid && !this.state.isFocused ? styles.colors.alert : styles.colors.basicLight,
			top: this._animatedIsFocused.interpolate({
				inputRange: [0, 1],
				outputRange: [paddingTop, 0]
			}),
			fontSize: this._animatedIsFocused.interpolate({
				inputRange: [0, 1],
				outputRange: [fontSize, 14]
			})
		});
		const textStyle = Object.assign({}, styles.sheets.label, {
			height: 32,
			fontSize: fontSize,
			color: styles.colors.basic,
			borderBottomWidth: 1,
			borderBottomColor: this.state.isFocused ? styles.colors.primary : styles.colors.separator
		});
		return (
			<View style={{ paddingTop: paddingTop, marginBottom: 25 }}>
				<Animated.Text style={labelStyle}>{label}</Animated.Text>
				<TextInput
					{...props}
					style={textStyle}
					onFocus={this.handleFocus.bind(this)}
					onBlur={this.handleBlur.bind(this)}
					onChangeText={this.handleChangeText.bind(this)}
					autoCorrect={false}
					returnKeyType={'next'}
					blurOnSubmit
				/>
			</View>
		);
	}
}

FloatingLabelInput.propTypes = {
	label: PropTypes.string
};

FloatingLabelInput.defaultProps = {
	label: ''
};
