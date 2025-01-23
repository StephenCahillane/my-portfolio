import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { infoCardStyle } from '../Styles/HomePageStyles';
import HeaderAboutMe from './HeaderAboutMe';
import { projectLogs, paragraphs } from '../Logs';
import Dropdown from './Dropdown';



export const UpdateCard = () => {


    const [activeProject, setActiveProject] = useState("Team Mentorship")
    const [logs, setLogs] = useState(projectLogs);
    const [paras, setParas] = useState(paragraphs);


    return (
        <Card sx={infoCardStyle}>
            <CardContent>


                <Typography sx={{ color: 'white', textAlign: 'center' }}>
                    Projects I'm Currently Working On
                </Typography>

                <Button sx={{ display: 'block', margin: '0 auto', mt: 2, mb: 2, color: '#39FF14', border: 'solid 1px #39FF14' }} variant='outlined'>View My Live Streamed Code-a-longs</Button>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2em', marginBottom: '2em'}}>
                    <Typography sx={{color: 'white', fontFamily: 'Dancing Script', fontSize: '22px'}}>{activeProject}</Typography>
                    <Dropdown setSelectedValue={setActiveProject} selectedValue={activeProject}></Dropdown>
                </div>


                <Typography sx={{color: 'white', fontSize: '14px'}}>
                    {paras[activeProject]}
                </Typography>

                <Typography sx={{color: 'white', textAlign: 'center', mt: 2, mb: 2}}>Progress Logs</Typography>



                <TableContainer sx={{maxHeight: '250px', overflow: 'auto', padding: 0.5}}>
                    <Table>
                        <TableHead sx={{border: 'solid 1px #39FF14'}}>
                            <TableRow sx={{border: 'solid 1px #39FF14'}}>
                                <TableCell sx={{border: 'solid 1px #39FF14', width: '80px', color: '#39FF14', backgroundColor: 'rgb(20,20,20)'}}>Date</TableCell>
                                <TableCell sx={{border: 'solid 1px #39FF14', color: '#39FF14', backgroundColor: 'rgb(20,20,20)'}}>Description</TableCell>
                                
                            </TableRow>
                        </TableHead>

                        <TableBody sx={{border: 'solid 1px #39FF14'}}>
                            {logs?.filter((log) => log.Project === activeProject).map((log, index) => (
                                <TableRow sx={{border: 'solid 1px #39FF14'}} key={index}>
                                    <TableCell sx={{border: 'solid 1px #39FF14', color: 'white', backgroundColor: 'rgb(20,20,20)'}}>{log.Date}</TableCell>
                                    <TableCell sx={{border: 'solid 1px #39FF14', color: 'white', fontSize: '11px', backgroundColor: 'rgb(20,20,20)'}}>{log.Description}</TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>



            </CardContent>
        </Card>
    );
}

export default UpdateCard;
