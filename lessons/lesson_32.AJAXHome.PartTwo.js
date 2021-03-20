/* <body>
    <section class="user-actions-wrap mt-5">
      <div class="container">
        <div class="row">
          <div class="col col-4">
            <div class="card">
              <div class="card-header">
                Add new user
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <form name="new-user-form">
                  <div class="form-group">
                    <label for="userName">User name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="userName"
                      name="name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="userEmail">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="userEmail"
                      aria-describedby="emailHelp"
                      name="email"
                    />
                    <small id="emailHelp" class="form-text text-muted"
                      >We'll never share your email with anyone else.</small
                    >
                  </div>
                  <div class="form-group">
                    <label for="userPhone">User phone</label>
                    <input
                      type="text"
                      class="form-control"
                      id="userPhone"
                      name="phone"
                    />
                  </div>
                  <div class="form-group">
                    <label for="userWebsite">User website</label>
                    <input
                      type="text"
                      class="form-control"
                      id="userWebsite"
                      name="website"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col col-4 -->
          <div class="col col-6">
            <div class="card">
              <div class="card-header">
                Users List
              </div>
              <div class="list-group users-list"></div>
            </div>
          </div>
          <!-- /.col col-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.user-actions-wrap -->
</body> */

      const apiURL = "https://jsonplaceholder.typicode.com";
      // DOM Elements
      const form = document.forms["new-user-form"];
      const usersListEl = document.querySelector(".users-list");

      // Events
      form.addEventListener("submit", onFormSubmit);

      // Event handlers
    	function onFormSubmit(e) {
        e.preventDefault();

        const inputs = [...form.elements].filter(
          (el) => el.nodeName !== "BUTTON"
        );

        const objValues = inputs.reduce((acc, input) => {
          acc[input.name] = input.value;
          return acc;
        }, {});

        addNewUserHTTP(objValues, onAddUserCallback);
      }

      // HTTP
		function addNewUserHTTP(data, cb) {
        const xhr = new XMLHttpRequest();

        xhr.open("POST", `${apiURL}/users`);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.addEventListener("load", () => {
          console.log(xhr);
          if (Math.floor(xhr.status / 100) !== 2) {
            console.log("Error", xhr.status);
            return;
          }

          const res = JSON.parse(xhr.responseText);
          cb(res);
        });

        xhr.send(JSON.stringify(data));
      }

      // HTTP Callbacks
      function onAddUserCallback(newUser) {
        if (!newUser.id) {
          return;
        }

        renderNewUserToList(newUser);
      }

      // Render
      function renderNewUserToList(user) {
        const template = userListItemTemplate(user);
        usersListEl.insertAdjacentHTML("beforeend", template);
      }

      // Templates
      function userListItemTemplate(user) {
        return `
          <div class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${user.name || ""}</h5>
              <small>${user.phone || ""}</small>
            </div>
            <p class="mb-1">${user.email || ""}</p>
            <small>${user.website | ""}</small>
          </div>
        `;
	  }
/////////////////////////////////////////////////////////////////////////////////////

	  /* const apiURL = "https://jsonplaceholder.typicode.com/users";
	  const container = document.querySelector('.container');
	  const form = document.forms['form-main'];
	  const inputName = form.name;
	  const inputEmail = form.email;
	  const inputPhone = form.phone;
	  const inputWebsite = form.website;
	  
	  
	  
	  form.addEventListener('submit', formSubminHandler);
	  
	  function formSubminHandler(e) {
		e.preventDefault();
		const user = {
		  name: inputName.value,
		  email: inputEmail.value,
		  phone: inputPhone.value,
		  website: inputWebsite.value,
		}
		postUserHttp(user, renderNewUser);
	  }
	  
	  function renderNewUser(user) {
		const userItem = `
			<div class="card" style="width: 50%; margin : 20px;">
			  <div class="card-body">
				<h5 class="card-title">Name : ${user.name}</h5>
				<h5 class="card-title">Email : ${user.email}</h5>
				<h5 class="card-title">Phone : ${user.phone}</h5>
				<h5 class="card-title">Website : ${user.website}</h5>
			  </div>
			</div>
		  `;
		container.insertAdjacentHTML('beforeend', userItem);
	  }
	  
	  
	  function postUserHttp(user, cb) {
		const xhr = new XMLHttpRequest();
		xhr.open('post', apiURL);
		xhr.addEventListener('load', () => {
		  const res = JSON.parse(xhr.responseText);
		  cb(res);
		});
		xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
		xhr.send(JSON.stringify(user));
	  } */

	  