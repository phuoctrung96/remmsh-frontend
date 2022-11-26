import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import { Routes, Route } from "react-router-dom";
import Topbar from './scenes/global/Topbar';
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoice";
// import Form from "./scenes/form";
import './App.css';
// import FAQ from "./scenes/faq";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import './index.style.less';
import { Tabs, Spin } from 'antd';
// import {HiUser} from 'react-icons/hi';
import IntlMessages from '../../../@crema/utility/IntlMessages';

import Design from './scenes/design';
import List from './scenes/list';
import Grid from './scenes/grid';
import Timeline from './scenes/timeline';
import Reservations from './scenes/reservations';
import Waitlist from './scenes/waitlist';
import Guests from './scenes/guests';
import Servers from './scenes/servers';
import { useState } from 'react';

// import { Typography } from "@mui/material";


function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();
  const navigate = useNavigate();
  const TabPane = Tabs.TabPane;
  // const colors = tokens(theme.palette.mode);

  const [currentTab, setCurrentTab] = useState(0);
  const { isLoading } = useSelector((state) => state.userInfo); //TODO: get table-systems state

  const handleTabClick = (key) => {
    switch (key) {
      case '1':
        return navigate('/table-system');
      case '2':
        return navigate('/table-system/list');
      case '3':
        return navigate('/table-system/grid');
      case '4':
        return navigate('/table-system/timeline');
      case '5':
        return navigate('/table-system/reservations');
      case '6':
        return navigate('/table-system/waitlist');
      case '7':
        return navigate('/table-system/guests');
      case '8':
        return navigate('/table-system/servers');
      default:
        return navigate('/table-system');
    }
  };

  const handleActiveTab = () => {
    switch (location.pathname) {
      case '/table-system':
        return '1';
      case '/table-system/list':
        return '2';
      case '/table-system/grid':
        return '3';
      case '/table-system/timeline':
        return '4';
      case '/table-system/reservations':
        return '5';
      case '/table-system/waitlist':
        return '6';
      case '/table-system/guests':
        return '7';
      case '/table-system/servers':
        return '8';
      // default:
      //   return '1';
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className='app'>
          <main className='content'>
            <Topbar />
            <Spin spinning={isLoading}>
              {!isLoading && (
                <div className='home-container'>
                  <div className='home-menu-bar'>
                    <div className='home-btn-newReservation'>NEW RESERVATIONS</div>
                    <div className='menu-group'>
                      <a className={'home-menu' + (currentTab == 0 ? ' active' : '')} onClick={() => { setCurrentTab(0) }} >FLOOR</a>
                      <a className={'home-menu' + (currentTab == 1 ? ' active' : '')} onClick={() => { setCurrentTab(1) }} >LIST</a>
                      <a className={'home-menu' + (currentTab == 2 ? ' active' : '')} onClick={() => { setCurrentTab(2) }} >GRID</a>
                      <a className={'home-menu' + (currentTab == 3 ? ' active' : '')} onClick={() => { setCurrentTab(3) }} >TIMELINE</a>
                      <a className={'home-menu' + (currentTab == 4 ? ' active' : '')} onClick={() => { setCurrentTab(4) }} >RESERVATIONS</a>
                      <a className={'home-menu' + (currentTab == 5 ? ' active' : '')} onClick={() => { setCurrentTab(5) }} >WAITLIST</a>
                      <a className={'home-menu' + (currentTab == 6 ? ' active' : '')} onClick={() => { setCurrentTab(6) }} >GUESTS</a>
                      <a className={'home-menu' + (currentTab == 7 ? ' active' : '')} onClick={() => { setCurrentTab(7) }} >SERVERS</a>
                    </div>
                    <div className='home-btn-live'>LIVE</div>
                  </div>

                  <div className='home-body' style={{ marginLeft: '240px' }}>
                    <div className='home-closebtn'>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.709956 0.700029C0.522704 0.886861 0.417471 1.14051 0.417471 1.40503C0.417471 1.66955 0.522704 1.9232 0.709956 2.11003L5.58996 7.00003L0.699956 11.89C0.512704 12.0769 0.407471 12.3305 0.407471 12.595C0.407471 12.8595 0.512704 13.1132 0.699956 13.3C1.08996 13.69 1.71996 13.69 2.10996 13.3L6.99996 8.41003L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40996 7.00003L13.3 2.11003C13.69 1.72003 13.69 1.09003 13.3 0.700029C12.91 0.310029 12.28 0.310029 11.89 0.700029L6.99996 5.59003L2.10996 0.700029C1.72996 0.320029 1.08996 0.320029 0.709956 0.700029Z" fill="#EDEDED" />
                      </svg>
                    </div>
                    {currentTab == 0 && <Design />}
                    {currentTab == 1 && <List />}
                    {currentTab == 2 && <Grid />}
                    {currentTab == 3 && <Timeline />}
                    {currentTab == 4 && <Reservations />}
                    {currentTab == 5 && <Waitlist />}
                    {currentTab == 6 && <Guests />}
                    {currentTab == 7 && <Servers />}
                  </div>
                </div>
                //         <Tabs
                //         // type="card"
                //           size='large' 
                //           onTabClick={handleTabClick}
                //           className='user-profile-tabs'
                //           defaultActiveKey={handleActiveTab()}
                //           tabPosition='left'>
                //           <TabPane
                //             tab={
                //               <span className='user-profile-icon'>
                //                 <span style={{
                //                   color: 'white'
                //                 }}>
                //                 <IntlMessages id='tableSys.floor' />
                //                 </span>
                //               </span>
                //             }
                //             key='1'>
                //             <Design />
                //           </TabPane>
                //           <TabPane 
                //             active={true}
                //             tab={
                //               // <span className='user-profile-icon'>
                //                 <span style={{
                //                   color: 'white'
                //                 }}>
                //                   <IntlMessages id='tableSys.list' />
                //                 </span>
                //               // </span>
                //             }
                //             key='2'>
                //             <List />
                //           </TabPane>
                //           <TabPane
                //             active={true}
                //             tab={
                //               <span className='user-profile-icon'>
                //                 <span style={{
                //                   color: 'white'
                //                 }}>
                //                   <IntlMessages id='tableSys.grid' />
                //                 </span>
                //               </span>
                //             }
                //             key='3'>
                //             <Grid />
                //           </TabPane>
                //           <TabPane
                //             active={true}
                //             tab={
                //               <span className='user-profile-icon'>
                //                 <span style={{
                //                   color: 'white'
                //                 }}>
                //                   <IntlMessages id='tableSys.timeline' />
                //                 </span>
                //               </span>
                //             }
                //             key='4'>
                //             <Timeline />
                //           </TabPane>
                //           <TabPane
                //             active={true}
                //             tab={
                //               <span className='user-profile-icon'>
                //                 <span style={{
                //                   color: 'white'
                //                 }}>
                //                   <IntlMessages id='tableSys.reservations' />
                //                 </span>
                //               </span>
                //             }
                //             key='5'>
                //             <Reservations />
                //           </TabPane>
                //           <TabPane
                //             active={true}
                //             tab={
                //               <span className='user-profile-icon'>
                //                 <span style={{
                //                   color: 'white'
                //                 }}>
                //                   <IntlMessages id='tableSys.waitlist' />
                //                 </span>
                //               </span>
                //             }
                //             key='6'>
                //             <Waitlist />
                //           </TabPane>
                //           <TabPane
                //             active={true}
                //             tab={
                //               <span className='user-profile-icon'>
                //                 <span style={{
                //                   color: 'white'
                //                 }}>
                //                   <IntlMessages id='tableSys.guests' />
                //                 </span>
                //               </span>
                //             }
                //             key='7'>
                //             <Guests />
                //           </TabPane>
                //           <TabPane
                //             active={true}
                //             tab={
                //               <span className='user-profile-icon'>
                //                 <span style={{
                //                   color: 'white'
                //                 }}>
                //                   <IntlMessages id='tableSys.servers' />
                //                 </span>
                //               </span>
                //             }
                //             key='8'>
                //             <Servers />
                //           </TabPane>
                //           {/* {can('update account') && (
                //       <TabPane
                //         tab={
                //           <span className='user-profile-icon'>
                //             <FaCog className='icon' />
                //             <span>
                //               <IntlMessages id='userProfile.account' />
                //             </span>
                //           </span>
                //         }
                //         key='3'>
                //         <Account />
                //       </TabPane>
                //     )}

                //     <TabPane
                //       tab={
                //         <span className='user-profile-icon'>
                //           <FaNetworkWired className='icon' />
                //           <span>
                //             <IntlMessages id='common.integrations' />
                //           </span>
                //         </span>
                //       }
                //       key='4'>
                //       <Integrations />
                //     </TabPane> */}
                //           {/* <TabPane
                //   tab={
                //     <span className='user-profile-icon'>
                //       <IoMdNotifications className='icon' />
                //       <span>
                //         <IntlMessages id='userProfile.notification' />
                //       </span>
                //     </span>
                //   }
                //   key='5'>
                //   <Notification notification={accountData.notification} />
                // </TabPane> */}
                //         </Tabs>
              )}
            </Spin>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// const UserProfile = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const can = useHasPermissions();
//   const TabPane = Tabs.TabPane;

//   const {isLoading} = useSelector((state) => state.userInfo);

//   const handleTabClick = (key) => {
//     switch (key) {
//       case '1':
//         return navigate('/profile');
//       case '2':
//         return navigate('/profile/change-password');
//       case '3':
//         return navigate('/account');
//       case '4':
//         return navigate('/integrations');
//       default:
//         return navigate('/profile');
//     }
//   };

//   const handleActiveTab = () => {
//     switch (location.pathname) {
//       case '/profile':
//         return '1';
//       case '/profile/change-password':
//         return '2';
//       case '/account':
//         return '3';
//       case '/integrations':
//         return '4';
//       default:
//         return '1';
//     }
//   };

//   return (
//     <div className='user-profile-container'>
//       <Spin spinning={isLoading}>
//         {!isLoading && (
//           <Tabs
//             onTabClick={handleTabClick}
//             className='user-profile-tabs'
//             defaultActiveKey={handleActiveTab()}
//             tabPosition='left'>
//             <TabPane
//               tab={
//                 <span className='user-profile-icon'>
//                   <HiUser className='icon' />
//                   <span>
//                     <IntlMessages id='userProfile.personalInfo' />
//                   </span>
//                 </span>
//               }
//               key='1'>
//               <PersonalInfo />
//             </TabPane>
//             <TabPane
//               active={true}
//               tab={
//                 <span className='user-profile-icon'>
//                   <AiFillLock className='icon' />
//                   <span>
//                     <IntlMessages id='userProfile.changePassword' />
//                   </span>
//                 </span>
//               }
//               key='2'>
//               <ChangePassword />
//             </TabPane>
//             {can('update account') && (
//               <TabPane
//                 tab={
//                   <span className='user-profile-icon'>
//                     <FaCog className='icon' />
//                     <span>
//                       <IntlMessages id='userProfile.account' />
//                     </span>
//                   </span>
//                 }
//                 key='3'>
//                 <Account />
//               </TabPane>
//             )}

//             <TabPane
//               tab={
//                 <span className='user-profile-icon'>
//                   <FaNetworkWired className='icon' />
//                   <span>
//                     <IntlMessages id='common.integrations' />
//                   </span>
//                 </span>
//               }
//               key='4'>
//               <Integrations />
//             </TabPane>
//             {/* <TabPane
//           tab={
//             <span className='user-profile-icon'>
//               <IoMdNotifications className='icon' />
//               <span>
//                 <IntlMessages id='userProfile.notification' />
//               </span>
//             </span>
//           }
//           key='5'>
//           <Notification notification={accountData.notification} />
//         </TabPane> */}
//           </Tabs>
//         )}
//       </Spin>
//     </div>
//   );
// };

// export default UserProfile;
