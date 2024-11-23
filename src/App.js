import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Artist from './pages/Artist/Artist';
import ArtistProfile from './pages/artistProfile/ArtistProfile';
import ArtistForum from './pages/artistForm/ArtistForm';
import ArtistHome from './pages/artist-dashboard/artist-home/ArtistHome';
import ViewProfile from './pages/artist-dashboard/view-Profile/ViewProfile';
import ArtistDJobs from './pages/artist-dashboard/dashboard-jobs/ArtistDJobs';
import JobOffer from './pages/artist-dashboard/jobOffer/JobOffer';
import ClientHome from './pages/clientDashboard/ClientHome/ClientHome';
import ConfirmedJobs from './pages/clientDashboard/ConfirmedJobs/ConfirmedJobs';
import CreateJob from './pages/clientDashboard/CreateJob/CreateJob';
import ConfirmedBooking from './pages/clientDashboard/confirmedBookings/ConfirmedBooking';
import BookingRequest from './pages/clientDashboard/bookingRequest/BookingRequest';
import Navbar2 from './componnents/Navbar/Navbar2/Navbar2';
import Navbar from './componnents/Navbar/Navbar1/Navbar';
import Footer from './componnents/Footer/Footer';
import Contact from './pages/contact/Contact';





function App() {


  const location = useLocation();

    // Define routes where Navbar2 should appear
    const navbar2Routes = [
      '/dashboard-jobs',
      '/job-offer',
      '/artist-home',
      '/view-profile',
      '/client-home',
      '/client-jobs',
      '/create-job',
      '/confirm-booking',
      '/booking-request',
    ];
  
    // Determine which navbar to render
    const showNavbar2 = navbar2Routes.some((route) => location.pathname.startsWith(route));
  
  return (
    <>
      {showNavbar2 ? <Navbar2 /> : <Navbar />}
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/artist" element={<Artist/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/artist-profile" element={<ArtistProfile/>}/>
    <Route path="/artist-form" element={<ArtistForum/>}/>
    <Route path="/artist-home" element={<ArtistHome/>}/>
    <Route path="/view-profile" element={<ViewProfile/>}/>
    <Route path="/dashboard-jobs" element={<ArtistDJobs/>}/>
    <Route path="/job-offer" element={<JobOffer/>}/>
    <Route path="/client-home" element={<ClientHome/>}/>
    <Route path="/client-jobs" element={<ConfirmedJobs/>}/>
    <Route path="/create-job" element={<CreateJob/>}/>
    <Route path="/confirm-booking" element={<ConfirmedBooking/>}/>
    <Route path="/booking-request" element={<BookingRequest/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
