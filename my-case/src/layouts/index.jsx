import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import {CssBaseline} from "@mui/material";
import ResponsiveAppBar from "../pages/home/app-bar";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../assets/theme"

export default function Layout(){
    return(
        <ThemeProvider theme={theme}>
        <Box sx={{backgroundColor:'primary.main'}}>
            <CssBaseline/>
            <ResponsiveAppBar />
            <Outlet/>
        </Box>
        </ThemeProvider>
    )
}