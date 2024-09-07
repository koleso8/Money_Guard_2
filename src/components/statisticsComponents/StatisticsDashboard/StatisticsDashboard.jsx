import s from './StatisticsDashboard.module.css';
import Select from 'react-select';

export const StatisticsDashboard = () => {
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const years = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
    { value: 2025, label: 2025 },
    { value: 2026, label: 2026 },
    { value: 2027, label: 2027 },
    { value: 2028, label: 2028 },
    { value: 2029, label: 2029 },
    { value: 2030, label: 2030 },
  ];

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

  return (
    <div className={s.selectors}>
      <div className={s.selectorWrapper}>
        <Select options={months} styles={customStyles} unstyled />
      </div>
      <div className={s.selectorWrapper}>
        <Select options={years} styles={customStyles} unstyled />
      </div>
    </div>
  );
};
