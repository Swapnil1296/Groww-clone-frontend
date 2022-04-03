// for togainers api

async function fetchData() {
  try {
    
    let res = await fetch(`http://ec2-34-222-104-93.us-west-2.compute.amazonaws.com:4000/toploosers`);
    let data = await res.json();

      //  console.log(data)
    showData(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

function showData(data) {
//   console.log(data);
  data.map(function (ele) {
    // console.log(ele.Price);
    // console.log(ele.Bank_logo_url)
    let container = document.getElementById("in-news-block-three");

    container.innerHTML += ` <div class="in-news-info">
                            <div class="new-info-nav">
                                <div><img class="new-info-nav-img"
                                        src="${ele.Bank_logo_url}" alt="">
                                </div>
                                <div><button class="in-news-btn"><span class="iconify"
                                            data-icon="fluent:add-circle-16-regular" data-width="30" color="grey"
                                            style=" cursor: pointer; "></span></button>
                                </div>
                            </div>
                            <div class="in-news-c-name">
                                <h5>${ele.nameOfBank}</h5>
                            </div>
                            <div class="in-news-price">
                                <div style="display: flex;"><span class="iconify" data-icon="icons8:rupee"
                                        style="margin-top: 21px;"></span>
                                    <h4 class="in-news-price-a">₹ ${ele.Price}</h4>
                                </div>
                                <div>
                                    <p class="in-news-price-b2">${ele.Equity}</p>
                                </div>
                            </div>
                        </div>  `;
  });
}
