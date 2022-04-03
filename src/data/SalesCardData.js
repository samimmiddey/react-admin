import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const iconColors = ['#ef9a9a', '#f48fb1', '#ce93d8'];

const SalesCardData = [
   {
      title: 'Impressions',
      body: '1.9M',
      icon: <ArrowForwardOutlinedIcon />,
      iconText: 'See all visits'
   },
   {
      title: 'Spent',
      body: '$41.2k',
      icon: <KeyboardArrowUpOutlinedIcon sx={{ color: `${iconColors[0]}` }} />,
      iconText: '12% more than last month'
   },
   {
      title: 'Engagements',
      body: '366k',
      icon: <KeyboardArrowDownOutlinedIcon sx={{ color: `${iconColors[1]}` }} />,
      iconText: '30% less than last month'
   },
   {
      title: 'Conversions',
      body: '$131,3k',
      icon: <KeyboardArrowUpOutlinedIcon sx={{ color: `${iconColors[2]}` }} />,
      iconText: '12% more than last month'
   }
];

export default SalesCardData;