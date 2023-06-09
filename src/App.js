import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import "./App.css"
function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4} maxWidth="sm">
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;