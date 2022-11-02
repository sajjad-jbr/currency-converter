import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [currencyOptions, setCurrencyOptions] = useState([
        {title: "USD", ratio: 1},
        {title: "Rials", ratio: (1 / 280000)},
        {title: "Toman", ratio: (1 / 28000)},
        {title: "EUR", ratio: 1.01},
    ]);
    const [from, setFrom] = useState(1);
    const [fromAmount, setFromAmount] = useState(0);
    const [to, setTo] = useState(1);
    const [toAmount, setToAmount] = useState(1);

    useEffect(() => {
        if (from == to)
            setToAmount(fromAmount)
        else {
            setToAmount(from * fromAmount / to)
        }

    }, [from, fromAmount, to]);


    return (
        <div className='counter-comtainer'>
            <div className='text-box'>
                <div className='inputarea'>
                    <div className='navbar-container'>
                        <h2>CURRENCY CONVERTER</h2>
                    </div>

                    <div className='from'>
                        <input type={'number'} placeholder='enter amount' value={fromAmount} onChange={(e) => {
                            setFromAmount(e.target.value)
                        }}/>
                        <select value={from} onChange={(e) => {
                            setFrom(e.target.value)
                        }}>
                            {currencyOptions.map(item => (
                                <option value={item.ratio} key={item.title + Math.random()}>{item.title}</option>
                            ))}
                        </select>
                    </div>

                    <h1>=</h1>

                    <div className='to'>
                        <input type={'number'} disabled placeholder='enter amount' value={toAmount}/>
                        <select value={to} onChange={(e) => {
                            setTo(e.target.value)
                        }}>
                            {currencyOptions.map(item => (
                                <option value={item.ratio} key={item.title + Math.random()}>{item.title}</option>
                            ))}
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
