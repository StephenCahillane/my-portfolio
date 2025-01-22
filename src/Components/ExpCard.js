import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { infoCardStyle } from '../Styles/HomePageStyles';
import HeaderAboutMe from './HeaderAboutMe';


export const ExpCard = () => {    
    
    return (
        <Card sx={infoCardStyle}>
            <CardContent>
              <HeaderAboutMe />

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
                  <Card sx={{ backgroundColor: 'rgb(20,20,20)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
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


                <Card sx={{ backgroundColor: 'rgb(20,20,20)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
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


                <Card sx={{ backgroundColor: 'rgb(20,20,20)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
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

                <Card sx={{ backgroundColor: 'rgb(20,20,20)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
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
