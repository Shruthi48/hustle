import React, {useState} from 'react';

let KiteConnect = require('kiteconnect').KiteConnect;



function Login() {
   const [apiKey, setApiKey] = useState('');
   const [requestToken, setRequestToken] = useState('');
   const [api_secret_key, setApiSecretKey] = useState('');
   const [accessToken, setAccessToken] = useState('');
  // const [errorMsg, setErrorMessage] = useState('');

    const handleRequestTokenGeneration  = () => {
        let kc = new KiteConnect({
            api_key: apiKey
        });

        let loginUrl = kc.getLoginURL();
        window.open(loginUrl);
    }

    const getAccessToken = () => {
        let kc = new KiteConnect({
            api_key: apiKey
        });

        kc.generateSession(requestToken, api_secret_key)
        .then((response) => {
           setAccessToken(response.access_token);
           console.log('access token', accessToken, response.access_token);
        }).catch((e) => {
           // setErrorMessage(e);
            console.log('error:', e)
        })

    }

    


    return (
        <div>
            <label>api-key</label>
            <input type="text" placeholder="Enter API KEY" onChange={(e) => setApiKey(e.target.value)}></input>
            <button onClick={handleRequestTokenGeneration}>Generate Request Token</button>

            <label>Request Token</label>
            <input type="text" placeholder="Enter request-token" onChange={(e) => setRequestToken(e.target.value)}></input>
            <input type="text" placeholder="Enter api-secret-key" onChange={(e) => setApiSecretKey(e.target.value)}></input>
            <button onClick={getAccessToken}>Get Access Token</button>
        </div>
    )
}


export default Login;