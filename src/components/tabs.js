import React, { useState } from "react";
import CardList from "./cardlist.js";
import ImageList from "./imagelist.js";


const TabComponent = ({ tabs, data }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 pt-32 justify-around items-baseline">
      <h1 className="text-white text-md lg:text-lg font-extralight font-regular mb-8">Naši članovi</h1>
      <div className="flex flex-col w-full lg:w-2/3">
      <div className="flex justify-end space-x-4 border-b border-cyan mb-20">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`px-4 py-2 relative ${
              activeTab === tab.key
                ? "text-pink1 font-light uppercase underline"
                : "text-white uppercase"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === "all" && (
        <>
            <CardList data={data.upravniOdbor} />
            <ImageList data={data.temeljniClanovi} />
        </>
            
      )}
      {activeTab === "upravniOdbor" && <CardList data={data.upravniOdbor} />}
      {activeTab === "temeljniClanovi" && <ImageList data={data.temeljniClanovi} />}
      </div>
      
      
    </div>
  );
};

export default TabComponent;
