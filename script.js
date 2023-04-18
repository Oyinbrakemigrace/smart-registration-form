function handleClick(){
    
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pn = document.getElementById("phone").value;
    let pwd = document.getElementById("pwd").value;


    let namePattern = /[a-z]{3,}/i
    let emailPattern = /[\w]{5,}\@[a-z]{3,}\.[a-z]{2,}/i  
    let pwdPattern = /[A-Za-z0-9]{5,}[A-Z]+[0-9]?/       
    let pnPattern = /^\+[\d]{1,3}\(?[\d]{6,}\)?/        


if(fname === "" || lname ==="" || email ==="" || pn ==="" || pwd ==="" ){
    document.getElementById("notification").style.display ="flex"
    document.getElementById("notification").style.backgroundColor = "rgb(123,20,08)"
    document.getElementById("text").innerText = "Input field cannot be empty!"
}
else if( !namePattern.test(fname) || !namePattern.test(lname)){  
    document.getElementById("notification").style.display ="flex"
    document.getElementById("notification").style.backgroundColor = "rgb(123,20,08)"
    document.getElementById("text").innerText = "Enter a valid name, please!"
}
else if(!emailPattern.test(email)){
    document.getElementById("notification").style.display ="flex"
    document.getElementById("notification").style.backgroundColor = "rgb(123,20,08)"
    document.getElementById("text").innerText = "Enter a valid email, please!"
}
else if(!pwdPattern.test(pwd)){
    document.getElementById("notification").style.display ="flex"
    document.getElementById("notification").style.backgroundColor = "rgb(123,20,08)"
    document.getElementById("text").innerText = "Use a stronger password!"
}
else if (!pnPattern.test(pn)){
    document.getElementById("notification").style.display ="flex"
    document.getElementById("notification").style.backgroundColor = "rgb(123,20,08)"
    document.getElementById("text").innerText = "Put a valid phone number with country code"
}
else{
    document.getElementById("notification").style.display="flex"
    document.getElementById("notification").style.backgroundColor = "green"
    document.getElementById("text").innerText = "SUCCESS!"
}
}

function cancelClick(){
    document.getElementById("notification").style.display = "none"
}

