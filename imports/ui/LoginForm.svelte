<script>
  import { Meteor } from 'meteor/meteor';

  let username = "";
  let password = "";

  // calls login function when user clicks on the login button
  const handleSubmit = () => {
    Meteor.loginWithPassword(username, password);
  }
</script>


<!-- the interface displayed to log in -->
<form class="login-form" on:submit|preventDefault={handleSubmit}>
    <div>
        <label htmlFor="username">Username</label>

        <input
                type="text"
                placeholder="Username"
                name="username"
                required
                bind:value={username}
        />
    </div>

    <div>
        <label htmlFor="password">Password</label>

        <input
                type="password"
                placeholder="Password"
                name="password"
                required
                bind:value={password}
        />
    </div>
    <div>
        <button type="submit">Log In</button>
    </div>
</form>
