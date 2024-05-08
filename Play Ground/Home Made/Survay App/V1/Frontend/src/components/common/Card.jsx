import { useEffect } from 'react';
import conf from '../../conf/conf';
import axios from 'axios';
import Cookies from 'js-cookie';

const Card = () => {

    useEffect(() => {
        // const accessToken = Cookies.get("accessToken")
        // console.log("accessToken = ", accessToken);

        const getQuestions = async () => {
            try {
                const response = await axios.get(`${conf.databaseUrl}response/get-response`, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                    },
                })
                console.log(response);
            } catch (error) {
                console.log("Error while fetching data: ", error);
            }
        }
        getQuestions()
    }, [])

    return (
        <div
            className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-200 ease-in-out border border-primary-400 hover:border-primary-600">
            <div className="p-8">
                <div className="font-bold text-xl mb-4">1. Question Title</div>
                <div className="mb-6">
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4 text-lg">
                    <label className="flex items-center space-x-2 text-primary-600">
                        <input type="checkbox" className=" form-checkbox rounded-full text-primary-600" />
                        <span>Option 1</span>
                    </label>
                    <label className="flex items-center space-x-2 text-primary-600">
                        <input type="checkbox" className="  form-checkbox rounded-full text-primary-600" />
                        <span>Option 2</span>
                    </label>
                    <label className="flex items-center space-x-2 text-primary-600">
                        <input type="checkbox" className="form-checkbox rounded-full text-primary-600" />
                        <span>Option 3</span>
                    </label>
                    <label className="flex items-center space-x-2 text-primary-600">
                        <input type="checkbox" className="form-checkbox rounded-full text-primary-600" />
                        <span>Option 4</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Card;
