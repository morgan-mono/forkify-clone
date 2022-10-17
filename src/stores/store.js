import { reactive, ref, watch } from "vue";
import axios from "axios";
const key = "4717896c-96a4-41f5-90b7-78fad15d8e02";
const store = reactive({
  searchTerm: "",
  recipeID: "",
  recipes: [],
  bookmarks: [],
  sidebarVisible:false,
  results: null,
  recipe: {},
  loadingRecipes: false,
  loadingRecipe: false,
});


function fetchRecipeAPI(type, param) {
  let url = "https://forkify-api.herokuapp.com/api/v2/recipes/";
  const params = {
    key: key,
  };
  if (type === "recipe") {
    url += param;
    store.loadingRecipe = true;
  } else if (type === "recipes") {
    params.search = param;
    store.loadingRecipes = true;
  } else {
    throw new RangeError("wrong request type. use 'recipe' or 'recipes' ");
  }

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(url,{params: params});
       console.log(resp);
      if (type === "recipes") {
        if (resp.status == 200) {
          store.recipes = resp.data.data.recipes;
          store.results = resp.data.results;
        }
        store.loadingRecipes = false;
      }
      if (type === 'recipe') {
        if (resp.status == 200) {
          store.recipe = resp.data.data.recipe;
        }
        store.loadingRecipe = false;
      }
      // console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  sendGetRequest();
  
}

function bookmarkExists(id) {
  //callback to be called in the some function
  const exists = (element) => {
    return element.id === id;
  };
  const doesIt = store.bookmarks.some(exists);
  console.log(`checking if bookmark exists: ${doesIt}`);
  return doesIt;
}

// WATCH FOR RECIPES SEARCH
watch(
  () => store.searchTerm,
  (searchTerm, prevSearchTerm) => {
    // console.log(searchTerm, prevSearchTerm);
    if (searchTerm !== prevSearchTerm) {
      console.log("Fetching recipes");
      // fetchRecipes();
      store.sidebarVisible = true;
      fetchRecipeAPI('recipes', searchTerm);
    }
  }
);

// WATCH FOR SINGLE RECIPE GET
watch(
  () => store.recipeID,
  (recipeID, prevRecipeID) => {
    // console.log(recipeID, prevRecipeID);
    if (recipeID !== prevRecipeID) {
      console.log(`Fetching recipe ID ${recipeID}`);
      // fetchRecipe(recipeID);
      store.sidebarVisible = false;
      window.scrollTo(0,0);
      fetchRecipeAPI('recipe', recipeID);

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

  const setBookmarks = (json) => {
    store.bookmarks = JSON.parse(json);
  };

  const toggleBookmark = (obj) => {
    if (!bookmarkExists(obj.id)) {
      store.bookmarks.push(obj);
      localStorage.setItem("bookmarks", JSON.stringify(store.bookmarks));
      console.log("bookmark added");
      console.log(store.bookmarks);
    } else {
      console.log("bookmark exists, removing");
      store.bookmarks = store.bookmarks.filter((bookmark) => {
        return bookmark.id !== obj.id;
      });
      localStorage.setItem("bookmarks", JSON.stringify(store.bookmarks));
    }
  };

  const toggleSidebar = (value) => {
    store.sidebarVisible = value;
  }

  return {
    store,
    updateSearchTerm,
    updateRecipeID,
    setBookmarks,
    toggleBookmark,
    toggleSidebar,
  };
}
