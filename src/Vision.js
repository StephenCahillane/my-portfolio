import React from 'react';
import MainToolbar from './Toolbar';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Card, CardContent } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import Future from './Future';
import Tasks from './Tasks';
import VisionBoard from './VisionBoard';
import Study from './StudyCenter';
import Routine from './Routine';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Vision() {

    const location = useLocation();

    // Create references for each section
    const futureRef = useRef(null);
    const tasksRef = useRef(null);
    const visionBoardRef = useRef(null);
    const studyRef = useRef(null);
    const routineRef = useRef(null);

    // Function to scroll to a specific section
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Check location state to scroll to the correct section after navigation
    useEffect(() => {
        if (location.state?.section) {
            switch (location.state.section) {
                case 'future':
                    scrollToSection(futureRef);
                    break;
                case 'tasks':
                    scrollToSection(tasksRef);
                    break;
                case 'visionBoard':
                    scrollToSection(visionBoardRef);
                    break;
                case 'studyCenter':
                    scrollToSection(studyRef);
                    break;
                case 'routine':
                    scrollToSection(routineRef);
                    break;
                default:
                    break;
            }
        }
    }, [location.state]);


    return (
        
        <>

            <MainToolbar color={'#1c2027'} />

            <div className='headerApp'>
                <div className='appHeaderLeft'>
                    <Typography sx={{ color: 'white', fontSize: '105px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Vision</Typography>
                    <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>An application developed to structure tasks, goals, future
                        plans, studying, and overall progress towards your overall life plan and vision.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    <Typography sx={{ color: '#39FF14', fontSize: '25px', maxWidth: '600px', mb: 2, fontFamily: 'Dancing Script' }}>
                        Features
                    </Typography>

                    <List>
                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Track Daily Tasks and receive Email notification' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Design a Vision Board with Image and Text, draggable and resizable.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set a daily Routine and mark complete to track progress.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set weekly and daily study goals, and track progress.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set a purpose statement, and track through a roadmap and separate goals.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set Goals, add milestones, and visualize your progress towards
                    goals.' />
                        </ListItem>

                    </List>
                </div>
            </div>

            <div ref={futureRef}>
                <Future />
            </div>
            <div ref={tasksRef}>
                <Tasks />
            </div>
            <div ref={visionBoardRef}>
                <VisionBoard />
            </div>
            <div ref={studyRef}>
                <Study />
            </div>
            <div ref={routineRef}>
                <Routine />
            </div>

        </>
    );
}

export default Vision;
