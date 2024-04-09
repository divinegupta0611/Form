function submit(){
    let username = document.getElementById("username");
    let username_Value = username.value;
    
    let password = document.getElementById("password");
    let password_Value = password.value;

    let password2 = document.getElementById("password2");
    let password2_Value = password2.value;

    let address = document.getElementById("address");
    let address_Value = address.value;

    let gender = document.getElementsByName('gender');
    let gender_Value;
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
            gender_Value = gender[i].value;
        }
    }
    // alert(username_Value+"\n"+password_Value+"\n"+password2_Value+"\n"+address_Value+"\n"+gender_Value);

    const data = {
        username: username_Value,
        password: password_Value,
        address: address_Value,
        gender: gender_Value
    };

    console.log(data)
    
    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}