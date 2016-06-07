#pragma strict

var speed : float = 3.0;
var rotateSpeed : float = 3.0;

var moveJoystick : Joystick;
var rotateJoystick : Joystick;
var originalPosition : Vector3;
var originalRotation : Quaternion;

var _rotation: Vector3;
var _rotationTarget: float;
var _position: Vector3;
var positionDamping = 3.0;
var rotationDamping = 1.0;

var frameCount : int = 0;
function simulateMessage(message: String, atFrame: int) {
    if (frameCount == atFrame) {
        UpdatePosition(message);
    }
}

function simulator() {
    frameCount++;
    simulateMessage("0,0,3", 10);
    simulateMessage("-10,7,80", 60);
    simulateMessage("-5,7,160", 120);
    simulateMessage("0,7,240", 180);
    simulateMessage("5,7,320", 240);
    simulateMessage("10,7,400", 300);
}

var MessageDisplay : Rect;
function Awake() {
    originalPosition = transform.position;
    originalRotation = transform.rotation;
    MessageDisplay = Rect(10, 10, Screen.width - 20, 40);
}

function OnGUI() { 

    GUI.color = Color.yellow;
    GUI.backgroundColor = Color.black;
    GUI.Box(MessageDisplay,"x"+_position.x+"; y : "+_position.y+"; o : "+_rotationTarget);   
}


function Update () {


//     simulator();

    /* Move with estimote messages */

   var controller : CharacterController = GetComponent(CharacterController);
   controller.transform.position.x = Mathf.LerpAngle(controller.transform.position.x, _position.x, positionDamping * Time.deltaTime);
   controller.transform.position.z = Mathf.LerpAngle(controller.transform.position.z, _position.z, positionDamping * Time.deltaTime);
   
   // Rotation with smooth (possibly buggy)
   _rotation.y = Mathf.LerpAngle(_rotation.y, _rotationTarget, _rotationTarget * Time.deltaTime);
   controller.transform.rotation = Quaternion.EulerAngles(_rotation);
   // Raw rotation update
   // controller.transform.rotation.y = _rotationTarget
   // controller.transform.rotation = Quaternion.EulerAngles(_rotation);
    


    /* Move with pad (comment above) */



    var player = GameObject.Find("Player");
    player.transform.position = _position;
    player.transform.rotation = Quaternion.EulerAngles(_rotation);
     
    // var controller : CharacterController = GetComponent(CharacterController);

    
    // var rotatePos = Input.GetAxis ("Horizontal") ? 
    //                    Input.GetAxis ("Horizontal") : joyStickInput(rotateJoystick);
    // transform.Rotate(0, rotatePos * rotateSpeed, 0);
    
    // // Move forward / backward
    // var forward = transform.TransformDirection(Vector3.forward);
    // var movePos = Input.GetAxis ("Vertical") ? 
    //                  Input.GetAxis ("Vertical") : joyStickInput(moveJoystick);
    // var curSpeed = speed * movePos;
    
    // controller.SimpleMove(forward * curSpeed);
}

function UpdatePosition(message: String){ 
    var split : String[];
    split = message.Split(","[0]);
    _position.x = parseFloat(split[0]);
    _position.y = 1.5;
    _position.z = parseFloat(split[1]);

    _rotationTarget = parseFloat(split[2]) * Mathf.PI / 360f;
}

function joyStickInput (joystick : Joystick) {
    var absJoyPos = Vector2 (Mathf.Abs(joystick.position.x),
                                   Mathf.Abs(joystick.position.y));
    var xDirection = (joystick.position.x > 0) ? 1 : -1;
    var yDirection = (joystick.position.y > 0) ? 1 : -1;
    return ( ( absJoyPos.x > absJoyPos.y) ? absJoyPos.x * xDirection : absJoyPos.y * yDirection);
}

function resetGame() {
    // Reset to original position
    transform.position = originalPosition;
    transform.rotation = originalRotation;

}

@script RequireComponent(CharacterController)