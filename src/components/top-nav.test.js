import React from 'react';
<<<<<<< HEAD
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
=======
import {shallow, mount} from 'enzyme';


import TopNav from './top-nav';

describe ('<TopNav />', () => {
>>>>>>> 0bb931b78eb584b5b0b0f69ff1c458ac4256c90d
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

<<<<<<< HEAD
  it('Should call onNewGame when new game is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });

  it('Should call onGenerateAuralUpdate when state-of-game link is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});
=======
});
>>>>>>> 0bb931b78eb584b5b0b0f69ff1c458ac4256c90d
