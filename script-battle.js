/* global fetch */
let names = Array("Bingus", "Bongo", "Bingo", "Crungus", "Scrimblo", "Zoober", "Conker", "Jeff", "Steve","Borkus",
"Dathiivrak", "Elysius", "Augustus", "Plimpy", "Joelia", "Warble", "Gonto", "Damien", "Deathblade", "Drak'nyth'avin",
"Squiggle", "Rocket Ship", "Jeremy", "Strudel", "Marshmallow", "Corn Cob", "Sketty", "Sodium Laurel Sulfate", "Tom Cruise",
"Copyrightus", "Redacted", "Hubert Jones", "Billy", "Mandy", "Cthulu Jr.", "Horst", "Uranium-238", "Gonk", "Jellyfish",
"Zubbert", "Glup Shiddo", "Chadrick", "Slimothy James", "Hepatitus", "Ugnaut", "Slim Jim", "Slim Shady", "Lebron James", "Baskingball",
"Socrates", "Plato", "Dwayne", "Avesina", "Nicodemus", "Johnald", "Floppa", "Big Z", "Ivan", "Cheryl", 
"Tiffany", "Shakespeare", "Billy G.", "Humperdink", "Wesley", "Buttercup", "Ogamofaboo", "Wilson", "Clyde", "Marvin",
"Anna May", "Naruto", "Goku", "Vegeta", "Juan", "Cat", "Dog", "Hamburger", "Cookie", "Sweetums",
"Sugarcakes", "Deathmaw", "Riprot", "Slashgore", "Bonetrousler", "Gutmangler", "Darling", "Bonecrusher", "Megatron", "Ironhide",
"Optimus Prime", "Taserface", "Bloodjaw", "Destructus", "Guilty Party", "Big Shot", "Thrembo", "Guapo", "Dio", "Giorno",
"Lil' Anthony", "Big Mike", "Wario", "Doofus", "Medium Davis", "Bobert", "Leland", "Obadiah", "Jeremiah", "Abraham"
)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function stat(){
  let value = getRandomInt(1,10);
  let bar = " <div class=\"progress\">" + "<div class=\"progress-bar\" \"progress-bar-info\" role=\"progressbar\" aria-valuenow=\"" + value + "0\""
  + "aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + value + "0%\">"
  + "<span class=\"sr-only\">" + value + "0% Complete</span></div></div>";
  let statbar = value + bar;
  return statbar;
}

document.getElementById("select-fighters").addEventListener("click", function(event) {
  event.preventDefault();
  
  const url = "https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
  fetch(url)
    
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let image = json[0];
      let num = getRandomInt(0,99);
      let stat1 = "<strong>Strength:</strong> " + stat();
      let stat2 = "<strong>Charisma:</strong> " + stat();
      let stat3 = "<strong>Stamina:</strong> " + stat();
      let stat4 = "<strong>Bloodlust:</strong> " + stat();
      let stat5 = "<strong>Magic:</strong> " + stat();
      document.getElementById("img1").src=image;
      document.getElementById("name-1").innerHTML=names[num];
      document.getElementById("stat1-1").innerHTML=stat1;
      document.getElementById("stat2-1").innerHTML=stat2;
      document.getElementById("stat3-1").innerHTML=stat3;
      document.getElementById("stat4-1").innerHTML=stat4;
      document.getElementById("stat5-1").innerHTML=stat5;
      


      /*do stuff here */
    });
    
  const url2 = "https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true";
    fetch(url2)
    
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      let image = json[0];
      let num = getRandomInt(0,99);
      let stat1 = "<strong>Strength:</strong> " + stat();
      let stat2 = "<strong>Charisma:</strong> " + stat();
      let stat3 = "<strong>Stamina:</strong> " + stat();
      let stat4 = "<strong>Bloodlust:</strong> " + stat();
      let stat5 = "<strong>Magic:</strong> " + stat();
      document.getElementById("img2").src=image;
      document.getElementById("name-2").innerHTML=names[num];
      document.getElementById("stat1-2").innerHTML=stat1;
      document.getElementById("stat2-2").innerHTML=stat2;
      document.getElementById("stat3-2").innerHTML=stat3;
      document.getElementById("stat4-2").innerHTML=stat4;
      document.getElementById("stat5-2").innerHTML=stat5;
      

      /*do similar stuff here */
    });
    
});