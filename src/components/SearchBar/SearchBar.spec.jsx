import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar.component';
import VideoListProvider from '../../provider/VideoListProvider';

const wrapper = shallow(<VideoListProvider><SearchBar /></VideoListProvider>)

describe('SearchBar Component', () => {
    it('Should render Search Bar', () => {
        expect(wrapper.find('input[placeholder="Search"]'))
    })
})