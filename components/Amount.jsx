import React from 'react'

const Amount = () => {
    return (
        <div className='w-[135px]'>
            <div>
                <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                <div className="flex items-center rounded border border-gray-200">
                    <button type="button" className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75">
                        &minus;
                    </button>

                    <input
                        type="number"
                        id="Quantity"
                        value="1"
                        className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />

                    <button type="button" className="h-10  leading-10 text-gray-600 transition hover:opacity-75">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Amount