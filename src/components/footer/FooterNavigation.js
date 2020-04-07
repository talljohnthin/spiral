import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LayersIcon from '@material-ui/icons/Layers';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const FooterNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = useState('Orders');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<div className="footerFloat">
    <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
      <BottomNavigationAction label="Orders" value="Orders" icon={<AssignmentIcon />} />
      <BottomNavigationAction label="Products" value="Products" icon={<LayersIcon />} />
      <BottomNavigationAction label="Categories" value="Categories" icon={<LibraryBooksIcon />} />
      <BottomNavigationAction label="Segments" value="Segments" icon={<PeopleAltIcon />} />
    </BottomNavigation>
  </div>
  );
}


export default FooterNavigation;