import { redirect } from "next/navigation";

export default function LoginPage(){

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "100px auto",
        padding: 30,
        border: "1px solid #ccc",
        borderRadius: 8,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <form method="POST" action="/api/login">
        <div style={{ marginBottom: 12 }}>
          <label>
            Username
            <input
              name="username"
              required
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            Password
            <input
              name="password"
              type="password"
              required
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            />
          </label>
        </div>

       

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      <div style={{ marginTop: 16, fontSize: 12 }}>
        Use username <strong>hpuser</strong> (hp) or{" "}
        <strong>lenovouser</strong> (lenovo). Password any.
      </div>
    </div>
  );
}
