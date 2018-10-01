
const I = actor();

module.exports = {

	fields: {
		login: "#login_field",
		password: "#password",
		loginButton: "//*[@name='commit']"
	},


	fillLogin(user,password) {
		I.fillField(this.fields.login, user);
		I.fillField(this.fields.password, password);
	}
}
