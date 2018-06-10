

// let testJson = '{"name":"John", "age":31, "city":"New York"}';
// let testobj = JSON.parse(testJson)
// console.log('thing', testobj['name']);

// var json = require('./data.json');




// $.getJSON("allwords.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });




let growingString = "";


// word bank
let words = { "0":"a", "1":"ability", "2":"able", "3":"about", "4":"above", "5":"accept", "6":"according", "7":"account", "8":"across", "9":"act", "10":"action", "11":"activity", "12":"actually", "13":"add", "14":"address", "15":"administration", "16":"admit", "17":"adult", "18":"affect", "19":"after", "20":"again", "21":"against", "22":"age", "23":"agency", "24":"agent", "25":"ago", "26":"agree", "27":"agreement", "28":"ahead", "29":"air", "30":"all", "31":"allow", "32":"almost", "33":"alone", "34":"along", "35":"already", "36":"also", "37":"although", "38":"always", "39":"American", "40":"among", "41":"amount", "42":"analysis", "43":"and", "44":"animal", "45":"another", "46":"answer", "47":"any", "48":"anyone", "49":"anything", "50":"appear", "51":"apply", "52":"approach", "53":"area", "54":"argue", "55":"arm", "56":"around", "57":"arrive", "58":"art", "59":"article", "60":"artist", "61":"as", "62":"ask", "63":"assume", "64":"at", "65":"attack", "66":"attention", "67":"attorney", "68":"audience", "69":"author", "70":"authority", "71":"available", "72":"avoid", "73":"away", "74":"baby", "75":"back", "76":"bad", "77":"bag", "78":"ball", "79":"bank", "80":"bar", "81":"base", "82":"be", "83":"beat", "84":"beautiful", "85":"because", "86":"become", "87":"bed", "88":"before", "89":"begin", "90":"behavior", "91":"behind", "92":"believe", "93":"benefit", "94":"best", "95":"better", "96":"between", "97":"beyond", "98":"big", "99":"bill", "100":"billion", "101":"bit", "102":"black", "103":"blood", "104":"blue", "105":"board", "106":"body", "107":"book", "108":"born", "109":"both", "110":"box", "111":"boy", "112":"break", "113":"bring", "114":"brother", "115":"budget", "116":"build", "117":"building", "118":"business", "119":"but", "120":"buy", "121":"by", "122":"call", "123":"camera", "124":"campaign", "125":"can", "126":"cancer", "127":"candidate", "128":"capital", "129":"car", "130":"card", "131":"care", "132":"career", "133":"carry", "134":"case", "135":"catch", "136":"cause", "137":"cell", "138":"center", "139":"central", "140":"century", "141":"certain", "142":"certainly", "143":"chair", "144":"challenge", "145":"chance", "146":"change", "147":"character", "148":"charge", "149":"check", "150":"child", "151":"choice", "152":"choose", "153":"church", "154":"citizen", "155":"city", "156":"civil", "157":"claim", "158":"class", "159":"clear", "160":"clearly", "161":"close", "162":"coach", "163":"cold", "164":"collection", "165":"college", "166":"color", "167":"come", "168":"commercial", "169":"common", "170":"community", "171":"company", "172":"compare", "173":"computer", "174":"concern", "175":"condition", "176":"conference", "177":"Congress", "178":"consider", "179":"consumer", "180":"contain", "181":"continue", "182":"control", "183":"cost", "184":"could", "185":"country", "186":"couple", "187":"course", "188":"court", "189":"cover", "190":"create", "191":"crime", "192":"cultural", "193":"culture", "194":"cup", "195":"current", "196":"customer", "197":"cut", "198":"dark", "199":"data", "200":"daughter", "201":"day", "202":"dead", "203":"deal", "204":"death", "205":"debate", "206":"decade", "207":"decide", "208":"decision", "209":"deep", "210":"defense", "211":"degree", "212":"Democrat", "213":"democratic", "214":"describe", "215":"design", "216":"despite", "217":"detail", "218":"determine", "219":"develop", "220":"development", "221":"die", "222":"difference", "223":"different", "224":"difficult", "225":"dinner", "226":"direction", "227":"director", "228":"discover", "229":"discuss", "230":"discussion", "231":"disease", "232":"do", "233":"doctor", "234":"dog", "235":"door", "236":"down", "237":"draw", "238":"dream", "239":"drive", "240":"drop", "241":"drug", "242":"during", "243":"each", "244":"early", "245":"east", "246":"easy", "247":"eat", "248":"economic", "249":"economy", "250":"edge", "251":"education", "252":"effect", "253":"effort", "254":"eight", "255":"either", "256":"election", "257":"else", "258":"employee", "259":"end", "260":"energy", "261":"enjoy", "262":"enough", "263":"enter", "264":"entire", "265":"environment", "266":"environmental", "267":"especially", "268":"establish", "269":"even", "270":"evening", "271":"event", "272":"ever", "273":"every", "274":"everybody", "275":"everyone", "276":"everything", "277":"evidence", "278":"exactly", "279":"example", "280":"executive", "281":"exist", "282":"expect", "283":"experience", "284":"expert", "285":"explain", "286":"eye", "287":"face", "288":"fact", "289":"factor", "290":"fail", "291":"fall", "292":"family", "293":"far", "294":"fast", "295":"father", "296":"fear", "297":"federal", "298":"feel", "299":"feeling", "300":"few", "301":"field", "302":"fight", "303":"figure", "304":"fill", "305":"film", "306":"final", "307":"finally", "308":"financial", "309":"find", "310":"fine", "311":"finger", "312":"finish", "313":"fire", "314":"firm", "315":"first", "316":"fish", "317":"five", "318":"floor", "319":"fly", "320":"focus", "321":"follow", "322":"food", "323":"foot", "324":"for", "325":"force", "326":"foreign", "327":"forget", "328":"form", "329":"former", "330":"forward", "331":"four", "332":"free", "333":"friend", "334":"from", "335":"front", "336":"full", "337":"fund", "338":"future", "339":"game", "340":"garden", "341":"gas", "342":"general", "343":"generation", "344":"get", "345":"girl", "346":"give", "347":"glass", "348":"go", "349":"goal", "350":"good", "351":"government", "352":"great", "353":"green", "354":"ground", "355":"group", "356":"grow", "357":"growth", "358":"guess", "359":"gun", "360":"guy", "361":"hair", "362":"half", "363":"hand", "364":"hang", "365":"happen", "366":"happy", "367":"hard", "368":"have", "369":"he", "370":"head", "371":"health", "372":"hear", "373":"heart", "374":"heat", "375":"heavy", "376":"help", "377":"her", "378":"here", "379":"herself", "380":"high", "381":"him", "382":"himself", "383":"his", "384":"history", "385":"hit", "386":"hold", "387":"home", "388":"hope", "389":"hospital", "390":"hot", "391":"hotel", "392":"hour", "393":"house", "394":"how", "395":"however", "396":"huge", "397":"human", "398":"hundred", "399":"husband", "400":"I", "401":"idea", "402":"identify", "403":"if", "404":"image", "405":"imagine", "406":"impact", "407":"important", "408":"improve", "409":"in", "410":"include", "411":"including", "412":"increase", "413":"indeed", "414":"indicate", "415":"individual", "416":"industry", "417":"information", "418":"inside", "419":"instead", "420":"institution", "421":"interest", "422":"interesting", "423":"international", "424":"interview", "425":"into", "426":"investment", "427":"involve", "428":"issue", "429":"it", "430":"item", "431":"its", "432":"itself", "433":"job", "434":"join", "435":"just", "436":"keep", "437":"key", "438":"kid", "439":"kill", "440":"kind", "441":"kitchen", "442":"know", "443":"knowledge", "444":"land", "445":"language", "446":"large", "447":"last", "448":"late", "449":"later", "450":"laugh", "451":"law", "452":"lawyer", "453":"lay", "454":"lead", "455":"leader", "456":"learn", "457":"least", "458":"leave", "459":"left", "460":"leg", "461":"legal", "462":"less", "463":"let", "464":"letter", "465":"level", "466":"lie", "467":"life", "468":"light", "469":"like", "470":"likely", "471":"line", "472":"list", "473":"listen", "474":"little", "475":"live", "476":"local", "477":"long", "478":"look", "479":"lose", "480":"loss", "481":"lot", "482":"love", "483":"low", "484":"machine", "485":"magazine", "486":"main", "487":"maintain", "488":"major", "489":"majority", "490":"make", "491":"man", "492":"manage", "493":"management", "494":"manager", "495":"many", "496":"market", "497":"marriage", "498":"material", "499":"matter", "500":"may", "501":"maybe", "502":"me", "503":"mean", "504":"measure", "505":"media", "506":"medical", "507":"meet", "508":"meeting", "509":"member", "510":"memory", "511":"mention", "512":"message", "513":"method", "514":"middle", "515":"might", "516":"military", "517":"million", "518":"mind", "519":"minute", "520":"miss", "521":"mission", "522":"model", "523":"modern", "524":"moment", "525":"money", "526":"month", "527":"more", "528":"morning", "529":"most", "530":"mother", "531":"mouth", "532":"move", "533":"movement", "534":"movie", "535":"Mr", "536":"Mrs", "537":"much", "538":"music", "539":"must", "540":"my", "541":"myself", "542":"name", "543":"nation", "544":"national", "545":"natural", "546":"nature", "547":"near", "548":"nearly", "549":"necessary", "550":"need", "551":"network", "552":"never", "553":"new", "554":"news", "555":"newspaper", "556":"next", "557":"nice", "558":"night", "559":"no", "560":"none", "561":"nor", "562":"north", "563":"not", "564":"note", "565":"nothing", "566":"notice", "567":"now", "568":"n't", "569":"number", "570":"occur", "571":"of", "572":"off", "573":"offer", "574":"office", "575":"officer", "576":"official", "577":"often", "578":"oh", "579":"oil", "580":"ok", "581":"old", "582":"on", "583":"once", "584":"one", "585":"only", "586":"onto", "587":"open", "588":"operation", "589":"opportunity", "590":"option", "591":"or", "592":"order", "593":"organization", "594":"other", "595":"others", "596":"our", "597":"out", "598":"outside", "599":"over", "600":"own", "601":"owner", "602":"page", "603":"pain", "604":"painting", "605":"paper", "606":"parent", "607":"part", "608":"participant", "609":"particular", "610":"particularly", "611":"partner", "612":"party", "613":"pass", "614":"past", "615":"patient", "616":"pattern", "617":"pay", "618":"peace", "619":"people", "620":"per", "621":"perform", "622":"performance", "623":"perhaps", "624":"period", "625":"person", "626":"personal", "627":"phone", "628":"physical", "629":"pick", "630":"picture", "631":"piece", "632":"place", "633":"plan", "634":"plant", "635":"play", "636":"player", "637":"PM", "638":"point", "639":"police", "640":"policy", "641":"political", "642":"politics", "643":"poor", "644":"popular", "645":"population", "646":"position", "647":"positive", "648":"possible", "649":"power", "650":"practice", "651":"prepare", "652":"present", "653":"president", "654":"pressure", "655":"pretty", "656":"prevent", "657":"price", "658":"private", "659":"probably", "660":"problem", "661":"process", "662":"produce", "663":"product", "664":"production", "665":"professional", "666":"professor", "667":"program", "668":"project", "669":"property", "670":"protect", "671":"prove", "672":"provide", "673":"public", "674":"pull", "675":"purpose", "676":"push", "677":"put", "678":"quality", "679":"question", "680":"quickly", "681":"quite", "682":"race", "683":"radio", "684":"raise", "685":"range", "686":"rate", "687":"rather", "688":"reach", "689":"read", "690":"ready", "691":"real", "692":"reality", "693":"realize", "694":"really", "695":"reason", "696":"receive", "697":"recent", "698":"recently", "699":"recognize", "700":"record", "701":"red", "702":"reduce", "703":"reflect", "704":"region", "705":"relate", "706":"relationship", "707":"religious", "708":"remain", "709":"remember", "710":"remove", "711":"report", "712":"represent", "713":"Republican", "714":"require", "715":"research", "716":"resource", "717":"respond", "718":"response", "719":"responsibility", "720":"rest", "721":"result", "722":"return", "723":"reveal", "724":"rich", "725":"right", "726":"rise", "727":"risk", "728":"road", "729":"rock", "730":"role", "731":"room", "732":"rule", "733":"run", "734":"safe", "735":"same", "736":"save", "737":"say", "738":"scene", "739":"school", "740":"science", "741":"scientist", "742":"score", "743":"sea", "744":"season", "745":"seat", "746":"second", "747":"section", "748":"security", "749":"see", "750":"seek", "751":"seem", "752":"sell", "753":"send", "754":"senior", "755":"sense", "756":"series", "757":"serious", "758":"serve", "759":"service", "760":"set", "761":"seven", "762":"several", "763":"sex", "764":"sexual", "765":"shake", "766":"share", "767":"she", "768":"shoot", "769":"short", "770":"shot", "771":"should", "772":"shoulder", "773":"show", "774":"side", "775":"sign", "776":"significant", "777":"similar", "778":"simple", "779":"simply", "780":"since", "781":"sing", "782":"single", "783":"sister", "784":"sit", "785":"site", "786":"situation", "787":"six", "788":"size", "789":"skill", "790":"skin", "791":"small", "792":"smile", "793":"so", "794":"social", "795":"society", "796":"soldier", "797":"some", "798":"somebody", "799":"someone", "800":"something", "801":"sometimes", "802":"son", "803":"song", "804":"soon", "805":"sort", "806":"sound", "807":"source", "808":"south", "809":"southern", "810":"space", "811":"speak", "812":"special", "813":"specific", "814":"speech", "815":"spend", "816":"sport", "817":"spring", "818":"staff", "819":"stage", "820":"stand", "821":"standard", "822":"star", "823":"start", "824":"state", "825":"statement", "826":"station", "827":"stay", "828":"step", "829":"still", "830":"stock", "831":"stop", "832":"store", "833":"story", "834":"strategy", "835":"street", "836":"strong", "837":"structure", "838":"student", "839":"study", "840":"stuff", "841":"style", "842":"subject", "843":"success", "844":"successful", "845":"such", "846":"suddenly", "847":"suffer", "848":"suggest", "849":"summer", "850":"support", "851":"sure", "852":"surface", "853":"system", "854":"table", "855":"take", "856":"talk", "857":"task", "858":"tax", "859":"teach", "860":"teacher", "861":"team", "862":"technology", "863":"television", "864":"tell", "865":"ten", "866":"tend", "867":"term", "868":"test", "869":"than", "870":"thank", "871":"that", "872":"the", "873":"their", "874":"them", "875":"themselves", "876":"then", "877":"theory", "878":"there", "879":"these", "880":"they", "881":"thing", "882":"think", "883":"third", "884":"this", "885":"those", "886":"though", "887":"thought", "888":"thousand", "889":"threat", "890":"three", "891":"through", "892":"throughout", "893":"throw", "894":"thus", "895":"time", "896":"to", "897":"today", "898":"together", "899":"tonight", "900":"too", "901":"top", "902":"total", "903":"tough", "904":"toward", "905":"town", "906":"trade", "907":"traditional", "908":"training", "909":"travel", "910":"treat", "911":"treatment", "912":"tree", "913":"trial", "914":"trip", "915":"trouble", "916":"true", "917":"truth", "918":"try", "919":"turn", "920":"TV", "921":"two", "922":"type", "923":"under", "924":"understand", "925":"unit", "926":"until", "927":"up", "928":"upon", "929":"us", "930":"use", "931":"usually", "932":"value", "933":"various", "934":"very", "935":"victim", "936":"view", "937":"violence", "938":"visit", "939":"voice", "940":"vote", "941":"wait", "942":"walk", "943":"wall", "944":"want", "945":"war", "946":"watch", "947":"water", "948":"way", "949":"we", "950":"weapon", "951":"wear", "952":"week", "953":"weight", "954":"well", "955":"west", "956":"western", "957":"what", "958":"whatever", "959":"when", "960":"where", "961":"whether", "962":"which", "963":"while", "964":"white", "965":"who", "966":"whole", "967":"whom", "968":"whose", "969":"why", "970":"wide", "971":"wife", "972":"will", "973":"win", "974":"wind", "975":"window", "976":"wish", "977":"with", "978":"within", "979":"without", "980":"woman", "981":"wonder", "982":"word", "983":"work", "984":"worker", "985":"world", "986":"worry", "987":"would", "988":"write", "989":"writer", "990":"wrong", "991":"yard", "992":"yeah", "993":"year", "994":"yes", "995":"yet", "996":"you", "997":"young", "998":"your", "999":"yourself" };
let wordsUsed = []; //indecies of used words in words. Gets reset on completion of test
let numWords = 100 //number of words to be populated in testingText
let wordsIndex = 0; //temp index
let testingText = ""; //string of words for the typing test

