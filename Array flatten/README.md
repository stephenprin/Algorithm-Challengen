TASK DESCRIPTION

 Devise a function that accepts an arbitrarily-nested array with elements of arbitrary types, and returns a flattened version of it. Do not solve the task using a built-in function that can accomplish the whole task on its own. 
 Example:
 flattenList(["This is a string", 1, 2, [3], [4, [5, 6]], [[7]], 8, "[10, 11]"]) ["This is a string", 1, 2, 3, 4, 5, 6, 7, 8, "[10, 11]"] flattenList([1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10]) [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9, 10]

flattenList([1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10, [[[11], 12]]]) [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9, 10, 11, 12] // flattenList([1, "a", "b", [ "c", ["d",2 ] ], "e", [ [ [ "f" ] ] ] ]) // [ 1, "a", "b", "c", "d", 2, "e", "f" ] //flattenedArray([1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10])
flattenedArray(["This is a string", 1, 2, [3], [4, [5, 6]], [[7]], 8, "[10, 11]"])
flattenedArray([1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10])
flattenedArray([1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10, [[[11], 12]]])
flattenedArray([1, "a", "b", [ "c", ["d",2 ] ], "e", [ [ [ "f" ] ] ] ])