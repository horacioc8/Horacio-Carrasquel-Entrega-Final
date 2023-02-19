import {MdOutlineShoppingCart} from 'react-icons/md';
import './styles.scss';

function CartWidget() {
  return (
    <div className='cart'>
        <MdOutlineShoppingCart size="30px"  />
        <span className="badge">10</span>
        
    </div>
  );
}

export default CartWidget;