
Feature('Github login');

const githubPage = require("./pages/github");

Scenario('invalid password', (I) => {
	I.amOnPage("https://github.com");
	I.click("//a[@href='/login']");
	I.see("Sign in to GitHub");
	githubPage.fillLogin("genluiz", "teste");
	I.click(githubPage.fields.loginButton);
	I.see("Incorrect username or password.");
});
