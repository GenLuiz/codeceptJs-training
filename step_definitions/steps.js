const I = actor();
// Add in your custom step files

Given('Im at github page', () => {
  I.amOnPage("https://github.com");
});

When('I click on Sing in', () => {
  I.click("//a[@href='/login']");
});

When('I fill the fields with wrong password', () => {
  // From "features\basic.feature" {"line":9,"column":5}
  throw new Error('Not implemented yet');
});

Then('I should see an error message', () => {
  // From "features\basic.feature" {"line":10,"column":5}
  throw new Error('Not implemented yet');
});
