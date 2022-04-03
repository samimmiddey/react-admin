import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const CardData = [
   {
      name: 'Users',
      percentage: '20%',
      quantity: '$ 100',
      details: 'See All Users',
      icon: <PersonOutlineIcon />
   },
   {
      name: 'Orders',
      percentage: '40%',
      quantity: '$ 330',
      details: 'View All Orders',
      icon: <AddShoppingCartIcon />
   },
   {
      name: 'Earnings',
      percentage: '52%',
      quantity: '$ 137',
      details: 'View Net Earnings',
      icon: <AttachMoneyIcon />
   },
   {
      name: 'Balance',
      percentage: '45%',
      quantity: '$ 256',
      details: 'See Details',
      icon: <AccountBalanceIcon />
   },
   {
      name: 'Expense',
      percentage: '66%',
      quantity: '$ 345',
      details: 'View Expenses',
      icon: <AddCardIcon />
   },
   {
      name: 'Benefit',
      percentage: '21%',
      quantity: '$ 177',
      details: 'See Details',
      icon: <CreditScoreIcon />
   },
];

export default CardData;