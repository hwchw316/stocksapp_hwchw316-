
var data = [
    ['EH', '5', '2020-10-12', '2012-01-01', '50.552','45.13', '1', '1.5', '=(F1-E1)/E1*100', '=((F1-E1)*B1)- G1 -H1'],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

jexcel(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'text', title:'Symbol', width:100 },
        { type: 'numeric', title:'Qty', width:100 },
        { type: 'calendar', title:'Date In', width:100 },
        { type: 'calendar', title:'Date Out', width:100 },
        { type: 'numeric', title:'Price In', width:100, decimal:',' },
        { type: 'numeric', title:'Price Out', width:100, decimal:',' },
        { type: 'numeric', title:'Buy Fees', width:100, decimal:',' },
        { type: 'numeric', title:'Sell Fees', width:100, decimal:',' },
        { type: 'numeric', title:'EPS %', width:100, decimal:',' },
        { type: 'numeric', title:'P/L', width:100, decimal:',' },
        { type: 'numeric', title:'EPS', width:100, decimal:',' }
     ]
});