import { useEffect } from "react";
import { loginThunk } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const DevTempLoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const creds = {
      email: "lia@qw.er",
      password: "1231231",
    };

    if (!isLoggedIn) dispatch(loginThunk(creds));
  }, [dispatch]);

  return <div>devTempLoginPage</div>;
};
