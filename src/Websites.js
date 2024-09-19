import React from 'react';
import MainToolbar from './Toolbar';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MouseIcon from '@mui/icons-material/Mouse';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import BookIcon from '@mui/icons-material/Book';

function Websites() {
    return (
        <>
            <MainToolbar color={'#1c2027'} />

            <div className='sitesPage'>

                <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 5 }}>Strength2Heal Counselling</Typography>
                <Typography sx={{ color: '#39FF14', textAlign: 'center', fontSize: '16px' }}>Key Features</Typography>

                <List sx={{ color: 'white', textAlign: 'left', maxWidth: '600px' }}>

                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <MarkEmailReadIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Appointment Booking with Email Notifications." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <RemoveRedEyeIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Pixel installed to capture visitor data." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <AppShortcutIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Backend CRM support with automated outreach processes." />
                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#39FF14', color: 'white', '&:hover': { backgroundColor: '#32e912' } }}
                >
                    Contact Reference
                </Button>



                <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', border: '2px solid #39FF14' }}>
                    <CardContent>

                        <iframe
                            title="Embedded Website"
                            src="https://www.strength2heal.com/home-page"
                            width="100%"
                            height="600"
                            style={{ border: 'none' }}
                        />
                    </CardContent>
                </Card>
                <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 5 }}>Sugradh Creche</Typography>
                <Typography sx={{ color: '#39FF14', textAlign: 'center', fontSize: '16px' }}>Key Features</Typography>

                <List sx={{ color: 'white', textAlign: 'left', maxWidth: '600px' }}>

                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <MarkEmailReadIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Appointment Booking with Email Notifications." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <RemoveRedEyeIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Pixel installed to capture visitor data." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <AppShortcutIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Backend CRM support with automated outreach processes." />
                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#39FF14', color: 'white', '&:hover': { backgroundColor: '#32e912' } }}
                >
                    Contact Reference
                </Button>
                <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', border: '2px solid #39FF14' }}>
                    <CardContent>
                        <iframe
                            title="Embedded Website"
                            src="https://app.gohighlevel.com/v2/preview/DTl3QtUhfBBMvOJcGXlU"
                            width="100%"
                            height="600"
                            style={{ border: 'none' }}
                        />
                    </CardContent>
                </Card>
                <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 5 }}>One Source Business Development</Typography>
                <Typography sx={{ color: '#39FF14', textAlign: 'center', fontSize: '16px' }}>Key Features</Typography>

                <List sx={{ color: 'white', textAlign: 'left', maxWidth: '600px' }}>

                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <MarkEmailReadIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Appointment Booking with Email Notifications." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <RemoveRedEyeIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Pixel installed to capture visitor data." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <AppShortcutIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Backend CRM support with automated outreach processes." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <BookIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Blog and Vlog updating." />
                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#39FF14', color: 'white', '&:hover': { backgroundColor: '#32e912' } }}
                >
                    Contact Reference
                </Button>
                <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', border: '2px solid #39FF14' }}>
                    <CardContent>
                        <iframe
                            title="Embedded Website"
                            src="https://onesourcebd.com/home-page"
                            width="100%"
                            height="600"
                            style={{ border: 'none' }}
                        />
                    </CardContent>
                </Card>
                <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 5 }}>Profit Phantoms Digital Community</Typography>
                <Typography sx={{ color: '#39FF14', textAlign: 'center', fontSize: '16px' }}>Key Features</Typography>

                <List sx={{ color: 'white', textAlign: 'left', maxWidth: '600px' }}>

                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <MarkEmailReadIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Discovery Call Booking with Email Notifications." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <RemoveRedEyeIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Pixel installed to capture visitor data." />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                        <ListItemIcon>
                            <AppShortcutIcon sx={{ color: '#39FF14' }} />
                        </ListItemIcon>
                        <ListItemText primary="Fully Built Out App Suite" />
                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#39FF14', color: 'white', '&:hover': { backgroundColor: '#32e912' } }}
                >
                    Contact Reference
                </Button>
                <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', border: '2px solid #39FF14' }}>
                    <CardContent>
                        <iframe
                            title="Embedded Website"
                            src="https://app.gohighlevel.com/v2/preview/gMCtYVncCYHlXXVrBfUw"
                            width="100%"
                            height="600"
                            style={{ border: 'none' }}
                        />
                    </CardContent>
                </Card>



            </div>

        </>
    );
}

export default Websites;
