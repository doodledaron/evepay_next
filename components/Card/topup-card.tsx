import React from 'react'

const TopUpCard = () => {
    const amounts = [1, 5, 10, 20, 50, 100, 150, 200];

    return (
        <div>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-md">
                <div className="grid grid-rows-1 grid-flow-col gap-4 px-6 py-4">
                    <div className="col-span-8 font-bold text-base text-gray">
                        <img src="/pbe.png" alt="TNG" width={150} height={100} />
                    </div>
                    <div className="col-span-2 font-bold text-base text-gray">

                    </div>
                </div>
            </div>

            <div className="max-w-sm mt-4 rounded-2xl overflow-hidden shadow-md">
                <p className="font-bold p-1">Amount</p>
                <div className="flex justify-center">
                    <input
                        type="number"
                        placeholder="50"
                        className="outline-none font-bold text-center text-xl"
                        style={{ width: '5ch' }}
                        maxLength={5}
                    />
                </div>

                <div className="grid grid-cols-4 gap-4 m-2 mt-4">
                    {amounts.map((amount) => (
                        <button
                            key={amount}
                            className=" font-bold py-2 px-4 rounded bg-slate-50  text-black hover:bg-lg-light-cyan"
                        >
                            {amount}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopUpCard
