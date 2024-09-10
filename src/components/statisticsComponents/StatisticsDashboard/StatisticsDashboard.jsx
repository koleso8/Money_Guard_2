import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { selectStatisticsPeriod } from '../../../redux/transactions/selector';
import { setStatisticsPeriod } from '../../../redux/transactions/slice';
import s from './StatisticsDashboard.module.css';

export const StatisticsDashboard = () => {
  const period = useSelector(selectStatisticsPeriod);

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  function generateYearsList(amount = 6) {
    let year = new Date().getFullYear();
    const yearsList = [];

    for (let i = 0; i < amount; i++) {
      yearsList.push({ value: year, label: year });
      year--;
    }
    return yearsList;
  }

  const years = generateYearsList();

  const customStyles = {
    option: (defaultStyles, state) =>
      // console.log("defaultStyles: ", defaultStyles),
      // console.log("state: ", state),
      ({
        // You can log the defaultStyles and state for inspection
        // You don't need to spread the defaultStyles

        ...defaultStyles,
        fontSize: '16px',
        padding: '4px 20px',
        color: state.isSelected ? '#FF868D' : '#fff',
        backgroundColor: state.isSelected ? '#fff2' : '#5a438c00',
      }),

    control: defaultStyles => ({
      ...defaultStyles,
      // Notice how these are all CSS properties
      backgroundColor: '#4A56E21A',
      border: '1px solid #FFFFFF99',
      borderRadius: '8px',
      padding: '12px 20px',
      boxShadow: 'none',
      display: 'flex',
      width: '100%',
      fontSize: '16px',
    }),

    // indicatorsContainer: (defaultStyles) => ({
    //   ...defaultStyles,
    // }),
    menuList: defaultStyles => ({
      ...defaultStyles,
      height: '157px',
      borderRadius: '8px',
      '::-webkit-scrollbar': {
        width: '0',
        height: '0',
      },
      background: 'linear-gradient(180deg, #513d85, #4b39a4)',
    }),
  };

  const dispatch = useDispatch();

  function handleMonthChange(data) {
    dispatch(setStatisticsPeriod({ month: data.value }));
  }

  function handleYearChange(data) {
    dispatch(setStatisticsPeriod({ year: data.value }));
  }

  return (
    <div className={s.selectors}>
      <div className={s.selectorWrapper}>
        <Select
          options={months}
          // styles={customStyles}
          className={s.customSelect}
          classNamePrefix="react-select"
          unstyled
          defaultValue={months[period.month - 1]}
          onChange={handleMonthChange}
          placeholder="Month..."
        />
      </div>
      <div className={s.selectorWrapper}>
        <Select
          options={years}
          // styles={customStyles}
          className={s.customSelect}
          classNamePrefix="react-select"
          unstyled
          defaultValue={years[0]}
          onChange={handleYearChange}
          placeholder="Year..."
        />
      </div>
    </div>
  );
};
