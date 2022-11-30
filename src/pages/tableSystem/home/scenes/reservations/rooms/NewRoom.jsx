import {Box, Button, ButtonGroup, Grid, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import useCommonStyles from 'hooks/useCommonStyles';
import React, {useState} from 'react';
import {Layer, Stage, Star} from 'react-konva';

const BUTTON_TYPE = {
  walls: 'walls',
  tableChairs: 'tableChairs',
  more: 'more',
};

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const NewRoom = () => {
  const commonClasses = useCommonStyles();
  const [stars, setStars] = React.useState(INITIAL_STATE);
  const classes = useStyles();
  const [buttonType, setButtonType] = useState(BUTTON_TYPE.walls);

  const handleClickTypeButton = (type) => {
    setButtonType(type);
  };

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      }),
    );
  };

  const handleDragEnd = () => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      }),
    );
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
            }}>
            {/* <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                {stars.map((star) => (
                  <Star
                    key={star.id}
                    id={star.id}
                    x={star.x}
                    y={star.y}
                    numPoints={5}
                    innerRadius={20}
                    outerRadius={40}
                    fill='#89b717'
                    opacity={0.8}
                    draggable
                    rotation={star.rotation}
                    shadowColor='black'
                    shadowBlur={10}
                    shadowOpacity={0.6}
                    shadowOffsetX={star.isDragging ? 10 : 5}
                    shadowOffsetY={star.isDragging ? 10 : 5}
                    scaleX={star.isDragging ? 1.2 : 1}
                    scaleY={star.isDragging ? 1.2 : 1}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  />
                ))}
              </Layer>
            </Stage> */}
          </Box>
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
            }}>
            <Box
              className={[commonClasses.flexCenterRow, classes.titleContainer]}
              sx={{
                padding: '18px 0px',
              }}>
              <Typography className={classes.title}>Wall Shape</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles({
  titleContainer: {
    backgroundColor: '#695B83',
    borderBottom: '1px solid rgba(186, 182, 193, 0.6)',
    borderRadius: '8px 8px 0px 0px',
  },
  title: {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '22px',
    color: '#ffffff',
    fontFamily: 'Futura',
  },
});

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
