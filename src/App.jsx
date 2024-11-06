// Mui
import { Box } from "@mui/material";

// Css
import "./App.css";

// Components Used
import ContentRoutes from "./routes/ContentRoutes";
import { gradient } from "./ui-helpers/animations/CustomAnimations";

function App() {
  return (
    <Box sx={parentBox}>
      <ContentRoutes />
    </Box>
  );
}

export default App;
const parentBox = {
  backgroundSize: "200% 300%",
  backgroundColor: "var(--favBg--)",
  backgroundImage: `
    radial-gradient(at 16% 77%, hsla(212,91%,4%,1) 0px, transparent 50%),
    radial-gradient(at 75% 16%, hsla(235,42%,13%,1) 0px, transparent 50%),
    radial-gradient(at 46% 13%, hsla(347,1%,3%,1) 0px, transparent 50%),
    radial-gradient(at 72% 75%, hsla(213,64%,12%,1) 0px, transparent 50%),
    radial-gradient(at 7% 49%, hsla(227,81%,11%,1) 0px, transparent 50%),
    radial-gradient(at 91% 64%, hsla(240,11%,3%,1) 0px, transparent 50%),
    radial-gradient(at 30% 2%, hsla(234,100%,11%,1) 0px, transparent 50%)
  `,

  // backgroundColor: "hsla(258,59%,37%,1)",
  // backgroundImage: `
  //   radial-gradient(at 34% 17%, hsla(300,31%,38%,1) 0px, transparent 50%),
  //   radial-gradient(at 47% 39%, hsla(240,45%,47%,1) 0px, transparent 50%),
  //   radial-gradient(at 86% 98%, hsla(235,61%,62%,1) 0px, transparent 50%),
  //   radial-gradient(at 43% 43%, hsla(231,52%,46%,1) 0px, transparent 50%),
  //   radial-gradient(at 94% 79%, hsla(283,69%,16%,1) 0px, transparent 50%),
  //   radial-gradient(at 67% 64%, hsla(232,49%,31%,1) 0px, transparent 50%),
  //   radial-gradient(at 72% 71%, hsla(231,57%,39%,1) 0px, transparent 50%)
  // `,

  animation: `${gradient} 25s ease-in-out infinite`,
  overflow: "hidden",
};
