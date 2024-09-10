import { styled } from '@mui/material/styles';
import s from './AddTransactionForm.module.css';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Income from './Income/Income';
import Expense from './Expense/Expense';
import clsx from 'clsx';

const CustomSwitch = styled(Switch)(() => ({
  marginLeft: 20,
  marginRight: 20,
  width: 60,
  height: 40,
  padding: 7,
  transition: 'all 0.1s ease',
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(0px)',

    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(26px)',

      '& .MuiSwitch-thumb': {
        transition: 'all 0.1s ease',
        backgroundColor: '#ff868d',
        top: 3,

        '&::before': {
          content: "'-'",
          fontSize: '28px',
          left: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',

          backgroundSize: '18px 18px', // Розмір іконки для правого положення
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
      },
    },
    '+.MuiSwitch-track': {
      transition: 'all 0.1s ease',
      opacity: 1,
      backgroundColor: '#FFF',
    },
  },
  '& .MuiSwitch-thumb': {
    transition: 'all 0.1s ease',
    top: 3,
    backgroundColor: '#FFB627',
    width: 32,
    height: 32,
    position: 'relative',
    boxShadow:
      '0 1px 3px 0 rgba(255, 199, 39, 0.5) ,0 -1px 3px 0 rgba(255, 199, 39, 0.5)',
    '&::before': {
      content: "'+'",
      fontSize: '28px',
      fontWeight: 100,
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: '18px 18px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#FFF',
    borderRadius: '20px',
  },
  '&.Mui-checked .MuiSwitch-track': {
    backgroundColor: '#FFF',
  },
}));

const AddTransactionForm = ({ closeModal }) => {
  const [transactionType, setTransactionType] = useState('+');

  const handleChange = event => {
    setTransactionType(event.target.checked ? '-' : '+');
  };

  return (
    <div className={clsx(s.addTransactionForm)}>
      <h2>Add transaction</h2>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
      >
        <span className={clsx(transactionType === '+' && s.income, s.opt)}>
          Income
        </span>
        <CustomSwitch
          checked={transactionType === '-'}
          onChange={handleChange}
        />
        <span className={clsx(transactionType === '-' && s.expense, s.opt)}>
          Expense
        </span>
      </div>
      {transactionType === '+' && <Income closeModal={closeModal} />}
      {transactionType === '-' && <Expense closeModal={closeModal} />}
    </div>
  );
};

export default AddTransactionForm;