function populateString () {
  //populates words in testingText
  for (let i = 0; i < numWords; i++) {
    do {
      wordsIndex = Math.floor(Math.random() * Object.keys(words).length);
    } while (wordsUsed.includes(wordsIndex));
    wordsUsed.push(wordsIndex)
    testingText += words[wordsIndex];
    testingText += " "
  }
}


// String that the user will have to type
let shrinkingString  = ""
// Holds the typed characters so we can put them back later
let shrinkingStack = [];

let totalChars = 0;

// Is the test being taken?
let testing = false;

// Things that need to be done when the page loads
window.onload = function() {
    populateString()
    shrinkingString = testingText;
    document.getElementById("typrRight").innerHTML = shrinkingString;
};

var timerInterval;

document.addEventListener('keypress', (event) => {
    if(!testing){
      testing = true;
      //Start the timer
      timerInterval = setInterval(timer, 1000);
    }

    // Adds non enter character to string, and writes that string to the div. Adds one to totalChars
    if (event.charCode != 13) {

        // If the user presses the correct key, add it to the left string and take it away from the right.
        if(event.charCode==shrinkingString[0].charCodeAt(0)){
          growingString += shrinkingString[0];
          totalChars++;
          if(shrinkingString[0]!=undefined){
              shrinkingStack.push(shrinkingString[0]);
          }

          // Shorten the string on the right
          shrinkingString = shrinkingString.substring(1, shrinkingString.length);
        }
        // Otherwise, strike it through.
        else{
          growingString += shrinkingString[0].strike();

          if(shrinkingString[0]!=undefined){
              shrinkingStack.push(shrinkingString[0]);
          }

          // Shorten the string on the right
          shrinkingString = shrinkingString.substring(1, shrinkingString.length);
        }

        document.getElementById("typrLeft").innerHTML = growingString;
        document.getElementById("typrRight").innerHTML = shrinkingString;
    }
  });

