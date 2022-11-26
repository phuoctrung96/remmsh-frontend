import './style.css';
import { Box, BottomNavigation, BottomNavigationAction, useTheme, Button } from '@mui/material';
import { useState } from 'react';
import { tokens } from '../../theme';
import ItemGallery from './gallery';
import DesignBoard from './board';
const Design = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <Box className='design-container'>
            <Box className='design-body'>
                <DesignBoard />
                <ItemGallery></ItemGallery>
            </Box>
            <Box className="nab-bar" sx={{
                marginTop: '43px'
            }}>
                <BottomNavigation
                    showLabels
                    value={currentTab}
                    onChange={(event, newValue) => {
                        setCurrentTab(newValue);
                    }}
                    sx={{
                        color: colors.purple[300],
                        backgroundColor: '#392652',
                        borderRadius: '8px',
                        height: '43px',
                        marginLeft: 'auto'
                    }
                    }
                >
                    <BottomNavigationAction label="Main" icon={<></>} className="nav-btn page-nav"/>
                    <BottomNavigationAction label="Second Floor" icon={<></>} className="nav-btn page-nav" />
                    <BottomNavigationAction label="Outside" icon={<></>} className="nav-btn page-nav" />
                    <BottomNavigationAction label="Balcony" icon={<></>} className="nav-btn page-nav" />
                    <BottomNavigationAction label="New Room" icon={<></>} className="nav-btn page-nav" />
                </BottomNavigation>
                <Button variant="contained" sx={{
                    backgroundColor: colors.purple[200],
                    borderRadius: '8px',
                    width: '43px',
                    height: '43px',
                    padding: '10px',
                    minWidth: 'unset'
                }}>

                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.46 16.716V0.0839989H11.104V16.716H6.46ZM0.232 10.596V6.204H17.368V10.596H0.232Z" fill="white" />
                    </svg>
                </Button>
            </Box>
        </Box >
    );
}

export default Design;