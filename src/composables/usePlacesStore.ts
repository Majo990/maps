import { StateInterface } from "@/store/index";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export const usePlacesStore = () => {
  const store = useStore<StateInterface>();

  onMounted(() => {
    if (!store.getters["places/isUserlocationReady"]) {
      store.dispatch("places/getInitialLocation");
    }
  });

  return {
    isLoading: computed(() => store.state.places.isLoading),
    userLocation: computed(() => store.state.places.userLocation),

    isUserlocationReady:computed (()=>store.getters['places/isUserlocationReady'])
  };
};
