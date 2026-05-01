import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav>
      {user && (
        <>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/projects">Projects</Link> |{" "}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}