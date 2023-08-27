import './navigation.scss';
import basket from '../../assets/svg/basket.svg'
function Navigation() {
    return (
        <nav className="stroke">
            <ul>
                <li><a href="#">مراقبت مو</a></li>
                <li><a href="#">مراقبت بدن</a></li>
                <li><a href="#">آرایشی</a></li>
                <li><a href="#">پرفروش ترین</a></li>
                <li><a href="#">جدیدترین</a></li>
            </ul>
            <button><img className='basket-btn' src={basket}></img></button>
        </nav>
        )
}

export default Navigation