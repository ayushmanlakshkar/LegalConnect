import React from 'react'

export default function Ragistration() {
  return (
    <section class="d-flex flex-column min-vh-100 justify-content-center align-item-center">
    <div class="container">
       
        <div class="row">
            <div class="col-md-9 mx-auto rounded-5 shadow bg-white">
                <div class="contect-form">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="m-5 text-center">
                                <h1>Ragistration Page</h1>
                            </div>
                            
                            <form action="Signin" method="post" class="m-5">
                                <div class="mb-3">
                                    <input type="text" name="name" placeholder="Your Name" id="name" class="form-control form-lg fs-6 shadow-sm" required/>
                                </div>
                                <div class="mb-3">
                                    <input type="text" name="email" placeholder="Your E-mail" id="email" class="form-control form-lg fs-6 shadow-sm" required/>
                                </div>
                                <div class="mb-3">
                                    <input type="password" name="pass" placeholder="Your Password" id="pass" class="form-control form-lg fs-6 shadow-sm" required/>
                                </div>
                                <div class="mb-3">
                                    <input type="number" name="contact" placeholder="Your Contact" id="contact" class="form-control form-lg fs-6 shadow-sm" required/>
                                </div>
                                <div class="mb-3">
                                    <button class="btn btn-primary">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
