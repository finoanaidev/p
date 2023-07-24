import Header from './Header'
import {Route,Routes} from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import AddClient from './AddClient';
// import UpdateClient from './UpdateClient'
 import Protected from './Protected'
// import ClientList from './ClientList';
// import SearchClient from './SearchClient';
import Accueil from './Accueil'
import ClientList from './Client/Client';
import ClientCreate from './Client/ClientCreate';
import ClientEdit from './Client/ClientEdit'

import VehiculeList from './Vehicules/Vehicule';
import VehiculeCreate from './Vehicules/VehiculeCreate';
import VehiculeEdit from './Vehicules/VehiculeEdit'
import AssuranceList from './Assurance/Assurance';
import AssuranceCreate from './Assurance/AssuranceCreate';
import AssuranceEdit from './Assurance/AssuranceEdit';

function App() {
  return (
    <div className="App">
          <Header />
          <Routes>
                 
                <Route path="/login" element={< Login/>} />
                <Route path="/register" element={< Register/>} />
                {/* <Route path="/add" element={< Protected Cmp={AddClient}/>} />
                <Route path="/update/:id" element={< Protected Cmp={UpdateClient}/>} />
                <Route path="/" element={< Protected Cmp={ClientList}/>} />
                <Route path="/search" element={< Protected Cmp={SearchClient}/>} /> */}
 <Route path="/accueil" element={< Accueil/>} />
                <Route path="/addClient" element={< Protected Cmp={ClientList}/>} />
                <Route path="/createClient" element={< Protected Cmp={ClientCreate}/>} />
                <Route path="/addClient/:id/editclient" element={< Protected Cmp={ClientEdit}/>} />

                <Route path="/addVehicule" element={< Protected Cmp={VehiculeList}/>} />
                <Route path="/createVehicule" element={< Protected Cmp={VehiculeCreate}/>} />
                <Route path="/addVehicule/:id/edit" element={< Protected Cmp={VehiculeEdit}/>} />
                <Route path="/addAssurance" element={< Protected Cmp={AssuranceList}/>} />
                <Route path="/createAssurance" element={< Protected Cmp={AssuranceCreate}/>} />
                <Route path="/addAssurance/:id/editassurance" element={< Protected Cmp={AssuranceEdit}/>} />
            </Routes>
    </div>
  );
}

export default App;
// import Header from './Header';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Login from './Auth/Login';
// import Register from './Auth/Register';
// import AddVehicule from './Vehicules/AddVehicule';
// import AddClient from './AddClient';
// import UpdateClient from './UpdateClient';
// import Protected from './Protected';
// import ClientList from './ClientList';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/addVehicule" element={<AddVehicule />} />
//           <Route path="/add" element={<Protected Cmp={AddClient} />} />
//           <Route path="/update" element={<Protected Cmp={UpdateClient} />} />
//           <Route path="/" element={<Protected Cmp={ClientList} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

