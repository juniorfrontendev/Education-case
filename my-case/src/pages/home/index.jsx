import Box from "@mui/material/Box";
import FirstSection from "./first-section";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../../assets/theme";

export default function Home() {
    return(
        <ThemeProvider theme={theme}>
        <Box style={{width:'100%' , height:'100%' , backgroundColor:'primary.main' }}>
            <FirstSection />
        </Box>
        </ThemeProvider>
    )
}