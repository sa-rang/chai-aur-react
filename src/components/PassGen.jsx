import React, { useState, useCallback, useEffect, useRef } from 'react'

function PassGen() {

    const [passLength, setPassLength] = useState(8);
    const [isNum, setIsNum] = useState(false);
    const [isSpecialChar, setIsSpecialChar] = useState(false);
    const [password, setPassword] = useState("");
    const passRef = useRef(null);

    const copyToClipboard = useCallback(() => {
        passRef.current?.select()
        passRef.current?.setSelectionRange(0, passLength)
        window.navigator.clipboard.writeText(password)


    }, [password])

    const passGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (isNum) {
            str += "0123456789"
        }
        if (isSpecialChar) {
            str += "!@#$%"
        }

        for (let i = 1; i <= passLength; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);

    }, [passLength, isNum, isSpecialChar, setPassword])

    useEffect(() => {
        passGenerator()
    }, [passLength, isNum, isSpecialChar, passGenerator])


    return (
        <div className='bg-gray-700 px-12 py-8 flex justify-center items-center flex-col rounded-lg '>
            <h3 className='text-xl text-white'>Password Generator</h3>
            <div className='mt-3 flex rounded-lg shadow w-full'>
                <input
                    type="text"
                    ref={passRef}
                    value={password}
                    className='outline-none w-full py-1 px-3 rounded-s'
                    placeholder='Password'
                    readOnly />
                <button className='bg-blue-700 text-white px-3 py-1 shrink-0 rounded-e' onClick={copyToClipboard}>Copy</button>
            </div>
            <div className="flex text-sm gap-x-2 mt-3">
                <div className="flex items-center gap-x-1 text-white">
                    <input type="range" min={4} max={18} value={passLength} className='cursor-pointer' onChange={(e) => setPassLength(e.target.value)} />
                    <label>Length: {passLength}</label>
                </div>
                <div className="flex items-center gap-x-1 text-white">
                    <input type="checkbox" defaultChecked={isNum} onChange={() => setIsNum((prev) => !prev)} />
                    <label>Number</label>
                </div>
                <div className="flex items-center gap-x-1 text-white">
                    <input type="checkbox" defaultChecked={isSpecialChar} onChange={() => setIsSpecialChar((prev) => !prev)} />
                    <label>Specialchar</label>
                </div>
            </div>
        </div>
    )
}

export default PassGen