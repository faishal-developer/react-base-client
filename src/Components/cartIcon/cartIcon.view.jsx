import React, { useState } from 'react';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import { useTranslation } from 'react-i18next';
import './cartIcon.scss'
import CustomOffcanvas from '../Offcanvas/OffCanvas';
import Cart from '../cartProduct/cart.view';
import BP from '../../scss/CommonClass';

const CartIcon = ({productNum,p,...props}) => {
    const { t } = useTranslation();
    const [show,setShow] = useState(false);

    return (
        <span >
            <span className='cart' onClick={() => setShow(true)}>
                <FontAwesome icon={iconList.cart} />
                <span className='num'>{productNum}</span>
                <span className='text'>{p}</span>
            </span>
            <CustomOffcanvas show={show} placement="end" handleClose={()=>setShow(false)}>
                <div className={BP.container}>
                    <span onClick={() => setShow(false)}>{<FontAwesome icon={iconList.cros} />}</span>
                    <p>{"Cart"}</p>
                </div> 
                <Cart/>
            </CustomOffcanvas>
        </span>
    );
};

export default CartIcon;