import { useState } from "react";
import * as userService from '../services/userService';

import { TableRow } from "./Table/TableRow";
import { UserCreateEdit } from "./UserCreateEdit";
import { UserDelete } from "./UserDelete";
import { UserDetails } from "./UserDetails";

// import { Spinner } from "./Table/Spinner";
// import { NoUsers } from "./Table/NoUsers";
// import { NoContent } from "./Table/NoContent";
// import { FetchFailed } from "./Table/FetchFailed";

export const Table = ({
    users,
    onUserCreateSubmit,
    onUserDelete,
    onUserUpdateSubmit,
}) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showDeleteUser, setShowDeleteUser] = useState(null);
    const [showEditUser, setShowEditUser] = useState(null);
    const [showAddUser, setShowAddUser] = useState(false);

    const onInfoButtonClick = async (userId) => {
        const user = await userService.getOne(userId);

        setSelectedUser(user);

        console.log('clicked');
    };

    const onClose = () => {
        setSelectedUser(null);
        setShowAddUser(false);
        setShowDeleteUser(null);
        setShowEditUser(null);
    };

    const onUserAddClick = () => {
        setShowAddUser(true)
    };

    const onUserCreateSubmitHandler = (e) => {
        onUserCreateSubmit(e);
        setShowAddUser(false);
    };

    const onDeleteClick = (userId) => {
        setShowDeleteUser(userId);
    };

    const onDeleteHandler = () => {
        onUserDelete(showDeleteUser);
        onClose();
    };

    const onEditClick = async (userId) => {
        const user = await userService.getOne(userId);

        setShowEditUser(user);
    };


    return (
        <>
            {selectedUser && <UserDetails {...selectedUser} onClose={onClose} />}
            {showAddUser && <UserCreateEdit onClose={onClose} onUserCreateSubmit={onUserCreateSubmitHandler} />}
            {showDeleteUser && <UserDelete onDelete={onDeleteHandler} onClose={onClose} />}
            {showEditUser && <UserCreateEdit user={showEditUser} onClose={onClose} onUserCreateSubmit={onUserUpdateSubmit} />}

            <div className="table-wrapper">

                {/* <!-- Overlap components  --> */}
                {/* <div className="loading-shade"> */}

                {/* <!-- Loading spinner  --> */}
                {/* <Spinner /> */}

                {/* <!-- No users added yet  --> */}
                {/* <NoUsers /> */}

                {/* <!-- No content overlap component  --> */}
                {/* <NoContent /> */}

                {/* <!-- On error overlap component  --> */}
                {/* <FetchFailed /> */}

                {/* </div> */}

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map(u => 
                            <TableRow 
                                key={u._id} 
                                {...u} 
                                onInfoButtonClick={onInfoButtonClick} 
                                onDeleteClick={onDeleteClick} 
                                onEditClick={onEditClick}
                            />
                        )}

                    </tbody>
                </table>
            </div>

            {/* <!-- New user button  --> */}
            <button className="btn-add btn" onClick={onUserAddClick}>Add new user</button>
        </>
    );
};