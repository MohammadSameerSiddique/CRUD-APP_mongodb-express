import { Box, Typography, styled } from '@mui/material';
import AddUser from './AddUser';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;
const CrudApp = () => {
  return (
    <Header>
      <Typography variant="h4">Crud Application</Typography>
      <AddUser />
    </Header>
  );
};

export default CrudApp;
