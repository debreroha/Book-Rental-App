import DashboardLayout from '../../components/DashboardLayout';
import BookTable from "@/components/BookTable"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <SpaceDashboardIcon />
      <BookTable />

      {/* Add dashboard content here */}
    </DashboardLayout>
  );
};

export default DashboardPage;
