import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile.component';

const wrapper = shallow(<UserProfile />)

describe('UserProfile Component', () => {
    it('Should show menu btn', () => {
        expect(wrapper.find('[type="button"]'))
    })
})