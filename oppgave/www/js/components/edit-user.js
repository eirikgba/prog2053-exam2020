import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html `
    <head>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
      />
    </head>
    <body>
      <form onsubmit="javascript: return false;" method='POST'>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" class="form-control"  placeholder="eks@mail.com">
          </div>


          <div class="form-group">
              <label for="content">First Name</label>
              <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Doe">
          </div>

          <div class="form-group">
              <label for="content">Last name</label>
              <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Doe">
          </div>

          <div class="form-group">
              <label for="content">Old password</label>
              <input type="password" class="form-control" id="oldPasswrd" name="oldPasswrd" placeholder="Doe">
          </div>

          <div class="form-group">
              <label for="content">New Password</label>
              <input type="password" class="form-control" id="passwrd" name="passwrd" placeholder="Doe">
          </div>

          <div class="form-group">
              <button type="button" class="button" @click=${this.editUser}>Update</button>
          </div>
      </form>
    </body>
    `
  }


  //sendes inn the updated data about the user to the database
  editUser(e) {
    const data = new FormData(e.target.form);

    fetch('api/updateUser.php', {
     method: 'POST',
     headers: {
       'Content-Type' : 'application/json',
       Accept: 'application/json',
     },
     body: data
    }).then(res=>res.json())
      .then(data => console.log(data));
  }

}
customElements.define('edit-user', EditUser);
