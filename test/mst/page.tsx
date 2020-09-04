import React, { useState, isValidElement, useEffect } from 'react'
// import { onSnapshot, applySnapshot } from 'mobx-state-tree'
import { getSnapshot, applySnapshot, onSnapshot, fromSnapshot, withoutUndo } from 'mobx-keystone'
import { useMst, rootStore } from '../../src/mst/context'
import { observer, useLocalStore, useObserver } from 'mobx-react-lite'
import { CreateComponent, renderJson } from '../../src/mst/util'
import ModelTest from '../g6-test/mock/model-test'
import ModuleTest from '../g6-test/mock/module-test'
import Page from '../../src/mst/components'
// import StateStack from '../../src/mst/state-stack'
// window.kkk = StateStack

export default observer(() => {
  const data = useMst()
  useEffect(() => {
    onSnapshot(data, snapshot => {
        //  console.dir('snapshot')
        //  alert('onSnapshot ' + snapshot.sys.showNameOrLabel)
        //  if(snapshot.sys.snapshot && !window.lockSnapshot)
        //  StateStack.push(snapshot)
        //  window.lockSnapshot = false
         sessionStorage.setItem('web-pdm', JSON.stringify(snapshot))
    })
    const localdata = sessionStorage.getItem('web-pdm')
    if(!localdata) {
      withoutUndo(() => data.init({ modelData: ModelTest, moduleData: ModuleTest }))
    } else {
      const sdata = JSON.parse(localdata)
      withoutUndo(() => applySnapshot(data,sdata))
    }
    

  }, [])
  return <Page />
})