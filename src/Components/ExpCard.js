import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';


export const ExpCard = () => {    
    
    return (
        <Card sx={{
            width: '100%', display: 'block', margin: '0 auto', mt: 1, backgroundColor: '#3a3f48', boxShadow: 'none', // Removes the shadow
            border: 'none',
          }}>
            <CardContent>
              <div className='headerAboutMe'>
                <div className='btn&info'>
                  <Typography sx={{ color: 'white', maxWidth: '240px', mr: 0 }}>
                    I'm <span style={{ color: '#39FF14', fontSize: '22px' }}>Stephen</span>, a Full Stack Java Developer. This portfolio has been built in React, Material UI, and React3Fiber.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      ml: 6,
                      mt: 2,
                      color: '#39FF14',             // Change text color
                      borderColor: '#39FF14',       // Change border color
                      '&:hover': {
                        borderColor: '#39FF14',     // Ensure border color changes on hover as well
                        backgroundColor: 'rgba(57, 255, 20, 0.1)', // Optional: adds a light background color on hover
                      },
                    }}
                  >
                    Contact
                  </Button>
                </div>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <img
                    src='cutout-pic2.png'
                    style={{ width: '100%', height: '175px', display: 'block', objectFit: 'cover' }}
                    alt='Invalid Src'
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#3a3f48',
                      opacity: 0.3, // Adjust opacity to control the intensity of the overlay
                      pointerEvents: 'none', // Ensure the overlay does not block interactions with the image
                    }}
                  />
                </div>
              </div>

              <Typography sx={{ color: 'white', fontSize: '14px', mt: 3, }}>
                <div style={{ textAlign: 'center', color: '#39FF14' }}>
                  <span>Agency Admin, One Source ICT, June 2023 - Current</span>
                </div>

                <div className='paragraph'>
                  <span style={{ fontSize: '12px' }}>Developed custom API integrations, linking GoHighLevel with other software solutions
                    to streamline client operations and improve data flow.</span>
                </div>


                <div className='paragraph'>
                  <span style={{ fontSize: '12px' }}>
                    Implemented webhooks to automate customer notifications, connecting the client's e-commerce platform with
                    their email marketing service, resulting in a 40% reduction in manual workload and improving order
                    confirmation turnaround time by 30%.
                  </span>
                </div>

                <div className='paragraph'>
                  <span style={{ fontSize: '12px' }}>
                    Built and customized client websites, including setting up backends with robust database connections and
                    integrations, resulting in a 25% increase in client satisfaction and enabling seamless data management and
                    retrieval.
                  </span>
                </div>
              </Typography>

              <Typography sx={{ textAlign: 'center', color: '#39FF14', fontSize: '14px' }}>My Website Portfolio</Typography>


              <div className='webCards'>
                <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                  <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                    <CardContent>
                      <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '12px', mb: 2 }}>Strength2Heal</Typography>
                      <img
                        src='https://assets.cdn.filesafe.space/pUoGUkj918EJf1mXFaIi/media/665cb33565b36f23aea6f299.png'
                        alt='s2healLogo'
                        style={{ height: '75px', width: '75px', display: 'block', margin: '0 auto' }}
                      >
                      </img>
                    </CardContent>
                  </Card>

                </Card>


                <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                  <CardContent>
                    <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '12px', mb: 2 }}>Sugradh Creche</Typography>
                    <img
                      src='https://assets.cdn.filesafe.space/Qf6XLkEBnE5hoUBRyRIl/media/6669d33839eeea7e3f543934.jpeg'
                      alt='s2healLogo'
                      style={{ height: '75px', width: '120px', display: 'block', margin: '0 auto' }}
                    >
                    </img>
                  </CardContent>
                </Card>


                <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                  <CardContent>
                    <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '12px', mb: 2 }}>One Source Business Development</Typography>
                    <img
                      src='https://assets.cdn.filesafe.space/mxxrduzd8Qcju97pwUEN/media/6647f59e81d1c14ba9ac631d.jpeg'
                      alt='s2healLogo'
                      style={{ height: '75px', width: '120px', display: 'block', margin: '0 auto' }}
                    >
                    </img>
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                  <CardContent>
                    <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '12px', mb: 2 }}>Profit Phantoms</Typography>
                    <img
                      src='https://assets.cdn.filesafe.space/kPSwaea4RBb8MhlP4TSu/media/66745ee962c064022eb279ad.png'
                      alt='s2healLogo'
                      style={{ height: '90px', width: '100px', display: 'block', margin: '0 auto' }}
                    >
                    </img>
                  </CardContent>
                </Card>
              </div>



            </CardContent>
          </Card>
    );
}

export default ExpCard;
