import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { infoCardStyle } from '../Styles/HomePageStyles';
import HeaderAboutMe from './HeaderAboutMe';
import { projectLogs } from '../Logs';

export const UpdateCard = () => {


    const [activeProject, setActiveProject] = useState('Software Development Team Mentorship')
    const [logs, setLogs] = useState(projectLogs);

    return (
        <Card sx={infoCardStyle}>
            <CardContent>


                <Typography sx={{ color: 'white', textAlign: 'center' }}>
                    Projects I'm Currently Working On
                </Typography>

                <Button sx={{display: 'block', margin: '0 auto', mt: 2, mb: 2, color: '#39FF14', border: 'solid 1px #39FF14'}} variant='outlined'>View My Live Streamed Code-a-longs</Button>

                <div>
                 <Typography>{activeProject}</Typography>
                 
                </div>
                

                <Typography>
                    I built this Mentorship Team Project for developers who want to thrive in a team environment while growing
                    their skills. This platform gives developers the opportunity to work on real-world projects,
                    where they’re guided and held accountable by a mentor. Mentors set tasks, track progress,
                    and monitor study
                    goals, while also offering one-on-one meetings and scheduling weekly classes and events. The project uses
                    a ranking system that rewards members as they complete tasks and make progress, leveling them up as
                    they grow. It’s a community-driven approach where developers can learn,
                    collaborate, and advance their skills in a structured, supportive setting.

                    The platform also includes a Mentor Dashboard, where mentors can log in to view the
                    progress of all their team
                    members, set tasks, and schedule events. Additionally, there is a real-time chat feature
                    powered by Socket.io,
                    allowing for seamless communication between mentors and mentees,
                    making it easier to collaborate and stay
                    connected.
                </Typography>



                <Typography>Progress Logs</Typography>



                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Link</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {logs?.map((log, index) => (
                                <TableRow key={index}>
                                    <TableCell>{log.Date}</TableCell>
                                    <TableCell>{log.Description}</TableCell>
                                    <TableCell>{log.Link}</TableCell>
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
