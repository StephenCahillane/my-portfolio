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

export const handleKeyDown = (characterPosition, characterRotation, setCharacterRotation, setIsAnimating, setCharacterPosition) => {
    const moveSpeed = 1;
    let newPosition = [...characterPosition];
    let newRotation = [...characterRotation];

    return (event) => {
        switch (event.key) {
            case 'w':
                newPosition[0] -= moveSpeed; // Move forward
                setCharacterRotation([0, -Math.PI / 2, 0]);
                setIsAnimating(true);
                break;
            case 's':
                newPosition[0] += moveSpeed; // Move backward
                setCharacterRotation([0, Math.PI / 2, 0]);
                setIsAnimating(true);
                break;
            case 'a':
                newPosition[2] += moveSpeed; // Move left
                setCharacterRotation([0, 0, 0]);
                setIsAnimating(true);
                break;
            case 'd':
                newPosition[2] -= moveSpeed; // Move right
                setCharacterRotation([0, Math.PI, 0]);
                setIsAnimating(true);
                break;
            default:
                break;
        }

        setCharacterPosition(newPosition);
    }

};