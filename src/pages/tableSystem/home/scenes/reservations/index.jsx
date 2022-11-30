import {Box, Button, ButtonGroup} from '@mui/material';
import {useState} from 'react';
import Balcony from './rooms/Balcony';
import Main from './rooms/Main';
import NewRoom from './rooms/NewRoom';
import OutSide from './rooms/OutSide';
import SeccondFloor from './rooms/SeccondFloor';
import './styles.scss';

const BUTTON_TYPE = {
  main: 'main',
  seccondFloor: 'seccondFloor',
  outside: 'outside',
  balcony: 'balcony',
  newRoom: 'newRoom',
};

const Reservations = () => {
  const [buttonType, setButtonType] = useState(BUTTON_TYPE.newRoom);

  const handleClickTypeButton = (type) => {
    setButtonType(type);
  };

  return (
    <Box className='reservations'>
      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
        }}>
        {buttonType === BUTTON_TYPE.main && <Main />}
        {buttonType === BUTTON_TYPE.seccondFloor && <SeccondFloor />}
        {buttonType === BUTTON_TYPE.outside && <OutSide />}
        {buttonType === BUTTON_TYPE.balcony && <Balcony />}
        {buttonType === BUTTON_TYPE.newRoom && <NewRoom />}
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'space-between',
        }}>
        <Button
          variant='outlined'
          sx={{
            color: '#ffffff',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '22px',
            background: '#392652',
          }}>
          Edit Room
        </Button>
        <Box sx={{display: 'flex', gap: '12px'}}>
          <ButtonGroup
            variant='raised'
            aria-label='outlined primary button group'>
            <Button
              sx={[
                styles.button,
                buttonType === BUTTON_TYPE.main && styles.buttonActive,
              ]}
              onClick={() => handleClickTypeButton(BUTTON_TYPE.main)}>
              Main
            </Button>
            <Button
              sx={[
                styles.button,
                buttonType === BUTTON_TYPE.seccondFloor && styles.buttonActive,
              ]}
              onClick={() => handleClickTypeButton(BUTTON_TYPE.seccondFloor)}>
              Second Floor
            </Button>
            <Button
              sx={[
                styles.button,
                buttonType === BUTTON_TYPE.outside && styles.buttonActive,
              ]}
              onClick={() => handleClickTypeButton(BUTTON_TYPE.outside)}>
              Outside
            </Button>
            <Button
              sx={[
                styles.button,
                buttonType === BUTTON_TYPE.balcony && styles.buttonActive,
              ]}
              onClick={() => handleClickTypeButton(BUTTON_TYPE.balcony)}>
              Balcony
            </Button>
            <Button
              sx={[
                styles.button,
                buttonType === BUTTON_TYPE.newRoom && styles.buttonActive,
              ]}
              onClick={() => handleClickTypeButton(BUTTON_TYPE.newRoom)}>
              New Room
            </Button>
          </ButtonGroup>
          <Button
            sx={{
              color: '#ffffff',
              borderRadius: '8px',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '22px',
              backgroundColor: '#513C6B',
              padding: '10px 0px',
            }}>
            +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  button: {
    backgroundColor: '#392652',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '22px',
    textTransform: 'capitalize',
  },
  buttonActive: {
    backgroundColor: '#ffffff',
    color: '#392652',
  },
};

export default Reservations;
