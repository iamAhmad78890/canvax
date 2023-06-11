import React from 'react'
import './home.css'

const Home = () => {
    return (
        <>
            <div id='sec1' className='container-fluid main-section' style={{
                backgroundImage: `url("./images/bg-yellow.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                height: "700px"

            }}>
                <nav className="navbar navbar-expand-lg navbar-light pt-3">
                    <div className="container">
                        <img src="./images/logo.png" alt="" />
                        {/* <a className="navbar-brand" href="#">Navbar</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href=" #sec2">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href=" #">Explore</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Our Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Info</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Contact Us</a>
                                </li>

                            </ul>
                            <button className="btn-appoint " type="submit">BOOK A APPOINTMENT</button>

                        </div>
                    </div>
                </nav>
                <div  className='container'>
                    <div className='row mt-3'>
                        <div className='col-lg-4'>
                            <h1 className='head-idea'>WE MAKE IDEAS</h1>
                            <h1 className='head-knows'>KNOWS!</h1>
                            <p className='head_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, esse qui odio doloremque dolorem ullam delectus sit adipisci libero repudiandae quis nihil doloribus maxime pariatur optio aliquam ipsa id perferendis.</p>
                        </div>
                        <div className='col-lg-6   '>
                            <img className='img-fluid' src="./images/hero-section-img.png" alt="" />
                        </div>
                        <div className='col-lg-2   '>
                            <div className='indicators_section' >

                                <div className='indicators_sec'>
                                   <a href="#sec1"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec2"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec3"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec4"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec5"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec6"><div className='dot' > </div></a> 
                                </div>




                            </div>
                        </div>

                    </div>

                </div>




            </div>
            <div className='container chnge-section text-center' id='sec2'>
                <div className='row' >
                    <div className='col-lg-4'>
                        <h1 className='chnge-head'>DDTECT is an instigator</h1>
                        <h1 className='chnge-head-2'>for Change</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium facere quas numquam, doloremque voluptas eligendi? Aut, provident tempora iure, temporibus optio vel, consectetur labore aspernatur rem odio quae. Iure, sint.</p>
                        <div style={{ textAlign: "initial", marginTop: "50px" }}>
                            <button>Book A Meeting</button>
                        </div>

                    </div>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src="./images/books.png" alt="" />
                    </div>
                    <div className='col-lg-2   '>
                            <div className='' >

                                <div className='indicators_sec'>
                                   <a href="#sec1"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec2"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec3"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec4"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec5"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec6"><div className='dot' > </div></a> 
                                </div>




                            </div>
                        </div>
                </div>
            </div>


            <div id='sec3' className='container-fluid consist-section text-center'>
                <div className='row'>
                    <div className='col-lg-4' >
                        <img className='img-fluid' src="./images/ddtech-img.png" alt="" />

                    </div>
                    <div className='col-lg-6'>
                        <h1>DDtech is an  <span className='consis'>Consistent </span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eos fuga accusantium odit aspernatur aliquid harum ab. Mollitia numquam quasi ullam eveniet cumque similique, quia omnis voluptatum? Magnam, dolor debitis?</p>
                        <div style={{ textAlign: "initial", marginLeft: "47px", marginTop: "50px" }}>
                            <button>Book A Meeting</button>
                        </div>


                    </div>
                    <div className='col-lg-2   '>
                            <div className='' >

                                <div className='indicators_sec'>
                                   <a href="#sec1"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec2"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec3"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec4"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec5"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec6"><div className='dot' > </div></a> 
                                </div>




                            </div>
                        </div>
                </div>
            </div>

            <div id='sec4' className='container-fluid consist_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src="./images/ddtech-consistent-img.png" className=' mt-5 img-fluid' alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='consis_con'>
                                <h1>Consistent</h1>
                                <p>I'm New. Start with the tutorial. It will quickly introduce you to the primary features of React Router: from configuring routes, to loading and mutating data I'm New. Start with the tutorial. It will quickly introduce you to the primary features of React Router: from configuring routes, to loading and mutating data</p>
                                <div style={{ textAlign: "initial", marginLeft: "47px", marginTop: "50px" }}>
                                    <button>Book A Meeting</button>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-2   '>
                            <div className='' >

                                <div className='indicators_sec'>
                                   <a href="#sec1"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec2"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec3"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec4"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec5"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec6"><div className='dot' > </div></a> 
                                </div>




                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div id='sec5' className='container-fluid global-section text-center' style={{
                backgroundImage: `url("./images/Group 63.png")`, backgroundPosition: "center", height: "600px"
            }}>
                <div className='row'>
                    <div className='col-lg-10 global'>
                        <h1>DDtech is an <span style={{ backgroundColor: "#3CC2FF" }}>Global</span> </h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias laborum quia libero recusandae deserunt odit illo aperiam cum? Eligendi distinctio at nemo porro, similique ipsam temporibus voluptatem! Quo, necessitatibus architecto?</p>

                        <div style={{ marginLeft: "150px" }}>
                            <button>Book A Meeting</button>
                        </div>

                    </div>
                    <div className='col-lg-2   '>
                            <div className='' style={{marginTop:"200px"}} >

                                <div className='indicators_sec'>
                                   <a href="#sec1"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec2"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec3"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec4"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec5"><div className='dot' > </div></a> 
                                </div>
                                <div className='indicators_sec'>
                                   <a href="#sec6"><div className='dot' > </div></a> 
                                </div>




                            </div>
                        </div>
                </div>
            </div>
            <div id='sec6' className='footer'>
                <div>
                    <h1>Lets Work <span style={{background:"#28B37D",color:"#fff" , borderRadius:"12px"}}>Togther</span></h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
<img src="./images/footer-img.png" className='img-fluid mt-5'  alt="" />
                        </div>
                        <div className='col-6'>
                          <div className='row'>
                            <div className='col-4 icons_footer'>
                                <img src="./images/Group.png" alt="" />

                            </div>
                            <div className='col-8 footer_email'>
                            <span>Hello@gmail.com</span>

                            </div>

                           </div>
                           <div className='row'>
                            <div className='col-4 '>
                                <img src="./images/ph.png" alt="" />

                            </div>
                            <div className='col-8 footer_email1'>
                            <span>Hello1234</span>

                            </div>

                           </div>
                           <div className='btn_footer'>
    <button>book a meeting</button>
</div>
                           </div>


                    </div>

                </div>

            </div>


        </>
    )
}

export default Home