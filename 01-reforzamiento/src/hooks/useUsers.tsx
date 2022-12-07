import {useEffect, useRef, useState} from "react";
import {reqResList, user} from "../interfaces/reqResp.interface";
import {reqResoApi} from "../api/reqResp";


export const useUsers = () => {
    const [users, setUsers] = useState<user[]>();

    const refPage = useRef(1)

    useEffect(() => {
        return () => {
            chargeUsers();
        }
    }, [])

    const chargeUsers = async () => {
        const resp = await reqResoApi.get<reqResList>(`/users`, {
            params: {
                page: refPage.current
            }
        })
        if (resp.data.data.length > 0) {
            setUsers(resp.data.data);
        } else {
            alert('no more pages');
        }
    }

    const nextPage = () => {
        refPage.current++;
        chargeUsers();
    }

    const previousPage = () => {
        if (refPage.current >= 2) {
            refPage.current -= 2;
            chargeUsers();
        }
    }

    return {
        users,
        nextPage,
        previousPage,
        refPage
    }
}