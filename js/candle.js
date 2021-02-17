/// 1. get the data from alpha vantage function
/// 2. store the data into array
/// 3. change the date data into a useable format (UNIX) for apex chart
/// 4. reorder the data from newest to oldest  to   oldest to newset for apex chart
/// 5. loop data into chart


// declared an empty array
var dataarray = [];


function loadChart() {
    //apex candlestick chart
    var options = {
        series: [{
            data: dataarray
        }],
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#candlestick"), options);
    chart.render();
    console.log("The Chart is loaded");
}

// let apikey_finnhub =  'c0m9hnn48v6rkav1u130'
let searchbtn2 = document.querySelector('#search-btn');

searchbtn.addEventListener('click', async function () {
    dataarray = [];
    let searchinput = document.querySelector('#searchinput').value;
    let response = await axios.get('https://www.alphavantage.co/query', {
        'params': {
            'function': 'TIME_SERIES_DAILY',
            'symbol': searchinput,
            // 'interval': '1min',
            'apikey': '5b7fc71725msh6d5485b5eebd700p173114jsn9573a5c553e8'
        }
    })
    console.log(response.data);
    console.log(response.data["Time Series (Daily)"]);
    let testdata = response.data["Time Series (Daily)"];
    // change data's date to UNIX

    for (let date in testdata) {

        let openAmount = testdata[date]['1. open'];
        let highAmount = testdata[date]['2. high'];
        let lowAmount = testdata[date]['3. low'];
        let closeAmount = testdata[date]['4. close'];
        let y = [openAmount, highAmount, lowAmount, closeAmount];
        var myDate = new Date(date); // Your timezone!
        var myEpoch = myDate.getTime() ;
        console.log(myEpoch);
        // change date format
        let item = {
            x: new Date(myEpoch),
            y: [openAmount, highAmount, lowAmount, closeAmount]
        }
        dataarray.unshift(item);
    }


    console.log(dataarray);

    loadChart();
});

