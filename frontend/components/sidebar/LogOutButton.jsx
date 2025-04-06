import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogOutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-5 flex justify-center sm:justify-start px-2 sm:px-0">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <BiLogOut
          onClick={logout}
          className="w-6 h-6 text-white cursor-pointer hover:text-red-400 transition duration-200"
          title="Log out"
        />
      )}
    </div>
  );
};

export default LogOutButton;
