import { Link } from 'react-router-dom';
import HeaderStyled from './HeaderStyled';
import Button from '../Button/Button';

import shope from '../../assets/img/shop.png';

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <div>
          <h2>FOODies</h2>
        </div>
        <div>
          <nav>
            <Link to={'/'} style={{marginRight: '50px'}}>Home</Link>
            <Link to={'/'} style={{marginRight: '50px'}}>Hot Item</Link>
            <Link to={'/cardapio'} style={{marginRight: '50px'}}>Menus</Link>
            <Link to={'/'} style={{marginRight: '50px'}}>Contact Us</Link>
            <Button label='join'/>
            <Link to={'/'}><img src={shope} style={{ width: '25px', marginLeft: '30px' }}/></Link>
          </nav>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
