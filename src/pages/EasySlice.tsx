import React from "react";
import { useAppDispatch, useAppSelector } from "redux/store";
import { decrement, increment, incrementByAmount } from "redux/reducers/user/userSlice";

function EasySlice() {
    const count = useAppSelector((state) => state.userReducer.count);
    const [value, setValue] = React.useState("");

    const dispatch = useAppDispatch();

    const handleInput = () => {
        dispatch(incrementByAmount(Number(value)));
        setValue("");
    };

    return (
        <div>
            <h1>easy Slice</h1>
            <h3>{count}</h3>
            <button type="button" style={{ width: "30px" }} onClick={() => dispatch(decrement())}>
                -
            </button>
            <button type="button" style={{ width: "30px" }} onClick={() => dispatch(increment())}>
                +
            </button>
            <div>
                <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="button" onClick={handleInput}>
                    Добавить
                </button>
            </div>
        </div>
    );
}

export default EasySlice;
