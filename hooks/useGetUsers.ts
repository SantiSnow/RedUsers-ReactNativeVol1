import { useState } from "react";

const useGetUsers = () => {
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        let users;
        await fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then((res) => { users = res; });
        return users;
    };

    return { loading, setLoading, getUsers };
};

export default useGetUsers;