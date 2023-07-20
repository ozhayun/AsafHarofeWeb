import './MedicalDocumentsPage.css'
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import CustomToolbar from '../../Components/CustomToolbar.jsx';

const MedicalDocumentsPage = () => {


    return (
        <div className="medical documents container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle="מסמכים רפואים"/>
            </div>
            <List sx={{ width: '100%'}}>
                {[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((value, index) => (
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
