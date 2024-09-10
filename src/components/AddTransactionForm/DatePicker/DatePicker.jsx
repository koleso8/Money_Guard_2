import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./DatePicker.module.css";

const MyDatePicker = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const today = new Date();

  return (
    <div className={s.datePickerContainer}>
      <DatePicker
        {...field}
        selected={field.value ? new Date(field.value) : null}
        onChange={(date) =>
          helpers.setValue(date ? date.toISOString().split("T")[0] : "")
        }
        dateFormat="dd.MM.yyyy"
        className={s.picker}
        maxDate={today}
        calendarStartDay={1}
      />
      <div className={s.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_60_133)">
            <path
              d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
              fill="#734AEF"
            />
          </g>
          <defs>
            <clipPath id="clip0_60_133">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {meta.touched && meta.error ? undefined : null}
    </div>
  );
};

export default MyDatePicker;
