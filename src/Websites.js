import React from 'react';
import MainToolbar from './Toolbar';
import { Card, CardContent, Typography, Button } from '@mui/material';


function Websites() {
    return (
        <>
            <MainToolbar color={'#1c2027'} />

            <div className='sitesPage'>

                <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '24px', mt: 5 }}>Strength2Heal Counselling</Typography>
                <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
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
                <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
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
                <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
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

                <Card sx={{ width: '90%', mt: 5, mb: 5, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
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
