import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let growCart = JSON.parse(localStorage.getItem("groww-cart"));
console.log(growCart)


let mycart =  document.getElementById("cart-list-total")
mycart.innerHTML = growCart.length;

let total = 0;


function append(){
    let appenddiv = document.getElementById("cart-items-list");
    let html = ``
    growCart.forEach((el)=>{
      html += `
      <li>
        <div class="cart-item">
            <img class="remove-btn" src="/images/remove.svg" alt="Remove">
            <img src="${el.image}" alt="">
            <div>
                <div class="cart-item-name">${el.title}</div>
                <div class="cart-item-details">
                    <div>
                        <span class="light-text">SIP date</span>
                        <span class="h-text">
                            <span class="sip">${el.date}</span>th <img src="/images/cart-edit.svg">
                        </span>
                        <span><img src="/images/cart-mark-ex.svg"></span>
                    </div>
                    <div>
                        <span class="light-text">Amount</span>
                        <span class="amount h-text">${el.amount}</span>
                    </div>
                </div>
            </div>
        </div>
       </li> 
      `

      total+= +(el.amount)
    })
    appenddiv.innerHTML = html
}

append();


let pay = document.getElementById("rs")
pay.innerHTML = `₹${total}`;
localStorage.setItem("Invest", JSON.stringify(total))
// console.log(total)
function invest(){
    let btn = document.getElementById("pay");

   btn.addEventListener("click", ()=>{
    
       window.location.href="./invest.html";
      
   })
}
invest();

//  <li>
// <div class="cart-item">
//     <img class="remove-btn" src="/images/remove.svg" alt="Remove">
//     <img src="/images/icici_groww.svg" alt="">
//     <div>
//         <div class="cart-item-name">ICICI Prudential Technology Direct Plan Growth</div>
//         <div class="cart-item-details">
//             <div>
//                 <span class="light-text">SIP date</span>
//                 <span class="h-text">
//                     <span class="sip">4</span>th <img src="/images/cart-edit.svg">
//                 </span>
//                 <span><img src="/images/cart-mark-ex.svg"></span>
//             </div>
//             <div>
//                 <span class="light-text">Amount</span>
//                 <span class="amount h-text">₹500</span>
//             </div>
//         </div>
//     </div>
// </div>
// </li> 