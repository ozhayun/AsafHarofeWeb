import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Link} from "react-router-dom";

const MedicalDocumentsPage = () => {
    function appBarLabel(label) {
        return (
            <Toolbar sx={{maxWidth: 390}}>
                <IconButton id = "HomeButton" component={Link} to="/" aria-label="homePage" sx={{ marginRight: 'auto' }}>
                    <HomeIcon/>
                </IconButton>
                <Typography id="Title" variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
                    {label}
                </Typography>
            </Toolbar>
        );
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });

    return (
        <div>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static" color="primary" enableColorOnDark>
                        {appBarLabel('מסמכים רפואים')}
                    </AppBar>
                </ThemeProvider>
            </Stack>

            <List sx={{ width: '100%', maxWidth: 390 }}>
                {[1, 2, 3].map((value, index) => (
                    <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                <ArrowDownwardIcon />
                            </IconButton>
                        }
                        sx={{
                            backgroundColor: index % 2 === 1 ? 'inherit' : '#f5f5f5',
                        }}
                    >
                        <ListItemText primary={`Line item ${value}`} />
                    </ListItem>
                ))}
            </List>
        </div>

    );
}

export default MedicalDocumentsPage;
