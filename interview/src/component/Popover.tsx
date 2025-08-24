import React,{ useState,useEffect} from "react";

interface ModalProps {
  message: string;
  title: string;
}

const Popover: React.FC<ModalProps> = ({ title, message }) => {
  // --- STATE ---
  // `isOpen` tracks the visibility of the modal.
  // `useState<boolean>(false)` initializes the state as a boolean with a default value of `false`.
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // --- EFFECTS ---
  // `useEffect` runs side effects. This one runs once after the component mounts.
  useEffect(() => {
    // `setTimeout` is a Web API that executes a function after a specified delay.
    const timer = setTimeout(() => {
      setIsOpen(true); // After 10 seconds, set `isOpen` to true to show the modal.
    }, 10000); // 10000 milliseconds = 10 seconds.

    // The return function from `useEffect` is a cleanup function.
    // It runs when the component unmounts to prevent memory leaks.
    return () => clearTimeout(timer);
  }, []); // The empty dependency array `[]` means this effect runs only once.

  // --- RENDER LOGIC ---
  // If `isOpen` is false, we render `null` (nothing).
  if (!isOpen) {
    return null;
  }

  // --- JSX ---
  // This is the TSX that gets rendered when `isOpen` is true.
  return (
    // The main overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      {/* The modal content container */}
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{message}</p>
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)} // When clicked, set `isOpen` to false to hide the modal.
          className="absolute top-3 right-3 p-1 text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-200"
        >
          close
        </button>
      </div>
    </div>
  );
};
export default Popover;