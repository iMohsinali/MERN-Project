import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function Login() {
    return (
        <>
           <main className="form-signin">
  <form className="form">
   
    <h1 className="h3 text-center mb-4 mt-5 fw-normal ml-3" >Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
  </form>
</main>

        </>
    )
}

export default Login
