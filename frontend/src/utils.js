// https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
// http://regexlib.com/Search.aspx?k=phone&c=7&m=-1&ps=20  - more regex for phone numbers
const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const isPhoneValid = phone => !!phone && phoneRegex.test(phone);

// https://emailregex.com/
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isEmailValid = email => !!email && emailRegex.test(email);

export default {
	isPhoneValid: isPhoneValid,
	isEmailValid: isEmailValid
}