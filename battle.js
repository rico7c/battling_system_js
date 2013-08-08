var hp_player = 100;
var hp_bot = 100;
var roll = Math.random(); 
var bot_roll = Math.random();

var battle = function (){

	if (roll > 0.66){
		hp_bot = hp_bot - 10;
		console.log("players health points drops by 10");
		}
	else if (roll < 0.33) {
		console.log("Your Attack missed!");
	}
	else
	{
		hp_bot = hp_bot - 5;
		console.log("players health points drops by 5")
	}

	if (bot_roll > 0.66){
		hp_player = hp_player - 10;
		console.log("atackers health points drops by 10");
		}
	else if (bot_roll < 0.33) {
		console.log("bots attack missed!");
	}
	else
	{
		hp_player = hp_player - 5;
		console.log("Attackers health points drops by 5")
	}
}

while (hp_player > 0 && hp_bot > 0 ) {
	roll = Math.random();
	bot_roll = Math.random();
	battle(roll, bot_roll);
}
if (hp_player <= 0){
	console.log("player has died");
}
else if (hp_bot <= 0) {
	console.log("bot has dies");
}
else{
	console.log("both have died");	
};
	
