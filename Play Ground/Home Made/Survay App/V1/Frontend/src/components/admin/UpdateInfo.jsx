import React, { useEffect, useState } from 'react'
import { Input, Wrapper, Alert, ButtonSm } from '../common'
import axios from 'axios';
import Cookies from 'js-cookie';
import conf from '../../conf/conf';


function UpdateInfo() {

    const [adminInfo, setAdminInfo] = useState({ name: "", email: "" });
    const [adminUpdateInfo, setAdminUpdateInfo] = useState({ updatedAt: null });
    const [alertAppearence, setAlertAppearence] = useState(false)
    const [alertMessage, setAlertMessage] = useState({ message: "", color: "" })
    const userData = JSON.parse(sessionStorage.getItem("userData"))

    const handleChange = (field, value) => {
        setAdminInfo({ ...adminInfo, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${conf.databaseUrl}admin/update-info`, adminInfo, {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            },
        })
            .then((res) => {
                setAlertAppearence(true)
                setAlertMessage({ color: "green", message: res.data.data + ", Please Reload!!!" })
                setAdminUpdateInfo({ updatedAt: res.data.message.updatedAt })
                sessionStorage.setItem("userData", JSON.stringify(res.data.message))
                setTimeout(() => {
                    setAlertAppearence(false)
                }, 5000);
            })
            .catch((err) => {
                setAlertAppearence(true)
                setAlertMessage({ color: "red", message: err.message })
                setTimeout(() => {
                    setAlertAppearence(false)
                }, 10000);
            })
    }

    return (
        <Wrapper>
            <section className="max-w-6xl mx-auto mt-10 p-4  rounded-lg m-4">
                {alertAppearence ? (
                    <Alert
                        message={`${alertMessage.message}`}
                        color={`${alertMessage.color}`} />
                ) : null}

                <div className='flex justify-around'>
                    <div
                        className=''
                    >
                        <h2
                            className='text-xl pb-2'
                        >Profile:</h2>
                        <div className='p-2 hover:text-primary-600 hover:underline'> <b>Name:</b> {userData?.name}</div>
                        <div className='p-2 hover:text-primary-600 hover:underline'><b>Email:</b> {userData?.email}</div>
                        <div className='p-2 hover:text-primary-600 hover:underline'><b>Last Updated:</b> {userData?.email}</div>
                    </div>
                    <form onSubmit={handleSubmit} className='' >

                        <Input
                            type="text"
                            label="Name"
                            value={adminInfo?.name}
                            onChange={(value) => handleChange('name', value)}
                            className="mb-4 hover:shadow-lg bg-transparent border-x-0 border-t-0 rounded-none "
                        />
                        <Input
                            type="email"
                            label="Email"
                            value={adminInfo?.email}
                            onChange={(value) => handleChange('email', value)}

                            className="mb-4 hover:shadow-lg bg-transparent border-x-0 border-t-0 rounded-none "
                        />
                        <div className="flex justify-end">
                            <ButtonSm
                                text="Update"
                                type='submit'
                                loadingText={false}
                                className='text-white'
                            />
                        </div>
                    </form>
                </div>

            </section>

        </Wrapper>

    )
}

export default UpdateInfo