import { createClient } from "@supabase/supabase-js";

const prodConfig = {
  // apiKey           : "YOUR_API_KEY",
  // authDomain       : "your-app.firebaseapp.com",
  // databaseURL      : "https://your-app.firebaseio.com",
  // projectId        : "your-app",
  // storageBucket    : "your-app.appspot.com",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const devConfig = {
  // apiKey           : "YOUR_API_KEY",
  // authDomain       : "your-app.firebaseapp.com",
  // databaseURL      : "https://your-app.firebaseio.com",
  // projectId        : "your-app",
  // storageBucket    : "your-app.appspot.com",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

const REACT_APP_SUPABASE_URL = "https://exrcpfgiopxnpdbziykr.supabase.co";
const REACT_APP_SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDIwMjQ5NiwiZXhwIjoxOTI5Nzc4NDk2fQ.Z6awBtD8HNl_FWJposOdSLcU8oE2wErlHqiJR4jZKPE";

const supabaseUrl = REACT_APP_SUPABASE_URL;
const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY;

// eslint-disable-next-line import/prefer-default-export
const config = createClient(supabaseUrl, supabaseAnonKey);
// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
