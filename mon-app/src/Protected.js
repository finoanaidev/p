import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Protected(props) {
  let Cmp=props.Cmp
  const navigate = useNavigate();

  useEffect(() => {
    const sendSubmit = () => {
      navigate('/accueil');
    };

    if (!localStorage.getItem('user-info')) {
      sendSubmit();
    }
  }, [navigate]);
    return (
        <div>
        <Cmp />
        </div>
    )
}
export default Protected