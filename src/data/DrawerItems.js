import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsightsIcon from '@mui/icons-material/Insights';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const DrawerItems = [
   { text: 'Home', icon: <HomeOutlinedIcon /> },
   { text: 'Analytics', icon: <InsightsIcon /> },
   { text: 'Sales', icon: <StackedBarChartOutlinedIcon /> },
   { text: 'Transactions', icon: <AttachMoneyIcon /> },
   { text: 'Users', icon: <PersonOutlineIcon /> },
   { text: 'Products', icon: <Inventory2OutlinedIcon /> },
   { text: 'Messages', icon: <MessageOutlinedIcon /> },
   { text: 'Mail', icon: <MailOutlineIcon /> },
   { text: 'Feedback', icon: <ChatBubbleOutlineIcon /> },
   { text: 'Manage', icon: <ManageAccountsOutlinedIcon /> },
   { text: 'Helpline', icon: <HelpOutlineOutlinedIcon /> }
];

export const DrawerTitles = ['GENERAL', 'MANAGEMENT', 'Notification', 'Analytics'];

export default DrawerItems;