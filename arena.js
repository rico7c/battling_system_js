//Arena fighting
var fighter1 = dragons["red"]; //add character or another animal. 
var fighter2 = dragons["black"]; //Dragon will change to the monster to fight.

while (fighter1.HP > 0 && fighter2.HP > 0) {

	var fighter1hit = Math.floor(Math.random() * 2);
	var fighter2hit = Math.floor(Math.random() * 2); 

	if (fighter1hit  === 1) {
		//var fight1dmg = ((fighter1.str * fighter1.sta) + fighter1.level)/100 + fighter1.dex;
		//fighter2.HP = fighter2.HP - fight1dmg
		var fight1dmg = (((((fighter1.level*2)/5)+2)*((fighter1.dmg+(fighter1.str*fighter1.sta)/100))/fighter2.def)*fighter1.dex) * Math.random();
		console.log("Formula 1 dmg = " + fight1dmg.toFixed(2));
		var fight1dmg = ((2*fighter1.level)/5+2*((fighter1.str/10)+(fighter1.sta/10)*fighter1.dex)) * Math.random(); //missing defence
		console.log("Formula 2 dmg = " + fight1dmg.toFixed(2));
		var fight1dmg =(((fighter1.str*fighter1.sta)^2/320+(fighter1.dex/2)+fighter1.dmg) - ((fighter2.def^2)/320*fighter1.dex)) * Math.random();
		console.log("Formula 3 dmg = " + fight1dmg.toFixed(2));
	};
	if (fighter2hit === 1){
		var fight2dmg = ((fighter2.str * fighter2.sta) + fighter2.level)/100 + fighter2.dex;
		fighter1.HP = fighter1.HP - (fight2dmg)
		console.log(fight2dmg)
	};

	fighter1.HP = 0

}

	console.log(fighter1.HP.toFixed(2))
	console.log(fighter2.HP.toFixed(2))
	var dragonDmg = Math.floor(Math.random() * 25 + 1);
	console.log(dragonDmg);