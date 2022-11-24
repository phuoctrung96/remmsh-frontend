import {Box, Button, ButtonGroup, Grid} from '@mui/material';
import React, {useState} from 'react';

const BUTTON_TYPE = {
  walls: 'walls',
  tableChairs: 'tableChairs',
  more: 'more',
};

const NewRoom = () => {
  const [buttonType, setButtonType] = useState(BUTTON_TYPE.walls);

  const handleClickTypeButton = (type) => {
    setButtonType(type);
  };

  return (
    <Box sx={{minHeight: '650px', display: 'flex'}}>
      <Grid container sx={{flex: 1, padding: '43px 0px'}} spacing={4}>
        <Grid item xs={8}>
          <Box
            sx={{
              backgroundColor: 'rgba(105, 91, 131, 0.7)',
              borderRadius: '8px',
              height: '100%',
            }}></Box>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
          <ButtonGroup
            variant='contained'
            aria-label='outlined primary button group'
            sx={{width: '100%'}}>
            <Button
              sx={[
                styles.button,
                buttonType === BUTTON_TYPE.walls && styles.buttonActive,
              ]}
              onClick={() => handleClickTypeButton(BUTTON_TYPE.walls)}>
              Walls
            </Button>
            <Button
              sx={[
                styles.button,
                buttonType === BUTTON_TYPE.tableChairs && styles.buttonActive,
              ]}
              onClick={() => handleClickTypeButton(BUTTON_TYPE.tableChairs)}>
              Tables & Chairs
            </Button>
            <Button
              sx={[
                styles.button,
                buttonType === BUTTON_TYPE.more && styles.buttonActive,
              ]}
              onClick={() => handleClickTypeButton(BUTTON_TYPE.more)}>
              More
            </Button>
          </ButtonGroup>
          <Box
            sx={{
              backgroundColor: 'rgba(105, 91, 131, 0.7)',
              borderRadius: '8px',
              flex: 1,
            }}></Box>
        </Grid>
      </Grid>
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

export default NewRoom;
