import React from 'react'
import { useLocation } from 'react-router-dom';
import '../../media/css/policy.css';
import Navbar from '../navbar';
import axios from 'axios';

const PolicyDocs = () => {

  const location = useLocation();
  const pdfArrayData = location.state?.props; 

  const showPdf = async () => {
    const response = await axios.get('http://localhost:8001/api/getPdf' , { responseType: 'blob' });
    const blob = new Blob([response.data] , { type: 'application/pdf' });
    const pdf = URL.createObjectURL(blob);
    window.open(pdf, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="TableContainer">
        <h1 className='policyHeading'>Policy Docs</h1>
        <table className='policyDocsTable'>
            <thead>
                <tr>
                    <th  className='tableHeading' >S.No</th>
                    <th className='tableHeading'>Policy Name</th>
                    <th className='tableHeading'>Action</th>
                </tr>
            </thead>
            <tbody>
            {pdfArrayData && pdfArrayData.map((item) => (
                <tr>
                <td className='tableData'>{item.srNo}</td>
                <td className='tableData'>{item.file.slice(0,-4)}</td>
                <td className='tableData'>
                    <button onClick={() => showPdf(item.file)}>View PDF</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>

    </>
  );
};

export default PolicyDocs;




// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import '../../media/css/policy.css';
// import Navbar from '../navbar';
// import axios from 'axios';

// const PolicyDocs = async() => {
  
//     const response = await axios.get('http://localhost:8001/api/getPolicy' ,{withCredentials: true });
//     console.log("response inside policydocs", response);

//     const pdfArrayData = response.data.policies;
//     // console.log("pdfArrayData----", pdfArrayData);
//     // pdfArrayData.map(item=>{
//     //     console.log("object--", item);
//     // })

//     const handlePdf = (pdf) => {
//         // window.open(pdf, '_blank');
//     } 
  

//   return (
//     <>
//       <Navbar />
//       <div className="policyTableContainer">
//         <h1 className='policyHeader'>Policy Docs</h1>
//         <table className='table'>
//             <thead>
//             <tr>
//                 <th  className='th' >S.No</th>
//                 <th className='th'>Policy Name</th>
//                 <th className='th'>Action</th>
//             </tr>
//             </thead>
//             <tbody>

//                 {pdfArrayData && pdfArrayData.map((item) => {
//                     return (
//                     <tr>
//                     <td className='td'>{item.srNo}</td>
//                     <td className='td'>{item.file.slice(0,-4)}</td>
//                     <td className='td'>
//                         <button onClick={() => handlePdf(item.file)}>View PDF</button>
//                     </td>
//                     </tr>
//                     )

//                     })}
//             </tbody>
//         </table>
//       </div>

//     </>
//   );
// };

// export default PolicyDocs;

// import React from 'react'
// import './../../media/css/policy.css';
// import Navbar from './../navbar';
// import pdf1 from '../../media/pdfs/pdf1.pdf'
// import pdf2 from '../../media/pdfs/pdf2.pdf'
// import pdf3 from '../../media/pdfs/pdf3.pdf'

// function PolicyDocs() {

//     const policies = [
//         { srNo: 1, policyName: 'Leave', actionLink: pdf1 },
//         { srNo: 2, policyName: 'Employee', actionLink:  pdf2  },
//         { srNo: 3, policyName: 'Tax', actionLink: pdf3 }
//     ];

//     return (
//         <>
//             <Navbar />
//             <div className="policyTableContainer">
//             <table className='policyTable'>
//             <thead>
//                 <tr>
//                     <th className='tableHeading'>S.No.</th>
//                     <th className='tableHeading'>Policy Name</th>
//                     <th className='tableHeading'>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {policies.map((policy) => (
//                 <tr key={policy.srNo}>
//                     <td className='col' >{policy.srNo}</td>
//                     <td className='col' >{policy.policyName}</td>
//                     <td className='col'><a href={policy.actionLink} target="_blank" rel="noopener noreferrer">
//                         <button>View PDF</button></a> </td>
//                 </tr>
//                 ))
//                 }
//             </tbody>
//             </table>
//         </div>
//     </>
//     )
// }

// export default PolicyDocs