import { GoogleLogin } from 'react-google-login';

const GoogleSignInButton = () => {
  const handleSuccess = async (response) => {
    try {
      const res = await fetch('https://vitruvianshield.com/api/v1/auth/google/callback/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: response.code }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        alert('Logged in successfully!');
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <GoogleLogin
      clientId={googleClientId}
      buttonText="Sign in with Google"
      responseType="code"
      redirectUri="https://vitruvianshield.com/"
      onSuccess={handleSuccess}
      onFailure={(error) => console.error('Google login failed:', error)}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignInButton;
