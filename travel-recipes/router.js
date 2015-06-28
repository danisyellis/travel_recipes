Router.configure({
  layoutTemplate: 'layout'
});

Router.route("/", {name: "travelRecipes"});

Router.route("/recipes/:_id", {
  name: "recipeItem",
  data: function(){
    var recipe = Recipes.findOne(this.params._id);
    return recipe;
  }
})
