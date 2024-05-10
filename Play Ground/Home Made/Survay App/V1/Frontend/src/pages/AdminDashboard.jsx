import React, { useState } from 'react'
import { Input, Wrapper, ButtonSm, Alert } from '../components/common'
import conf from '../conf/conf';
import axios from 'axios';
import Cookies from 'js-cookie';
import { AllQuestion } from '../components/admin';

function AdminDashboard() {
    const [question, setQuestion] = useState({
        question: "",
        options: [
            { optionText: "" },
            { optionText: "" },
            { optionText: "" },
            { optionText: "" },
        ]
    });
    const [buttonAppearence, setButtonAppearence] = useState(false)
    const [alertAppearence, setAlertAppearence] = useState(false)
    const [alertMessage, setAlertMessage] = useState({ message: "", color: "" })
    const [activeTab, setActiveTab] = useState('questions');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleQuestionChange = (field, value) => {
        if (field === "question") {
            setQuestion({ ...question, [field]: value });
        } else if (field.startsWith("option")) {
            const optionIndex = parseInt(field.slice(-1)) - 1; // Extracting the option index from the field name
            setQuestion(prevState => ({
                ...prevState,
                options: prevState.options.map((option, index) => {
                    if (index === optionIndex) {
                        return { ...option, [`optionText`]: value };
                    }
                    return option;
                })
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonAppearence(true)
        await axios.post(`${conf.databaseUrl}admin/add-question`, question, {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            },
        })
            .then((res) => {
                setAlertAppearence(true)
                setAlertMessage({ color: "black", message: res.data.data })
                setButtonAppearence(false)
                setTimeout(() => {
                    setAlertAppearence(false)
                }, 5000);
            })
            .catch((err) => {
                setAlertAppearence(true)
                setAlertMessage({ color: "red", message: err.message })
                setButtonAppearence(false)
                setTimeout(() => {
                    setAlertAppearence(false)
                }, 10000);
            })
    }

    return (
        <Wrapper>
            <main className='max-w-6xl mx-auto'>

                <section className="max-w-6xl mx-auto mt-10 p-4  rounded-lg m-4">
                    <h2 className="text-center text-4xl mb-4">Add Question</h2>
                    {alertAppearence ? (
                        <Alert
                            message={`${alertMessage.message}`}
                            color={`${alertMessage.color}`} />
                    ) : null}
                    <form onSubmit={handleSubmit} >
                        <Input
                            type="text"
                            label="Question"
                            value={question.question}
                            onChange={(value) => handleQuestionChange("question", value)}
                            className="mb-4  hover:shadow-lg"
                        />

                        {question.options.map((option, index) => (
                            <Input
                                key={`option-${index}`}
                                type="text"
                                label={`Option ${index + 1}`}
                                value={option[`option${index + 1}`]}
                                onChange={(value) => handleQuestionChange(`option${index + 1}`, value)}
                                className="mb-2 hover:shadow-lg "
                            />
                        ))}
                        <div className="flex justify-end">
                            <ButtonSm
                                text="Add Question"
                                type='submit'
                                loadingText={buttonAppearence}
                                className='text-white'
                            />
                        </div>
                    </form>
                </section>

                <section>
                    <div className="mx-auto mt-10">
                        <div className="flex">
                            <button
                                className={`flex-1 py-2 text-sm font-medium ${activeTab === 'questions' ? 'text-primary-600 border border-primary-400 border-b-0 rounded-tl-lg rounded-tr-lg' : 'text-black '} focus:outline-none`}
                                onClick={() => handleTabClick('questions')}
                            >
                                Questions
                            </button>
                            <button
                                className={`flex-1 py-2 text-sm font-medium ${activeTab === 'responses' ? 'text-primary-600 border border-primary-400 border-b-0  rounded-tl-lg rounded-tr-lg ' : 'text-black '} focus:outline-none`}
                                onClick={() => handleTabClick('responses')}
                            >
                                Responses
                            </button>
                        </div>
                        <div className="p-4 border border-primary-400 mb-8 rounded-b-lg">
                            {activeTab === 'questions' && (
                                <>
                                    <AllQuestion />
                                </>
                            )}
                            {activeTab === 'responses' && (
                                <>
                                    <div className="mb-4">
                                        <p className="text-lg font-semibold">Response 1</p>
                                        <p className="text-gray-800">This is a response to question 1.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </Wrapper>
    )
}

export default AdminDashboard