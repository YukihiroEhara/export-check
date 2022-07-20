import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// import awsExports from "./aws-exports";
import awsExports from "./dummy-exports";
Amplify.configure(awsExports);

console.log(process.env.REACT_APP_AWS_USER_POOLS_ID);
console.log(process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID);
// console.log(process.env.REACT_APP_AWS_USER_POOLS_IDX);
// console.log(process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_IDX);
// console.log(process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }: any) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
