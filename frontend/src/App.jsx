import Navbar from "./components/Header/Navbar/Navbar";
import Main_2 from "./components/Main-2/Main";
import Main from "./components/Main/CareersPath/Main";
import Footer from "./components/Footer/Footer";
// Routing
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PostProfile from "./components/ProfileRoute/PostProfile";
import ProfileManagement from "./components/ProfileRoute/ProfileManagement";
import UpdateProfile from "./components/ProfileRoute/UpdateProfile";
import DeleteProfile from "./components/ProfileRoute/DeleteProfile";
function App()
{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
          <>
          <header className="Head_header"><Navbar /></header>
          <main className="Main_container"><Main />
            <div className="Main_Qualification_skillSet"><Main_2 /></div>
          </main>
          <footer className="Footer"><Footer /></footer>
          </>
          } />
          <Route path="/post" element={<PostProfile />} />
          <Route path="/delete" element={<ProfileManagement />} />
          <Route path="/delete/:id" element={<DeleteProfile />} />
          <Route path="/update/:id" element={<UpdateProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;