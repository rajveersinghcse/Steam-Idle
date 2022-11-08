# Steam_Idle

<h3>Hey Gamers,👨🏻‍💻</h3>
<p>I created an Open Source script. By using this script you can idle your steam game easily with Low RAM usage. For this, you don't need to open your steam app also.</p>

## ⚠️ There are no viruses or malware. All things are trusted

# Requirements to run this script
### In your system, you have to install Node.js. If you have already installed then well and good. If you don't have you have to install it.
#### By clicking this download button you can download the Node.js from the official website. [Download](https://nodejs.org/en/)

# Steps to run this script.
### ➡️1. First You have to enter some values into the index.js script.
### ➡️2. Enter your steam username, password, and game IDs (what game you want to Idle) into the index.js script.<br>
#### Examples: 
#### ‎ ‎ ‎‎ ‎ ‎ a. You have to enter your user name in line 7. Example: accountName: '---your user name--', --> accountName: 'user12'.<br>
#### ‎ ‎ ‎‎ ‎ ‎ b. You have to enter your password in line 8. Example: password: '---your password---', --> password: 'Password@12'.<br>
#### ‎ ‎ ‎‎ ‎ ‎ c. If you want to Idle Single or multiple games you have to enter the list of game ids into line number 20. Example: user.gamesPlayed(['Delete me']); --> user.gamesPlayed([730,1172470]);<br>
#### ‎ ‎ ‎‎ ‎ ‎ d. If you want to make your steam profile offline so your friends don't receive your game online notifications. You have to change the 1 to 7 in line number 15. Here 1 means online and 7 means offline. You can do this thing with your steam also. This method is optional.<br>
   
### ➡️3. Then open the cmd in the Steam_Idle folder. By pressing shift + Right Click.
### ➡️4. Then copy the following command. And paste it into cmd.
```bash
node index.js
```
### ➡️5. If you have 2FA then enter the 2FA. If you don't have then leave this Step no. 5.

# How you can get the Game Id.
### 1. Open your browser and enter the Game Name.
### 2. Open its steam link.
### 3. Here you see a specific number in the link. You have to copy that number and paste it into Line number 16 in the script.
### Example: In the Below image <u>730</u> is CS:GO game id.
![img](https://github.com/rajveersinghcse/rajveersinghcse/blob/main/img/steam.png)
