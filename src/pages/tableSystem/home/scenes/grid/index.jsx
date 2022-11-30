import Accordion from '@mui/material/Accordion';
import {Box, Typography, IconButton} from '@mui/material';
// import {tokens} from '../../theme';
// import {DataGrid} from '@mui/x-data-grid';
// import {mockDataArrived} from '../../data/mockData';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import IntlMessages from '@crema/utility/IntlMessages';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {useIntl} from 'react-intl';

const Grid = () => {
  const {messages} = useIntl();
  // function numberOfReservation(reservations_number) {
  //   return `${reservations_number} Reservations`;
  // }
  // function createRow(desc, qty, unit) {
  //   const price = priceRow(qty, unit);
  //   return {desc, qty, unit, price};
  // }
  // const rows = [
  //   createRow('Paperclips (Box)', 100, 1.15),
  //   createRow('Paper (Case)', 10, 45.99),
  //   createRow('Waste Basket', 2, 17.99),
  // ];

  // const columns = [
  //   {field: 'id', headerName: ''},
  //   {
  //     field: 'time',
  //     headerName: 'Time',
  //     flex: 1,
  //     cellClassName: 'time-column--cell',
  //     renderHeader: () => (
  //       <Typography fontWeight='bold' variant='h4' color='white'>
  //         <IntlMessages id='tableSys.time' />
  //       </Typography>
  //     ),
  //   },
  //   {
  //     field: 'name',
  //     headerName: 'Name',
  //     flex: 1,
  //     renderHeader: () => (
  //       <Typography fontWeight='bold' variant='h4' color='white'>
  //         <IntlMessages id='tableSys.name' />
  //       </Typography>
  //     ),
  //   },
  //   {
  //     field: 'number_of_peopele',
  //     headerName: 'No. of Peopele',
  //     flex: 1,
  //     renderHeader: () => (
  //       <Typography fontWeight='bold' variant='h4' color='white'>
  //         <IntlMessages id='tableSys.number_of_peopele' />
  //       </Typography>
  //     ),
  //   },
  //   {
  //     field: 'table_number',
  //     headerName: 'Table No.',
  //     flex: 1,
  //     renderHeader: () => (
  //       <Typography fontWeight='bold' variant='h4' color='white'>
  //         <IntlMessages id='tableSys.table_number' />
  //       </Typography>
  //     ),
  //   },
  //   {
  //     field: 'status',
  //     headerName: 'Status',
  //     flex: 1,
  //     renderHeader: () => (
  //       <Typography fontWeight='bold' variant='h4' color='white'>
  //         <IntlMessages id='tableSys.status' />
  //       </Typography>
  //     ),
  //     renderCell: (params) => (
  //       <Typography
  //         fontWeight='bold'
  //         variant='h6'
  //         color={
  //           params.row.status === 'Confirmed'
  //             ? colors.greenAccent[500]
  //             : 'white'
  //         }>
  //         {params.row.status}
  //       </Typography>
  //     ),
  //   },
  //   {
  //     field: 'comments',
  //     headerName: 'Comments',
  //     flex: 1,
  //     renderHeader: () => (
  //       <Typography fontWeight='bold' variant='h4' color='white'>
  //         <IntlMessages id='tableSys.comments' />
  //       </Typography>
  //     ),
  //   },
  //   {
  //     field: 'reservation_notes',
  //     headerName: 'Reservation Notes',
  //     flex: 1,
  //     renderHeader: () => (
  //       <Typography fontWeight='bold' variant='h4' color='white'>
  //         <IntlMessages id='tableSys.reservation_notes' />
  //       </Typography>
  //     ),
  //   },
  // ];
  const columnWidth = {
    width: 100,
  };
  const reservations = [
    {
      id: 1,
      date: '',
      hour: 9,
      minutes: 0,
      name: 'Jamal',
      numberOfPeople: 3,
      table: 'M06',
    },
    {
      id: 2,
      date: '',
      hour: 9,
      minutes: 15,
      name: 'Jamal',
      numberOfPeople: 2,
      table: 'M06',
    },
    {
      id: 3,
      date: '',
      hour: 9,
      minutes: 15,
      name: 'Jamal',
      numberOfPeople: 2,
      table: 'M06',
    },
    {
      id: 4,
      date: '',
      hour: 12,
      minutes: 30,
      name: 'Jamal',
      numberOfPeople: 4,
      table: 'M06',
    },
    {
      id: 5,
      date: '',
      hour: 13,
      minutes: 45,
      name: 'Jamal',
      numberOfPeople: 5,
      table: 'M06',
    },
    {
      id: 6,
      date: '',
      hour: 14,
      minutes: 15,
      name: 'Jamal',
      numberOfPeople: 3,
      table: 'M06',
    },
    {
      id: 7,
      date: '',
      hour: 15,
      minutes: 0,
      name: 'Jamal',
      numberOfPeople: 6,
      table: 'M06',
    },
    {
      id: 8,
      date: '',
      hour: 15,
      minutes: 0,
      name: 'Jamal',
      numberOfPeople: 3,
      table: 'M06',
    },
    {
      id: 9,
      date: '',
      hour: 17,
      minutes: 15,
      name: 'Jamal',
      numberOfPeople: 2,
      table: 'M06',
    },
    {
      id: 10,
      date: '',
      hour: 17,
      minutes: 15,
      name: 'Jamal',
      numberOfPeople: 4,
      table: 'M06',
    },
    {
      id: 11,
      date: '',
      hour: 18,
      minutes: 30,
      name: 'Jamal',
      numberOfPeople: 5,
      table: 'M06',
    },
    {
      id: 12,
      date: '',
      hour: 19,
      minutes: 45,
      name: 'Jamal',
      numberOfPeople: 4,
      table: 'M06',
    },
    {
      id: 13,
      date: '',
      hour: 20,
      minutes: 15,
      name: 'Jamal',
      numberOfPeople: 2,
      table: 'M06',
    },
    {
      id: 14,
      date: '',
      hour: 21,
      minutes: 0,
      name: 'Jamal',
      numberOfPeople: 3,
      table: 'M06',
    },
  ];

  const createCells = (hourSlut, minitSlut) => {
    const list = [];
    reservations.map((reservation) => {
      if (reservation.hour === hourSlut && reservation.minutes === minitSlut) {
        list.push(reservation);
      }
    });

    if (list.length === 1)  {
      return `${list.length} ${messages["tableSys.reservation"]}`;
    }
    else if(list.length > 1)  {
      return `${list.length} ${messages["common.reservations"]}`;
    }
  };

  return (
    <Box m={'20px'} maxHeight='false'>
      <Box display={'flex'} sx={{flexDirection: 'row-reverse'}}>
        {/* SEARCH BAR */}
        <Box
          display='flex'
          backgroundColor={'rgba(105, 91, 131, 0.4)'}
          sx={{
            border: '2px solid white',
            borderRadius: 1,
          }}>
          <InputBase
            sx={{ml: 2, flex: 1, p: 1}}
            placeholder={messages['common.searchHere']}
          />
          <IconButton type='button' sx={{p: 1}}>
            <SearchIcon />
          </IconButton>
        </Box>
        {/* SEARCH BAR */}
      </Box>

      <Box sx={{pb: 2, pt: 2}}>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: '#45276B',
            borderRadius: '0',
          }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} color='white'>
            <Typography variant='h5' color='white' fontWeight='bold'>
              {messages['tableSys.not_confirmed']}
            </Typography>
          </AccordionSummary>
          <TableContainer component={Paper} sx={{}}>
            {' '}
            {/* NOT CONFIRMED TABLE */}
            <Table sx={{minWidth: 700}} aria-label='spanning table'>
              <TableHead>
                <TableRow>
                  <TableCell
                    align='left'
                    sx={{
                      ...columnWidth,
                      background: '#302644',
                      borderbottom: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      {messages['tableSys.shift']}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='left'
                    sx={{
                      ...columnWidth,
                      background: '#302644',
                      borderbottom: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      {messages['common.time']}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      ...columnWidth,
                      background: '#302644',
                      borderbottom: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      --:00
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      ...columnWidth,
                      background: '#302644',
                      borderbottom: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      --:15
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      ...columnWidth,
                      background: '#302644',
                      borderbottom: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      --:30
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      ...columnWidth,
                      background: '#302644',
                      borderbottom: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      --:45
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableRow>
                <TableCell
                  align='center'
                  sx={{
                    background: '#2B2040',
                    borderRight: '1px solid rgba(211, 195, 237, 0.15)',
                    borderTop: '1px solid rgba(211, 195, 237, 0.15)',
                    borderBottom: '1px solid rgba(211, 195, 237, 0.15)',
                  }}
                  rowSpan={8}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                    {messages['tableSys.breakfast&lunch']}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow key={9}>
                <TableCell
                  align='left'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                    09:00 AM
                  </Typography>
                </TableCell>
                <TableCell
                  key={'9:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(9,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'9:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(9,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'9:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(9,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'9:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(9,45)}
                  </Typography>
                </TableCell>
                {/* {createCells(reservations, 9)} */}
              </TableRow>

              <TableRow key={10}>
                <TableCell
                  align='left'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                    10:00 AM
                  </Typography>
                </TableCell>
                <TableCell
                  key={'10:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(10,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'10:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(10,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'10:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(10,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'10:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(10,45)}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow key={11}>
                <TableCell
                  align='left'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                    11:00 AM
                  </Typography>
                </TableCell>
                <TableCell
                  key={'11:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(11,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'11:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(11,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'11:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(11,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'11:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(11,45)}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow key={12}>
                <TableCell
                  align='left'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                    12:00 PM
                  </Typography>
                </TableCell>
                <TableCell
                  key={'12:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(12,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'12:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(12,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'12:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(12,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'12:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(12,45)}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow key={13}>
                <TableCell
                  align='left'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                    01:00 PM
                  </Typography>
                </TableCell>
                <TableCell
                  key={'13:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(13,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'13:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(13,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'13:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(13,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'13:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(13,45)}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow key={14}>
                <TableCell
                  align='left'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                    02:00 PM
                  </Typography>
                </TableCell>
                <TableCell
                  key={'14:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(14,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'14:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(14,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'14:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(14,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'14:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(14,45)}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow key={15}>
                <TableCell
                  align='left'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                    03:00 PM
                  </Typography>
                </TableCell>
                <TableCell
                  key={'15:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(15,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'15:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(15,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'15:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(15,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'15:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(15,45)}
                  </Typography>
                </TableCell>
              </TableRow>

              {/* DIVIDER */}
              <TableRow>
                <TableCell
                  height='50px'
                  colSpan={6}
                  align='left'
                  sx={{
                    background: '#44385A',
                    borderbottom: '1px solid rgba(211, 195, 237, 0.15)',
                  }}></TableCell>
              </TableRow>
              {/* DIVIDER */}

              <TableBody>
                <TableRow>
                  <TableCell
                    align='center'
                    sx={{
                      background: '#2B2040',
                      borderTop: '1px solid rgba(211, 195, 237, 0.15)',
                      borderBottom: '1px solid rgba(211, 195, 237, 0.15)',
                    }}
                    rowSpan={8}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      {messages['tableSys.dinner']}
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow key={17}>
                  <TableCell
                    align='left'
                    sx={{
                      background: '#2B2040',
                      border: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      05:00 PM
                    </Typography>
                  </TableCell>
                  <TableCell
                  key={'17:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(17,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'17:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(17,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'17:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(17,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'17:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(17,45)}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow key={18}>
                  <TableCell
                    align='left'
                    sx={{
                      background: '#2B2040',
                      border: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      06:00 PM
                    </Typography>
                  </TableCell>
                  <TableCell
                  key={'18:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(18,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'18:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(18,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'18:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(18,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'18:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(18,45)}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow key={19}>
                  <TableCell
                    align='left'
                    sx={{
                      background: '#2B2040',
                      border: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      07:00 PM
                    </Typography>
                  </TableCell>
                  <TableCell
                  key={'19:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(19,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'19:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(19,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'19:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(19,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'19:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(19,45)}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow key={20}>
                  <TableCell
                    align='left'
                    sx={{
                      background: '#2B2040',
                      border: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      08:00 PM
                    </Typography>
                  </TableCell>
                  <TableCell
                  key={'20:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(20,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'20:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(20,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'20:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(20,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'20:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(20,45)}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow key={21}>
                  <TableCell
                    align='left'
                    sx={{
                      background: '#2B2040',
                      border: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      09:00 PM
                    </Typography>
                  </TableCell>
                  <TableCell
                  key={'21:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(21,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'21:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(21,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'21:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(21,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'21:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(21,45)}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow key={22}>
                  <TableCell
                    align='left'
                    sx={{
                      background: '#2B2040',
                      border: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      10:00 PM
                    </Typography>
                  </TableCell>
                  <TableCell
                  key={'22:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(22,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'22:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(22,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'22:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(22,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'22:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(22,45)}
                  </Typography>
                </TableCell>
                </TableRow>

                <TableRow key={23}>
                  <TableCell
                    align='left'
                    sx={{
                      background: '#2B2040',
                      border: '1px solid rgba(211, 195, 237, 0.15)',
                    }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                      11:00 PM
                    </Typography>
                  </TableCell>
                  <TableCell
                  key={'23:00'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(23,0)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'23:15'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(23,15)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'23:30'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(23,30)}
                  </Typography>
                </TableCell>
                <TableCell
                  key={'23:45'}
                  align='center'
                  sx={{
                    background: '#2B2040',
                    border: '1px solid rgba(211, 195, 237, 0.15)',
                  }}>
                  <Typography variant='h5' color='white' fontWeight='bold'>
                  {createCells(23,45)}
                  </Typography>
                </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Grid;
