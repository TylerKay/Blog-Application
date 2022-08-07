import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Setting"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AboutMe from "./pages/aboutMe/AboutMe";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Projects from "./pages/projects/Projects";

function App() {
  const {user} = useContext(Context); // useContext = manages state globally.
  return (
    <Router>
        <TopBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={redirectRegisterPage(user)}/>
          <Route path="/login" element={redirectLoginPage(user)} />
          <Route path="/write" element={redirectWritePage(user)} />
          <Route path="/settings" element={redirectSettingsPage(user)} />
          <Route path="/post/:postId" element={<Single/>} />
          <Route path="/aboutMe" element={redirectAboutMePage(user)} />
          <Route path="/projects" element={redirectProjectsPage(user)} />
        </Routes>        
    </Router>
  );
}

// Redirect user to correct page
function redirectRegisterPage(user){
  if (user){
    return <Home/>
  } else {
    return <Register/>
  }
}
// Redirect user to correct page
function redirectLoginPage(user){
  if (user){
    return <Home/>
  } else {
    return <Login/>
  }
}
// Redirect user to correct page
function redirectWritePage(user){
  if (user){
    return <Write/>
  } else {
    return <Register/>
  }
}
// Redirect user to correct page
function redirectSettingsPage(user){
  if (user){
    return <Settings/>
  } else {
    return <Register/>
  }
}

function redirectAboutMePage(user){
  if (user){
    return <AboutMe/>
  } else {
    return <Login/>
  }
}

function redirectProjectsPage(user){
  if (user){
    return <Projects/>
  } else {
    return <Login/>
  }
}

export default App;
