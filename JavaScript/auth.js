// SignUp uchun JS
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
	e.preventDefault()

	const inputs = this.querySelectorAll('input')
	const user = {
		name: inputs[0].value,
		email: inputs[1].value,
		password: inputs[2].value,
	}

	localStorage.setItem('user', JSON.stringify(user))
	alert("Ro'yxatdan o'tish muvaffaqiyatli!")
	window.location.href = 'login.html'
})

// Login uchun JS

document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const inputs = this.querySelectorAll("input");
  const email = inputs[0].value;
  const password = inputs[1].value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if(!savedUser){
    alert("Avval ro'yxatdan o'ting!");
    return;
  }

  if(email === savedUser.email && password === savedUser.password){
    localStorage.setItem("isLoggedIn", "true");
    alert("Kirish muvaffaqiyatli!");
    window.location.href = "index.html";
  } else {
    alert("Email yoki parol noto‘g‘ri!");
  }
});

