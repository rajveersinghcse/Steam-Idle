var acc_name = readLine("Please Enter your Steam User Name: ");

var pass = readLine("Please Enter your Steam Password: ");


const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: acc_name,
	password: pass
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' -Successfully logged on');
	user.setPersona(1);
	user.gamesPlayed(['Delete me']);
});

// You have to enter your account name, password and Game Id.

// If you want to Idle Single or multiple games you have to enter list of game id's into line number 20. 

// For Example : user.gamesPlayed(['Delete me']); --> user.gamesPlayed([730,1172470]);
