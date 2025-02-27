/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import profile_pic from '../assets/profile-pics.svg'


const sidemenuLinks = [
    {
        icon: 'fa-solid fa-id-card',
        title: 'Change Of Names',
        to: '/change-of-name'
    },
    {
        icon: 'fa fa-newspaper-o',
        title: 'Loss Of Documents',
        to: '/loss-of-docs'
    },
    {
        icon: 'fa fa-bullhorn',
        title: 'Public Notice',
        to: '/public-notice'
    },
    {
        icon: 'fa-solid fa-circle-check',
        title: 'Affidavit Online',
        to: '/affidavit'
    },
]
const Dashboard = ({ children }) => {
    return (
        <div className="h-[100vh] w-full flex bg-[#f8f8f8]">
            <aside className="w-full max-w-[260px] h-[100vh] dashboard-sidenav flex flex-col pb-[20px] dashboard-sidenav-scaffold">
                <div className="p-4 flex items-center gap-x-4 bg-[#214162]">
                    <figure>
                        <img src={profile_pic} alt="Profile" className="h-[75px] w-[75px] rounded-[50%]" />
                    </figure>
                    <figcaption>
                        <h1 className="text-white font-bold">Terasa May</h1>
                    </figcaption>
                </div>
                <div className="pt-8 pb-2 px-6 border-primary border-b-2">
                    <header className="text-white text-[22px]">Dashboard</header>
                </div>
                <div className="mb-[50px] pt-[20px] pr-[20px]">
                    {
                        sidemenuLinks.map((sml, i) => (
                            <Link key={i} to={sml.to}>
                                <button className="py-3 px-6 text-white hover:text-primary font-bold cursor-pointer flex items-center gap-x-4 hover:bg-white rounded-r-[10px] mr-[20px] w-full">
                                    <i className={`${sml.icon} text-[20px]`}></i>
                                    <span>{sml.title}</span>
                                </button>
                            </Link>
                        ))
                    }
                </div>
                <div className="mt-auto pr-[20px]">
                    <Link to='/profile'>
                        <button className="py-3 px-6 text-white hover:text-primary font-bold cursor-pointer flex items-center gap-x-4 hover:bg-white rounded-r-[10px] w-full">
                            <span className="material-icons">account_circle</span>
                            <span>Profile</span>
                        </button>
                    </Link>
                    <Link to="/update-profile">
                        <button className="py-3 px-6 text-white hover:text-primary font-bold cursor-pointer flex items-center gap-x-4 hover:bg-white rounded-r-[10px] w-full">
                            <span className="material-icons">settings</span>
                            <span>Profile Settings</span>
                        </button>
                    </Link>
                    <button className="py-3 px-6 text-white hover:text-primary font-bold cursor-pointer flex items-center gap-x-4 hover:bg-white rounded-r-[10px] mr-[20px] w-full">
                        <span className="material-icons">logout</span>
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
            <div className="flex-1 h-[100vh] page-scaffold">
                <nav className="p-4 w-full bg-[#15283C] flex">
                    <ul className="flex gap-x-3 max-w-max ml-auto">
                        <li className="cursor-pointer text-white relative h-[25px] w-[25px]"><i className="fa fa-bell-o text-[20px] p-1 c"></i><span className="notification-badge">2</span></li>
                        <li className="cursor-pointer text-white relative h-[25px] w-[25px]"><i className="fa fa-question-circle text-[20px] p-1"></i></li>
                        <li className="cursor-pointer text-white relative h-[25px] w-[25px]"><i className="fa fa-envelope-o text-[20px] p-1"></i><span className="notification-badge">2</span></li>
                    </ul>
                </nav>
                {children}
            </div>
        </div>
    )
}

export default Dashboard