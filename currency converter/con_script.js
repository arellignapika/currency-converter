// include api for currency change 

const api = "https://api.exchangerate-api.com/v4/latest/USD"; 

  
// for selecting different controls 

var search = document.querySelector(".searchBox"); 

var convert = document.querySelector(".convert"); 

var fromCurrecy = document.querySelector(".from"); 

var toCurrecy = document.querySelector(".to"); 

var finalValue = document.querySelector(".finalValue"); 

var finalAmount = document.getElementById("finalAmount"); 

var resultFrom; 

var resultTo; 

var searchValue; 

  
// Event when currency is changed 

fromCurrecy.addEventListener('change', (event) => { 

    resultFrom = `${event.target.value}`; 
}); 

  
// Event when currency is changed 

toCurrecy.addEventListener('change', (event) => { 

    resultTo = `${event.target.value}`; 
}); 

  

search.addEventListener('input', updateValue); 

  
// function for updating value 

function updateValue(e) { 

    searchValue = e.target.value; 
} 

  
// when user clicks, it calls function getresults  

convert.addEventListener("click", getResults); 

  
// function getresults 

function getResults() { 

    fetch(`${api}`) 

        .then(currency => { 

            return currency.json(); 

        }).then(displayResults); 
} 

  
// display results after convertion 

function displayResults(currency) { 

    let fromRate = currency.rates[resultFrom]; 

    let toRate = currency.rates[resultTo]; 

    finalValue.innerHTML =  

       ((toRate / fromRate) * searchValue).toFixed(2); 

    finalAmount.style.display = "block"; 
} 

  
// when user click on reset button 

function clearVal() { 

    window.location.reload(); 

    document.getElementsByClassName("finalValue").innerHTML = ""; 
};

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
  
    // Handle login form submission here
    const loginForm = document.querySelector(".login_form form");
  
    // Ensure the form is submitted using the submit() method
    loginForm.submit();
  });
  