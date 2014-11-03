
# dedupe method with auxiliary data structure:

I used an array as my auxiliary data structure because it allows me to
refer to the index to check if the number I'm looking at has been seen yet.
Each check is O(1), and since I go through the list once, the complexity of
this algorithm in O(n).


# dedupe without auxiliary data structure:

To do this without an auxiliary data structure, the complexity is O(n^2).
You start with the value of the first node as a reference, and compare it
to every other node in the list, removing any that have the same value.
You do this for every node.


## Contributors:
Clare Constantine