// import React from 'react';

// const ReviewCard = ({ review }) => {
//   const { userName, flowchart } = review;

//   return (
//     <div className="card bg-base-100 shadow-lg p-5 w-full border rounded-xl">
//       <div className="card-body p-0">
        
//         {/* Review Text */}
//         <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//           “A posture corrector works by providing support and gentle alignment to 
//           your shoulders, back, and spine, encouraging you to maintain proper 
//           posture throughout the day.”
//         </p>

//         {/* User Info */}
//         <div className="flex items-center gap-3 mt-5">
          
//           {/* Avatar */}
//           <div className="avatar">
//             <div className="w-12 h-12 md:w-14 md:h-14 rounded-full">
//               <img src={flowchart} alt="profile" className="object-cover" />
//             </div>
//           </div>

//           {/* Name + Role */}
//           <div>
//             <h3 className="font-bold text-base md:text-lg">{userName}</h3>
//             <p className="text-sm text-gray-500">Senior Product Designer</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;



import React from 'react';

const ReviewCard = ({ review }) => {
    const { userName, flowchart } = review;

    return (
        <div
            className="
                card
                bg-base-100
                shadow-lg
                w-full
                border
                border-base-200
                rounded-xl

                p-4
                sm:p-5
                md:p-6

                min-h-[220px]
            "
        >
            <div className="card-body p-0 flex flex-col justify-between h-full">

                {/* Review Text */}
                <p
                    className="
                        text-gray-700
                        text-sm
                        sm:text-sm
                        md:text-base
                        leading-6
                        sm:leading-6
                        md:leading-7
                    "
                >
                    “A posture corrector works by providing support and gentle
                    alignment to your shoulders, back, and spine, encouraging
                    you to maintain proper posture throughout the day.”
                </p>

                {/* User Info */}
                <div
                    className="
                        flex
                        items-center
                        gap-3
                        sm:gap-4
                        mt-5
                        sm:mt-6
                    "
                >

                    {/* Avatar */}
                    <div className="avatar shrink-0">
                        <div
                            className="
                                w-10
                                h-10
                                sm:w-12
                                sm:h-12
                                md:w-14
                                md:h-14
                                rounded-full
                                overflow-hidden
                            "
                        >
                            <img
                                src={flowchart}
                                alt={`${userName} profile`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Name + Role */}
                    <div className="min-w-0">
                        <h3
                            className="
                                font-bold
                                text-sm
                                sm:text-base
                                md:text-lg
                                text-gray-900
                                truncate
                            "
                        >
                            {userName}
                        </h3>

                        <p
                            className="
                                text-xs
                                sm:text-sm
                                text-gray-500
                                mt-1
                            "
                        >
                            Senior Product Designer
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;

