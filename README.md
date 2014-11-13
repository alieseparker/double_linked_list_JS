
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

# binary tree

To build a binary tree we had to make a node that has a value, and a pointer
to the left and to the right.
When adding a new node we traverse the tree by comparing our new nodes value
to the value of each node we encounter starting at the head.  If the new value
less we go to the left, if it's more we go to the right.

In order to calculate the depth I thought it might be handy for each node to be
aware of where it is in the tree.  If we add a new node that has a greater depth
we can update our tot_depth variable.

For balance, we only care if a new node is being placed left of the head or right
of the head so the simplist way to calculate this is to keep track of the balance
as we add new nodes.

## Contributors:
Clare Constantine
http://en.wikipedia.org/wiki/Tree_traversal