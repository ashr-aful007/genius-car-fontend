import React from 'react' 
import img from '../../assets/images/login/login.svg'

function Login() {

     const handleLogin = event =>{
          event.preventDefault()
     }

  return (
    <div>
     <div className="hero w-full my-20">
  <div className="hero-content flex-col grid gap-10 md:grid-cols-2 lg:flex-row">
    <div className="text-center lg:text-left">
     <img className='3/4' src={img} alt=""/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login