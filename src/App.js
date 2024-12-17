
// import { Route, Routes, useLocation } from 'react-router-dom';
// import './App.css';
// import Home from './pages/home/Home';
// import Services from './pages/Services/Services';
// import About from './pages/About/About';
// import Artist from './pages/Artist/Artist';
// import ArtistProfile from './pages/artistProfile/ArtistProfile';
// import ArtistForum from './pages/artistForm/ArtistForm';
// import ArtistHome from './pages/artist-dashboard/artist-home/ArtistHome';
// import ViewProfile from './pages/artist-dashboard/view-Profile/ViewProfile';
// import ArtistDJobs from './pages/artist-dashboard/dashboard-jobs/ArtistDJobs';
// import JobOffer from './pages/artist-dashboard/jobOffer/JobOffer';
// import ClientHome from './pages/clientDashboard/ClientHome/ClientHome';
// import ConfirmedJobs from './pages/clientDashboard/ConfirmedJobs/ConfirmedJobs';
// import CreateJob from './pages/clientDashboard/CreateJob/CreateJob';
// import ConfirmedBooking from './pages/clientDashboard/confirmedBookings/ConfirmedBooking';
// import BookingRequest from './pages/clientDashboard/bookingRequest/BookingRequest';
// import Navbar2 from './componnents/Navbar/Navbar2/Navbar2';
// import Navbar from './componnents/Navbar/Navbar1/Navbar';
// import Footer from './componnents/Footer/Footer';
// import Contact from './pages/contact/Contact';
// import Login from './pages/Login/Login';
// import Register from './pages/Login/Register';
// import PrivateRoute from './PrivateRoute';
// import { ToastContainer } from 'react-toastify';
// import PrivateRouteClient from './PrivateRouteClient';
// import Navbar3 from './componnents/Navbar/Navbar3/Navbar3';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {

//     const [role, setRole] = useState("");

//     useEffect(() => {
//         const checkAuth = async () => {
//           try {
//             const response = await axios.get('http://localhost:8080/api/v1/auth/check-role', {
//               withCredentials: true
//             });
//             if(response){
//              console.log(response.data.userRole)
//             setRole(response.data.userRole);
//         }
//           } catch (error) {
//             console.log(error);
//           }
//         };
        
//         checkAuth();
//       }, []);
//     const location = useLocation();

//     // Define routes where Navbar2 should appear
//     const navbar2Routes = [
//         '/dashboard-jobs',
//         '/job-offer',
//         '/artist-dashboard',
//         '/view-profile',
//         '/client-home',
//         '/client-jobs',
//         '/create-job',
//         '/confirm-booking',
//         '/booking-request',
//     ];

//     // Determine which navbar to render
//     const showNavbar2 = navbar2Routes.some((route) => location.pathname.startsWith(route));

