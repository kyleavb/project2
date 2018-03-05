# Magic The Database!
## Intro
I wanted to create a community page for players of the card game Magic The Gathering.  I wanted users to be able to browse cards, add their favorite cards to a list, build a deck, and post that deck to have other members review and comment on it.

## Tech Used
* Materialize CSS
* Heroku for app hosting
* Node Modules:
* bCrypt - for encrypting user password information
* Express
* eJS
* Passport
* Request
* Sequelize

## Features
* Create User profile
* Search a robust Magic the Gathering API for cards and other info on them
* Create Your own decks
* Create a favorite list
* Post cards so other users can review your work

## Left on the table
* Comments on Posts
* Cleaning up look/feel/responsiveness
* Charts CHARTS CHARRRTTTS

## Routes Table
URL | VERB | ACTION | Purpose
/ | GET | index | Display Landing page
/login | GET | index | Display Login Form and Link to create Account
/login | POST | Create | User attempts to log in with information
/logout | GET | modify | Ends logged in users Session
/createUser | GET |index| Display form to create new user
/createUser | POST | create| Creates new User based on input
/profile
