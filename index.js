
const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: '---your user name--',
	password: '---your password---'
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' -logged on');
	user.setPersona(1); 
	user.gamesPlayed(['---delete me and enter the list of game id---']);
});

// You have to enter your account name, password and Game Id.

// You have to enter you user name in line 7. Example: accountName: '---your user name--', --> accountName: 'user12'.

// You have to enter you password in line 8. Example: password: '---your password---', --> password: 'Password@12'.

// If you want to Idle Single or multiple games you have to enter list of game id's into line number 20. 
// For Example : user.gamesPlayed(['Delete me']); --> user.gamesPlayed([730,1172470]);

//To get the Game Id.
// step 1. Open your browser and enter the game name.
// step 2. Open its steam link.
// step 3. Here you see a specifc number in the link. You have to copy that number and paste in the Line number 16


// If you want to make your steam profile offline so your friend dont recive you game online notifications. You have to change the 1->7 in line number 15. Here 1 mean online and and 7 mean offline. You can do this thing with your steam also. This method is optional. 