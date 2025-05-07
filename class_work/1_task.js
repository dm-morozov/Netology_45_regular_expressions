function changetoemail(string) {
    for (const item of string) if (item === "@") return true;
    return false;
}

function validateEmail(string) {
    return string.includes('@');
}

const emailValidate = (string) => {for (const item of string) if (item === '@') return true; return false; };

console.log(changetoemail("dem.morozov@gmail.com"));
console.log(changetoemail("dem.morozovgmail.com"));
console.log(validateEmail("dem.morozov@gmail.com"));
console.log(validateEmail("dem.morozovgmail.com"));
console.log(emailValidate("dem.morozov@gmail.com"));
console.log(emailValidate("dem.morozovgmail.com"));