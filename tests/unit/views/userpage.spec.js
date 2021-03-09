import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { localVue } from '../setup.js' 

//components to test
import Userpage from '@/views/Userpage.vue'
import Navbar from '@/components/prefabs/navbar/Navbar.vue'
import GPickerContainer from "@/components/filestructure/GPickerContainer.vue";
import { BButton } from 'bootstrap-vue';

describe('Userpage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Userpage, { localVue });
  });

  it('Correct web page rendered', () => {
    expect(wrapper.find("#userpage").exists()).to.be.true;
  });  

  it('Navbar component renders', () => {
    expect(wrapper.findComponent(Navbar).exists()).to.be.true;
  });  

  it('GPickerContainer component renders ', () => {
    expect(wrapper.findComponent(GPickerContainer).exists()).to.be.true;
  });  

  it('Google Drive button renders', () => {
    expect(wrapper.findComponent(BButton).exists()).to.be.true;
    expect(wrapper.find("#googleDriveButton").exists()).to.be.true;
  });

});
