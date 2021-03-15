import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import { localVue } from '../setup.js' 

//components to test
import UserSettings from '@/views/UserSettings.vue'
import ChangePasswordForm from '@/components/authentication/ChangePasswordForm.vue'
import Navbar from '@/components/prefabs/navbar/Navbar.vue'
import { BButton, BModal } from 'bootstrap-vue';

describe('UserSettings.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(UserSettings, { localVue });
  });

  it('Correct web page rendered', () => {
    expect(wrapper.find("#userSettings").exists()).to.be.true;
  });  

  it('Navbar renders', () => {
    expect(wrapper.findComponent(Navbar).exists()).to.be.true;
  });  

  it('Change Password button renders', () => {
    expect(wrapper.findComponent(BButton).exists()).to.be.true;
    expect(wrapper.find("#createUserButton").exists()).to.be.true;
  });  

  it('changePasswordForm component renders', () => {
    expect(wrapper.findComponent(ChangePasswordForm).exists()).to.be.true;
  });

});

