import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import { localVue } from '../setup.js' 

//components to test
import PageNotFound from '@/views/PageNotFound.vue'
import Navbar from '@/components/prefabs/navbar/Navbar.vue'

describe('PageNotFound.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PageNotFound, { localVue });
  });

  it('Correct web page rendered', () => {
    expect(wrapper.find("#userpage").exists()).to.be.true;
  });  

  it('Navbar renders', () => {
    expect(wrapper.findComponent(Navbar).exists()).to.be.true;
  });  

});

