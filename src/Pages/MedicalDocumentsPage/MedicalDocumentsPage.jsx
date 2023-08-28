import './MedicalDocumentsPage.css';
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CustomToolbar from '../../Components/CustomToolbar.jsx';

const pdfFiles = [
    { title: "תהליך הטיפול במיון", filename: "emergency_room_treatment.jpg" },
    { title: "הדבקת חתך", filename: "adhesive_cut.jpg" },
    { title: "טיפול בחבלת ראש", filename: "head_injury_treatment.jpg" },
    { title: "טיפול בחום", filename: "fever_treatment.jpg" }
];

const MedicalFilesPagePath = "../../../Public/MedicalFilesPage";

const MedicalDocumentsPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const openModal = (file) => {
        setSelectedFile(file);
    };

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
                            {/* Open in modal */}
                            <IconButton className="button" aria-label="open" onClick={() => openModal(file)}>
                                <RemoveRedEyeIcon />
                            </IconButton>
                        </div>
                    </ListItem>
                ))}
            </List>

            <Modal
                open={selectedFile !== null}
                onClose={() => setSelectedFile(null)}
                aria-labelledby="image-modal"
                aria-describedby="image-modal-description"
            >
                <div className="modal-content">
                    {selectedFile && (
                        <img
                            src={`${MedicalFilesPagePath}/${selectedFile.filename}`}
                            alt={selectedFile.title}
                        />
                    )}
                </div>
            </Modal>
        </div>
    );
}

export default MedicalDocumentsPage;
