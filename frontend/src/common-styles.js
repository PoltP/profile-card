import { StyleSheet } from 'react-native';

const fontFamilies = {
	normal: 'pt-root-ui-regular',
	medium: 'pt-root-ui-medium',
	bold: 'pt-root-ui-bold'
}

const colors = {
	basic: '#000',
	basicLight: '#96A1A7',
	primary: '#08C',
	loading: '#08F',
	separator: '#DDE1E2',
	button: {
		foreground: '#EBEDEE',
		disabled: '#CED3D6',
		pressed: '#005885'
	},
	alert: '#F00'
};

const common = {
	padding: 16,
	buttonHeight: 48
}

const sheets = StyleSheet.create({
	title: {
		color: colors.basic,
		fontFamily: fontFamilies.bold,
		fontSize: 24,
		lineHeight: 32,
		paddingBottom: 32,
		display: 'flex',
		alignItems: 'flex-end'
	},
	action: {
		color: colors.primary,
		fontFamily: fontFamilies.medium,
		fontSize: 16,
		letterSpacing: 0.25,
		lineHeight: 20,
		display: 'flex',
		alignItems: 'center'
	},
	label: {
		color: colors.basic,
		fontFamily: fontFamilies.normal,
		fontSize: 18,
		letterSpacing: 0.5,
		lineHeight: 24,
		display: 'flex',
		alignItems: 'center'
	},
	photo: {
		width: 64, 
		height: 64,
		borderRadius: 32,
		borderWidth: 2, 
		borderColor: colors.primary
	},
	header: {
		height: 90,
		paddingTop: 20
	},
	containerCentered: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	loading: {
		color: colors.loading,
		paddingBottom: 30
	}
});

export default {
	common: common,
	fontFamilies: fontFamilies,
	sheets: sheets,
	colors: colors
};