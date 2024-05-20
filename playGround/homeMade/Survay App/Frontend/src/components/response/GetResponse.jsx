import React, { useEffect, useState } from 'react';
import axios from 'axios';
import conf from '../../conf/conf';
import Cookies from 'js-cookie';
import { Loader, Alert } from '../common';
import { useSelector, useDispatch } from "react-redux";
import { response } from '../../store/features/authSlics';

function GetResponse() {
    const [loading, setLoading] = useState(false);
    const [btnAppearence, setBtnAppearence] = useState(false);
    const [alertAppearence, setAlertAppearence] = useState(false);
    const [alertMessage, setAlertMessage] = useState({ message: "", color: "" });

    const dispatch = useDispatch();
    const storeResponse = useSelector(state => state.auth?.response);

    useEffect(() => {
        if (storeResponse.length >= 1) {
            return;
        } else {
            const getResponse = async () => {
                try {
                    setLoading(true);
                    const res = await axios.get(`${conf.databaseUrl}response/get-response`, {
                        headers: {
                            Authorization: `Bearer ${Cookies.get('accessToken')}`,
                        },
                    });
                    setLoading(false);
                    setAlertAppearence(true);
                    setAlertMessage({ color: "green", message: res.data.data });
                    dispatch(response(res.data.message));
                    setTimeout(() => {
                        setAlertAppearence(false);
                    }, 5000);
                } catch (error) {
                    setLoading(false);
                    setAlertAppearence(true);
                    setAlertMessage({ color: "red", message: error.message });
                    setTimeout(() => {
                        setAlertAppearence(false);
                    }, 10000);
                }
            };
            getResponse();
        }
    }, [dispatch]);

    const loadResponse = () => {
        setBtnAppearence(true);
    };

    const calculateOptionCounts = (responses) => {
        const optionCounts = {};

        responses.forEach(response => {
            response.question.forEach(q => {
                q.options.forEach(option => {
                    if (!optionCounts[option._id]) {
                        optionCounts[option._id] = { text: option.optionText, count: 0 };
                    }
                    if (q.selectedOption === option._id) {
                        optionCounts[option._id].count += 1;
                    }
                });
            });
        });

        return optionCounts;
    };

    const renderQuestions = (responses, optionCounts) => {
        return responses[0]?.question.map((q, index) => (
            <div key={index} className="question-block mb-6 border-b p-2">
                <strong className=' text-xl'>{index + 1}. {q.question}</strong>
                <ul>
                    {q.options.map((option, idx) => (
                        <li key={idx} className='pl-6 font-sans text-lg'>
                            <span className=''> {option.optionText} </span> -
                            <span className='font-mono'> {optionCounts[option._id]?.count || 0}</span>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    if (loading) {
        return (
            <div className="text-center mx-auto w-100">
                <Loader />
            </div>
        );
    }

    const optionCounts = calculateOptionCounts(storeResponse);

    return (
        <section className="max-w-6xl mx-auto mt-10 p-4 rounded-lg m-4">
            <div>
                {alertAppearence && (
                    <Alert message={alertMessage.message} color={alertMessage.color} />
                )}
            </div>
            {!btnAppearence && (
                <div className="w-100 text-center p-2">
                    <button
                        onClick={loadResponse}
                        className="border border-primary-600 text-primary-600 p-2 rounded-lg hover:bg-primary-600 hover:text-white"
                    >
                        Click to load questions
                    </button>
                </div>
            )}
            {btnAppearence && storeResponse && (
                <div>
                    {renderQuestions(storeResponse, optionCounts)}
                </div>
            )}
        </section>
    );
}

export default GetResponse;
