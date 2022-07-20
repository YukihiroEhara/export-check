const arrayChange = (str) => {
  let array = [];
  str !== "empty" && array.push(str);
  return array;
};

const awsmobile = {
  aws_project_region:
    process.env.REACT_APP_AWS_REGION === undefined
      ? "ap-northeast-1"
      : process.env.REACT_APP_AWS_REGION,
  aws_appsync_graphqlEndpoint:
    process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT === undefined
      ? "https://ifmwdqke7jbhnieekdezk5vz7m.appsync-api.ap-northeast-1.amazonaws.com/graphql"
      : process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region:
    process.env.REACT_APP_AWS_REGION === undefined
      ? "ap-northeast-1"
      : process.env.REACT_APP_AWS_REGION,
  aws_appsync_authenticationType:
    process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE === undefined
      ? "AMAZON_COGNITO_USER_POOLS"
      : process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE,
  aws_cognito_identity_pool_id:
    process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID === undefined
      ? "ap-northeast-1:963809c2-89e9-496f-87e6-17a160bd5a69"
      : process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region:
    process.env.REACT_APP_AWS_REGION === undefined
      ? "ap-northeast-1"
      : process.env.REACT_APP_AWS_REGION,
  aws_user_pools_id:
    process.env.REACT_APP_AWS_USER_POOLS_ID === undefined
      ? "ap-northeast-1_JxPVesXaZ"
      : process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID === undefined
      ? "6c9pfcg7d5oubnq28daakn68f1"
      : process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
  oauth: {},
  aws_cognito_username_attributes:
    process.env.REACT_APP_AWS_COGNITO_USERNAME_ATTRIBUTES === undefined
      ? ["EMAIL"]
      : arrayChange(process.env.REACT_APP_AWS_COGNITO_USERNAME_ATTRIBUTES),
  aws_cognito_social_providers:
    process.env.REACT_APP_AWS_COGNITO_SOCIAL_PROVIDERS === undefined
      ? []
      : arrayChange(process.env.REACT_APP_AWS_COGNITO_SOCIAL_PROVIDERS),
  aws_cognito_signup_attributes:
    process.env.REACT_APP_AWS_COGNITO_SIGNUP_ATTRIBUTES === undefined
      ? ["EMAIL"]
      : arrayChange(process.env.REACT_APP_AWS_COGNITO_SIGNUP_ATTRIBUTES),
  aws_cognito_mfa_configuration:
    process.env.REACT_APP_AWS_COGNITO_MFA_CONFIGURATION === undefined
      ? "OFF"
      : process.env.REACT_APP_AWS_COGNITO_MFA_CONFIGURATION,
  aws_cognito_mfa_types:
    process.env.REACT_APP_AWS_COGNITO_MFA_TYPES === undefined
      ? ["SMS"]
      : arrayChange(process.env.REACT_APP_AWS_COGNITO_MFA_TYPES),
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters:
      process.env.REACT_APP_PASSWORDPOLICYCHARACTERS === undefined
        ? []
        : arrayChange(process.env.REACT_APP_PASSWORDPOLICYCHARACTERS),
  },
  aws_cognito_verification_mechanisms:
    process.env.REACT_APP_AWS_COGNITO_VERIFICATION_MECHANISMS === undefined
      ? ["EMAIL"]
      : arrayChange(process.env.REACT_APP_AWS_COGNITO_VERIFICATION_MECHANISMS),
};

export default awsmobile;
