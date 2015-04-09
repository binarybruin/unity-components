// feedback
// makes object oscillate up and down

var amplitude : float;

function Update () {
	VerticalOscillate();
}

function VerticalOscillate() {
	transform.localPosition.y = Mathf.Sin (Time.time) * amplitude;
}