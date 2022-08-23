import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectTodosByFilter } from "redux/reducers/todo/selectors";

const TotalInfo = () => {
    const todos = useSelector(selectTodosByFilter);
    const count = todos.length;

    return (
        <Flex justifyContent={"center"} borderTop={"2px"} mt="5">
            <b>Total todos: {count}</b>
        </Flex>
    );
};

export default TotalInfo;
