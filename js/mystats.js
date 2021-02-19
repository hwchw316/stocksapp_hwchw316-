let updateinitialbtn = document.querySelector('#initialamtbtn');
storedinitial = JSON.parse(window.localStorage.getItem('storedinitial'));
document.getElementById('statsinitial').innerHTML = storedinitial;

updateinitialbtn.addEventListener('click', function () {
    let updateinitial = document.querySelector('#initialamounttext').value;
    console.log(updateinitial);
    document.getElementById('statsinitial').innerHTML = updateinitial;
    localStorage.setItem("storedinitial", updateinitial);

});


