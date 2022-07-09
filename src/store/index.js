import create from 'zustand'
import { routes } from '@src/routes'

const defaultStore = {
  lightbox: '',
  menu: routes.filter((node)=>node?.meta?.menu)
}

export const useStore = create(set=>({

  ...defaultStore,
  set: (updateState={})=>{
    return set((state)=>{
      return {
        ...state,
        ...updateState
      }
    })
  },
  lightboxOpen: (id)=>{
    return set((state)=>{
      return { lightbox: id }
    })
  },
  // increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 })
}))