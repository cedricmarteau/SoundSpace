#pragma strict

static var gameRunning : boolean = false;

var gameTimeAllowed : float = 3000.0;
var gameMessageFont : Font;
var gameObjectsToReset : GameObject [];
var intro : Transform;
var fanReactionScript : FanReaction;

private var gameMessageLabel = "";
private var gameMessageDisplay : Rect;
private var timedOut : boolean = false;
private var gameTimeRemaining : float = gameTimeAllowed;
private var missionCompleted : boolean = false;
private var missionCompleteTime : float = gameTimeAllowed;
private var playButtonText = "Play";

function Awake() {
    gameMessageDisplay = Rect(10, 10, Screen.width - 20, 40);
}

function OnGUI() { 
    startGame();
    /*
    GUI.skin.font = gameMessageFont;
    GUI.color = Color.yellow;
    GUI.backgroundColor = Color.black;
    
    var text : String = ""; 
    if (missionCompleted) {
        text = String.Format( "{0:00}:{1:00}", parseInt( missionCompleteTime / 60.0 ), parseInt( missionCompleteTime % 60.0 ) );
        gameMessageLabel = "Mission completed in: " + text;
    } else if (timedOut) {
        gameMessageLabel = "Time's up!!";
    } else {
        text = String.Format( "{0:00}:{1:00}", parseInt( gameTimeRemaining / 60.0 ), parseInt( gameTimeRemaining % 60.0 ) );
        gameMessageLabel = "Time left: " + text;
    }
    GUI.Box(gameMessageDisplay, gameMessageLabel); 
    // The menu button
    if (!gameRunning) {
        var xPos = Screen.width / 2 - 100;
        var yPos = Screen.height / 2 + 100;
        if( GUI.Button( new Rect( xPos, yPos, 200, 50 ), playButtonText ) ) {
            startGame();
        }
    }   
    */
}

function Update() { 

}

function startGame() {
    // Kick off the game
    gameRunning = true;
}

function MissionComplete() { 
    if (!gameRunning)
        return;
    
    missionCompleted = true; 
    gameRunning = false;
    
    // Play the sound of victory
    fanReactionScript.playSoundOfVictory(true);
    
    missionCompleteTime =  gameTimeAllowed - gameTimeRemaining;
}