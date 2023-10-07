# Cocktail API Search

## Packages

- requests 2.31.0
- json
- sys

Run the following to install required 3rd party packages
```
pip install -r requirements.txt
```

## Running the project

In CLI, run
```
python3 cocktail.py 'name of drink'
```
Eg, 
```
python3 cocktail.py malibu
```

The program checks that the user has included an argument in the CLI (the name of a drink). If not, the program exits and the user is instructed to include an argument. The 'sys' package is used to check the CLI argument and exit the program. 

If an argument is included, python attempts to fetch the relevent data from the API. This is accomplished using the 3rd party package, 'requests'. If the drink does not exist, then a TypeError is raised and the user is alerted that no drink was found. The program exits.

If a drink is found, the programme searches the data for the relevant information by looping over each key/value in the 'keys' dict, and appending the results to a new dictionary - 'results'

A separate loop occurs in order to append a nested dict (ingredients) to the results.

Finally, 'results.json' is created in 'write' mode, and the results written to this file. The user is then alerted that the search was successful. 




