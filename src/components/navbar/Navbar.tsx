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
                    <li className='mx-9'><a className='text-[#aaa] hover:text-black' href=''>خانه</a></li>
                    <li className='mx-9'><a className='text-[#aaa] hover:text-black' href=''>فروشگاه</a></li>
                    <li className='mx-9'><a className='text-[#aaa] hover:text-black' href=''>وبلاگ</a></li>
                    <li className='mx-9'><a className='text-[#aaa] hover:text-black' href=''>درباره ما</a></li>
                    <li className='mx-9'><a className='text-[#aaa] hover:text-black' href=''>تماس با ما</a></li>
                </ul>
                <div className='account-manager'>
                    <p>محمد مهدی سمیعیانی</p>
                    <div className='account-menu'>
                        <img className='account-profile-image' src={userProfile} />
                        <button className='account-manager-btn' >
                            <img src={arrow} />
                        </button>
                    </div>
                </div>
            </header>
            <hr className='line' />
        </>
    )
}

export default Navbar