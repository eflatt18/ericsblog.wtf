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

function me() {
    document.getElementById("me").style.display = "block";
  }
  
function meInvisible() {
    document.getElementById("me").style.display = "none";
  }

  function meTwo() {
    document.getElementById("meTwo").style.display = "block";
  }
  
function meInvisibleTwo() {
    document.getElementById("meTwo").style.display = "none";
  }  

  $(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});