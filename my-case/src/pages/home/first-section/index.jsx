import * as React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Student from "../../../assets/images/student.png";
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../../../assets/theme"
import {ButtonGroup, Input, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {useState} from "react";





export default function FirstSection() {


    const [Kindergarten , setKindergarten] = useState('');
    const handleChange = (event)=> {
        setKindergarten(event.target.value);
    }

    return(
        <ThemeProvider theme={theme}>
        <Container sx={{mx:"80px",  display:"flex" , backgroundColor:'primary.main'}}>
            <Box sx={{display:'block' , width:'50%' , height:'500px' ,mt:'100px' , backgroundColor:'primary.main'}}>
                <Button variant="contained"
                        sx={{
                            textTransform:'capitalize',
                            fontWeight:'bold',
                            backgroundColor: 'primary', // Arka planı beyaz yap
                            color: 'palette.secondary.main', // Yazı rengini mavi yap (varsayılan mavi)
                            '&:hover': {
                                backgroundColor: 'primary.light', // Hover durumunda arka plan rengini aç
                                color: 'blue', // Hover durumunda yazı rengini beyaz yap
                            },
                        }}>
                    Never Stop Learning
                </Button>
                <Typography variant="h2" noWrap sx={{whiteSpace: "normal" , fontWeight:"bold"}}>
                    Grow up your skills by online courses with Eduvi
                </Typography>
                <br/>
                <Typography sx={{color:"grey"}}>
                    Eduvi is a Global training provider based in the UK that specializes in accredited
                     and bespoke training courses. We crush the barriers to getting a degree.
                </Typography>
                <br />

                    <TextField
                        label="Class/Course"
                        variant="outlined"
                    >   Kindergarten</TextField>
                </Box>
            <Box sx={{display:'flex' ,alignItem:'center',justifyContent:'center', width:'50%' , height:'600px' ,mt:'60px' , backgroundColor:'primary.main' , position:'relative'}}>
                <img src={Student} alt="student" />
            </Box>

        </Container>
        </ThemeProvider>

    )
}