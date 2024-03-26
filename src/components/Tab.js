import { useEffect, useState } from "react";

function Tab({ children, activeTab, setActiveTab }){
    return(
        <div>
            <nav>
                {children.map((tab, index) => (
                    <button 
                    onClick={() => setActiveTab(index)}
                        className={activeTab === index ? 'bg-green-400' : 'bg-gray-200'}
                        key={index}
                    >
                        {tab.props.title}
                    </button>
                ))}
            </nav>
            {children[activeTab]}
        </div>
    )
}

Tab.Panel = function({ children, title }) {
    return (
        <div>
            {children}
        </div>
    )
}

export default Tab