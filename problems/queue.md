Queue Implementation With TDD
===

Requirements:
* A queue is empty on construction
* A queue has size 0 on construction
* After n pushes to an empty queue (n > 0), the queue is non-empty and its size equals n
* After push 1,2,3 respectively, the elements order in the queue must be [1,2,3]
* If queue initial elements are [1,2,3] then pops, the value popped is 1 and its size is one less than old size
* If queue initial elements are [1,2,3] then peeks, the value popped is 1 and its size stays the same
* If the size is n, then after n pops, the queue is empty and has size 0
* Popping from an empty queue return an error: 'No such element'
* Peeking into an empty queue return an error: 'No such element'