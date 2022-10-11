window.onload = pageLoad;
function pageLoad()
{
	var data = document.getElementById("myForm");
    data.onsubmit = validateForm;
}

function validateForm() 
{
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var pass01 = document.forms["myForm"]["password01"].value;
    var pass02 = document.forms["myForm"]["password02"].value;

    if(pass01 != pass02){   
        document.getElementById("errormsg").innerHTML = "Wrong Password!";   
        return false;             
    }
    else if(pass01 == "" || pass02 == "" ){
        document.getElementById("errormsg").innerHTML = "Fill the password please!";
    }
    else{
        alert("register suceuses");
    }
}

