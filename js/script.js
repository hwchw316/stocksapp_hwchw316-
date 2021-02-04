var options = {
    series: [{
        name: 'Total Profit/ Loss',
        type: 'column',
        data: [380, 500, 350, -2250, -1800, 1000, 2000, 1500, 2200, 15000]
    }, {
        name: 'Earnings by day',
        type: 'line',
        data: [380, 200, -150, -2600, 500, 200, 280, 125, 60, 80, -1000, 16000]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: [0, 4]
    },
    title: {
        text: 'Overall Earnings'
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    yaxis: [{
        title: {
            text: 'Total Earnings',
        },

    }, {
        opposite: true,
        title: {
            text: 'Daily Earnings'
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();