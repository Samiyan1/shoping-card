import arrow from '../../assets/svg/arrow.svg';
import logo from '../../assets/image/logo.png';
import userProfile from '../../assets/svg/user_account.svg';
import './navbar.scss';

function Navbar() {
    return (
        <>
            <header>
                <img className='logo' src={logo}></img>
                <ul className='flex flex-row justify-center ml-[100px]'>
                    <li className='mx-9'><a href=''>خانه</a></li>
                    <li className='mx-9'><a href=''>فروشگاه</a></li>
                    <li className='mx-9'><a href=''>وبلاگ</a></li>
                    <li className='mx-9'><a href=''>درباره ما</a></li>
                    <li className='mx-9'><a href=''>تماس با ما</a></li>
                </ul>
                <div className='account-manager'>
                    <p>محمد مهدی سمیعیانی</p>
                    <div className='account-menu'>
                        <img className='account-profile-image' src={userProfile} />
                        <a href=''>
                            <img className='account-manager-btn' src={arrow} />
                        </a>
                    </div>
                </div>
            </header>
            <hr className='line' />
        </>
    )
}

export default Navbar