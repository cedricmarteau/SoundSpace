#pragma strict

var gameControllerScript : GameController; // 1: new

function OnTriggerEnter(other : Collider) {
      
    if (other.gameObject.tag == "Player") 
    { 
        Debug.Log("You made it!!!"); 
        gameControllerScript.MissionComplete(); // 2: new
    } 
}
@script RequireComponent(Collider)