import React from 'react';
import RenderAuthorized from '@/components/Authorized';
import { getAuthority } from '@/utils/user';
import Redirect from 'umi/redirect';

const Authority = getAuthority();
const Authorized = RenderAuthorized(Authority);

export default ({ children }) => (
  <Authorized
    authority={children.props.route.authority}
    noMatch={<Redirect to="/login" />}
  >
    {children}
  </Authorized>
);
