import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import FileSelectionContainer from '@/components/filepicker/FileSelectionContainer'

describe('Home.vue', () => {
  let parentComp;

  beforeEach(() => {
    parentComp = shallowMount(Home);
  });

  it('should render FileSelectionContainer component on mount', () => {
    expect(parentComp.findComponent(FileSelectionContainer).exists()).to.be.true;
  });  
});
