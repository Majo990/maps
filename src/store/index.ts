import { createStore } from 'vuex'


// import exampleModule from './module-template';
// import { ExampleStateInterface } from './module-template/state';


export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
   example: unknown
}

export default createStore<StateInterface>({
  modules: {
     example: {}
  }
})