//     return (
//         <>
//             {/* Navbar rendering */}
//             {showNavbar2 ? <Navbar2 /> : <Navbar3 />}
//             {/* {showNavbar2 ? <Navbar /> : <Navbar3 />} */}
//             <ToastContainer/>
//             <Routes>
//                 {/* Public Routes */}
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/services" element={<Services />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/artist" element={<Artist />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/artist-profile" element={<ArtistProfile />} />
//                 <Route path="/artist-form" element={<ArtistForum />} />

//                 {/* Protected Routes */}
//                 <Route element={<PrivateRoute />}>
//                     <Route path="/artist-dashboard" element={<ArtistHome />} />
//                     <Route path="/view-profile" element={<ViewProfile />} />
//                     <Route path="/dashboard-jobs" element={<ArtistDJobs />} />
//                     <Route path="/job-offer/:id" element={<JobOffer />} />
//                     {/* <Route path="/client-home" element={<ClientHome />} />
//                     <Route path="/client-jobs" element={<ConfirmedJobs />} />
//                     <Route path="/create-job" element={<CreateJob />} />
//                     <Route path="/confirm-booking/:id" element={<ConfirmedBooking />} />
//                     <Route path="/booking-request/:id" element={<BookingRequest />} /> */}
//                 </Route>
//                 {/* Protected Routes for client */}
//                 <Route element={<PrivateRouteClient />}>
//                     {/* <Route path="/artist-dashboard" element={<ArtistHome />} />
//                     <Route path="/view-profile" element={<ViewProfile />} />
//                     <Route path="/dashboard-jobs" element={<ArtistDJobs />} />
//                     <Route path="/job-offer/:id" element={<JobOffer />} /> */}
//                     <Route path="/client-home" element={<ClientHome />} />
//                     <Route path="/client-jobs" element={<ConfirmedJobs />} />
//                     <Route path="/create-job" element={<CreateJob />} />
//                     <Route path="/confirm-booking/:id" element={<ConfirmedBooking />} />
//                     <Route path="/booking-request/:id" element={<BookingRequest />} />
//                 </Route>

//                 {/* Fallback Route */}
//                 <Route path="*" element={<Home />} />
//             </Routes>

//             <Footer />
//         </>
//     );
// }

// export default App;


import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
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
import Navbar3 from './componnents/Navbar/Navbar3/Navbar3';
import Footer from './componnents/Footer/Footer';
import Contact from './pages/contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [role, setRole] = useState("");
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/auth/check-role', {
                    withCredentials: true
                });
                if (response) {
                    console.log(response.data.userRole);
                    setRole(response.data.userRole);
                }
            } catch (error) {
                console.log(error);
            }
        };
        
        checkAuth();
    }, []);

    // Define routes for different roles
    const artistRoutes = [
        '/artist-dashboard',
        '/view-profile',
        '/dashboard-jobs',
        '/job-offer',
    ];

    const clientRoutes = [
        '/client-home',
        '/client-jobs',
        '/create-job',
        '/confirm-booking',
        '/booking-request',
    ];

    // Function to determine which navbar to show
    const getNavbar = () => {
        const currentPath = location.pathname;
        
        // For public routes
        if (!artistRoutes.some(route => currentPath.startsWith(route)) && 
            !clientRoutes.some(route => currentPath.startsWith(route))) {
            return <Navbar />;
        }
        
        // For artist dashboard routes
        if (role === "Artist" && artistRoutes.some(route => currentPath.startsWith(route))) {
            return <Navbar2 />;
        }
        
        // For client dashboard routes
        if (role === "Client" && clientRoutes.some(route => currentPath.startsWith(route))) {
            return <Navbar3 />;
        }
        
        // Default navbar for other cases
        return <Navbar />;
    };

    // Protected route wrapper components
    const ArtistRoute = ({ children }) => {
        return role === "Artist" ? children : <Navigate to="/login" />;
    };

    const ClientRoute = ({ children }) => {
        return role === "Client" ? children : <Navigate to="/login" />;
    };

    return (
        <>
            {getNavbar()}
            <ToastContainer/>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/artist-profile" element={<ArtistProfile />} />
                <Route path="/artist-form" element={<ArtistForum />} />

                {/* Artist Protected Routes */}
                <Route path="/artist-dashboard" element={
                    <ArtistRoute>
                        <ArtistHome />
                    </ArtistRoute>
                } />
                <Route path="/view-profile" element={
                    <ArtistRoute>
                        <ViewProfile />
                    </ArtistRoute>
                } />
                <Route path="/dashboard-jobs" element={
                    <ArtistRoute>
                        <ArtistDJobs />
                    </ArtistRoute>
                } />
                <Route path="/job-offer/:id" element={
                    <ArtistRoute>
                        <JobOffer />
                    </ArtistRoute>
                } />

                {/* Client Protected Routes */}
                <Route path="/client-home" element={
                    <ClientRoute>
                        <ClientHome />
                    </ClientRoute>
                } />
                <Route path="/client-jobs" element={
                    <ClientRoute>
                        <ConfirmedJobs />
                    </ClientRoute>
                } />
                <Route path="/create-job" element={
                    <ClientRoute>
                        <CreateJob />
                    </ClientRoute>
                } />
                <Route path="/confirm-booking/:id" element={
                    <ClientRoute>
                        <ConfirmedBooking />
                    </ClientRoute>
                } />
                <Route path="/booking-request/:id" element={
                    <ClientRoute>
                        <BookingRequest />
                    </ClientRoute>
                } />

                {/* Fallback Route */}
                <Route path="*" element={<Home />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;