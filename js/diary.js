function _(id){
    return document.getElementById(id)
}

function getRs(){
    let txt = _('txt').value
    const d = new Date()

    _('rs').innerHTML += 
    `<div>
    <p>${txt}</p>
    <small> ${d.toLocaleTimeString()}</small>
    <small>${d.toLocaleDateString()}</small>
    </div>`
}



