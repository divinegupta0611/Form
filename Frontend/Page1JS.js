function signin() {
    let inputField1 = document.getElementById("username");
    let username_Value = inputField1.value;
    let inputField2 = document.getElementById("password");
    let password_Value = inputField2.value;

    fetch('http://localhost:3000/check-credentials', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username_Value,
            password: password_Value
        })
    })
    .then(response => {
        if (response.ok) {
            console.log("Credentials verified!");
        } else {
            console.log("Invalid username or password");
        }
    })
    .catch(error => {
        console.error('Error checking credentials:', error);
    });
}


function clear(){

}