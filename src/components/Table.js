// import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// import $ from 'jquery';
// $.DataTable = require('datatables.net');
// const Table = () => {
//   // let dataSet = axios.post('')
//   // const data = [
//   //   [
//   //     'Restaurant 5',
//   //     '~30',
//   //     'Chicken Rice',
//   //     'Gloves, Cook hat, Apron',
//   //     'Prompt pay, True wallet, Money',
//   //     '10'
//   //   ],
//   //   [
//   //     'Restaurant 3',
//   //     '~30',
//   //     'Noodles',
//   //     'Gloves, Cook hat, Apron',
//   //     'Prompt pay, True wallet, Money',
//   //     '8'
//   //   ]
//   // ];
//   const columns = [
//     { title: 'Name' },
//     { title: 'Type of Food' },
//     { title: 'Price' },
//     { title: 'Rank' }
//   ];

//   useEffect(() => {
//     $(document).ready(() => {
//       $.ajax({
//         url: '/api/datas/',
//         type: 'GET',
//         success: function(response) {
//           $('#mango').DataTable({
//             lengthChange: false,
//             data: response,
//             columns
//           });
//         }
//       });
//     });
//   }, [columns]);
//   // useEffect(() => {
//   //   $(document).ready(() => {
//   //     $('#mango').DataTable({
//   //       data: dataSet,
//   //       columns
//   //     });
//   //   });
//   // }, [dataSet, columns]);
//   // useEffect(() => {
//   //   $('#example').DataTable({
//   //     data: dataSet,
//   //     columns: [
//   //       { data: 'name' },
//   //       { data: 'cost' },
//   //       { data: 'ambiance' },
//   //       { data: 'pop food' },
//   //       { data: 'hygience' },
//   //       { data: 'service' },
//   //       { data: 'rate' }
//   //     ]
//   //   });
//   // }, [dataSet, columns]);
//   return (
//     <div className='container'>
//       <table
//         id='mango'
//         className='table table-hover table-warning'
//         width='100%'
//       ></table>
//     </div>
//   );
// };

// export default Table;
