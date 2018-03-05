# Magic The Database!
## Intro
I wanted to create a community page for players of the card game Magic The Gathering.  I wanted users to be able to browse cards, add their favorite cards to a list, build a deck, and post that deck to have other members review and comment on it.

## Setup
To run local:
1. Fork
2. Clone
3. npm start
4. open browser
5. http://localhost:5000/
6. Enjoy!

Or

1. [Click Here for Heroku! https://magicthedatabase.herokuapp.com/](https://magicthedatabase.herokuapp.com/)

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
--- | --- | --- | ---
/ | GET | index | Display Landing page
/login | GET | index | Display Login Form and Link to create Account
/login | POST | Create | User attempts to log in with information
/logout | GET | modify | Ends logged in users Session
/createUser | GET |index| Display form to create new user
/createUser | POST | create| Creates new User based on input
/profile | GET | index | Displays currently logged in user info
/search | GET | index | Displays Search input form
/search | POST | Query | Using form data, requests info from API and displays on results EJS
/card/:id | GET | index | passed form existing links, will call API to display single card
/decks | GET | index | Pulls all created decks from user
/decks/:id | GET | index |Display specific deck information
/decks/:id | DELETE | remove | Will delete deck this route is called on
/decks/:deckId/add/:cardId | PUT | modify | will update deck with specific card information user wants to add
/decks/:deckId/delete/:cardId | PUT | modify |will remove specific card from user deck
/decks/create | POST | create | Will add a new deck to users deck list
/favorite | POST | create | Route will add a card to user favorite table
/favorite/:id | DELETE | remove | removes the favorited card from list
/posts | GET | Index | Displays all current posted decks
/posts/:id | GET | |index | Display specific details about a posted deck
/posts | POST | create | will create the post if user has deck with over 30 cards
/posts | PUT |update | will update post information with up/down votes
/posts | DELETE | remove | This route will delete the specific post

## General User Flow
1. Create Account
2. Login
3. Search API for cards
4. Create deck
5. Save Cards to Deck
6. post deck
7. engage in thoughtful and polite discourse via the internet on the pros and cons of their selected cards.  While maintaining a level of civility and gratitude to their fellow humans.

## Development
I had a good time creating this webapp.  While I wanted to include so much more, I was unable to get the finishing polish on I wanted.  

### Wireframes
![alt text](https://github.com/kyleavb/project2/blob/master/public/img/Magic%20DB%20Landing.png)
![alt text](https://github.com/kyleavb/project2/blob/master/public/img/Create%20Account%20Page.png)
![alt text](https://github.com/kyleavb/project2/blob/master/public/img/Profile%20Page.png)
![alt text](https://github.com/kyleavb/project2/blob/master/public/img/Search%20Page.png)
![alt text](https://github.com/kyleavb/project2/blob/master/public/img/New%20Mockup%201.png)
