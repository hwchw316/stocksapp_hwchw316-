let apikey_alphavantage = '5b7fc71725msh6d5485b5eebd700p173114jsn9573a5c553e8';
let searchbtn = document.querySelector('#search-btn');
// let searchinput  = document.querySelector('#searchinput').value;

searchbtn.addEventListener('click', async function () {
    let searchinput = document.querySelector('#searchinput').value;
    let response = await axios.get('https://www.alphavantage.co/query', {
        'params': {
            'function': 'BALANCE_SHEET',
            'symbol': searchinput,
            'apikey': '5b7fc71725msh6d5485b5eebd700p173114jsn9573a5c553e8'
        }
    })
    let mysymbol= response.data.symbol;
    console.log(mysymbol);

      = document.querySelector('stocksymbol')

    // let stocksymbol = document.querySelector('#stocksymbol');
    // let stocksymbolelement = document.createElement('sse');
    // stocksymbolelement.innerHTML = response.data.symbol;
    // stocksymbol.appendChild(stocksymbolelement);
    // console.log(response.data.symbol);
    
});

