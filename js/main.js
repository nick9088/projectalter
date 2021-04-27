var radio_43E = document.getElementById('43E');
var radio_43J = document.getElementById('43J');
var radio_43K = document.getElementById('43K');
var radio_43U = document.getElementById('43U');

var button = document.getElementById('download');

button.onclick = downloadFile;

function downloadFile() {
    if(radio_43E.checked) {
        window.open("app/43E.app");
    }else if(radio_43J.checked) {
        window.open("app/43J.app");
	}else if(radio_43U.checked) {
        window.open("app/43U.app");
	}else if(radio_43K.checked) {
        window.open("app/43K.app");
    } else {
        alert("Please check one of the options first.");
    }
}

	