import './MedicalDocumentsPage.css'
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import CustomToolbar from '../../Components/CustomToolbar.jsx';

const pdfFiles = [
    { title: "תהליך הטיפול במיון", filename: "emergency_room_treatment.pdf" },
    { title: "הדבקת חתך", filename: "adhesive_cut.pdf" },
    { title: "טיפול בחבלת ראש", filename: "head_injury_treatment.pdf" },
    { title: "טיפול בחום", filename: "fever_treatment.pdf" }
];

const MedicalFilesPagePath = `/Public/MedicalFilesPage`;

const MedicalDocumentsPage = () => {


    return (
        <div className="medical documents container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle="מסמכים רפואים"/>
            </div>
            <List className="files-list" >
                {pdfFiles.map((file, index) => (
                    <ListItem
                        className="ListItem"
                        key={file.filename}
                        disableGutters
                        sx={{
                            backgroundColor: index % 2 === 1 ? 'inherit' : '#f5f5f5',
                        }}
                    >
                        <ListItemText className="ListItemText" primary={file.title} />

                        <div className="icon-container">
                            {/* Open in a new tab */}
                            <a href={`${MedicalFilesPagePath}/${file.filename}`}
                               target="_blank"
                               rel="noopener noreferrer">
                                <IconButton className="button" aria-label="open">
                                    <RemoveRedEyeIcon />
                                </IconButton>
                            </a>

                            {/* Download */}
                            <a href={`${MedicalFilesPagePath}/${file.filename}`}
                               download={file.title + ".pdf"}>
                                <IconButton className="button" aria-label="download">
                                    <ArrowDownwardIcon />
                                </IconButton>
                            </a>
                        </div>
                    </ListItem>



                ))}
            </List>
        </div>

    );
}

export default MedicalDocumentsPage;
