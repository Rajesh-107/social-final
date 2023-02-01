// import React, { useState } from 'react';

// const InputModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState('');

//   return (
//     <div>
//     <button
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       onClick={() => setIsOpen(true)}
//     >
//       Open Modal
//     </button>
//     {isOpen && (
//       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75">
//         <div className="max-w-sm mx-auto my-16">
//           <div className="bg-white p-6 rounded-lg">
//             <h3 className="text-lg font-medium mb-2">Modal Title</h3>
//             <p className="text-gray-700 mb-4">Modal Content</p>
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               onClick={() => setIsOpen(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
//   );
// };

// export default InputModal;