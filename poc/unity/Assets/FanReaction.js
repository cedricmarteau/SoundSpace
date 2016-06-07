#pragma strict

var audioVictory : AudioClip;
var audioDefeat : AudioClip;
var volumeVictory : float = 2.0;
var volumeDefeat : float = 2.0;

function playSoundOfVictory(isVictory : boolean) {
    // Stop any current audio
    if (GetComponent.<AudioSource>().isPlaying)
        GetComponent.<AudioSource>().Stop();
    
    // Play either the sound of victory or defeat.
    GetComponent.<AudioSource>().clip = isVictory ? audioVictory : audioDefeat;
    GetComponent.<AudioSource>().volume = isVictory ? volumeVictory : volumeDefeat;
    GetComponent.<AudioSource>().Play();
}

function resetGame() {
    // Reset to original state, stop any audio
    if (GetComponent.<AudioSource>().isPlaying)
        GetComponent.<AudioSource>().Stop();
}

@script RequireComponent(AudioSource)