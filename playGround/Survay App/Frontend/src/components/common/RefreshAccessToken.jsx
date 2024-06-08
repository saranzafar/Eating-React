// this is implemented and you can use it according to your needs 
//i am not using it because i have no need

import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import conf from '../../conf/conf'

function RefreshAccessToken() {
    const sessionData = JSON.parse(sessionStorage.getItem("userData"))
    const refreshToken = Cookies.get("refreshToken")
    const [data, setData] = useState("")

    const checkToken = async () => {
        if (refreshToken && sessionData) {
            try {
                await axios.post(`${conf.databaseUrl}users/refresh-token`, { refreshToken }, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                    },
                })
                    .then((res) => {
                        setData(res.data.data)
                        Cookies.set("accessToken", res.data.message.accessToken)
                    })
            } catch (error) {
                console.log(error.response);
            }
        }
        else {
            setData("Inside else")
        }
    }


    return (
        <div>
            <button
                onClick={checkToken}
            >
                Click me
            </button>
            Data = {data}
        </div>
    )
}

export default RefreshAccessToken