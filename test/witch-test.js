var assert = require('chai').assert;
var Witch = require('../exercises/witch');
var Recipe = require('../exercises/recipe');

describe('Witch', function () {
  it('should be a function', function () {
    assert.isFunction(Witch);
  });

  it('should instantiate a Witch', function () {
    var witch = new Witch();
    assert.isObject(witch);
  });

  it('should have a name', function () {
    var witch = new Witch('Helga');
    assert.equal(witch.name, 'Helga')
  });

  it('should start with an empty pantry', function () {
    var witch = new Witch('Helga');
    assert.deepEqual(witch.pantry, {})
  });

  it('should be able to collect ingredients', function () {
    var witch = new Witch('Helga');
    witch.collect('frog eyes', 10)
    assert.deepEqual(witch.pantry, { 'frog eyes': 10 })
  });

  it('should be able to add to existing stock', function () {
    var witch = new Witch('Helga');
    witch.collect('frog eyes', 10);
    witch.collect('frog eyes', 5);
    assert.deepEqual(witch.pantry, { 'frog eyes': 15 });
  });

  it('should be able to collect multiple ingredients', function () {
    var witch = new Witch('Helga');
    witch.collect('frog eyes', 10);
    witch.collect('lizard tongues', 5);
    assert.deepEqual(witch.pantry, { 'frog eyes': 10, 'lizard tongues': 5 });
  });

  it('should start with no recipes', function () {
    var witch = new Witch('Helga');
    assert.deepEqual(witch.recipes, [])
  });

  it('should learn new recipes', function () {
    var witch = new Witch('Helga');
    var ingredients = { 'swamp water': 5, 'frog eyes': 10, 'dragon scales': 6 };
    var recipe1 = new Recipe('Shrinking Potion', ingredients);
    var recipe2 = new Recipe('Plain Water', { 'water': 1 })

    assert.equal(witch.learnRecipe(recipe1), 'Learned: Shrinking Potion');
    assert.deepEqual(witch.recipes, [recipe1]);

    assert.equal(witch.learnRecipe(recipe2), 'Learned: Plain Water');
    assert.deepEqual(witch.recipes, [recipe1, recipe2]);
  });

  it('should not learn multiple instances of recipe with same name', function () {
    var witch = new Witch('Helga');
    var recipe = new Recipe('Plain Water', { 'water': 1 })

    witch.learnRecipe(recipe);
    assert.equal(witch.learnRecipe(recipe), 'Already know: Plain Water');
  });

  it('should be able to make potions if she has the ingredients', function () {
    var witch = new Witch('Helga');
    var ingredients = { 'swamp water': 5, 'frog eyes': 10, 'dragon scales': 6 };
    var recipe = new Recipe('Shrinking Potion', ingredients);

    witch.learnRecipe(recipe);
    witch.collect('swamp water', 20);
    witch.collect('frog eyes', 20);
    witch.collect('dragon scales', 20);

    assert.deepEqual(witch.potions, {})

    assert.equal(witch.brewPotion(recipe), 'Brewed 1 Shrinking Potion');
    assert.deepEqual(witch.potions, { 'Shrinking Potion': 1 })

    witch.brewPotion(recipe);
    assert.deepEqual(witch.potions, { 'Shrinking Potion': 2 })
  });

  it('cannot brew the potion if the recipe is unknown', function () {
    var witch = new Witch('Helga');
    var recipe = new Recipe('Love Potion');

    let result = witch.brewPotion(recipe);
    assert.equal(result, "Don't know recipe: Love Potion");
  });

  it('brewing a potion reduces pantry stock', function () {
    var witch = new Witch('Helga');
    var ingredients = { 'swamp water': 5, 'frog eyes': 10, 'dragon scales': 6 };
    var recipe = new Recipe('Shrinking Potion', ingredients);

    witch.learnRecipe(recipe);
    witch.collect('swamp water', 20);
    witch.collect('frog eyes', 20);
    witch.collect('dragon scales', 20);

    witch.brewPotion(recipe);
    assert.equal(witch.pantry['swamp water'], 15);
    assert.equal(witch.pantry['frog eyes'], 10);
    assert.equal(witch.pantry['dragon scales'], 14);
  });

  it('cannot brew a potion without sufficient ingredients', function () {
    var witch = new Witch('Helga');
    var ingredients = { 'swamp water': 5, 'frog eyes': 10, 'dragon scales': 6 };
    var recipe = new Recipe('Shrinking Potion', ingredients);

    witch.learnRecipe(recipe);
    witch.collect('swamp water', 20);
    witch.collect('frog eyes', 5);

    let message = "Not enough ingredients. Need: (5 frog eyes) (6 dragon scales)"
    assert.equal(witch.brewPotion(recipe), message)
  });
});

describe('Recipe', function () {
  it('should be a function', function () {
    assert.isFunction(Recipe);
  });

  it('should instantiate a Recipe', function () {
    var recipe = new Recipe();
    assert.isObject(recipe);
  });

  it('should have a name', function () {
    var recipe = new Recipe('Shrinking Potion');
    assert.equal(recipe.name, 'Shrinking Potion');
  });

  it('should have ingredients', function () {
    var ingredients = { 'swamp water': 5, 'frog eyes': 10, 'dragon scales': 6 };
    var recipe = new Recipe('Shrinking Potion', ingredients);
    assert.deepEqual(recipe.ingredients, ingredients)
  });
});