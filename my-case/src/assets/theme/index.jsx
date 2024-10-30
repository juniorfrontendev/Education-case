import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F6F4FF',
            light: '#FFFFFF',
            contrastText: '#000'
        },
        secondary: {
            main: '#0000FF'

        }

    },
    custom:{
        icon:{
            main:  '#0000FF'
        },
        typography: {
            main:'#000'
        }
    }
})

export default theme;