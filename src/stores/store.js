import { reactive, ref, watch } from "vue";
import axios from "axios";
const key = "4717896c-96a4-41f5-90b7-78fad15d8e02";
const store = reactive({
  searchTerm: "",
  recipeID: "",
  recipes: [],
  recipe: {},
  loadingRecipes: false,
  loadingRecipe: false,
});

function fetchRecipes() {
  store.recipes = [];
  // recipes.value = 'searched bread';
  axios
    .get("https://forkify-api.herokuapp.com/api/v2/recipes/", {
      params: {
        search: store.searchTerm,
        key: key,
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

function fetchRecipe(id) {
    store.recipe = {};
    // recipes.value = 'searched bread';
    axios
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`, {
        params: {
          key: key,
        },
      })
      .then((resp) => {
        console.log(resp);
        if (resp.status == 200) {
          store.recipe = resp.data.data.recipe;
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error.response);
      });
  }

function fetchRecipeAPI(url, paramArgs) {
    console.log(paramArgs);
  const params = {
    key: key,
  };
  for (const key in paramArgs) {
    params[key] = paramArgs[key];
  }
  console.log('populated params: ', params);

  axios
    .get(url, {params: params})
    .then((resp) => {
      console.log(resp);
      if (resp.status == 200) {
        return resp.data.data.recipes;
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error.response);
      return [];
    });
}
// WATCH FOR RECIPES SEARCH
watch(
  () => store.searchTerm,
  (searchTerm, prevSearchTerm) => {
    console.log(searchTerm, prevSearchTerm);
    if (searchTerm !== prevSearchTerm) {
      console.log("Fetching recipes");
      fetchRecipes();
    }
  }
);

// WATCH FOR SINGLE RECIPE GET
watch(
    () => store.recipeID,
    (recipeID, prevRecipeID) => {
      console.log(recipeID, prevRecipeID);
      if (recipeID !== prevRecipeID) {
        console.log(`Fetching recipe ID ${recipeID}`);
        fetchRecipe(recipeID);
      }
    }
  );

export function useRecipes() {
  const updateSearchTerm = (value) => {
    store.searchTerm = value;
  };
  const updateRecipeID = (value) => {
    store.recipeID = value;
  };

  return { store, updateSearchTerm, updateRecipeID };
}
