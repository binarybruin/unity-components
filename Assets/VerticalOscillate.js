// feedback
// makes object oscillate up and down

var amplitude : float;

function Update () {
	VerticalOscillate();
}

function VerticalOscillate() {
	transform.localPosition = Vector3(0, 1, 0) * Mathf.Sin (Time.time) * amplitude;
}