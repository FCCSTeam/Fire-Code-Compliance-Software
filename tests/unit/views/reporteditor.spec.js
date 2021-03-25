import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import { localVue } from '../setup.js' 

//components to test
import ReportEditor from '@/views/ReportEditor.vue'
import Navbar from '@/components/prefabs/navbar/Navbar.vue'
import Sidemenu from '@/components/reporteditor/sidemenu/Sidemenu.vue'
import Sidebar from '@/components/reporteditor/sidemenu/Sidebar.vue'
import { BButton, BModal } from 'bootstrap-vue';

describe('ReportEditor.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ReportEditor, { localVue });
  });

  it('Correct web page rendered', () => {
    expect(wrapper.find("#reporteditor").exists()).to.be.true;
  });  

  it('Navbar renders', () => {
    expect(wrapper.findComponent(Navbar).exists()).to.be.true;
  });

  // it('Sidebar button renders', () => {
  //   expect(wrapper.findComponent(BButton).exists()).to.be.true;
  // });  

  // it('Sidemenu renders', () => {
  //   expect(wrapper.findComponent(Sidebar).exists()).to.be.true;
  // });  

});

