// game logic
// controls for the sub


function Dive(speed : float) {
	transform.localPosition.y -= speed * Time.deltaTime;
}

function Ascend(speed : float) {
	transform.localPosition.y += speed * Time.deltaTime;
}

function MoveLeft(speed : float) {
	transform.localPosition.x -= speed * Time.deltaTime;
}

function MoveRight(speed : float) {
	transform.localPosition.x += speed * Time.deltaTime;
}