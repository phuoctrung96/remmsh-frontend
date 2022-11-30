import {makeStyles} from '@mui/styles';

const useCommonStyles = makeStyles({
  flexCenterRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBetweenRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexAroundRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default useCommonStyles;
