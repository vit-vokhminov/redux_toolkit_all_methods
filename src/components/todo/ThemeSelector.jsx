import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "redux/reducers/todo/themeSelector";
import useTheme from "hooks/useTheme";

const ThemeSelector = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    useTheme();

    return (
        <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="theme" mb="0">
                Theme: {theme}
            </FormLabel>
            <Switch id="theme" onChange={() => dispatch(changeTheme())} />
        </FormControl>
    );
};

export default ThemeSelector;
