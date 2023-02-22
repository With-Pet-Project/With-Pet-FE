import { useOAuth } from 'components/common/hooks/useOAuth';

function OAuthCallback() {
  useOAuth();

  return <div>Loading...</div>;
}

export default OAuthCallback;
