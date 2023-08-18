import './MedicalDocumentsPage.css'
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import CustomToolbar from '../../Components/CustomToolbar.jsx';

const pdfFiles = [
    { title: "הדבקת חתך", filename: "adhesive_cut.pdf" },
    { title: "הטיפול במיון", filename: "emergency_room_treatment.pdf" },
    { title: "טיפול בחבלת ראש", filename: "head_injury_treatment.pdf" },
    { title: "טיפול בחום", filename: "fever_treatment.pdf" }
];

const MedicalFilesPagePath = "/Public/MedicalFilesPage";

const MedicalDocumentsPage = () => {


    return (
        <div className="medical documents container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle="מסמכים רפואים"/>
            </div>
            <List sx={{ width: '100%' }}>
                {pdfFiles.map((file, index) => (
                    <ListItem
                        key={file.filename}
                        disableGutters
                        secondaryAction={
                            <a href={`${MedicalFilesPagePath}/${file.filename}`} download={file.title + ".pdf"}>
                                <IconButton aria-label="download">
                                    <ArrowDownwardIcon />
                                </IconButton>
                            </a>
                        }
                        sx={{
                            backgroundColor: index % 2 === 1 ? 'inherit' : '#f5f5f5',
                        }}
                    >
                        <ListItemText primary={file.title} />
                    </ListItem>
                ))}
            </List>
        </div>

    );
}

export default MedicalDocumentsPage;
