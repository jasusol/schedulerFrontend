import { Link, Outlet, Route, Routes } from "react-router-dom"
import Home from "./home"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SchedulerPage from "./pages/SchedulerPage";

const AppRouter = () => {

    return (
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="scheduler" element={<SchedulerPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    )
  

    function Layout() {
        return (
          <div>
            <Outlet />
          </div>
        );
      }
      
      
      
      function About() {
        return (
          <div>
            <h2 style={{textAlign: "center"}}>About</h2>
          </div>
        );
      }
      
      function Dashboard() {
        return (
          <div>
            <h2 style={{textAlign: "center"}}>Dashboard</h2>
          </div>
        );
      }
      
      function NoMatch() {
        return (
          <div>
            <h2>Nothing to see here!</h2>
            <p>
              <Link to="/">Go to the home page</Link>
            </p>
          </div>
        );
      }




}
  export default AppRouter