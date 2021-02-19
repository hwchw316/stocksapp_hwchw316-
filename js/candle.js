/// 1. get the data from alpha vantage function
/// 2. store the data into array
/// 3. change the date data into a useable format (UNIX) for apex chart
/// 4. reorder the data from newest to oldest  to   oldest to newset for apex chart
/// 5. loop data into chart


// declared an empty array
var dataarray = [];



console.log('chart data')
console.log(dataarray)
var options = {
    series: [],
    chart: {
        type: 'candlestick',
        height: 350
    },
    title: {
        text: 'Daily Chart',
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

/// main search bar
searchbtn.addEventListener('click', async function () {
    dataarray = [];
    let searchinput = document.querySelector('#searchinput').value;
    let response = await axios.get('https://www.alphavantage.co/query', {
        'params': {
            'function': 'TIME_SERIES_DAILY',
            'symbol': searchinput,
            // 'interval': 'Daily',
            'apikey': '5b7fc71725msh6d5485b5eebd700p173114jsn9573a5c553e8'
        }
    })
    console.log(response.data);
    console.log(response.data["Time Series (Daily)"]);
    let dataloaded = response.data["Time Series (Daily)"];
    // change data's date to UNIX

    for (let date in dataloaded) {

        let open = dataloaded[date]['1. open'];
        let high = dataloaded[date]['2. high'];
        let low = dataloaded[date]['3. low'];
        let close = dataloaded[date]['4. close'];
        let y = [open, high, low, close];
        var myDate = new Date(date); // Your timezone!
        var myEpoch = myDate.getTime();
        console.log(myEpoch);
        // change date format
        let item = {
            x: new Date(myEpoch),
            y: [open, high, low, close]
        }
        dataarray.unshift(item);
    }
    console.log(dataarray);
    chart.updateSeries([
        {
            data: dataarray,
        }
    ])
});