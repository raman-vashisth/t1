function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "raman" && password == "admin") {
		alert("Login successful!");
		window.location.href = "Sequential_ticket_Counter.html";
	} else {
		alert("Incorrect username or password!");
	}
}
