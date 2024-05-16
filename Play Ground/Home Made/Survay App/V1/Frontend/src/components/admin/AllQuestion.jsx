import { useEffect, useState } from "react";
import conf from "../../conf/conf";
import Cookies from "js-cookie";
import axios from "axios";
import { Alert, Loader } from "../common";
import { useSelector, useDispatch } from "react-redux";
import { question } from "../../store/features/authSlics";


const AllQuestion = () => {
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
    }

    const handleDeleteQuestion = async (questionId) => {
        try {
            await axios.delete(`${conf.databaseUrl}admin/c/${questionId}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            })
                .then((response) => {
                    setAlertAppearence(true)
                    setAlertMessage({ color: "green", message: response.data.message })
                    document.getElementById(questionId).innerHTML = "Please Reload"
                    setTimeout(() => {
                        setAlertAppearence(false)
                    }, 5000);
                })
        } catch (error) {
            setAlertAppearence(true)
            setAlertMessage({ color: "red", message: error.message })
            setTimeout(() => {
                setAlertAppearence(false)
            }, 10000);
        }
    };

    return (
        loading ? <Loader /> :
            < section className="max-w-6xl mx-auto mt-10 p-4  rounded-lg m-4" >
                <div className="mb-4">
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
                    {questions.map((question, index) => (
                        <div key={index} className="border border-primary-300 p-4 rounded-xl hover:shadow-md my-5" >
                            <strong>{index + 1}.{question.question}</strong>
                            <div className="pl-8" >
                                {question.options.map(option => (
                                    <div className="list-item" key={option._id}>{option.optionText}</div>
                                ))}
                            </div>
                            <div className="flex justify-end mt-1" key={`delete_${index}`}>
                                <button
                                    id={question._id}
                                    onClick={(e) => handleDeleteQuestion(e.currentTarget.id)}
                                    className="text-red-500 bg-none bg-white hover:bg-red-50 focus:ring-red-50 dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-200 border border-red-500 p-1 px-2 rounded-lg"
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section >
    );
};

export default AllQuestion;

