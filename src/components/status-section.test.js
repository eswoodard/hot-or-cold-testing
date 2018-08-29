import React from 'react';
<<<<<<< HEAD
import { shallow } from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection auralStatus="" guesses={[]} />);
=======
import {shallow, mount} from 'enzyme';


import StatusSection from './status-section';

describe ('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses ={[]} />);
>>>>>>> 0bb931b78eb584b5b0b0f69ff1c458ac4256c90d
  });
});