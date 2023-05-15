import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15rem",
          backgroundColor: "#c5ebe8",
          padding: "3rem",
          borderRadius: "5px"
        }}
      >
        <h1>Welcome to Food Frenzy</h1>
        <button
          style={{
            padding: "0.7rem 1rem",
            border: "1px solid green",
            backgroundColor: "white",
            borderRadius: "5px",
            fontSize: "large"
          }}
        >
          <Link to="/menu" style={{ textDecoration: "none" }}>
            Menu
          </Link>
        </button>
      </div>
    </>
  );
};
