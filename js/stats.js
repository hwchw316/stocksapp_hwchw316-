// let apikey_alphavantage = '5b7fc71725msh6d5485b5eebd700p173114jsn9573a5c553e8';
let searchbtn = document.querySelector('#search-btn');
// let searchinput  = document.querySelector('#searchinput').value;

//// Alpha Vantage Balance Sheet
searchbtn.addEventListener('click', async function () {
    let searchinput = document.querySelector('#searchinput').value;
    let response = await axios.get('https://www.alphavantage.co/query', {
        'params': {
            'function': 'BALANCE_SHEET',
            'symbol': searchinput,
            'apikey': '5b7fc71725msh6d5485b5eebd700p173114jsn9573a5c553e8'
        }
    })
    let mysymbol= ("(") + response.data.symbol + (")");
    // console.log(mysymbol);
    document.getElementById('stocksymbol').innerHTML = mysymbol.toString();
    // console.log(response.data);
});


//// Alpha Vantage profile
searchbtn.addEventListener('click', async function () {
    let searchinput = document.querySelector('#searchinput').value;
    let response = await axios.get('https://www.alphavantage.co/query', {
        'params': {
            'function': 'OVERVIEW',
            'symbol': searchinput,
            'apikey': '5b7fc71725msh6d5485b5eebd700p173114jsn9573a5c553e8'
        }
    })
    let CompanyName= response.data.Name;
    let CompanyDes = response.data.Description;
    let CompanyIndustry = response.data.Industry;
    let CompanySector = response.data.Sector;
    // console.log(mysymbol);
    document.getElementById('sector1').innerHTML = CompanySector;
    document.getElementById('industry1').innerHTML = CompanyIndustry;
    document.getElementById('stockname').innerHTML = CompanyName;
    document.getElementById('description1').innerHTML = CompanyDes;
    // console.log(response.data);
});


