function reverse() {
	str = document.getElementById('teks').value;
	var hsl, jmlh;
	hsl = "";
	jmlh = str.length;
	for (var i = jmlh - 1; i >= 0; i--) {
		hsl = hsl + str.charAt(i);
	}
	document.getElementById('hasil').value = hsl;
}