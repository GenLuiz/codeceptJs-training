# codeceptJs-training

# GIVEN you have codeceptjs
 npm install -g codeceptjs
# AND you have selenium-standalone
  npm install -g selenium-standalone
  selenium-standalone install
  selenium-standalone start
 # WHEN you run the codeceptjs
  codeceptjs run --steps
 # THEN you should see your test running
 Github login --
  invalid password
    I am on page "https://github.com"
    I click "Sign in"
    I see "Sign in to GitHub"
    githubPage: fillLogin
    I click "//*[@name='commit']"
    I see "Incorrect username or password."
  √ OK in 12776ms


