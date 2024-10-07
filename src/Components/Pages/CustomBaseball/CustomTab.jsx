import React from 'react';

const CustomTab = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted mb-4">
            {tabs.map((tab) => (
                <a
                    key={tab.id}
                    role="tab"
                    className={`tab ${activeTab === tab.id ? 'tab-active text-primary [--tab-bg:yellow] [--tab-border-color:orange]' : ''}`}
                    onClick={() => onTabClick(tab.id)}
                >
                  <div className='flex gap-4 items-center'>  {tab.label}{tab.icon}</div>
                </a>
            ))}
        </div>
    );
};

export default CustomTab;
