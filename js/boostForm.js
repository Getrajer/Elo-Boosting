const EmailInput = document.getElementById("email");
const EmailInputError = document.getElementById("emailError");
const ConfirmEmailInput = document.getElementById("confirmEmail");
const ConfirmEmailError = document.getElementById("confirmEmailError");
const PriceDisplay = document.getElementById("price");
const StartDivisionSelectType = document.getElementById("startDivision");
const StartDivisionSelectValue = document.getElementById("startDivisionSelectValue");
const EndDivisionSelectType = document.getElementById("goalDivision");
const EndDivisionSelectValue = document.getElementById("endDivisionSelectValue");

const LessLPModifier = 15;

const IronDivPrice = 15;
const IronDivPromoPrice = 20;
const BronzeDivPrice = 18;
const BronzeDivPromoPrice = 23;
const SilverDivPrice = 24;
const SilverDivPromoPrice = 30;

const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const checkIfEmailCorrect = () => {
    let email = EmailInput.value;
    if(email !== ""){
        if(!reEmail.test(String(email).toLowerCase())){
            EmailInputError.innerHTML = "Email nie jest poprawny!"
        }
        else{
            EmailInputError.innerHTML = ""
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


const calculatePrice = () =>{
    let startDivisionTypeSelected = parseInt(StartDivisionSelectType.value);
    let startDivisionValueSelected = parseInt(StartDivisionSelectValue.value);

    let endDivisionTypeSelected = parseInt(EndDivisionSelectType.value);
    let endDivisionValueSelected = parseInt(EndDivisionSelectValue.value);

    let ifLessLP = document.getElementById("lessLP").value;

    console.log(startDivisionTypeSelected + " | " + endDivisionTypeSelected)
    console.log(startDivisionValueSelected + " | " + endDivisionValueSelected)

    document.getElementById("endDivisionSelectValue").style.display = "inline";
    document.getElementById("startDivisionSelectValue").style.display = "inline";

    let price = 0;

    if(startDivisionTypeSelected == 7){
        document.getElementById("startDivisionSelectValue").style.display = "none";
    }

    if(endDivisionTypeSelected == 7){
        document.getElementById("endDivisionSelectValue").style.display = "none";

    }

    if(startDivisionTypeSelected >= endDivisionTypeSelected && endDivisionValueSelected == 1){
        PriceDisplay.innerHTML = "0 ZŁ";
        
    }
    else{
        switch(startDivisionTypeSelected){
            case 1:{
                switch(endDivisionTypeSelected){
                    case 1:{
                        price = (endDivisionValueSelected - startDivisionValueSelected) * 15;
                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 2:{
                        price = 20 + ((4 - startDivisionValueSelected) * 15);
                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 18;
                        }
                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 3:{
                        price = 20 + ((4 - startDivisionValueSelected) * 15);
                        price += 23 + (3 * 18);
                        
                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 24;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 4:{
                        price = 20 + ((4 - startDivisionValueSelected) * 15);
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);

                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 34;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 5:{
                        price = 20 + ((4 - startDivisionValueSelected) * 15);
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 45;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 6:{
                        price = 20 + ((4 - startDivisionValueSelected) * 15);
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            if(endDivisionValueSelected === 2) {price += 100;}
                            if(endDivisionValueSelected === 3) {price += 100 + 130;}
                            if(endDivisionValueSelected === 4) {price += 100 + 130 + 150;}
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 7:{
                        price = 20 + ((4 - startDivisionValueSelected) * 15);
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);
                        price += 100 + 130 + 150;
                        price += 300;

                        PriceDisplay.innerHTML = price + " ZŁ";
                        
                        document.getElementById("endDivisionSelectValue").style.display = "none";

                        break;
                    }
                }
                break;
            }
            case 2:{
                switch(endDivisionTypeSelected){
                    case 2:{
                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 18;
                        }
                        console.log("dsadsa");
                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 3:{
                        price += 23 + (3 * 18);
                        
                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 24;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 4:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);

                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 34;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 5:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 45;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 6:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            if(endDivisionValueSelected === 2) {price += 100;}
                            if(endDivisionValueSelected === 3) {price += 100 + 130;}
                            if(endDivisionValueSelected === 4) {price += 100 + 130 + 150;}
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 7:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);
                        price += 100 + 130 + 150;
                        price += 300;

                        PriceDisplay.innerHTML = price + " ZŁ";
                        
                        document.getElementById("endDivisionSelectValue").style.display = "none";

                        break;
                    }
                }
                break;
            }
            case 3:{
                switch(endDivisionTypeSelected){
                    case 3:{
                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 24;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 4:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);

                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 34;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 5:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 45;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 6:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            if(endDivisionValueSelected === 2) {price += 100;}
                            if(endDivisionValueSelected === 3) {price += 100 + 130;}
                            if(endDivisionValueSelected === 4) {price += 100 + 130 + 150;}
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 7:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);
                        price += 100 + 130 + 150;
                        price += 300;

                        PriceDisplay.innerHTML = price + " ZŁ";
                        
                        document.getElementById("endDivisionSelectValue").style.display = "none";

                        break;
                    }
                }
                break;
            }
            case 4:{
                switch(endDivisionTypeSelected){
                    case 4:{
                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 34;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 5:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 45;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 6:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            if(endDivisionValueSelected === 2) {price += 100;}
                            if(endDivisionValueSelected === 3) {price += 100 + 130;}
                            if(endDivisionValueSelected === 4) {price += 100 + 130 + 150;}
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 7:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);
                        price += 100 + 130 + 150;
                        price += 300;

                        PriceDisplay.innerHTML = price + " ZŁ";
                        
                        document.getElementById("endDivisionSelectValue").style.display = "none";

                        break;
                    }
                }
                break;
            }
            case 5:{
                switch(endDivisionTypeSelected){
                    case 5:{
                        if(endDivisionValueSelected != 1){
                            price += (endDivisionValueSelected - 1) * 45;
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 6:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);

                        if(endDivisionValueSelected != 1){
                            if(endDivisionValueSelected === 2) {price += 100;}
                            if(endDivisionValueSelected === 3) {price += 100 + 130;}
                            if(endDivisionValueSelected === 4) {price += 100 + 130 + 150;}
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 7:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);
                        price += 100 + 130 + 150;
                        price += 300;

                        PriceDisplay.innerHTML = price + " ZŁ";
                        
                        document.getElementById("endDivisionSelectValue").style.display = "none";

                        break;
                    }
                }
                break;
            }
            case 6:{
                switch(endDivisionTypeSelected){
                    case 6:{
                        if(endDivisionValueSelected != 1){
                            if(endDivisionValueSelected === 2) {price += 100;}
                            if(endDivisionValueSelected === 3) {price += 100 + 130;}
                            if(endDivisionValueSelected === 4) {price += 100 + 130 + 150;}
                        }

                        PriceDisplay.innerHTML = price + " ZŁ";
                        break;
                    }
                    case 7:{
                        price += 23 + (3 * 18);
                        price += 30 + (3 * 24);
                        price += 40 + (3 * 34);
                        price += 75 + (3 * 45);
                        price += 100 + 130 + 150;
                        price += 300;
                        
                        PriceDisplay.innerHTML = price + " ZŁ";
                        
                        document.getElementById("endDivisionSelectValue").style.display = "none";

                        break;
                    }
                }
                break;
            }
            case 7:{
                PriceDisplay.innerHTML = 0 + " ZŁ";
                document.getElementById("endDivisionSelectValue").style.display = "none";
                document.getElementById("startDivisionSelectValue").style.display = "none";
                break;
            }
        }

        if(ifLessLP == "on"){
            price += Math.round((price * LessLPModifier / 100));
        }
        PriceDisplay.innerHTML = price + " ZŁ";
    }
}


const changeDivisionTypeStart = () =>{
    var divisionSelected = parseInt(StartDivisionSelectType.value);

    switch(divisionSelected){
        case 1:{
            document.getElementById("start_div_img").src = "assets/img/Iron.png";
            document.getElementById("start_div_img").alt = "Iron";
            break;
        }
        case 2:{
            document.getElementById("start_div_img").src = "assets/img/Bronze.png";
            document.getElementById("start_div_img").alt = "Bronze";
            break;
        }
        case 3:{
            document.getElementById("start_div_img").src = "assets/img/Silver.png";
            document.getElementById("start_div_img").alt = "Silver";
            break;
        }
        case 4:{
            document.getElementById("start_div_img").src = "assets/img/Gold.png";
            document.getElementById("start_div_img").alt = "Gold";
            break;
        }
        case 5:{
            document.getElementById("start_div_img").src = "assets/img/Platinum.png";
            document.getElementById("start_div_img").alt = "Platinum";
            break;
        }
        case 6:{
            document.getElementById("start_div_img").src = "assets/img/Diamond.png";
            document.getElementById("start_div_img").alt = "Diamond";
            break;
        }
        case 7:{
            document.getElementById("start_div_img").src = "assets/img/Master.png";
            document.getElementById("start_div_img").alt = "Master";
            break;
        }
    }

    calculatePrice();
}

StartDivisionSelectType.addEventListener('change', changeDivisionTypeStart);


const changeDivisionTypeEnd = () =>{
    var divisionSelected = parseInt(EndDivisionSelectType.value);

    switch(divisionSelected){
        case 1:{
            document.getElementById("goal_div_img").src = "assets/img/Iron.png";
            document.getElementById("goal_div_img").alt = "Iron";
            break;
        }
        case 2:{
            document.getElementById("goal_div_img").src = "assets/img/Bronze.png";
            document.getElementById("goal_div_img").alt = "Bronze";
            break;
        }
        case 3:{
            document.getElementById("goal_div_img").src = "assets/img/Silver.png";
            document.getElementById("goal_div_img").alt = "Silver";
            break;
        }
        case 4:{
            document.getElementById("goal_div_img").src = "assets/img/Gold.png";
            document.getElementById("goal_div_img").alt = "Gold";
            break;
        }
        case 5:{
            document.getElementById("goal_div_img").src = "assets/img/Platinum.png";
            document.getElementById("goal_div_img").alt = "Platinum";
            break;
        }
        case 6:{
            document.getElementById("goal_div_img").src = "assets/img/Diamond.png";
            document.getElementById("goal_div_img").alt = "Diamond";
            break;
        }
        case 7:{
            document.getElementById("goal_div_img").src = "assets/img/Master.png";
            document.getElementById("goal_div_img").alt = "Master";
            break;
        }
    }

    calculatePrice();
}

EndDivisionSelectType.addEventListener('change', changeDivisionTypeEnd);


const selectValueFirstChange = () =>{
    calculatePrice();
}


const selectValueSecondChange = () =>{
    calculatePrice();
}

StartDivisionSelectValue.addEventListener('change', selectValueFirstChange);
EndDivisionSelectValue.addEventListener('change', selectValueSecondChange);