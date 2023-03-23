import React, {useState}from 'react';
import {Tabs,Tab,Typography,Box,} from '@mui/material';
import PropTypes from 'prop-types';
import { categoryList } from '@/categoryList';
import Image from 'next/image';
import { blankImages } from '@/imagelists';

const TabPanel= (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  




const Categories = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

  return (
    <div style={{ height: '40vh'}}>
         <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {categoryList.map((listName, index) =>(
            <Tab label={listName} key={index} />
        ))}
    
      </Tabs>
      <TabPanel value={value} index={0}>
        {blankImages.map((image, index) => (
            <Image src={image.src} alt={image.title}  key={index} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
    </div>
   
  );
}


export default Categories;