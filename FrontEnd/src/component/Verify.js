import React from 'react'

export default function Verify() {
    let myStyle={
        marginTop:'100px',
        borderRadius:'10px',
      }
      let myStyle2={
        borderRadius:'15px',
      }
  return (
    <section class="d-flex flex-column min-vh-100 justify-content-center align-item-center">
    <div class="container p-3 " style={myStyle}>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body mx-auto shadow bg-white " style={myStyle2}>
                        <h4 className="text-center">Verify Lawyer Account</h4><br/>
                        <form action="" method="post" enctype="multipart/form-data" >
                            <div class="row">
                                <div class="col">
                                  <input type="text" class="form-control" placeholder="First name"/>
                                </div>
                                <div class="col">
                                  <input type="text" class="form-control" placeholder="Last name"/>
                                </div>
                              </div><br/>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Address" required/>
                            </div><br/>

                            <div class="row">
                                <div class="col">
                                  <input type="text" class="form-control" placeholder="City"/>
                                </div>
                                <div class="col">
                                  <input type="text" class="form-control" placeholder="State"/>
                                </div>
                              </div><br/>
                        
                            <div class="row">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Nationality" required/>
                            </div>
                            <div class="col">
                              <input type="number" class="form-control" placeholder="Contact Number" required/>
                            </div>
                            </div>
                            <br/>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Education" required/>
                            </div><br/>
                            <b>Affiliation</b><div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1">Origin</label>
                                </div>
                                <div class="form-check form-check-inline">
                                 <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">Private</label>
                                </div><br/><br/>
                            <div class="row">
                            <div class="col">
                                <label for="photo">Upload Adhhar Photo</label>
                                <input type="file" class="form-control" name="photo"  id="photo" placeholder="Chose Photo" required/>
                            </div>
                            <div class="col">
                                <label for="photo">Upload Licence Photo</label>
                                <input type="file" class="form-control" name="photo"  id="photo" placeholder="Chose Photo" required/>
                            </div>
                            </div><br/>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-lg">Verify Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
