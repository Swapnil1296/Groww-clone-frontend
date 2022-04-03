// for togainers api

async function fetchData() {
  try {
    let res = await fetch(`http://ec2-34-222-104-93.us-west-2.compute.amazonaws.com:4000/popularfunds`);
    let data = await res.json();

     console.log(data)
    showData(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

function showData(data) {
    console.log(data);
  data.map(function (ele) {
    // console.log(ele.Price);
    // console.log(ele.Bank_logo_url)
    let container = document.getElementById("ae-card-list");

    container.innerHTML += ` <div id="icici" class="ae-card">
                                        <img src="${ele.Bank_logo_url}" class="ae-logo">
                                        <p class="ae-para1">${ele.nameOfBank}</p>
                                        <p class="ae-para2">${ele.Equity}
                                            <span>${ele.span}</span>
                                        </p>
                                    </div>
                                    `;
  });
}
