import {Box, Button, Typography} from '@mui/material';
import TableReservation from 'pages/tableSystem/home/components/TableReservation';
import WallReservation from 'pages/tableSystem/home/components/WallReservation';
import {tableReservationRow1} from 'pages/tableSystem/home/data/mockData';
import React from 'react';

const Main = () => {
  return (
    <Box sx={{minHeight: '650px'}}>
      <Typography variant='h5' fontWeight={'700'} color='#ffffff'>
        TOTAL TABLE AVAILABILITY STATUS
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '30px',
          mt: '20px',
        }}>
        <Button
          variant='outlined'
          color='success'
          sx={{
            color: '#C96767',
            border: '2px solid #C96767',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '22px',
          }}>
          10 OCCUPIED
        </Button>
        <Button
          variant='outlined'
          color='success'
          sx={{
            color: '#6FA4F2',
            border: '2px solid #6FA4F2',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '22px',
          }}>
          03 RESERVED
        </Button>
        <Button
          variant='outlined'
          color='success'
          sx={{
            color: '#98C98F',
            border: '2px solid #98C98F',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '22px',
          }}>
          09 VACANT
        </Button>
      </Box>

      <Box
        sx={{
          minHeight: '500px',
          flex: 1,
          padding: '20px',
          margin: '36px 12px',
          border: '20px solid #45276B',
        }}>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {tableReservationRow1.map((item) => (
            <TableReservation
              key={item.id}
              title={item.title}
              tableNumber={item.tableNumber}
              price={item.price}
              status={item.status}
              style={{
                width: '126px',
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginTop: '70px',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <WallReservation title='FRONT DESK' />
          {tableReservationRow1.map((item) => (
            <Box
              key={item.id}
              sx={{
                gap: '40px',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <TableReservation
                title={item.title}
                tableNumber={item.tableNumber}
                price={item.price}
                status={item.status}
                style={{
                  width: '70px',
                  height: '70px',
                }}
                isCircle
              />
              <TableReservation
                key={item.id}
                title={item.title}
                tableNumber={item.tableNumber}
                price={item.price}
                status={item.status}
                style={{
                  width: '70px',
                  height: '70px',
                }}
                isCircle
              />
            </Box>
          ))}
          <Box
            sx={{
              position: 'relative',
              width: '100px',
            }}>
            <WallReservation
              title='KITCHEN ENTRANCE'
              style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-120px',
                width: '230px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '50px',
          }}>
          {tableReservationRow1.map((item) => (
            <TableReservation
              key={item.id}
              title={item.title}
              tableNumber={item.tableNumber}
              price={item.price}
              status={item.status}
              style={{
                width: '126px',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
