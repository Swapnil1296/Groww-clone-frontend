import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

// let amount = document.getElementsById("amttoPay");
let paid = JSON.parse(localStorage.getItem("Invest"));
let amount = document.getElementById("amttoPay");
amount.innerHTML = `Amount Payable:₹${paid}`
console.log(paid)

function invested(){
    let paidbtn = document.getElementById("paid")
    paidbtn.addEventListener("click", ()=>{
     let upi = document.getElementById("UPIid").value;
     if(!upi){
         alert("Please Enter right credentials")
     }
     else{
        alert("Thank You for investing you will get back a huge amoun of profit.")
     }

       
    })
}

invested();



// Amount Payable:₹