import React, { useState } from 'react'

const RadioBtn = ({ name, id, label, data }) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (e) => {
        console.log(e.target.id)
    }

    return (
        <label className='flex items-center cursor-pointer select-none text-dark mb-3'>
            <div className='relative'>
                <input
                    type='radio'
                    data={data}
                    onChange={handleCheckboxChange}
                    className='w-5 mr-3 h-5 mt-1'
                    id={id}
                    name={name}
                />
                {/* <div className='box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-stroke dark:border-dark-3'>
                    <span
                        className={`h-[10px] w-[10px] rounded-full ${isChecked ? 'bg-primary' : 'bg-transparent'
                            }`}
                    >
                        {' '}
                    </span>
                </div> */}
            </div>
            {label}
        </label>
    )
}

export default RadioBtn
