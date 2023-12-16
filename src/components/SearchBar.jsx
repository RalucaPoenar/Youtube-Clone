import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationCount, setNotificationCount] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <div style={{ flex: 1, marginRight: 'auto' }}>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
          }}
        >
          <input
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: 1 }}
          />
          <IconButton type="submit" sx={{ p: '10px', color: 'red' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <div>
        <IconButton sx={{ p: '10px', color: 'red' }} aria-label="notifications">
          <Badge badgeContent={notificationCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
