import React from 'react';
import Player from '../Player';
import { shallow, mount } from 'enzyme';

window.alert = jest.fn();

describe('Empty Player Component', () => {
  it('renders a <Player /> component', () => {
    const component = shallow(<Player />);
    expect(component).toHaveLength(1);
  });

  it('renders without throwing an error', () => {
    const component = shallow(<Player />);
    expect(component.find('section.player').exists()).toBe(true);
    window.alert.mockClear();
  });

  it('initially renders an empty player', () => {
    const component = shallow(<Player />);
    expect(component.find('div.empty-player').exists()).toBe(true);
    window.alert.mockClear();
  });

  it('informs the user of current empty state', () => {
    const component = shallow(<Player />);
    const text = component.find('div.empty-player-message').text();
    expect(text).toEqual('No media found. Enter an RSS feed to get started.');
    window.alert.mockClear();
  });
});

describe('Test Methods', () => {
  it('Formats the time correctly using formatTime', () => {
    const component = shallow(<Player />);
    const time = component.instance().formatTime(90);
    expect(time).toEqual('1:30');
    window.alert.mockClear();
  });
});

describe('Player Functionality', () => {
  it('begins in a paused state', () => {
    const component = shallow(<Player />);
    const isPlaying = component.state().isPlaying;
    expect(isPlaying).toEqual(false);
    window.alert.mockClear();
  });
});

describe('<PlayerControls /> component', () => {
  it('renders a <PlayerControls /> component', () => {
    const component = shallow(<Player />);
    expect(component.find('PlayerControls').exists()).toBe(true);
    window.alert.mockClear();
  });

  it('renders the player-controls div', () => {
    const component = mount(<Player />);
    expect(component.find('div.player-controls').exists()).toBe(true);
    window.alert.mockClear();
  });

  it('renders a play button', () => {
    const component = mount(<Player />);
    expect(component.find('TiMediaPlay').exists()).toBe(true);
    window.alert.mockClear();
  });

  it('renders an input seek-bar range', () => {
    const component = mount(<Player />);
    expect(component.find('input.seek-bar').exists()).toBe(true);
    window.alert.mockClear();
  });

  it('renders an input volume-bar range', () => {
    const component = mount(<Player />);
    expect(component.find('input.volume-bar').exists()).toBe(true);
    window.alert.mockClear();
  });
});
