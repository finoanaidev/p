// //import {Navbar,Nav} from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'
// function Header() {
//   let user=JSON.parse(localStorage.getItem('user-info'))
//   const navigate=useNavigate();
//   function logOut()
//   {
//     localStorage.clear();
//     sendSubmit();
//   }
//   const sendSubmit = () => {
//     navigate("/register");
//   };
//   return (
//     <div>
//       <Navbar bg="ligth" variant="danger">
//         <Container>
//           <Navbar.Brand href="#home">Accueil</Navbar.Brand>
//           <Nav className="me-auto text-danger">
//             {
//               localStorage.getItem('user-info') ?
//                 <>

//                    {/* <Link className='nav-link' to="/">ClientList</Link>
// //                   <Link className='nav-link' to="/add">AddClient</Link>
// //                   <Link className='nav-link' to="/update">UpdateClient</Link>
// //                   <Link className='nav-link' to="/search">SearchClient</Link> */}
//                  <Link className='nav-link' to="/createClient">Client</Link>
//                    <Link className='nav-link' to="/createVehicule">Vehicule</Link>
//                    <Link className='nav-link' to="/createAssurance">Assurance</Link>
//                  </>
//                 :
//                 <>
//                   <Link className='nav-link' to="/login">Login</Link>
//                   <Link className='nav-link' to="/register">Register</Link>
//                 </>
//             }


//           </Nav>
//         </Container>
//         {localStorage.getItem('user-info') ?
//         <Nav>
//           <NavDropdown title={user && user.name}>
//               <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         :null}
//       </Navbar>
//     </div>
//   )
// }
// export default Header

//import {Navbar,Nav} from 'react-bootstrap'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import aro from './image/aro.png';

function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    sendSubmit();
  }

  const sendSubmit = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="navbar-wrapper">
        <Navbar bg="white" variant="light">
          <Container>
            <Navbar.Brand href="/accueil">
            <img src={aro} alt=""  style={{ width: '1.5cm', height: '1.5cm', marginRight: '10px', borderRadius: '700px', overflow: 'hidden' }} />

              Accueil
            </Navbar.Brand>
            <Nav className="me-auto text-danger">
              {localStorage.getItem('user-info') ? (
                <>
                  <Link className="nav-link" to="/createClient">
  <i className="fas fa-user"></i> Client
</Link>

<Link className="nav-link" to="/createVehicule">
  <i className="fas fa-car"></i> Vehicule
</Link>

<Link className="nav-link" to="/createAssurance">
  <i className="fas fa-shield-alt"></i> Assurance
</Link>

                </>
              ) : (
                <>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav>
            {localStorage.getItem('user-info') ? (
              <Nav>
                <NavDropdown
                  title={
                    <>
                      <i className="fas fa-user-circle me-1"></i>{' '}
                      {user && user.name}
                    </>
                  }
                  align="end"
                >
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : null}
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
