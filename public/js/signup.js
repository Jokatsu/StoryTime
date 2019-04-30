function signup(payload){
  $.post('/users/signup', payload).then(result => {
    console.log(result);
  }).catch(err => {
    if (err) console.error(err);
  })
}


function handleSubmit(){
    var username = $('#username').val().trim(),
        email = $('#email').val().trim(),
        password = $('#password').val();

    var payload = {
      username,
      email,
      password
    };
    signup(payload);
}

$('#submit').click(handleSubmit);