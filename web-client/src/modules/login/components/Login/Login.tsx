import React from 'react';
import logo from 'src/assets/logo.png';
import IntroLogo from 'src/components/IntroLogo/IntroLogo';
/* TODO:  This component is a nightmare.   */
import TitleWithAddon from 'src/components/TitleWithAddon/TitleWithAddon';
import LoginFooter from 'src/modules/login/components/LoginFooter/LoginFooter';
import { COLORS } from 'src/theme/colors';

import LoginSteps from '../LoginSteps/LoginSteps';

const Reach4HelpLogo = () => (
  <TitleWithAddon level={2} alignAddon="50%">
    <span>Reach</span>
    <span style={{ color: COLORS.brandOrange }}>4</span>
    <span>Help</span>
  </TitleWithAddon>
);

const Login: React.FC<LoginProps> = (props): React.ReactElement => (
  <>
    <IntroLogo src={logo} alt="logo" />
    <Reach4HelpLogo />
    <LoginSteps {...props} />
    <LoginFooter />
  </>
);

interface LoginProps {
  onLoginGoogle: Function;
  onLoginFacebook: Function;
}

export default Login;