document.addEventListener('keydown', (event) => {
    // Removes multiple backspaces, and subtracts from the characters typed
    if (event.key == "Backspace") {

        // Check for a strikethrough on the character, because those are removed differently.
        if(growingString[growingString.length-1]==">"){
          growingString = growingString.substring(0, growingString.length - 18);
        }else{
          growingString = growingString.substring(0, growingString.length - 1);
          totalChars--;
        }

        if(shrinkingStack!=undefined && shrinkingStack.length != 0){
            shrinkingString = shrinkingStack.pop()+shrinkingString;
        }

        document.getElementById("typrLeft").innerHTML  = growingString;
        document.getElementById("typrRight").innerHTML = shrinkingString;
    }
});
let seconds_left = 10;

// Score calculation and seting will live here
calculateScore = function(){
  // How many characters the user was expected to typ
  expectedChars = testingText.length-shrinkingString.length;

  wordsPerMinute = totalChars/5;
  Accuracy = totalChars/expectedChars*100;

  alert("WPM: "+wordsPerMinute+". Accuracy: "+Accuracy);
}

// Resets the test, as the name implies. Will also need to repopulate text, eventually
resetTest = function(){
  alert(totalChars/5+" WPM");
  shrinkingString = testingText;
  shrinkingStack = [];
  wordsUsed = []; //reset words used to nothing
  growingString = "";
  totalChars=0;
  seconds_left = 60;
  testing = false;
  clearInterval(timerInterval);
  document.getElementById("typrLeft").innerHTML  = growingString;
  document.getElementById("typrRight").innerHTML = shrinkingString;
}

//Counts down the seconds from 60
function timer() {
    seconds_left--;

    //reset test when timer runs out
    if(seconds_left<=0){
      // Must be called in this order
      calculateScore();
      resetTest();
    }

    document.getElementById("timer").innerHTML = seconds_left;
}








