import s from "./StatisticsDashboard.module.css";
import Select from "react-select";

export const StatisticsDashboard = () => {
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
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
  ];

  const customStyles = {
    option: (defaultStyles, state) => (
      console.log("defaultStyles: ", defaultStyles),
      console.log("state: ", state),
      {
        // You can log the defaultStyles and state for inspection
        // You don't need to spread the defaultStyles

        ...defaultStyles,
        fontSize: "16px",
        padding: "2px 20px",
        color: state.isSelected ? "#FF868D" : "#fff",
        backgroundColor: state.isSelected ? "#755cab" : "#5a438c",
      }
    ),

    control: (defaultStyles) => ({
      ...defaultStyles,
      // Notice how these are all CSS properties
      backgroundColor: "#4A56E21A",
      border: "1px solid #FFFFFF99",
      borderRadius: "8px",
      padding: "12px 20px",
      boxShadow: "none",
      display: "flex",
      width: "100%",
      fontSize: "16px",
    }),

    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
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
