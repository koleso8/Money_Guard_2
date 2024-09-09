import s from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <div className={s.loader}></div>;<div className={s.backdrop}></div>
    </>
  );
};

export default Loader;
