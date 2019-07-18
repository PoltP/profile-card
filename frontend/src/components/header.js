import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import icons from '../icons/defs';
import styles from '../common-styles';

const HeaderContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-vertical: ${styles.sheets.header.paddingTop};
	width: 100%;
	height: ${styles.sheets.header.height};
`;

const headerButtonPress = props => {
	return () => {
		if (typeof props.goTo === 'function') {
			props.goTo();
		} else if (props.goTo) {
			props.history.push(props.goTo);
		} else {
			props.history.goBack();
		}
	};
};

export class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<HeaderContainer>
				<TouchableOpacity onPress={headerButtonPress(this.props)}>
					{icons.getBackIcon(styles.colors.primary)}
				</TouchableOpacity>
			</HeaderContainer>
		);
	}
}
