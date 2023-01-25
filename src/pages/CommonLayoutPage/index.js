import { Outlet } from 'react-router-dom';

function CommonLayoutPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default CommonLayoutPage;
