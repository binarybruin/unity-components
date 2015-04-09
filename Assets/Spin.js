// feedback
// script to make an object spin given a speed and an axis of rotation


// comment this out if something else triggers Spin
function Update() {
	//Spin(speed, axis);
}

function Spin(speed, axis) {		// axis: x = 0, y = 1, z = 2
	switch (axis) {
		case 0:
			transform.Rotate(speed * Time.deltaTime, 0, 0);
			break;
		case 1:
			transform.Rotate(0, speed * Time.deltaTime, 0);
			break;
		case 2:
			transform.Rotate(0, 0, speed * Time.deltaTime);
			break;
		default:
			break;
	}
}