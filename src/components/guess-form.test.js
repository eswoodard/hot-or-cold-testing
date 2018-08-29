import React from 'react';
<<<<<<< HEAD
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
=======
import {shallow, mount} from 'enzyme';


import GuessForm from './guess-form';

describe ('<GuessForm />', () => {
>>>>>>> 0bb931b78eb584b5b0b0f69ff1c458ac4256c90d
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

<<<<<<< HEAD
  it('Should fire the onMakeGuess callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 10;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});
=======
it('Renders guess form', () => {

})

});
>>>>>>> 0bb931b78eb584b5b0b0f69ff1c458ac4256c90d
