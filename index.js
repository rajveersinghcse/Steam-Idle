var acc_name = readLine("Please Enter your Steam User Name: ");

var pass = readLine("Please Enter your Steam Password: ");

var g_id = readInt("Please Enter the Game ID: ");

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
	user.gamesPlayed([g_id]);
});

// You have to enter your account name, password and Game Id.
