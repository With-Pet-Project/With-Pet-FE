/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOAuth } from 'components/auth/hooks/useOAuth';

function OAuthCallback() {
  const navigate = useNavigate();
  const jwt_token = useOAuth();

  useEffect(() => {
    if (jwt_token) {
      navigate('/', { replace: true });
    }
  }, [navigate, jwt_token]);

  return <div>Loading...</div>;
}

export default OAuthCallback;
