import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
       <h1 className="me-auto">My Funds</h1> 
       <Button variant="primary">Add Budget</Button>
       <Button variant="outline-info">Add Expense</Button>
      </Stack>
      <div style ={{ display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem",
    alignItems: "flex-start"}}>
      <Budget></Budget>
    </div>
    </Container>
  );

}

export default App;