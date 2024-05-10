import React, { useEffect, useState } from "react";
import conf from "../../conf/conf";
import Cookies from "js-cookie";
import axios from "axios";
import { Alert, ButtonSm, Loader } from "../common";
import { useSelector, useDispatch } from "react-redux";
import { question } from "../../store/features/authSlics";

const SurveyQuestion = () => {
    const [loading, setLoading] = useState(false)
    const [alertAppearence, setAlertAppearence] = useState(false)
    const [btnAppearence, setBtnAppearence] = useState(false)
    const [alertMessage, setAlertMessage] = useState({ message: "", color: "" })
    const [questions, setQuestions] = useState([])

    const dispatch = useDispatch()
    const reduxQuestions = useSelector(state => state.auth?.questions)

    useEffect(() => {
        const getQuestions = async () => {
            if (reduxQuestions.length >= 1) {
                return
            }
            else {
                try {
                    setLoading(true);
                    await axios.get(`${conf.databaseUrl}admin/get-question`, {
                        headers: {
                            Authorization: `Bearer ${Cookies.get('accessToken')}`,
                        },
                    })
                        .then((response) => {
                            console.log("loaded");
                            console.log("response =", response.data);
                            setLoading(false)
                            setAlertAppearence(true)
                            setAlertMessage({ color: "green", message: response.data.data })
                            dispatch(question(response.data.message))
                            // setQuestions(response.data.message)
                            setTimeout(() => {
                                setAlertAppearence(false)
                            }, 5000);
                        })
                } catch (error) {
                    setLoading(false)
                    setAlertAppearence(true)
                    setAlertMessage({ color: "red", message: error.message })
                    setTimeout(() => {
                        setAlertAppearence(false)
                    }, 10000);
                }
            }
        }
        getQuestions()
    }, [dispatch])

    const loadQustions = () => {
        setQuestions(reduxQuestions)
        setBtnAppearence(true)
        console.log("questions = ", reduxQuestions);
    }

    return (
        loading ? <Loader /> :
            < section className="max-w-6xl mx-auto mt-10 p-4  rounded-lg m-4" >
                <div>
                    {
                        alertAppearence ? (
                            <Alert
                                message={`${alertMessage.message}`}
                                color={`${alertMessage.color}`
                                } />
                        ) : null}
                </div >
                {btnAppearence ? null :
                    <div className="w-100 text-center p-2">
                        <button
                            onClick={loadQustions}
                            className="border border-primary-600 text-primary-600 p-2 rounded-lg hover:bg-primary-600 hover:text-white"
                        >Click to load questions</button>
                    </div>
                }

                <div>
                    {questions?.map(((question, index) => (
                        <>
                            <div
                                key={index}
                                className="border border-primary-300 p-4 rounded-xl hover:shadow-md mb-6">
                                <strong key={question.question._id}>{index + 1}.{question.question}</strong>
                                <div
                                    className="pl-8 mt-2"
                                    key={"1" + index} >
                                    {question.options.map((option) => (
                                        <>
                                            <input
                                                type="checkbox"
                                                id={`${option._id}`}
                                                value={`${option.optionText}`}
                                                className=""
                                            />
                                            <label
                                                htmlFor={`${option._id}`}
                                                className="pl-4"
                                            >{option.optionText}</label>
                                            <br className="mb-2"/>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </>
                    )))}
                    {btnAppearence &&
                        <div className="">
                            <ButtonSm
                                text="Submit"
                                loadingText={false}
                                className="text-white mt-1"
                            />
                        </div>
                    }
                </div>

            </section >
    );
};

export default SurveyQuestion;
