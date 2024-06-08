import React, { useEffect, useState } from "react";
import conf from "../../conf/conf";
import Cookies from "js-cookie";
import axios from "axios";
import { Alert, ButtonSm, Loader } from "../common";
import { useSelector, useDispatch } from "react-redux";
import { question } from "../../store/features/authSlics";

const SetResponse = () => {
    const [loading, setLoading] = useState(false);
    const [btnAppearence, setBtnAppearence] = useState(false);
    const [alertAppearence, setAlertAppearence] = useState(false);
    const [alertMessage, setAlertMessage] = useState({ message: "", color: "" });
    const [questions, setQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [formError, setFormError] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);

    const dispatch = useDispatch();
    const reduxQuestions = useSelector(state => state.auth?.questions);

    useEffect(() => {
        const getQuestions = async () => {
            if (reduxQuestions.length >= 1) {
                return;
            } else {
                try {
                    setLoading(true);
                    const response = await axios.get(`${conf.databaseUrl}admin/get-question`, {
                        headers: {
                            Authorization: `Bearer ${Cookies.get('accessToken')}`,
                        },
                    });
                    setLoading(false);
                    setAlertAppearence(true);
                    setAlertMessage({ color: "green", message: response.data.data });
                    dispatch(question(response.data.message));
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
            }
        };
        getQuestions();
    }, [dispatch]);

    const loadQuestions = () => {
        setQuestions(reduxQuestions);
        setBtnAppearence(true);
    };

    const handleOptionSelect = (questionIndex, optionId) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [questionIndex]: optionId,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setBtnLoading(false)
        // Check if all questions have been answered
        const unansweredQuestions = questions.filter((_, index) => !selectedOptions[index]);
        if (unansweredQuestions.length > 0) {
            setFormError("Please answer all questions");
            setBtnLoading(false)
            return;
        }
        setFormError("");

        const surveyData = questions.map((question, index) => ({
            question: question.question,
            options: question.options,
            selectedOption: selectedOptions[index],
        }));

        try {
            await axios.post(`${conf.databaseUrl}response/submit-response`, { surveyData }, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('accessToken')}`,
                },
            }).then((response) => {
                setQuestions([]);
                setBtnLoading(false)
                setAlertAppearence(true)
                if (response.data.statuscode == 403) {
                    setAlertMessage({ color: "red", message: response.data.data });
                }
                else {
                    setAlertMessage({ color: "green", message: response.data.data });
                }
                setTimeout(() => {
                    setAlertAppearence(false);
                }, 10000);
            })
        } catch (error) {
            setBtnLoading(false)
            setAlertAppearence(true)
            setAlertMessage({ color: "red", message: error.message });
            setTimeout(() => {
                setAlertAppearence(false);
            }, 10000);
        }
    };

    return (
        loading ? (
            <div className="text-center mx-auto w-100">
                <Loader />
            </div>
        ) : (
            <section className="max-w-6xl mx-auto mt-10 p-4 rounded-lg m-4">
                <h2 className="text-3xl font-bold text-center mb-8">Fill This Survey</h2>
                <div>
                    {alertAppearence && (
                        <Alert message={alertMessage.message} color={alertMessage.color} />
                    )}
                </div>
                {!btnAppearence && (
                    <div className="w-100 text-center p-2">
                        <button
                            onClick={loadQuestions}
                            className="border border-primary-600 text-primary-600 p-2 rounded-lg hover:bg-primary-600 hover:text-white"
                        >
                            Click to load questions
                        </button>
                    </div>
                )}

                <form onSubmit={handleFormSubmit} className="mt-6">
                    {questions.map((question, index) => (
                        <div
                            key={index + 1}
                            className="border border-primary-300 p-4 rounded-xl hover:shadow-md mb-6 select-none"
                        >
                            <strong>{index + 1}.{question.question}</strong>
                            <div className="pl-8 mt-2">
                                {question.options.map(option => (
                                    <React.Fragment key={option._id}>
                                        <input
                                            type="radio"
                                            id={option._id}
                                            value={option.optionText}
                                            className="text-primary-600 focus:outline-primary-600 rounded p-2"
                                            name={index}
                                            onChange={() => handleOptionSelect(index, option._id)}
                                            required
                                        />
                                        <label
                                            htmlFor={option._id}
                                            className="pl-4 text-lg hover:underline hover:text-primary-700"
                                        >
                                            {option.optionText}
                                        </label>
                                        <br />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}

                    {formError && <div className="text-red-500">{formError}</div>}

                    {btnAppearence && questions.length > 0 && (
                        <div className="">
                            <ButtonSm text="Submit" loadingText={btnLoading} className="text-white mt-1" />
                        </div>
                    )}
                    {btnAppearence && questions.length < 1 && (
                        <div className="text-xl text-center">No Questions</div>
                    )}
                </form>
            </section>
        )
    );
};

export default SetResponse;
