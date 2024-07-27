import React from 'react'

const TopUpCard = () => {
    const items = [
        { id: 1, image: "/maybank.png", description: "MayBank Payment" },
        { id: 2, image: "/cimb.png", description: "CIMB Payment" },
        { id: 3, image: "/pbe.png", description: "Public Bank Payment" },
        { id: 4, image: "/tng.png", description: "Ewallet Payment" }
    ];

    return (
        <div className="mt-8 w-full max-h-fit rounded-2xl overflow-hidden border-gray-300" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
            <div className="px-4 py-5">
                {items.map(item => (
                    <div key={item.id} className="flex items-center py-4 border-b border-gray-300">
                        <img src={item.image} alt={`Item ${item.description}`} className="w-20 h-10 mr-4" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopUpCard
