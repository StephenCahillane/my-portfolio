import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { infoCardStyle } from '../Styles/HomePageStyles';
import HeaderAboutMe from './HeaderAboutMe';


export const EduCard = () => {

    return (
        <Card sx={infoCardStyle}>
            <CardContent>
                <HeaderAboutMe />

                <Typography sx={{ color: 'white', fontSize: '14px', mt: 3, }}>
                    <div style={{ textAlign: 'center', color: '#39FF14' }}>
                        <span>Full Stack Java Development, WCCI, May 2023 - Aug 2023</span>
                    </div>

                    <div className='paragraph'>
                        <span style={{ fontSize: '13px' }}>
                            The curriculum emphasized hands-on learning, with languages and frameworks like Java, React, and Spring Boot.
                            Which helped me not only master the technical skills but also develop problem-solving strategies
                            that are essential in real-world software development</span>
                    </div>


                    <div className='paragraph'>
                        <span style={{ fontSize: '13px' }}>
                            The projects simulated a professional software development environment, with regular stand-ups, sprint planning,
                            and retrospective meetings. Ranging from building RESTful APIs with Spring Boot
                            to creating dynamic front-ends using React,
                            and each one reinforced the importance of writing clean, maintainable, and scalable code,
                            while also learning version control tools like Git and Github.
                        </span>
                    </div>

                    <div className='paragraph'>
                        <span style={{ fontSize: '13px' }}>
                            A core aspect of my boot camp experience was the emphasis on test-driven development (TDD),
                            which became a key part of our workflow. Writing tests before implementing features not only
                            improved code reliability but also instilled a sense of discipline and precision in my coding habits.
                        </span>
                    </div>


                    <Typography sx={{ textAlign: 'center', color: '#39FF14', fontSize: '14px' }}>Computer Science Diploma, Cambridge Online, September 2022 - June 2023</Typography>

                    <div className='paragraph'>
                        <span style={{ fontSize: '13px' }}>
                            Before attending the boot camp, I completed a one-year online computer science diploma, which laid the
                            groundwork for my journey into programming. The course introduced me to essential web development
                            technologies like HTML, JavaScript, and CSS.
                            I also gained foundational knowledge in computer security protocols, learning about encryption, secure
                            authentication, and best practices for protecting sensitive data online.
                        </span>
                    </div>
                </Typography>


            </CardContent>
        </Card>
    );
}

export default EduCard;
