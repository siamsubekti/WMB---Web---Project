import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
import setup from './setupTests'

describe('App', ()=>{
    it('sould have one div',()=>{
      const appContainer = shallow(<App/>)
      expect(appContainer.find('div')).toHaveLength(1)
  })

  it('should have one Router',()=>{
    const appContainer = shallow(<App/>)
    expect(appContainer.find('Router')).toHaveLength(0)
  } )

  it('should have one grid',()=>{
    const appContainer = shallow(<App/>)
    expect(appContainer.find('div').children('Grid')).toHaveLength(0)
  } )

  it('should have one side',()=>{
    const appContainer = shallow(<App/>)
    expect(appContainer.find('Grid')).toHaveLength(0)
  } )
})