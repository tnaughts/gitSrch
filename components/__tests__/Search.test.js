/**
 * @format
 */
import 'jsdom-global/register';
import 'react-native';
import * as React from 'react'
import {Search} from '../Search';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';


configure({adapter: new Adapter()});
jest.useFakeTimers()
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Search/>', () =>{
  it('renders flatlist when given divisions and teams', () => {
    const standings = shallow(<Search divisions={['AL', 'NL']} teams={successMlbResponse}/>)
    expect(standings.find('FlatList').length).toEqual(1)

  });
  
  it('renders null when not given divisions or teams', () => {
    const standings = shallow(<Search divisions={['AL', 'NL']} teams={[]}/>)

    expect(standings.find('FlatList').length).toEqual(0)

  });
})