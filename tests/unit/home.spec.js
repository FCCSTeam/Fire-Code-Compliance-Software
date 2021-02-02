import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import GoogleDrive from '@/components/filepicker/GoogleDrive'

describe('Home.vue', () => {
  let HomeComp;

  beforeEach(() => {
    HomeComp = shallowMount(Home);
  });

  it('should render GoogleDrive Component on mount', () => {
    expect(HomeComp.findComponent(GoogleDrive).exists()).to.be.true;
  });
  
});
