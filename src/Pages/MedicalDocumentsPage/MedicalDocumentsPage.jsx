import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';

const MedicalDocumentsPage = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[1, 2, 3].map((value) => (
                <ListItem
                    key={value}
                    disableGutters
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <ArrowDownwardIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary={`Line item ${value}`} />
                </ListItem>
            ))}
        </List>
    );
}


export default MedicalDocumentsPage