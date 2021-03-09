import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import { localVue } from '../setup.js' 

//components to test
import Home from '@/views/Home.vue'
import Navbar from '@/components/prefabs/navbar/Navbar.vue'
import LoginModal from "@/components/authentication/ModalLogin.vue";
import { BButton, BModal } from 'bootstrap-vue';

describe('Home.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Home, { localVue });
  });

  it('Correct web page rendered', () => {
    expect(wrapper.find("#home").exists()).to.be.true;
  });  

  it('Navbar renders', () => {
    expect(wrapper.findComponent(Navbar).exists()).to.be.true;
  });  

  it('Login button renders', () => {
    expect(wrapper.findComponent(BButton).exists()).to.be.true;
  });  

  it('Login Modal available to renders', () => {
    expect(wrapper.findComponent(LoginModal).exists()).to.be.true;
  });  

  it('Login modal appears when login button clicked', async () => {
    wrapper = mount(Home, { localVue });
    const button = wrapper.findComponent(BButton);
    const modal = wrapper.find("#loginModal");
    
    expect(modal.isVisible()).to.be.false;
    await button.trigger('click');
    expect(modal.isVisible()).to.be.true;
  }); 
});

