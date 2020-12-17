function getUsers() {
        return fetch(`api/fetchUsers.php`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }).then((res) => res.json())
        .then(data => {
            var UsersList = document.getElementById("users");
            
            data.forEach(user => {
                let newUser = document.createElement('div');
                newUser.setAttribute("id", user.uid);
                newUser.innerHTML = user.firsName + " " + user.lastName + "\n" + user.uName + "\n";
                
                UsersList.appendChild(newUser);
            });
        });
}


document.getElementById("form").addEventListener('click', e =>{
    var dataform = new FormData(e.target.form);
    fetch('api/updateUser.php', {
        method: 'POST',
     body: dataform
    })
})