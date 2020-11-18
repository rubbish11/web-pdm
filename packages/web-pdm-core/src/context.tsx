import { createContext, useContext } from 'react'
import { undoMiddleware } from 'mobx-keystone'
import { RootInstance, createStore } from './type'

const RootStoreContext = createContext<null | RootInstance>(null)
export const Provider = RootStoreContext.Provider
export function useMst() {
    const store = useContext(RootStoreContext)
    if (store === null) {
        throw new Error('Store cannot be null, please add a context provider')
    }
    return store
}

// export const rootStore = createStore()
// export const undoManager = undoMiddleware(rootStore)
export const createRootStore = props => {
    const onIgnoreEdge: any = props?.sys?.onIgnoreEdge
    const newProps = {
        ...props,
        sys: {
            ...props.sys,
            onIgnoreEdge: undefined,
            onModelDetail: props.onModelDetail
        }
    }
    const rootStore = createStore(newProps)
    rootStore.setOnReload(props.onReload)
    rootStore.onIntl = props.onIntl
    rootStore.sys.setOnModelDetail(props?.sys?.onModelDetail)
    //alert('createRootStore')
    if (onIgnoreEdge) rootStore.sys.onIgnoreEdge = onIgnoreEdge
    rootStore.setUndoManager(undoMiddleware(rootStore))
    return rootStore
}
