const EmailInput = document.getElementById("email");
const EmailInputError = document.getElementById("emailError");
const ConfirmEmailInput = document.getElementById("confirmEmail");
const ConfirmEmailError = document.getElementById("confirmEmailError");
const PriceDisplay = document.getElementById("price");
const StartDivisionSelectType = document.getElementById("startDivision");
const EndDivisionSelectType = document.getElementById("goalDivision");


const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const checkIfEmailCorrect = () => {
    let email = EmailInput.value;
    if(email !== ""){
        if(!reEmail.test(String(email).toLowerCase())){
            EmailInputError.innerHTML = "Email nie jest poprawny!"
        }
        else{
            
        }
        
    }
    else{
        EmailInputError.innerHTML = ""
    }
    ConfirmEmailError.innerHTML = "";
    
}

const checkIfEmailsMatch = () =>{
    let email = EmailInput.value;
    let confirmEmail = EmailInput.value;

    if(confirmEmail !== ""){
        if(!reEmail.test(String(email).toLowerCase())){
            ConfirmEmailError.innerHTML = "Pierwszy email nie jest poprawny!"
        }
        else if(!reEmail.test(String(confirmEmail).toLowerCase())){
            ConfirmEmailError.innerHTML = "Email nie jest poprawny!"
        }else if(email !== confirmEmail){
            ConfirmEmailError.innerHTML = "Emaile nie pasują do siebie!"
        }
        else{
            ConfirmEmailError.innerHTML = "";
        }
    }
    else{
        ConfirmEmailError.innerHTML = "";
    }

   
}

const changeDivisionTypeStart = () =>{
    let divisionSelected = StartDivisionSelectType.value;

    switch(divisionSelected){
        case "Iron":{
            document.getElementById("start_div_img").src = "assets/img/Iron.png";
            document.getElementById("start_div_img").alt = "Iron";
            break;
        }
        case "Bronze":{
            document.getElementById("start_div_img").src = "assets/img/Bronze.png";
            document.getElementById("start_div_img").alt = "Bronze";
            break;
        }
        case "Silver":{
            document.getElementById("start_div_img").src = "assets/img/Silver.png";
            document.getElementById("start_div_img").alt = "Silver";
            break;
        }
        case "Gold":{
            document.getElementById("start_div_img").src = "assets/img/Gold.png";
            document.getElementById("start_div_img").alt = "Gold";
            break;
        }
        case "Platinum":{
            document.getElementById("start_div_img").src = "assets/img/Platinum.png";
            document.getElementById("start_div_img").alt = "Platinum";
            break;
        }
        case "Diamond":{
            document.getElementById("start_div_img").src = "assets/img/Diamond.png";
            document.getElementById("start_div_img").alt = "Diamond";
            break;
        }
        case "Master":{
            document.getElementById("start_div_img").src = "assets/img/Master.png";
            document.getElementById("start_div_img").alt = "Master";
            break;
        }
    }
}

StartDivisionSelectType.addEventListener('change', changeDivisionTypeStart);


const changeDivisionTypeEnd = () =>{
    let divisionSelected = EndDivisionSelectType.value;

    switch(divisionSelected){
        case "Iron":{
            document.getElementById("goal_div_img").src = "assets/img/Iron.png";
            document.getElementById("goal_div_img").alt = "Iron";
            break;
        }
        case "Bronze":{
            document.getElementById("goal_div_img").src = "assets/img/Bronze.png";
            document.getElementById("goal_div_img").alt = "Bronze";
            break;
        }
        case "Silver":{
            document.getElementById("goal_div_img").src = "assets/img/Silver.png";
            document.getElementById("goal_div_img").alt = "Silver";
            break;
        }
        case "Gold":{
            document.getElementById("goal_div_img").src = "assets/img/Gold.png";
            document.getElementById("goal_div_img").alt = "Gold";
            break;
        }
        case "Platinum":{
            document.getElementById("goal_div_img").src = "assets/img/Platinum.png";
            document.getElementById("goal_div_img").alt = "Platinum";
            break;
        }
        case "Diamond":{
            document.getElementById("goal_div_img").src = "assets/img/Diamond.png";
            document.getElementById("goal_div_img").alt = "Diamond";
            break;
        }
        case "Master":{
            document.getElementById("goal_div_img").src = "assets/img/Master.png";
            document.getElementById("sgoal_div_img").alt = "Master";
            break;
        }
    }
}

EndDivisionSelectType.addEventListener('change', changeDivisionTypeEnd);


