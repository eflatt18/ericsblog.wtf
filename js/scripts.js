// toggle dark mode
var toggle = document.getElementById('toggle');
var html = document.getElementsByTagName('html')[0];
toggle.addEventListener('change', e => {
	if (e.target.checked) {
		html.classList.add('darkmode');
	} else {
		html.classList.remove('darkmode');
	}
});

function goAway() {
    document.getElementById("mode").style.display = "none";
  }