import './MedicalDocumentsPage.css'
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import CustomToolbar from '../../Components/CustomToolbar.jsx';
import treatmentPdf from '../../../Public/MedicalFilesPage/emergency_room_treatment.pdf';
import adhesiveCutPdf from '../../../Public/MedicalFilesPage/adhesive_cut.pdf';
import headInjuryPdf from '../../../Public/MedicalFilesPage/head_injury_treatment.pdf';
import feverPdf from '../../../Public/MedicalFilesPage/fever_treatment.pdf';

const pdfFiles = [
    { title: "תהליך הטיפול במיון", filepath: treatmentPdf },
    { title: "הדבקת חתך", filepath: adhesiveCutPdf },
    { title: "טיפול בחבלת ראש", filepath: headInjuryPdf },
    { title: "טיפול בחום", filepath: feverPdf }
];

const MedicalDocumentsPage = () => {


    return (
        <div className="medical documents container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle="דפי הסבר"/>
            </div>
            <List className="files-list" >
                {pdfFiles.map((file, index) => (
                    <ListItem
                        className="ListItem"
                        key={file.filepath}
                        disableGutters
                        sx={{
                            backgroundColor: index % 2 === 1 ? 'inherit' : '#f5f5f5',
                        }}
                    >
                        <ListItemText className="ListItemText" primary={file.title} />

                        <div className="icon-container">
                            {/* Open in a new tab */}
                            <a href={file.filepath}
                               target="_blank"
                               rel="noopener noreferrer">
                                <IconButton className="button" aria-label="open">
                                    <RemoveRedEyeIcon />
                                </IconButton>
                            </a>

                            {/* Download */}
                            <a href={file.filepath}
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