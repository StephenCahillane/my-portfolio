export const handleEKeyDown = (showMessage, setMoveCamera, setControlsEnabled, setViewingComputer) => {
    return (event) => {
        if ((event.key === 'e' || event.key === 'E') && showMessage) {
            setMoveCamera(true);  // Trigger camera movement
            setControlsEnabled(false);  // Disable OrbitControls
            setViewingComputer(true);  // Update state to reflect viewing the computer
        }
    };
};

export const handleFKeyDown = (setControlsEnabled, setViewingComputer, setExitComputer, viewingComputer) => {
    return (event) => {
        if ((event.key === 'f' || event.key === 'F') && viewingComputer) {
            console.log('The "F" key was pressed!');
            setControlsEnabled(true);
            setViewingComputer(false);
            setExitComputer(true);
        }
    }
};


export const handleLKeyDown = (viewingComputer) => {
    return (event) => {
        if ((event.key === 'l' || event.key === 'L') && viewingComputer) {
            console.log('The "L" key was pressed!');
            window.open('https://www.linkedin.com/in/stephen-cahillane-68689b27b/', '_blank'); // Opens LinkedIn in a new tab
        }
    }
};

export const handleTKeyDown = (viewingComputer) => {
    return (event) => {
        if ((event.key === 't' || event.key === 'T') && viewingComputer) {
            console.log('The "L" key was pressed!');
            window.open('https://x.com/Stephen_C_Tech', '_blank'); // Opens LinkedIn in a new tab
        }
    }
};

export const handleYKeyDown = (viewingComputer) => {
    return (event) => {
        if ((event.key === 'y' || event.key === 'Y') && viewingComputer) {
            console.log('The "L" key was pressed!');
            window.open('https://www.youtube.com/@SteveHighLevel-gl8cf', '_blank'); // Opens LinkedIn in a new tab
        }
    }
};

export const handleKeyUp = (setIsAnimating) => {
    return (event) => {
        if (['w', 's', 'a', 'd'].includes(event.key)) {
            setIsAnimating(false);
          }
    }
  };

