import { reactive, ref, watch } from "vue";
import axios from "axios";

const store = reactive({
  searchTerm: "asdaf",
  recipes: [],
  loading: false,
});

function fetchRecipes() {
  store.recipes = [];
  // recipes.value = 'searched bread';
  axios
    .get("https://forkify-api.herokuapp.com/api/v2/recipes/", {
      params: {
        search: store.searchTerm,
        key: "4717896c-96a4-41f5-90b7-78fad15d8e02",
      },
    })
    .then((resp) => {
      console.log(resp);
      if (resp.status == 200) {
        store.recipes = resp.data.data.recipes;
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error.response);
    });
}

export function useRecipes() {
  const updateSearchTerm = (value) => {
    store.searchTerm = value;
  };

  watch(() => store.searchTerm, (searchTerm, prevSearchTerm) => {
    console.log(searchTerm, prevSearchTerm);
    if (searchTerm !== prevSearchTerm) {
        console.log('Fetching recipes');
        fetchRecipes();
    }
  })

  return { store, updateSearchTerm };
}
