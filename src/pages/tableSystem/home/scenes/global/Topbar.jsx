import {Box, IconButton, useTheme} from '@mui/material';
import {useContext} from 'react';
import {ColorModeContext, tokens} from '../../theme';
import {useState} from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {DatePicker} from 'antd';
import WifiIcon from '@mui/icons-material/Wifi';
import dayjs from 'dayjs';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [dateValue, setDateValue] = useState(dayjs('2022-04-07'));

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      p={2}
      backgroundColor={colors.primary[400]}
      className='home-topbar'>
      <Box
        display='flex'
        sx={{
          paddingLeft: 3,
          paddingTop: 1,
        }}>
        <WifiIcon />
      </Box>
      <Box display='flex'>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
        <DatePicker
          value={dateValue}
          onChange={(newValue) => {
            setDateValue(newValue);
          }}
        />
      </Box>

      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
