//copy-es6
function u_check(){
    return typeof(document.execCommand) == 'function'
}


function u_copy(t){
    if(!u_check()) return false
    const model = document.createElement('textarea')
    model.value = t
    model.style = "position: fixed; width: 1px; height: 1px; left: -20px"
    document.body.appendChild(model)
    model.setSelectionRange(0, model.value.length)
    model.focus()
    model.select()
    document.execCommand('copy', true)
    document.body.removeChild(model)
    return true
}

export default Object.freeze({u_check, u_copy})