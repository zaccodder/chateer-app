import { Authentication, SidebarHome } from '../components';

const Home = () => {
  return (
    <div className='bg-base-300 h-screen lg:grid lg:grid-cols-2 '>
      <div className='bg-base-100 flex items-center justify-center flex-col px-2 lg:px-16 py-12 lg:py-0 h-full'>
        <Authentication />
      </div>
      <div className='lg:flex lg:items-center hidden'>
        <SidebarHome />
      </div>
    </div>
  );
};

// const Home = ({ setUser }: AppProps) => {
//   return (
//     <div
//       className='px-2 lg:px-16 flex  lg:justify-between flex-col lg:flex-row justfiy-center py-12 lg:items-center bg-base-200'
//       style={{ minHeight: 'calc(100vh - 64px)', paddingTop: '12px' }}
//     >
//       <Authentication setUser={setUser} />
//       <SidebarHome />
//     </div>
//   );
// };

export default Home;
