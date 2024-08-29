// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// const ViewHelpCenter = () => {
//     const [card , setCard] = useState([])
//     const [selectedCard, setSelectedCard] = useState(null);
//     const getCard = () => {
//         axios.get('http://localhost:4000/api/helpcenter/getCards')
//         .then((res) => {
//             setCard(res.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }

//     const getCardDetails = (title) => {
//         axios.get(`http://localhost:4000/api/helpcenter/getcard/${title}`)
//             .then((res) => {
//                 setSelectedCard(res.data); // Assuming the response data is the card object
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     useEffect(() => {
//         getCard()
//     })
//   return (
//     <div>
//         <h1>View Help Center</h1>
//         {/* <div>
//             {
//                 card.map((item) => {
//                     return (
//                         <div>
//                             <h1>Title : {item.title}</h1>
//                             <h1>Description : {item.description}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div> */}

// <div>
// {card.map(item => (
//           <div key={item.title}>
//             <h1>
//               <Link to={`/help-center/${encodeURIComponent(item.title)}`} style={{ textDecoration: 'none', color: 'blue' }}>
//                 Title: {item.title}
//               </Link>
//             </h1>
//           </div>
//         ))}
//             </div>
//     </div>
//   )
// }

// export default ViewHelpCenter

// ViewHelpCenter.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import hero from "./../assets/background-1.png";
const ViewHelpCenter = () => {
  const [card, setCard] = useState([]);


  //Funstion for get all cards
  const getCard = () => {
    axios
      .get("http://localhost:4000/api/helpcenter/getCards")
      .then((res) => {
        setCard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('${hero}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-3xl text-center md:text-6xl">View Help Center</h1>
        <div className="flex items-center justify-center md:w-[700px] w-[350px]">
          <div className="w-full mt-16 overflow-x-auto rounded-lg shadow">
            <table className="table min-w-full divide-y divide-gray-200 table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                    #
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                    Title
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {card.map((item, id) => (
                  <tr key={item.id} className="text-center">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {id + 1}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      <Link
                        to={`/help-center/${encodeURIComponent(item.title)}`}
                        className="hover:text-blue-600 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHelpCenter;
