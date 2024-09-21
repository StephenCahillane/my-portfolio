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

            <div className='topHeadr'>
                <div style={{ marginRight: '5em' }}>
                    <Typography sx={{ color: 'white', fontSize: '27px', maxWidth: '700px', fontFamily: 'Bebas Neue', }}>
                        Below websites were fully built out by me with <span style={{ color: '#39FF14' }}>backend setup to capture visitor data </span>
                        for ad re-targeting purposes, <span style={{ color: '#39FF14' }}> appointment booking with confirmations and follow-ups </span>, chat widgets for customer support
                        and more. Custom webhooks were built to integrate with <span style={{ color: '#39FF14' }}> Stripe for payments, Meta API, and Meta pixels. </span> Contact me
                        if you would like more information.
                    </Typography>
                </div>


                <div>

                    <Card
                        className='logos'
                        style={{
                            backgroundColor: '#282c34',
                            border: 'none',
                            boxShadow: 'none',   // Remove any shadow that might look like a border
                            outline: 'none',
                        }}
                    >
                        <CardContent
                            style={{
                                border: 'none',
                                outline: 'none',
                            }}
                        >
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '40px',
                                }}
                            >
                                <div className='iconLogo'>
                                    <img src='zapier.png' alt='Zapier' />
                                    <Typography sx={{ color: 'white', fontFamily: 'Bebas Neue', mt: 1, color: 'white' }}>Zapier</Typography>
                                </div>
                                <div className='iconLogo'>
                                    <img src='ghl.jpg' alt='GHL' style={{ width: '80px' }} />
                                    <Typography sx={{ color: 'white', fontFamily: 'Bebas Neue', mt: 1, color: 'white'  }}>GHL</Typography>
                                </div>
                                <div className='iconLogo'>
                                    <img src='stripe.png' alt='Stripe' style={{ width: '80px' }} />
                                    <Typography sx={{ color: 'white', fontFamily: 'Bebas Neue', mt: 1, color: 'white' }}>Stripe</Typography>
                                </div>
                                <div className='iconLogo'>
                                    <img src='meta.png' alt='Meta API' style={{ width: '80px' }} />
                                    <Typography sx={{ color: 'white', fontFamily: 'Bebas Neue', mt: 1, color: 'white' }}>Meta API</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>


            <div className='sitesPage'>

                <div className='sitePanel'>

                    <div className='sitesLeft'>
                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 0, fontFamily: '"Dancing Script", cursive', }}>Strength2Heal Counselling</Typography>
                        <Typography sx={{ color: '#39FF14', textAlign: 'center', fontSize: '16px' }}>Key Features</Typography>

                        <List sx={{ color: 'white', textAlign: 'left', maxWidth: '600px' }}>

                            <ListItem sx={{ backgroundColor: '#282c34', mt: 1 }}>
                                <ListItemIcon>
                                    <MarkEmailReadIcon sx={{ color: '#39FF14' }} />
                                </ListItemIcon>
                                <ListItemText primary="Appointment Booking with Email Notifications." />
                            </ListItem>
                            <ListItem sx={{ backgroundColor: '#282c34', mt: 1 }}>
                                <ListItemIcon>
                                    <RemoveRedEyeIcon sx={{ color: '#39FF14' }} />
                                </ListItemIcon>
                                <ListItemText primary="Pixel installed to capture visitor data." />
                            </ListItem>
                            <ListItem sx={{ backgroundColor: '#282c34', mt: 1 }}>
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
                    </div>


                    <div className='sitesRight'>
                        <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)'}}>
                            <CardContent>
                                <iframe
                                    title="Embedded Website"
                                    src="https://www.strength2heal.com/home-page"
                                    width="100%"
                                    height="500"
                                    style={{ border: 'none' }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className='sitePanelLight'>
                    
                    <div className='sitesRightOpp'>
                        <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)'}}>
                            <CardContent>
                                <iframe
                                    title="Embedded Website"
                                    src="https://app.gohighlevel.com/v2/preview/DTl3QtUhfBBMvOJcGXlU"
                                    width="100%"
                                    height="500"
                                    style={{ border: 'none' }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div className='sitesLeftOpp'>
                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 0, fontFamily: '"Dancing Script", cursive', }}>Sugradh Creche</Typography>
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
                    </div>
                </div>

                <div className='sitePanel'>

                    <div className='sitesLeft'>
                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 5, fontFamily: '"Dancing Script", cursive', }}>One Source Business Development</Typography>
                        <Typography sx={{ color: '#39FF14', textAlign: 'center', fontSize: '16px' }}>Key Features</Typography>

                        <List sx={{ color: 'white', textAlign: 'left', maxWidth: '600px' }}>

                            <ListItem sx={{ backgroundColor: '#282c34', mt: 1 }}>
                                <ListItemIcon>
                                    <MarkEmailReadIcon sx={{ color: '#39FF14' }} />
                                </ListItemIcon>
                                <ListItemText primary="Appointment Booking with Email Notifications." />
                            </ListItem>
                            <ListItem sx={{ backgroundColor: '#282c34', mt: 1 }}>
                                <ListItemIcon>
                                    <RemoveRedEyeIcon sx={{ color: '#39FF14' }} />
                                </ListItemIcon>
                                <ListItemText primary="Pixel installed to capture visitor data." />
                            </ListItem>
                            <ListItem sx={{ backgroundColor: '#282c34', mt: 1 }}>
                                <ListItemIcon>
                                    <AppShortcutIcon sx={{ color: '#39FF14' }} />
                                </ListItemIcon>
                                <ListItemText primary="Backend CRM support with automated outreach processes." />
                            </ListItem>
                            <ListItem sx={{ backgroundColor: '#282c34', mt: 1 }}>
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
                    </div>
                    <div className='sitesRight'>
                        <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                            <CardContent>
                                <iframe
                                    title="Embedded Website"
                                    src="https://onesourcebd.com/home-page"
                                    width="100%"
                                    height="500"
                                    style={{ border: 'none' }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className='sitePanelLight'>
                    
                    <div className='sitesRightOpp'>
                        <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                            <CardContent>
                                <iframe
                                    title="Embedded Website"
                                    src="https://app.gohighlevel.com/v2/preview/gMCtYVncCYHlXXVrBfUw"
                                    width="100%"
                                    height="500"
                                    style={{ border: 'none' }}
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div className='sitesLeftOpp'>
                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 5, fontFamily: '"Dancing Script", cursive', }}>Profit Phantoms Digital Community</Typography>
                        <Typography sx={{ color: '#39FF14', textAlign: 'center', fontSize: '16px' }}>Key Features</Typography>

                        <List sx={{ color: 'white', textAlign: 'left', maxWidth: '600px' }}>

                            <ListItem sx={{ backgroundColor: '#1c2027', mt: 1 }}>
                                <ListItemIcon>
                                    <MarkEmailReadIcon sx={{ color: '#39FF14' }} />
                                </ListItemIcon>
                                <ListItemText primary="Discovery Call Booking with Email Notifications, & followups." />
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
                    </div>
                </div>

            </div>

        </>
    );
}

export default Websites;
