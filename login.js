window.onload = loginLoad;
function loginLoad(){
	alert("Please Login");
	var data2 = document.getElementById("myLogin");
	data2.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const user_c = urlParams.get('username01');
	const pass_C = urlParams.get('password02');
	let user = document.forms["myLogin"]["username"].value;
	let pass = document.forms["myLogin"]["password00"].value;
	if(user != user_c && pass != pass_C){
		alert("Username or Password not correct");
		return false;
	}
	else
   {
        alert("YESYESYES!!!");
        return true;
   }
}


			