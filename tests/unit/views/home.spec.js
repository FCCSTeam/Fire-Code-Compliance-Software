import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Navbar from '@/components/prefabs/navbar/Navbar.vue'

import '../setup.js' 

describe('Home.vue', () => {
  let parentComp;

  beforeEach(() => {
    parentComp = shallowMount(Home);
  });

  it('Navbar should render', () => {
    expect(parentComp.findComponent(Navbar).exists()).to.be.true;
  });  
});
