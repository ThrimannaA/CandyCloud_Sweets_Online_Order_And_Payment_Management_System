import React, { useState, useRef } from 'react';
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Button, Text, Input } from "../../components";
import Footer from "../../components/Footer";
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import usePurchase from "hooks/usePurchase";
import Header from "../../components/adminNavbar";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ email: "", subject: "", message: "" });
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isSubjectValid, setIsSubjectValid] = useState(false);
    const [emailRequirementsMet, setEmailRequirementsMet] = useState(false);

    const validateEmail = (value) => {
        if (!value) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required" }));
            setIsEmailValid(false);
            setEmailRequirementsMet(false);
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Email address is invalid" }));
            setIsEmailValid(false);
            setEmailRequirementsMet(false);
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
            setIsEmailValid(true);
            setEmailRequirementsMet(true);
        }
    };

    const validateSubject = (value) => {
        const regex = /\d/; // Regular expression to check for numbers
        if (!value) {
            setErrors((prevErrors) => ({ ...prevErrors, subject: "Subject is required" }));
            setIsSubjectValid(false);
        } else if (regex.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, subject: "Subject should not contain numbers" }));
            setIsSubjectValid(false);
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, subject: "" }));
            setIsSubjectValid(true);
        }
    };

    const validateMessage = () => {
        if (!message) {
            setErrors((prevErrors) => ({ ...prevErrors, message: "Message is required" }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        validateEmail(email);
        validateSubject(subject);
        validateMessage();

        if (isEmailValid && isSubjectValid && !errors.message) {
            emailjs
                .sendForm('service_xt1uahr', 'template_xn5vj3p', form.current, {
                    publicKey: 'EH_GzmctJcJ30GF1e',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        form.current.reset();  // Reset the form after successful submission
                        setEmail("");
                        setSubject("");
                        setMessage("");
                        setErrors({ email: "", subject: "", message: "" });
                        setIsEmailValid(false);
                        setIsSubjectValid(false);
                        setEmailRequirementsMet(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <div style={{ height: "100vh", overflowY: "auto" }}>
            <div className="flex flex-col w-full gap-[5px] sm:gap-[5px] bg-gradient1">

                <Header />

                <div className="w-full px-10 space-y-6 card shrink-0 w-full max-w-xl shadow-2xl bg-base-300 px-4 py-7 mx-auto mt-10">
                    <section className='bg-white dark:bg-gray-900'>
                        <div className='py-8 lg:py-16 mx-auto max-w-screen-md'>
                            <div className="flex justify-center items-center">
                                <h4 className="font-semibold" style={{ color: '#852D6B', fontSize: '37px', whiteSpace: 'nowrap', marginBottom: '40px' }}>Contact with Client</h4>
                            </div>

                            <form ref={form} action='#' className='space-y-8' onSubmit={sendEmail}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className='flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                    >
                                        <span className="block text-sm font-bold text-gray-700 mb-2">Your Email</span>
                                    </label>
                                    <div className="border rounded-md p-3 bg-gradient3 rounded-[16px]" style={{ marginBottom: '40px' }}>
                                        <input
                                            type="email"
                                            id="email"
                                            name='user_email'
                                            placeholder='username@gmail.com'
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                validateEmail(e.target.value);
                                            }}
                                            required
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-800 italic">{errors.email}</p>}
                                    {!emailRequirementsMet && email && <p className="text-gray-600 italic ">Email should be in the format: example@domain.com</p>}

                                    <label
                                        htmlFor='subject'
                                        className='flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                    >
                                        <span className="block text-sm font-bold text-gray-700 mb-2">Subject</span>
                                    </label>

                                    <div className="border rounded-md p-3 bg-gradient3 rounded-[16px]" style={{ marginBottom: '40px' }}>
                                        <input
                                            type='text'
                                            id='subject'
                                            name='subject'
                                            placeholder='Let us know how can help'
                                            value={subject}
                                            onChange={(e) => {
                                                setSubject(e.target.value);
                                                validateSubject(e.target.value);
                                            }}
                                            disabled={!isEmailValid}
                                            required
                                        />
                                    </div>
                                    {errors.subject && <p className="text-red-800 italic" mt-2>{errors.subject}</p>}

                                    <label
                                        htmlFor='message'
                                        className='flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                    >
                                        <span className="block text-sm font-bold text-gray-700 mb-2">Reason for the rejection</span>
                                    </label>

                                    <div className="border rounded-md p-2 bg-gradient3 rounded-[16px]">
                                        <textarea
                                            id="message"
                                            rows="4"
                                            name='message'
                                            placeholder='Leave a comment...'
                                            className="block p-1.5 text-red-700 font-bold italic w-full border-transparent outline-none"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onBlur={validateMessage}
                                            disabled={!isEmailValid || !isSubjectValid}
                                            required
                                        ></textarea>
                                    </div>
                                    {errors.message && <p className="text-red-800 italic">{errors.message}</p>}

                                    <div>
                                        <button type="submit"
                                            className="mb-3" style={{ fontSize: '20px', marginTop: '30px', backgroundColor: '#852D6B', color: 'white', padding: '18px 18px', borderRadius: '15px', border: 'none', cursor: 'pointer', fontWeight: 'bold', whiteSpace: 'nowrap' }}
                                            onMouseOver={(e) => e.target.style.backgroundColor = '#FF6289'}
                                            onMouseOut={(e) => e.target.style.backgroundColor = '#852D6B'}>
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>

                <Footer className="pl-[65px] pr-14 py-[65px] md:p-5 border border-solid white_A700_00_gray_600_00_border bg-gradient2" />
            </div>
        </div>
    );
}
