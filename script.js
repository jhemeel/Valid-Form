function validCheck() {
    let lastName = document.myForm.lname.value
    let firstName = document.myForm.fname.value
    let eMail = document.myForm.email.value
    let password = document.myForm.password.value
    let passwords = document.myForm.passwords.value
    let error = document.getElementById('emsg')

    if (lastName === "" || lastName === null) {
        error.classList.add('err')
        error.textContent = "Lastname cannot be empty"
        document.myForm.lname.focus()
        return false
    }

    if (firstName === "" || firstName === null) {
        error.classList.add('err')
        error.textContent = "Firstname cannot be empty"
        document.myForm.fname.focus()
        return false
    }

    let atPos = eMail.indexOf('@')
    let dotPos = eMail.indexOf('.')
    if (atPos < 1 || dotPos - atPos < 2 || eMail.length - dotPos <= 2) {
        error.classList.add('err')
        error.textContent = "Invalid Email"
        document.myForm.email.focus()
        return false
    }
    

    if (password.length < 6) {
        error.classList.add('err')
        error.textContent = "Invalid Password"
        document.myForm.password.focus()
        return false
    } else if (password !== passwords) {
        error.classList.add('err')
        error.textContent = "Passwords Does not match"
        document.myForm.passwords.focus()
        return false
    }

    return true
}