import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function Sginup() {
    return (
        <>
          <section className='signup'>
              <div className='container mt-5'>
                  <div className='signup-content'>
                      <div className='signup-form'>
                           <h2 className='form-title'>Sign up</h2>
                           <form className='register-form' id='register-form'>
                                <div className='form-group'>
                                        <label htmlFor='name'>
                                        <i class="zmdi zmdi-assignment-account"></i>  
                                        </label>
                                        <input type='text' name='name' id='name'autoComplete='off'placeholder='your name'/>
                                </div>
                                <div className='form-group'>
                                        <label htmlFor='email'>
                                        <i class="zmdi zmdi-email"></i> 
                                        </label>
                                        <input type='text' name='email' id='email'autoComplete='off'placeholder='your email'/>
                                </div>
                                <div className='form-group'>
                                        <label htmlFor='Phone'>
                                        <i class="zmdi zmdi-phone"></i>  
                                        </label>
                                        <input type='text' name='phone' id='phone'autoComplete='off'placeholder='your phone'/>
                                </div>
                                <div className='form-group'>
                                        <label htmlFor='work'>
                                        <i class="zmdi zmdi-slideshow"></i>  
                                        </label>
                                        <input type='text' name='work' id='work'autoComplete='off'placeholder='your work'/>
                                </div>
                                <div className='form-group'>
                                        <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock"></i>  
                                        </label>
                                        <input type='password' name='password' id='password'autoComplete='off'placeholder='your password'/>
                                </div>

                                <div className='form-group'>
                                        <label htmlFor='Confrim password'>
                                        <i class="zmdi zmdi-lock"></i>  
                                        </label>
                                        <input type='password' name='password' id='password'autoComplete='off'placeholder='Confrim password'/>
                                </div>
                                <div className = 'form-group form-button'>
                                    <input type='submit' name='signup' id ='signup' className='form-submit'/>

                                </div>
                           </form>
                      </div>

                  </div>

              </div>
        </section> 
        </>
    )
}

export default Sginup
