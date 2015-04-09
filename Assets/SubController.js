// input logic

var speed : float;

function Update() {
	// get keyboard input
	if (Input.GetAxis("Horizontal")) {
		if (Input.GetKeyDown(KeyCode.LeftArrow))
			GetComponent(SubEngine).MoveLeft(speed);
		if (Input.GetKeyDown(KeyCode.RightArrow))
			GetComponent(SubEngine).MoveRight(speed);
		GetComponent(Spin).Spin(speed, 0);
	}
	if (Input.GetAxis("Vertical")) {
		if (Input.GetKeyDown(KeyCode.DownArrow))
			GetComponent(SubEngine).Dive(speed);
		if (Input.GetKeyDown(KeyCode.UpArrow))
			GetComponent(SubEngine).Ascend(speed);
		GetComponent(Spin).Spin(speed, 1);
	}
}