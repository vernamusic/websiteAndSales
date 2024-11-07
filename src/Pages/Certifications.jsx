import { Box, Typography } from '@mui/material'
import React from 'react'
import BG from '../assets/CertificationsBG.svg'
import isocertification1 from '../assets/isocertification1.svg'
import isocertification2 from '../assets/isocertification2.svg'
import isocertification3 from '../assets/isocertification3.svg'
import isocertification4 from '../assets/isocertification4.svg'
import isocertification5 from '../assets/isocertification5.svg'
import isocertification6 from '../assets/isocertification6.svg'
import isocertification7 from '../assets/isocertification7.svg'
import isocertification8 from '../assets/isocertification8.svg'

const typoStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '100%',
    textTransform: 'none'
}
const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: 'ISO 27001',
            desc: 'ISMS certification',
            src: isocertification1
        },
        {
            id: 2,
            title: 'ISO 13485',
            desc: 'QMS certification',
            src: isocertification2
        },
        {
            id: 3,
            title: 'ISO 14971',
            desc: 'Risk management',
            src: isocertification3
        },
        {
            id: 4,
            title: 'ISO 10993',
            desc: 'Bio compatibility evidence',
            src: isocertification4
        },
        {
            id: 5,
            title: 'ISO 13485',
            desc: 'Transport validation',
            src: isocertification5
        },
        {
            id: 6,
            title: 'ISO 80601-2-56',
            desc: 'Skin temp parameter accuracy',
            src: isocertification6
        },
        {
            id: 7,
            title: 'ISO 80601-2-61',
            desc: 'PPG parameter accuracy',
            src: isocertification7
        },
        {
            id: 8,
            title: 'IEC 60601-2-27',
            desc: 'ECG parameter accuracy',
            src: isocertification8
        },
        {
            id: 9,
            title: 'IEC 60601 / IEC 60601-1-2',
            desc: 'Watch safety and EMC validation',
            src: isocertification8
        },
    ]//Certifications card
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${BG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top right',
                backgroundRepeat: 'no-repeat',
                pt: { xs: '120px', sm: '130px', md: '130px', lg: '168px' },
                pb: { xs: '80px', sm: '90px', md: '100px', lg: '112px' },
                boxSizing: 'border-box'
            }}
        >
            <Typography
                sx={{
                    ...typoStyle,
                    textAlign: 'center'
                }}
            >
                OUR CERTIFICATIONS
            </Typography>
            <Typography
                sx={{
                    ...typoStyle,
                    textAlign: 'center',
                    color: '#f1f1f1',
                    fontSize: { xs: '12.64px', md: '14.22px', lg: '16px' },
                    fontWeight: 'normal',
                    mt: '12px',

                }}
            >
                At the moment, we are undergoing the following certifications:
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        mt: '56px',
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' },
                        justifyItems: 'center',
                        alignItems: 'center',
                        rowGap: '16px',
                        columnGap: '16px',
                        gridTemplateRows: 'auto',
                        gap: 'clamp(8px, 2vw, 16px)',
                        maxWidth: '1088px' /* Adjusts the gap within 8px to 16px */
                    }}
                >
                    {
                        certifications.map((item, index) => {
                            return (

                                <Card
                                    key={index}
                                    title={item.title}
                                    desc={item.desc}
                                    src={item.src}
                                />
                            )
                        })
                    }
                </Box>
            </Box>
        </Box >
    )
}


const Card = ({ src, title, desc }) => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(31, 31, 31, 0.30) 100%)',
                boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.32)',
                borderRadius: '16px',
                py: { xs: '22px', sm: '26px', md: '28px', lg: '32px' },
                px: { xs: '10px', sm: '18px', md: '20px', lg: '24px' },
                width: { xs: '247px' },
                height: { xs: '286px' },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                boxSizing: 'border-box'

            }}
        >
            <Box>
                <img src={src} alt="" />
            </Box>
            <Typography
                sx={{
                    ...typoStyle,
                    fontWeight: 'bolder',
                    fontSize: { xs: '14.22px', sm: '16px', md: '18px', lg: '20px' },
                    mt: '24px',

                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    ...typoStyle,
                    fontWeight: 'normal',
                    fontSize: { xs: '10px', sm: '12px', md: '12.64px', lg: '14px' },
                    mt: '8px',

                }}
            >
                {desc}
            </Typography>
        </Box>
    )
}
export default Certifications