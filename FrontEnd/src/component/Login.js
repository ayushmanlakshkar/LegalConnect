
// Login.js

import React,{useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect } = useAuth0();

  // Call the loginWithRedirect function when the component mounts
useEffect(() => {
    loginWithRedirect(); // Redirect to Auth0 login page
  });

  return (
    <div>
      {/* You can add loading indicator or any other content while redirecting */}
      <p>Redirecting to login...</p>
    </div>
  );
}

export default Login;



























// import React from 'react'
// export default function Login() {
//   return (
//     <section class="d-flex flex-column min-vh-100 justify-content-center align-item-center">
//     <div class="container">
       
//         <div class="row">
//             <div class="col-md-9 mx-auto rounded-5 shadow bg-white">
//                 <div class="contect-form">
//                     <div class="row">
//                         <div class="col-md-7">
//                             <div class="m-5 text-center">
//                                 <h1>Login Page</h1>
//                             </div>
                            
//                             <form action="Signin" method="post" class="m-5">
//                                 <div class="mb-3">
//                                     <input type="text" name="name" placeholder="Your Name" id="name" class="form-control form-lg fs-6 shadow-sm" required/>
//                                 </div>
//                                 <div class="mb-3">
//                                     <input type="text" name="email" placeholder="Your E-mail" id="email" class="form-control form-lg fs-6 shadow-sm" required/>
//                                 </div>
//                                 <div class="mb-3">
//                                     <input type="password" name="pass" placeholder="Your Password" id="pass" class="form-control form-lg fs-6 shadow-sm" required/>
//                                 </div>
//                                 <div class="mb-3">
//                                     <button class="btn btn-primary">Login in Account</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
//   )
// }
