import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Path from './../../paths.js';
import {history} from './../../mocks/history.js';

import {withAuthorization} from './with-authorization.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`check redirect to the login page if there is no user`, () => {
  const Component = () => <div />;
  const ComponentWrapped = withAuthorization(Component);

  shallow(<ComponentWrapped user={{}} history={history}/>);

  expect(history.push).toHaveBeenCalledTimes(1);
  expect(history.push).toHaveBeenCalledWith(Path.LOGIN);
});
