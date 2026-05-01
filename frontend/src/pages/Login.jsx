import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("Sending data:", form); // debug

      const res = await API.post("/auth/login", form);

      console.log("Login success:", res.data); // debug

      // store token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // redirect
      navigate("/dashboard");

    } catch (err) {
      console.log("Login error:", err.response?.data);

      alert(
        err.response?.data?.msg ||
        "Invalid email or password"
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Signup
        </span>
      </p>
    </div>
  );
}