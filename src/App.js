import React, { useState } from 'react';
import './App.css';
import { Typography, TextField, Box } from '@mui/material';
import PlantInfo from './PlantInfo';

function App() {
  const [searchTerms, setSearchTerms] = useState('');

  const handleSearchChange = (e) =>{
    setSearchTerms(e.target.value);
  }
  return (
    <Box container bgcolor="#ffcb">
      <Box display="Flex" justifyContent="space-between" alignItems="center" marginY={2} padding="16px" bgcolor={"green"} margin={1} borderRadius={3}>
      <Typography variant="h4" color="#ffff" >
        Plant Details
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography marginRight={1}> Search:</Typography>
      <TextField 
      label="Enter the plant family"
      variant="outlined"
      onChange={handleSearchChange}
      value={searchTerms}
      sx={{
        bgcolor: '#ffff',
        borderRadius: '8px'
      }}
      />
      </Box>
      </Box>
      <PlantInfo searchTerms={searchTerms} />
    </Box>
  );
}

export default App;

// // src/App.js
// // src/App.js
// import React, { useState } from 'react';
// import './App.css';
// import PlantInfo from './PlantInfo';
// import { Box, Button, TextField, Typography } from '@mui/material';

// function App() {
//     const [search, setSearch] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = () => {
//         setSearchTerm(search);
//     };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <Typography variant="h4" gutterBottom>
//                     Plant Information
//                 </Typography>
//                 <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
//                 <TextField
//                         variant="outlined"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder="Enter plant name"
//                         InputProps={{
//                             style: { color: 'black' },
//                             classes: { notchedOutline: 'custom-outline' }
//                         }}
//                         InputLabelProps={{
//                             style: { color: 'black' }
//                         }}
//                         className="custom-textfield"
//                     />
//                     <Button variant="contained" color="primary" onClick={handleSearch}>
//                         Search
//                     </Button>
//                 </Box>
//                 {searchTerm && <PlantInfo searchTerms={searchTerm} />}
//             </header>
//         </div>
//     );
// }

// export default App;
