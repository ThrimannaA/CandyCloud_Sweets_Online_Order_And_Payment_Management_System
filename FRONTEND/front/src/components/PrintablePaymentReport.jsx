// src/PrintableProductReport.js
import React from 'react';
import logo from '../components/Pink and Brown Flat Illustrative Donuts & Bakery Food Logo (2) (2).png'; 



const PrintablePaymentReport = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <img src={logo} alt="Logo" style={{ width: '120px',height:'120px', marginRight: '60px' }} /> 
      <h1 style={{ margin: 0 ,color:'#5D0076',fontSize:'30px',fontWeight:'bold',textDecoration: 'underline',right:'40px',fontFamily:'system-ui'}}><center>Candy Cloud Sweets factory Orders and Payment Summary Report</center></h1> 
    </div>
    <hr style={{border: '2px solid purple', margin: '15px 0'}} /> 
    <table className="table">
                  <thead className="bg-gradient3 rounded-lg mb-10">
                    <tr>
                      <th className="px-10 py-6" style={{ fontSize: '28px', color: '#852D6B'}}>
                        No
                      </th>
                      <th className="px-10 py-6" style={{ fontSize: '28px', color: '#852D6B'}}>
                        User
                      </th>
                      <th className="px-10 py-6" style={{ fontSize: '28px', color: '#852D6B' }}>
                        Transition Id
                      </th>
                      <th className="px-10 py-6" style={{ fontSize: '28px', color: '#852D6B' }}>
                        Total Amount
                      </th>
                      <th className="px-10 py-6" style={{ fontSize: '28px', color: '#852D6B' }}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ fontWeight: 'Bold', fontSize: '17px' }}>
                    {props.purchases.map((item, index) => (
                      <tr key={index} className={index >= 1 && index % 2 !== 0 ? "bg-gradient3" : ""}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center">{item.email}</td>
                        <td className="text-gray-500">{item.transitionId}</td>
                        <td className="text-center">{item.price?.toFixed(2)}</td>
                        <td className={item.status === "Rejected" ? "text-red-700" : "text-green-700"}>{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
  </div>
));

export default PrintablePaymentReport;