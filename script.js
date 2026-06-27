// ===============================
// PASSWORD STRENGTH CHECKER
// ===============================

// Elements
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const lengthRule = document.getElementById("length");
const upperRule = document.getElementById("upper");
const lowerRule = document.getElementById("lower");
const numberRule = document.getElementById("number");
const specialRule = document.getElementById("special");

const totalLength = document.getElementById("totalLength");
const uppercaseCount = document.getElementById("uppercaseCount");
const lowercaseCount = document.getElementById("lowercaseCount");
const numberCount = document.getElementById("numberCount");
const specialCount = document.getElementById("specialCount");

const tips = document.getElementById("tips");


// ===============================
// SHOW / HIDE PASSWORD
// ===============================

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";

        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");

    }

    else{

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");

    }

});


// ===============================
// LIVE PASSWORD CHECK
// ===============================

password.addEventListener("input", checkPassword);


function checkPassword(){

    let pass = password.value;

    let score = 0;

    // Regular Expressions

    let upper = /[A-Z]/;

    let lower = /[a-z]/;

    let number = /[0-9]/;

    let special = /[!@#$%^&*(),.?":{}|<>]/;



    // ======================
    // LENGTH
    // ======================

    if(pass.length >= 8){

        score++;

        lengthRule.innerHTML = "✅ At least 8 Characters";

        lengthRule.className="valid";

    }

    else{

        lengthRule.innerHTML="❌ At least 8 Characters";

        lengthRule.className="invalid";

    }



    // ======================
    // UPPERCASE
    // ======================

    if(upper.test(pass)){

        score++;

        upperRule.innerHTML="✅ One Uppercase Letter";

        upperRule.className="valid";

    }

    else{

        upperRule.innerHTML="❌ One Uppercase Letter";

        upperRule.className="invalid";

    }



    // ======================
    // LOWERCASE
    // ======================

    if(lower.test(pass)){

        score++;

        lowerRule.innerHTML="✅ One Lowercase Letter";

        lowerRule.className="valid";

    }

    else{

        lowerRule.innerHTML="❌ One Lowercase Letter";

        lowerRule.className="invalid";

    }



    // ======================
    // NUMBER
    // ======================

    if(number.test(pass)){

        score++;

        numberRule.innerHTML="✅ One Number";

        numberRule.className="valid";

    }

    else{

        numberRule.innerHTML="❌ One Number";

        numberRule.className="invalid";

    }



    // ======================
    // SPECIAL CHARACTER
    // ======================

    if(special.test(pass)){

        score++;

        specialRule.innerHTML="✅ One Special Character";

        specialRule.className="valid";

    }

    else{

        specialRule.innerHTML="❌ One Special Character";

        specialRule.className="invalid";

    }
    // ===============================
// STRENGTH BAR
// ===============================

if(score<=2){

    strengthBar.style.width="30%";

    strengthBar.style.background="red";

    strengthText.innerHTML="🔴 Weak Password";

}

else if(score<=4){

    strengthBar.style.width="70%";

    strengthBar.style.background="orange";

    strengthText.innerHTML="🟠 Medium Password";

}

else{

    strengthBar.style.width="100%";

    strengthBar.style.background="limegreen";

    strengthText.innerHTML="🟢 Strong Password";

}



// ===============================
// PASSWORD STATISTICS
// ===============================

totalLength.innerHTML="Length : "+pass.length;

uppercaseCount.innerHTML="Uppercase : "+(pass.match(/[A-Z]/g)||[]).length;

lowercaseCount.innerHTML="Lowercase : "+(pass.match(/[a-z]/g)||[]).length;

numberCount.innerHTML="Numbers : "+(pass.match(/[0-9]/g)||[]).length;

specialCount.innerHTML="Special Characters : "+(pass.match(/[!@#$%^&*(),.?":{}|<>]/g)||[]).length;



// ===============================
// SUGGESTIONS
// ===============================

let suggestion=[];

if(pass.length<8)
suggestion.push("Minimum 8 characters");

if(!upper.test(pass))
suggestion.push("Add uppercase");

if(!lower.test(pass))
suggestion.push("Add lowercase");

if(!number.test(pass))
suggestion.push("Add number");

if(!special.test(pass))
suggestion.push("Add special character");

if(suggestion.length==0){

tips.innerHTML="🎉 Excellent Password!";

}

else{

tips.innerHTML=suggestion.join("<br>");

}

}
// ===============================
// PASSWORD GENERATOR
// ===============================

const generateBtn=document.getElementById("generateBtn");

const generatedPassword=document.getElementById("generatedPassword");

const copyBtn=document.getElementById("copyBtn");

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?><";

generateBtn.addEventListener("click",()=>{

let pass="";

for(let i=0;i<16;i++){

pass+=chars.charAt(Math.floor(Math.random()*chars.length));

}

generatedPassword.value=pass;

});



// ===============================
// COPY PASSWORD
// ===============================

copyBtn.addEventListener("click",()=>{

if(generatedPassword.value===""){

alert("Generate Password First");

return;

}

navigator.clipboard.writeText(generatedPassword.value);

copyBtn.innerHTML="Copied ✔";

setTimeout(()=>{

copyBtn.innerHTML="Copy";

},2000);

});



// ===============================
// DARK MODE
// ===============================

const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

}

else{

themeBtn.innerHTML="🌙";

}

});