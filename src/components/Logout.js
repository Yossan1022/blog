import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { auth, provider} from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();
  const logout = () => {
   signOut(auth).then(()=>{
    localStorage.clear();
    setIsAuth(false);
    navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウト</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
}