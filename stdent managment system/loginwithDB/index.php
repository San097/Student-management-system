<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SignIn&SignUp</title>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous"
    ></script>
  
  </head>
  <body>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">

          <form method="post" action="signin.php" class="sign-in-form">
            <h2 class="title">Sign In</h2>
            <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="email" name="email" id="email" placeholder="Email" required>
                <label for="email"></label>
            </div>
            <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" name="password" id="password" placeholder="Password" required/>
            </div>
            <input type="submit" value="Login" name="signIn" class="btn solid" />
        </form>

          <form method="post" action="register.php" class="sign-up-form">
            <h2 class="title">Sign Up</h2>
            <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" id="name" name="name" placeholder="Name" required/>
            </div>
            <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <input type="submit" value="Sign Up" name="signUp" class="btn solid" />
        </form>


        </div>
      </div>
      <div class="panels-container">

        <div class="panel left-panel">
            <div class="content">
                <h3>New here?</h3>
                <p>Sign-up for our website for free just by clicking below button!!</p>
                <button class="btn transparent" name="signUp" id="sign-up-btn">Sign Up</button>
            </div>
            <!-- <img src="./img/log.svg" class="image" alt="">         Can use for adding logo  -->        
        </div>

        <div class="panel right-panel">
            <div class="content">
                <h3>One of us?</h3>
                <p>Already have an account then just Sign-in by clicking below button!!</p>
                <button class="btn transparent" name="signIn" id="sign-in-btn">Sign In</button>
            </div>
            <img src="./img/register.svg" class="image" alt="">
        </div>
      </div>
    </div>

    <script src="./app.js"></script>
  </body>
</html>
