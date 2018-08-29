import React from 'react';
<<<<<<< HEAD
import { shallow } from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  });
});

=======
import {shallow, mount} from 'enzyme';


import GuessSection from './guess-section';

describe ('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  });
});
>>>>>>> 0bb931b78eb584b5b0b0f69ff1c458ac4256c90d
