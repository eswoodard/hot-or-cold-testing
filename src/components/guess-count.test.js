import React from 'react';
<<<<<<< HEAD
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
=======
import {shallow, mount} from 'enzyme';


import GuessCount from './guess-count';

describe ('<GuessCount />', () => {
>>>>>>> 0bb931b78eb584b5b0b0f69ff1c458ac4256c90d
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

<<<<<<< HEAD
  it('Renders the correct guess count', () => {
    const value = 5;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });
});
=======
  it('Renders the guess count', () => {
    const guessCount = 5;
    const wrapper = shallow(<GuessCount guessCount = {guessCount} />);
    expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
  });
});
>>>>>>> 0bb931b78eb584b5b0b0f69ff1c458ac4256c90d
