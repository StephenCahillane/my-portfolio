import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { infoCardStyle } from '../Styles/HomePageStyles';
import { projectLogs, paragraphs } from '../Logs';
import Dropdown from './Dropdown';



export const UpdateCard = () => {


    const [activeProject, setActiveProject] = useState("Team Mentorship")
    const [logs, setLogs] = useState([]);
    const [paras, setParas] = useState(paragraphs);
    const [reversedLogs, setReversedLogs] = useState([])


    useEffect(() => {
        // Sort the logs by Date in descending order (most recent first)
        const sortedLogs = [...projectLogs].sort((a, b) => {
            const dateA = new Date(a.Date);
            const dateB = new Date(b.Date);
            return dateB - dateA; // Sorting in descending order
        });

        setReversedLogs(sortedLogs); // Set the sorted logs
        setLogs(sortedLogs); // Optionally, set the logs as well
    }, []);



    return (
        <Card sx={infoCardStyle}>
            <CardContent>


                <Typography sx={{ color: 'white', textAlign: 'center' }}>
                    Projects I'm Currently Working On
                </Typography>

                <Button  onClick={() => window.open("https://hashnode.com/@stephen-cah", "_blank")} sx={{ display: 'block', margin: '0 auto', mt: 2, mb: 2, color: '#39FF14', border: 'solid 1px #39FF14' }} variant='outlined'>View My Progress Blogs</Button>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2em', marginBottom: '2em' }}>
                    <Typography sx={{ color: 'white', fontFamily: 'Dancing Script', fontSize: '22px' }}>{activeProject}</Typography>
                </div>


                <Typography sx={{ color: 'white', fontSize: '14px' }}>
                    {paras[activeProject]}
                </Typography>

                <Typography sx={{ color: 'white', textAlign: 'center', mt: 2, mb: 2 }}>Progress Logs</Typography>



                <div style={{ maxHeight: '300px', height: '300px', minHeight: '300px' }}>
                    <iframe
                        title="Embedded YouTube Video"
                        src="https://www.youtube.com/embed/zbVgoqshEsk"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', margin: '0 auto' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </div>



            </CardContent>
        </Card>
    );
}

export default UpdateCard;
