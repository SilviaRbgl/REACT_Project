import Home from "./view/Home";
// import { data } from "./API-data/response";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Style properties of MUI in my own style
const theme = createTheme({
  palette: {
    primary: {
      main: "#1CA3CE",
    },
    secondary: {
      main: "#EC6F7F",
    },
    info: {
      main: "#2CAB6A",
    },
    text: {
      primary: "#212121",
      secondary: "#E5EEDE",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightregular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
