import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import moment from 'moment'
import TransactionTable from './TransactionTable';
import { useNavigate } from 'react-router-dom';
import { DEPLOYED_API, VERCEL_API } from '../../Config';
const AccountsDetails = () => {

    const [bg, setBg] = useState('')
    const [profit, setProfit] = useState(0)
    const [expenseAmount, setExpenseAmount] = useState(0)
    const [expenseFrom, setExpenseFrom] = useState('')
    const [incomeAmount, setIncomeAmount] = useState(0)
    const [allIncome, setAllIncome] = useState([])
    const [allExpense, setAllExpense] = useState([])
    const [incomeFrom, setIncomeFrom] = useState('')
    const [reload, setreload] = useState(false)
    const [monthly, setMonthly] = useState(true)
    const [date, setDate] = useState('')
    const [monthlyData, setMonthlyData] = useState([])
    const [dynamicName, setDynamicName] = ('')
    const local = 'http://localhost:5000'
    const production = 'https://magic-backend-nqdgjcyf9-munna-05.vercel.app/'
    const navigate = useNavigate()
    useEffect(() => {
        const admin = localStorage.getItem('admin')
        if (!admin) {
            navigate('/magicAdmin')
        }
    }, [])


    useEffect(() => {

        // axios.get('http://localhost:5000/admin/get_income').then((res) => {
        axios.get(`${DEPLOYED_API}/admin/get_income`).then((res) => {
            setAllIncome(res.data)

        }).then(() => {

            axios.get(`${DEPLOYED_API}/admin/get_expense`).then((res) => {
                setAllExpense(res.data)
                // console.table(allIncome, allExpense)

            })
        })


        if (profit > 0) {

            setBg('bg-green-500')
        } else if (profit === 0) {

            setBg('bg-slate-400')
        } else {
            setBg('bg-red-400')

        }

    }, [reload, incomeAmount, expenseAmount])

    useEffect(() => {
        setProfit(total_income - total_expense)

    }, [allIncome, allExpense])
    // const total_income = allIncome.map(())
    let total_income = 0;

    allIncome.forEach(element => {
        total_income += element.amount;
    });


    // console.log(total_income);

    let total_expense = 0;

    allExpense.forEach(element => {
        total_expense += element.amount;
    });

    // console.log(total_expense);



    const Expense_Data = {
        text: expenseFrom,
        amount: expenseAmount,
        date: moment(Date.now()).format('ll')
    }
    const Income_Data = {
        text: incomeFrom,
        amount: incomeAmount,
        date: moment(Date.now()).format('ll')



    }
    const submit_income = () => {
        try {
            axios.post(`${DEPLOYED_API}/admin/add_income`, Income_Data).then((res) => {

                toast.success('Income Updated', { autoClose: 1000 })
                setTimeout(() => {
                    window.location.reload()

                }, 1200);
                setreload(!reload)
                if (res) setIncomeAmount(0)
                if (res) setIncomeFrom('')

            })
        } catch (error) {
            console.log(error)
        }


    }
    const submit_expense = () => {
        try {
            axios.post(`${DEPLOYED_API}/admin/add_expense`, Expense_Data).then((res) => {

                toast.success('Expense Updated', { autoClose: 100 })
                setTimeout(() => {
                    window.location.reload()

                }, 1200);
               if(res) setExpenseAmount(0)
               if(res) setExpenseFrom('')
                setreload(!reload)

            })
        } catch (error) {
            console.log(error)
        }



       
    }

    const getDates_income = () => {

        const selected_Date = { date: moment(date).format('ll').toString() }
        try {
            axios.post(`${DEPLOYED_API}/admin/income_date`, selected_Date).then((response) => {
                setMonthlyData(response.data)
                // setreload(!reload)
                setDynamicName("Income")

            })

        } catch (error) {
            console.log(error)
        }


    }
    const getDates_expense = () => {
        const name = 'Expense'
        const selected_Date = { date: moment(date).format('ll').toString() }
        axios.post(`${DEPLOYED_API}/admin/expense_date`, selected_Date).then((response) => {
            setMonthlyData(response.data)
            // setreload(!reload)



        })


    }
    return (
        <div className=' mt-8'>
            <ToastContainer />

            <div className='mb-10'><button className='
            bg-blue-600 px-4 py-2 border-4 rounded-lg border-white text-white shadow shadow-md shadow-slate-600 hover:shadow-slate-800
            hover:bg-blue-700
            ' onClick={() => setMonthly(!monthly)}>{monthly ? 'View Daily Statement' : "View Overall Statement"}</button></div>

            <div>{monthly ?

                <>

                    <div className='flex justify-center'>
                        <div className='bg-slate-900 transition duration-500 hover:bg-black rounded-lg shadow mx-8 shadow shadow-md border-8 border-white '>

                            <div className='w-3/4 mx-auto mt-16 flex justify-center ' >
                                <div className='mx-5  p-1 shadow shadow-md rounded-lg shadow-slate-900 bg-green-500 	 w-60'>
                                    <p className='my-3 font-bold  bg-slate-100 w-fit mx-auto px-4 z-1 rounded-md text-slate-700' >Income </p>
                                    <p className='my-3 font-bold mx-8 text-slate-100 ' >{total_income}/- </p>
                                </div>
                                <div className='mx-5  p-1 shadow shadow-md rounded-lg shadow-slate-900 bg-red-700 w-60'>
                                    <p className='my-3 font-bold  bg-slate-100 w-fit mx-auto px-4 rounded-md text-slate-700' >Expense </p>
                                    <p className='my-3 font-bold mx-8 text-slate-100' >{total_expense}/- </p>
                                </div>
                            </div>
                            <div className={`mt-5 ${bg} rounded-lg  w-2/4 py-2 mx-auto`}>
                                <span className='my-3 font-bold  mx-8 text-slate-100'><span className='mx-4'>Balance</span>  {profit}/-</span>
                            </div>
                            <div className='mt-5 mb-16 w-3/4 mx-auto flex justify-center'>

                                <div className='mt-5'>
                                    {/* <div className='fle'><label className='' htmlFor="">Enter Expenses</label><br /></div> */}
                                    <input value={incomeFrom} onChange={(e) => setIncomeFrom(e.target.value)} type="text" className='px-2 border-r border-slate-400 rounded-l shadow shadow-lg text-sm ' placeholder='Income From' style={{ height: '3vh' }} name="" id="" />
                                    <input value={incomeAmount === 0 ? "" : incomeAmount} onChange={(e) => setIncomeAmount(e.target.value)} type="number" className='px-2 shadow shadow-lg text-sm ' placeholder='Income Amount' style={{ height: '3vh' }} name="" id="" />
                                    <button type='submit' onClick={submit_income} className='bg-slate-500 px-2 text-white rounded-r shadow shadow-lg text-sm' style={{ height: '3vh' }}>Submit</button> <br />

                                    <input value={expenseFrom} onChange={(e) => setExpenseFrom(e.target.value)} type="text" className='px-2 border-r border-slate-400  mt-2 border-slate-5 rounded-l shadow shadow-lg text-sm ' placeholder='Expense From' style={{ height: '3vh' }} name="" id="" />
                                    <input value={expenseAmount === 0 ? '' : expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} type="number" className='px-2 shadow shadow-lg text-sm ' placeholder='Expense Amount' style={{ height: '3vh' }} name="" id="" />
                                    <button type='submit' onClick={submit_expense} className='bg-slate-500 px-2 text-white rounded-r shadow shadow-lg text-sm' style={{ height: '3vh' }}>Submit</button> <br />


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' md:flex justify-center mx-auto mt-10 mb-16'>
                        <div className='mx-1'><TransactionTable text='text-green-300' name='Income' category='Amount' Date='Date' details={allIncome} /></div>
                        <div className='mx-1'><TransactionTable text='text-red-400' name='Expense' category='Amount' Date='Date' details={allExpense} /></div>
                    </div>



                </> : <>

                    {/* TABLE  */}



                    <div className='mt-8 bg-blue-100 w-fit mx-auto flex justify-center p-8 rounded-lg border-white shadow shadow-slate-400 border-4'>
                        <input className='w-80 p-1  rounded-md border-4 border-white px-3' onChange={(e) => setDate(e.target.value)} type="date" />
                        <button onClick={getDates_income} className='px-3 mx-3 bg-green-500 text-sm hover:bg-slate-900 text-white py-1.5 rounded-md' type='submit'>Get All Incomes</button>
                        <button onClick={getDates_expense} className='px-3 bg-red-600 text-sm hover:bg-slate-900 text-white py-1.5 rounded-md' type='submit'>Get All Expenses</button>



                    </div>
                    <div className=' md:flex justify-center mx-auto mt-10 mb-16'>
                        <div className='mx-1'><TransactionTable text='text-green-300' monthly={!monthly} name='' category='Amount' Date='Date' details={monthlyData} /></div>

                    </div>


                </>
            }

            </div>




        </div>
    )
}

export default AccountsDetails