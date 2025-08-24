import React,{useState} from 'react'

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  // --- STATE ---
  // `activeTabIndex` stores the index of the currently active tab.
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // --- JSX ---
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`py-2 px-4 font-medium text-sm transition-colors duration-300 ${
              activeTabIndex === index
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white dark:bg-gray-800/20 rounded-b-lg">
        {/* We render the content of the active tab based on the `activeTabIndex` state */}
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;