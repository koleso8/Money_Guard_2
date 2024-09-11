import clsx from 'clsx';

import s from './Loader.module.css';
import a from '../components/Layout/Layout.module.css';

const Loader = () => {
  return (
    <>
      <div className={s.loader}></div>
      <div className={s.backdrop}></div>
      <div className={clsx(a.gradient, a.gradientOne)}></div>
      <div className={clsx(a.gradient, a.gradientTwo)}></div>
      <div className={clsx(a.gradient, a.gradientThree)}></div>
      <div className={clsx(a.gradient, a.gradientFour)}></div>
    </>
  );
};

export default Loader;
