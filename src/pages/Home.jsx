import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/search");
  }

  return (
    <div
      style={{
        height: "90vh",
        backgroundColor: "#121212",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 className="mb-3">Madison Student Apartment Finder</h1>

      <p className="mb-4 text-light">
        Your home to find a student friendly home
      </p>

      <Button
        variant="danger"
        size="lg"
        onClick={handleClick}
      >
        Start Searching
      </Button>
    </div>
  );
}