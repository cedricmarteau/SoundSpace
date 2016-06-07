#pragma strict

var impact : AudioClip;
function OnCollisionEnter () {
    GetComponent.<AudioSource>().PlayOneShot(impact);
}

@script RequireComponent(AudioSource)