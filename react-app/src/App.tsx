import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Thanks for opening the Banner
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
