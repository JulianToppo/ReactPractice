import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import MealsSummary from '../Meals/MealsSummary';
import CartProvider from '../../store/CartProvider';
import CartContext from '../../store/cart-contexts';

const Header = (props) => {
 
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton toggleCartDisplayFunction={props.toggleCartDisplayFunction}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      <MealsSummary />
    </Fragment>
  );
};

export default Header;