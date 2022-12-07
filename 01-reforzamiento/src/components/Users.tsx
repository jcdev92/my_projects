import {user} from "../interfaces/reqResp.interface";
import {useUsers} from "../hooks/useUsers";

export const Users = () => {

    const {users, previousPage, nextPage, refPage} = useUsers();

    const renderItem = (user: user) => {
        const {id, email, first_name, last_name, avatar} = user;
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt={first_name} style={{width: 35, borderRadius: 100}}/>
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        );
    }


    return (
        <>
            <h3>Users</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users?.map(renderItem)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={nextPage}>Next Page</button>
            &nbsp;
            <button className="btn btn-primary" onClick={previousPage} disabled={refPage.current < 2}>Previous Page
            </button>
        </>
    )
}