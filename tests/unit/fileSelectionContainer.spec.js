import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import FileSelectionContainer from '@/components/filepicker/FileSelectionContainer'
import GPickerCreate from '@/components/filepicker/GPickerCreate'
import GPickerOpenExisting from '@/components/filepicker/GPickerOpenExisting'


describe('FileSelectionContainer.vue', () => {
  let parentComp;

  beforeEach(() => {
    parentComp = shallowMount(FileSelectionContainer);
  });

  it('should render open exisiting file component on mount', () => {
    expect(parentComp.findComponent(GPickerOpenExisting).exists()).to.be.true;
  });  

  it('should render create a new file component on mount', () => {
    expect(parentComp.findComponent(GPickerCreate).exists()).to.be.true;
  });

});