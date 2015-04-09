// game logic
// controls for the sub


function Dive(speed : float) {
	transform.position -= transform.up * speed * Time.deltaTime;
}

function Ascend(speed : float) {
	transform.position += transform.up * speed * Time.deltaTime;
}

function MoveLeft(speed : float) {
	transform.position -= transform.right * speed * Time.deltaTime;
}

function MoveRight(speed : float) {
	transform.position += transform.right * speed * Time.deltaTime;
}