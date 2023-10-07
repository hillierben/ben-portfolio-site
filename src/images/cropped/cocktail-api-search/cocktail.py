import json
import requests
import sys

# check user has input name of drink
if len(sys.argv) < 2:
  print('Please enter name of drink as argument')
  sys.exit(1)

drink = sys.argv[1]

try:
  # fetch from api
  response = requests.get(f"https://www.thecocktaildb.com/api/json/v1/1/search.php?s={drink}")

  # raise error is no drink exists
  if response.json() == {'drinks': None}:
    raise TypeError

  # convert response to JSON
  details = response.json()

  # dict of keys to loop over
  keys = {
    'Id':'idDrink', 
    'Name': 'strDrink', 
    'Category': 'strCategory', 
    'Alcoholic':'strAlcoholic', 
    'Glass': 'strGlass', 
    'Instructions': 'strInstructions', 
    'Thumbnail':'strDrinkThumb', 
    'Date Modified': 'dateModified'
  }

  # declare results dict to store drink details
  results = {}

  # loop over relevant keys and add to results dict
  for key, value in keys.items():
    results[key] = details['drinks'][0][value]

  # loop over ingredients and measures, while NOT null
  ingredients = {}
  for i in range(1,15):
    ingredient = details['drinks'][0][f'strIngredient{str(i)}']
    measure = details['drinks'][0][f'strMeasure{str(i)}']
    if ingredient == None:
      break
    else:
      ingredients[ingredient] = measure

  # append ingredients to result dict
  results['Ingredients'] = ingredients

  # write results to json file
  with open('results.json', 'w') as file:
    json.dump(results, file, indent=4)

  print("Drink found 👍 Check results.json")
  sys.exit(0)

except TypeError:
  print('Could not find drink 🥴 Please try again')
  sys.exit(1)





