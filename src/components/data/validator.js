function ValidateEmail(mail){
    if( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return true
    }
    return false
}

function ValidatePassword(pass){
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pass)){
        return true
    }else return false
}
export {ValidateEmail , ValidatePassword}