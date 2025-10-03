"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { addPayment, getUserPayments } from "@/actions/useraction";
import { v4 as uuidv4 } from 'uuid';

const Payment = () => {
    const { data: session } = useSession();
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("")
    const [message, setMessage] = useState("I love your content!")
    const [amount, setAmount] = useState(10)

    // Fetch payments when component mounts
    useEffect(() => {

        async function fetchPayments() {
            const result = await getUserPayments(session.user.username);
            let pays = JSON.parse(result.payments)
            if(result.success){
                setPayments([...pays]);
            }
            setLoading(false);
        }
        if(session){
            fetchPayments();
        }
        
    }, [session, payments.length]);

    // Handle new payment
    async function handlePayment(user, amount, message) {
        // const { from_user, amount, paymentId, message, username } = data
        if (!amount || amount <= 0 || user.trim() === "" || message.trim() === "") {
            alert("Please enter a valid Details");
        }else{
            const paymentData = {
                from_user: user || "Anonymous",
                amount: parseInt(amount),
                paymentId: uuidv4(),
                message: message,
                username: session.user.username
            };
    
            const result = await addPayment(paymentData);
            setPayments([...payments, paymentData]);
    
            if (result.success) {
                // Update state to show new payment
                console.log(result.payment);
                setPayments([result.payment, ...payments]);
                setUser("");
                setAmount(10);
                setMessage("I love your content!");
                alert("Payment successful!");
            } else {
                alert(result.error);
            }
        }
    }



if (loading) return <div>Loading...</div>;

return (
    <div className='flex flex-col gap-3 mx-5 text-white justify-center items-center my-10 lg:flex-row'>
        <div className='w-[80vw] h-[400px] overflow-auto bg-slate-900 rounded flex flex-col items-center justify-center gap-3 p-5 lg:h[300px] xl:h-[300px]'>
            <h2 className='font-bold italic text-2xl xl:text-4xl'>Supporters</h2>
            <ul className='flex flex-col gap-2 pl-6 justify-center items-center'>
                {payments.length !== 0 ? payments.map((payment, index) => {
                    return(
                        <li key={index} className='flex justify-center gap-1'><Image
                            className='object-contain'
                            src="/user.svg"
                            alt="User"
                            height={15}
                            width={20}
                            priority
                        /><span className='font-bold italic xl:text-xl'> {payment.from_user} </span>doanted <span className='font-bold italic'> {payment.amount}</span> saying &quot;{payment.message}&quot;</li>
                    )
                }) : <div>No supporters yet. Be the first one to support!</div>}
            </ul>
        </div>
        <div className='w-[80vw] h-[400px] bg-slate-900 flex flex-col rounded gap-3 items-center p-5 lg:h-[400px] xl:h-[300px]'>
            <h2 className='font-bold italic text-2xl mb-5'>Support</h2>
            <div className='flex flex-col text-center xl:flex xl:flex-row xl:w-full gap-3'>
                <input value={user} onChange={(e) => setUser(e.target.value)} className='bg-slate-800 w-full rounded-lg border border-black py-3 px-12' placeholder='Enter Name' type="text" id='donater' name='donater' />
                <input value={amount} onChange={(e) => setAmount(e.target.value)} className='bg-slate-800 w-full rounded-lg border border-black py-3 px-12' placeholder='Enter amount' type="text" id='amount' name='amount' />
            </div>
            <div className='flex mx-2 gap-3 w-full justify-center'>
                <input value={message} onChange={(e) => setMessage(e.target.value)} className='bg-slate-800 rounded-lg border border-black py-3 px-12 xl:w-full' placeholder='Enter message' type="text" id='message' name="message" />
            </div>
            <div className="choose-amount-to-pay">
                <div className='flex gap-3 flex-wrap justify-center'>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 xl:mt-5 xl:px-10 xl:py-3 xl:text-xl">$5</button>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 xl:mt-5 xl:px-10 xl:py-3 xl:text-xl">$10</button>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 xl:mt-5 xl:px-10 xl:py-3 xl:text-xl">$20</button>
                </div>
            </div>
            <button type="button" onClick={() => handlePayment(user, amount, message)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-10 py-2.5 text-center me-2 mb-2 xl:mt-5 xl:text-2xl xl:py-2.5 xl:px-15">Pay</button>
        </div>
    </div>
)
}

export default Payment
