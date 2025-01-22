export const profileCardStyle = {
    backgroundColor: '#3a3f48', mb: 3, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)'
}

export const canvasStyle = {
    width: '600px',
    height: '400px',
    borderRadius: '10px',
}

export const toolBarStyle = {
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#303030',
    },
    fontFamily: 'Bebas Neue',
    letterSpacing: '1px',
    fontSize: '22px',
}

export const buttonToolBarStyle = {
        color: '#39FF14', // Text color
        borderColor: '#39FF14', // Border color
        border: '2px solid', // Border style
        '&:hover': {
            borderColor: '#39FF14', // Border color on hover
            backgroundColor: 'rgba(57, 255, 20, 0.1)', // Light background on hover
        },
        ml: 1,
        mr: 1,
}

export const drawerContentBox = {
        width: 220,
        padding: 1,
        backgroundColor: '#1c2027', // Darker background color for sidebar
        color: 'white' // Text color for better contrast
}

export const projectHeader = {
     marginBottom: 1.5, mt: 2, fontFamily: 'Bebas Neue', color: '#39FF14', textAlign: 'center', fontSize: '28px' 
}

export const infoCardStyle = {
    width: '100%', display: 'block', margin: '0 auto', mt: 1, backgroundColor: '#3a3f48', boxShadow: 'none', // Removes the shadow
    border: 'none',
}

export const buttonContact = {
        ml: 6,
        mt: 2,
        color: '#39FF14',             // Change text color
        borderColor: '#39FF14',       // Change border color
        '&:hover': {
          borderColor: '#39FF14',     // Ensure border color changes on hover as well
          backgroundColor: 'rgba(57, 255, 20, 0.1)', // Optional: adds a light background color on hover
        },
}

export const infodiv ={
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#3a3f48',
        opacity: 0.3, // Adjust opacity to control the intensity of the overlay
        pointerEvents: 'none', // Ensure the overlay does not block interactions with the image
}

export const skillCardStyle = {
     backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' 
}

export const skillCardText = {
    textAlign: 'center', color: 'white', mt: 0.5
}