import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Content } from '../../components/content';
import { PrimaryButton } from '../../components/primary-button';
import { Header } from '../../components/header';
import FloatingLabelInput from '../../components/floating-label-input';
import PhotoPicker from '../../components/photo-picker';
import styles from '../../common-styles';
import utils from '../../utils';

const { height } = Dimensions.get('window');

const initialState = {
	isSaving: false,
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	telegram: '',
	image: null
};

class ProfilePage extends React.Component {
	state = Object.assign({}, initialState);

	constructor(props) {
		super(props);
	}

	onFirstNameChange(val) {
		this.setState({ firstName: val });
	}
	onLastNameChange(val) {
		this.setState({ lastName: val });
	}
	onPhoneChange(val) {
		this.setState({ phone: val });
		return !(val === initialState.phone || utils.isPhoneValid(val));
	}
	onEmailChange(val) {
		this.setState({ email: val });
		return !(val === initialState.email || utils.isEmailValid(val));
	}
	onTelegramChange(val) {
		this.setState({ telegram: val });
	}
	onImageChanged(uri) {
		this.setState({ image: uri });
	}

	isReady() {
		return !!(
			this.state.firstName &&
			this.state.lastName &&
			utils.isPhoneValid(this.state.phone) &&
			utils.isEmailValid(this.state.email) &&
			this.state.telegram &&
			this.state.image
		);
	}

	onSave() {
		this.setState({ isSaving: true }); // call it before POST to server, then set to 'false'
		setTimeout(() => this.setState({ isSaving: false }), 2000);
	}

	render() {
		return (
			<View keyboardShouldPersistTaps={'always'} style={{ paddingHorizontal: styles.common.padding }}>
				<Header {...this.props} backIconColor={styles.colors.basic} />
				<Text style={styles.sheets.title}>Edit Profile</Text>
				<Content
					style={{
						height: height - (styles.sheets.header.height + styles.sheets.header.paddingTop + 50)
					}}
				>
					<PhotoPicker onImageChanged={this.onImageChanged.bind(this)} />
					<FloatingLabelInput
						label="First Name"
						autoCapitalize={'words'}
						onChange={this.onFirstNameChange.bind(this)}
						value={this.state.firstName}
					/>
					<FloatingLabelInput
						label="Last Name"
						autoCapitalize={'words'}
						onChange={this.onLastNameChange.bind(this)}
						value={this.state.lastName}
					/>
					<FloatingLabelInput
						label="Phone"
						autoCapitalize={'none'}
						onChange={this.onPhoneChange.bind(this)}
						value={this.state.phone}
						keyboardType="phone-pad"
					/>
					<FloatingLabelInput
						label="Email"
						autoCapitalize={'none'}
						onChange={this.onEmailChange.bind(this)}
						value={this.state.email}
						keyboardType="email-address"
					/>
					<FloatingLabelInput
						label="Telegram"
						autoCapitalize={'none'}
						onChange={this.onTelegramChange.bind(this)}
						value={this.state.telegram}
					/>

					<PrimaryButton
						title="Save"
						onPress={this.onSave.bind(this)}
						disabled={!!this.state.isSaving || !this.isReady()}
						loading={!!this.state.isSaving}
						style={{ marginTop: 40, marginBottom: styles.common.padding }}
					></PrimaryButton>
				</Content>
			</View>
		);
	}
}

export default ProfilePage;
