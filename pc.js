var attributes = [
	// Environ
	"desert", "tundra", "mountain", "space", "field", "urban",
	// Stealth and cunning
	"hidden", "covert", "uncanny", "scheming", "decisive",
	// Volitility
	"rowdy", "dangerous", "explosive", "threatening",
	// Needs correction
	"bad", "unnecessary", "unknown", "unexpected", "rude", "nefarious",
	// Organic Gems and materials
	"amber", "bone", "coral", "ivory", "pearl", 
	// Regular Gems
	"diamond", "ruby", "jade",
  // Cloth Materials
  "cotton", "linen", "rubber", "silk", "straw", "woolen",
	// Colors
  "red", "orange", "yellow", "green", "blue", "violet", "beige", "crimson", "indigo", "creme",
  //Adjectives
  "angry", "beautiful", "brave", "careful", "careless", "clever", "crazy", "cute", "dangerous", "exciting", "famous", "friendly", "happy", "interesting", "lucky", "popular", "rich", "sad", "thin", "unlucky", 
]

var objects = [
	// Large cats
	"panther", "lion", "leopard", "house cat",
	// Snakes
	"viper", "cobra",
	// Other predators
	"grizzly", "jackal", "falcon",
	// Prey
	"zebra", "elk", "moose", "llama", "alpaca",
	// Occupations
	"wizard", "cleric", "pilot",
	// Sea life
	"octopus", "lobster", "hammerhead", "orca",
	// Weather
	"storm", "thunder", "lightning", "rain", "hail", "sun", "snow",
]

var type = "PROJECT";
var codename = "CODENAME";

function createCodename()
{
	var f = attributes[Math.floor(Math.random() * attributes.length)].toUpperCase();
	var l = objects[Math.floor(Math.random() * objects.length)].toUpperCase();
	codename = f + " " + l;

	$('#codename').text(codename);
	updateTwitterButton();
}

function switchType()
{
	if (type == "PROJECT")
	{
		type = "OPERATION";
		$('#switchType').text("It's a project.");
	}
	else
	{
		type = "PROJECT";
		$('#switchType').text("It's an operation.");
	}

	$('#opType').text(type);
	updateTwitterButton();
}

function updateTwitterButton()
{
	$('#twitter').replaceWith("<a href=\"https://twitter.com/share\" id=\"twitter\" class=\"twitter-share-button\" data-via=\"zachwlewis\" data-url=\"http://projectcodename.com\">Tweet</a>");
	$('#twitter').attr('data-text', type + ": " + codename + " is a go.");

	if(typeof(twttr) !== 'undefined')
	{
		twttr.widgets.load();
	}
}

createCodename();
$('#newProject').click(createCodename);
$('#switchType').click(switchType);
