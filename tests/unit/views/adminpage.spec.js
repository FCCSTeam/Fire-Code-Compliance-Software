import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { localVue } from '../setup.js' 

//components to test
import Adminpage from '@/views/Adminpage.vue'
import Navbar from '@/components/prefabs/navbar/Navbar.vue'
import AddUserForm from "@/components/authentication/AddUserForm.vue";
import UserRegisteredModal from "@/components/authentication/ModalUserRegistered.vue";
import { BButton } from 'bootstrap-vue';

// isAdmin in Adminpage.vue should be set to true for these tests to pass

describe('Adminpage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Adminpage, { localVue });
  });

  it('Correct web page rendered', () => {
    expect(wrapper.find("#adminpage").exists()).to.be.true;
  });  

  it('Navbar component renders', () => {
    expect(wrapper.findComponent(Navbar).exists()).to.be.true;
  });

  it('Create a User button renders', () => {
    expect(wrapper.findComponent(BButton).exists()).to.be.true;
    expect(wrapper.find("#createUserButton").exists()).to.be.true;
  });  

  it('AddUserForm component renders', () => {
    expect(wrapper.findComponent(AddUserForm).exists()).to.be.true;
  });

});
