// import { Button } from "@mui/material";
// import { styled } from "@mui/system";
// import { Link } from "react-router-dom";

// const User = styled('div')({
//    display: 'flex',
//    alignItems: 'center',
//    columnGap: '24px',
//    justifyContent: 'flex-start'
// });

// const Img = styled('img')({
//    height: '40px',
//    width: '40px',
//    borderRadius: '50%',
//    objectFit: 'cover'
// });

// export const columns = [
//    {
//       field: 'id',
//       headerName: 'ID',
//       width: 100
//    },
//    {
//       field: 'firstName',
//       headerName: 'First name',
//       width: 175
//    },
//    {
//       field: 'lastName',
//       headerName: 'Last name',
//       width: 175
//    },
//    {
//       field: 'users',
//       headerName: 'Users',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 250,
//       renderCell: (params) => {
//          return (
//             <User>
//                <Img src={params.row.img} alt="" />
//                {params.row.firstName || ''} {params.row.lastName}
//             </User>
//          )
//       }
//    },
//    {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 100,
//    },
//    {
//       field: 'email',
//       headerName: 'Email',
//       width: 300
//    },
//    {
//       field: 'status',
//       headerName: 'Status',
//       width: 175,
//       renderCell: (params) => {
//          return (
//             <Button
//                size='small'
//                variant="outlined"
//                sx={{
//                   borderColor: `${params.row.status === 'Approved' ? '#c8e6c9' : '#f0f4c3'}`,
//                   backgroundColor: `${params.row.status === 'Approved' ? '#c8e6c9' : '#f0f4c3'}`,
//                   color: `${params.row.status === 'Approved' ? '#43a047' : '#afb42b'}`,
//                   '&:hover': {
//                      borderColor: `${params.row.status === 'Approved' ? '#a5d6a7' : '#e6ee9c'}`,
//                      backgroundColor: `${params.row.status === 'Approved' ? '#a5d6a7' : '#e6ee9c'}`,
//                   }
//                }}
//             >
//                {params.row.status}
//             </Button>
//          )
//       }
//    },
//    {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 175,
//       renderCell: (params) => {
//          return (
//             <div style={{ display: 'flex', columnGap: '10px' }}>
//                <Link to={`/users/${params.row.id}`} style={{ textDecoration: 'none' }}>
//                   <Button
//                      size='small'
//                      variant='outlined'
//                      sx={{
//                         borderColor: '#a5d6a7',
//                         color: '#4caf50',
//                         '&:hover': {
//                            backgroundColor: '#e8f5e9',
//                            borderColor: '#a5d6a7'
//                         },
//                      }}
//                   >
//                      view
//                   </Button>
//                </Link>
//                <Button
//                onClick={handleDelete(params.id)}
//                   size='small'
//                   variant="outlined"
//                   sx={{
//                      borderColor: '#ef9a9a',
//                      color: '#f44336',
//                      '&:hover': {
//                         backgroundColor: '#ffebee',
//                         borderColor: '#ef9a9a'
//                      }
//                   }}
//                >
//                   delete
//                </Button>
//             </div>
//          )
//       }
//    }
// ];

// export const rows = [
//    { id: 1, lastName: 'Snow', firstName: 'Jon', img: "https://source.unsplash.com/jo21H-4lYFU", email: 'jonsnow@gmail.com', age: 35, status: 'Approved', phone: '+112 345 675', address: 'Boston | Masachussets', country: 'USA' },
//    { id: 2, lastName: 'Lannister', firstName: 'Cersei', img: "https://source.unsplash.com/6W4F62sN_yI", email: 'cerseilannister@gmail.com', age: 42, status: 'Pending', phone: '+111 344 685', address: 'Nevada | Las Vegas', country: 'USA' },
//    { id: 3, lastName: 'Lannister', firstName: 'Jaime', img: "https://source.unsplash.com/WNoLnJo7tS8", email: 'jamielannister@gmail.com', age: 45, status: 'Approved', phone: '+132 335 175', address: 'Silicon Valley | Cali', country: 'USA' },
//    { id: 4, lastName: 'Stark', firstName: 'Arya', img: "https://source.unsplash.com/ZnHRNtwXg6Q", email: 'aryastark@gmail.com', age: 16, status: 'Pending', phone: '+112 345 675', address: 'Boston | Masachussets', country: 'USA' },
//    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', img: "https://source.unsplash.com/FVrXs076Df8", email: 'Daenerystargaryen@gmail.com', age: 25, status: 'Approved', phone: '+111 344 685', address: 'Nevada | Las Vegas', country: 'USA' },
//    { id: 6, lastName: 'Melisandre', firstName: 'Carice', img: "https://source.unsplash.com/jFAG_ixCrsM", email: 'lordoflight@gmail.com', age: 150, status: 'Pending', phone: '+132 335 175', address: 'Silicon Valley | Cali', country: 'USA' },
//    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', img: "https://source.unsplash.com/p0B7ueoZz8E", email: 'whoeverthatis@gmail.com', age: 44, status: 'Approved', phone: '+112 345 675', address: 'Boston | Masachussets', country: 'USA' },
//    { id: 8, lastName: 'Frances', firstName: 'Rossini', img: "https://source.unsplash.com/JQDflNNnrEE", email: 'whoeverthisonetoo@gmail.com', age: 36, status: 'Pending', phone: '+111 344 685', address: 'Nevada | Las Vegas', country: 'USA' },
//    { id: 9, lastName: 'Roxie', firstName: 'Harvey', img: "https://source.unsplash.com/DlYcwJ55mMg", email: 'whoarethesepeople@gmail.com', age: 65, status: 'Approved', phone: '+132 335 175', address: 'Silicon Valley | Cali', country: 'USA' },
// ];