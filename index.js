function signin(){
    window.open("ordernow.html");
}
function validateform(){
    let customer=document.forms["delivery"]["name"].value;
    let contactno=document.forms["delivery"]["phone"].value;
    let address=document.forms["delivery"]["address"].value;
    if (customer==""){
        alert("name is a mandatory field");
        return false;
    }

    if (contactno==""){
        alert("contact number is a mandatory field");
        return false;
    }

    if (address==""){
        alert("address is a mandatory field");
        return false;
    }  
}

function backhome(){
    window.open("index.html");
}


