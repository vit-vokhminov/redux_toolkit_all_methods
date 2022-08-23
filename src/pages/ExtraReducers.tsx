import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "redux/store";
import { fetchUsers } from "redux/reducers/user/userAction";

function Slice() {
    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            {users.map((user, i)=>(
                <div className="user" key={i}>
                    <div>name: <b>{user.name}</b></div>
                    <div>sity: <b><i>{user.address.city}</i></b></div>
                    <div>phone: <b><i>{user.phone}</i></b></div>
                </div>
            ))}
        </div>
    );
}

export default Slice;
