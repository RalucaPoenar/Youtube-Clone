import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationCount, setNotificationCount] = useState(5); // Schimbați acest număr conform necesităților
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <div style={{ color: 'red', fontWeight: 'bold', textShadow: '2px 2px 4px white', marginLeft: '5px', fontSize: '1.2em' }}>
        Youtube
      </div>

      <Paper
        component='form'
        onSubmit={onhandleSubmit}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',
          marginLeft: '10px', // Adăugat spațiere între text și input
        }}
      >
        <input
          className='search-bar'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
          <SearchIcon />
        </IconButton>

        {/* Iconiță cu notificări */}
        <IconButton sx={{ p: '10px', color: 'red' }} aria-label='notifications'>
          <Badge badgeContent={notificationCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
