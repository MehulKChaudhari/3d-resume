Hey Folks, You would have heard about algorithms in computer science, but do you know what they are actually and how we analyze algorithms.

*"Algorithmics is more than a branch of computer science. It is the core of computer science, and, in all fairness, can be said to be relevant to most of science, business, and technology." -David Harel*

In this blog, I'm going to explain to you what are algorithms in computer science, how we analyze them, I'll try to make series of blogs explaining some basic algorithms and analysis.

So let's get started

## What are the algorithms?

let us consider the problem of cooking a maggie. To cook a maggie, we need to follow some steps.

```xml
   1)  Get the utensil.
    2) Get the packet of maggie.
        a) Do we have a packet of maggie?
            i) If yes, start cooking maggie.
                (1) Take water in utensil start boiling it.
                (2) When water is boiled put maggie and masala in it.
            ii) If no, Do we want to buy maggie?
                (1) If yes, then go to the market and buy it.
                (2) If no, we can drop the plan.
```

What are we doing in this given problem(cooking maggie), we are providing a step-by-step procedure for solving it. The formal definition of an algorithm can be defined as:

An algorithm is a step-by-step unambiguous instruction to solve a given problem.

In the traditional study of algorithms there are two main criteria for judging the merits of algorithms: correctness (does the give solution to the problem in a finite number of steps?) and efficiency (how much resources (in terms of memory and time) does it take to execute the)

(Piece of information: we do not have to prove each step of the algorithm)

## Why the Analysis of Algorithms?

To go from city "P" to "Q", there can be many ways of accomplishing this: by flight, by bus, by train and also by bicycle. Depending on the availability and convenience, we choose the one that suits us. Similarly, In computer science, multiple algorithms are available to solve the same problem, for example, a sorting problem has many algorithms, like insertion sort, selection sort, quick sort, merge sort, and much more. But we cannot use any random algorithm to solve all the problems. We have to check for an efficient one. Analysis of the algorithms helps us to determine which algorithm is our most efficient one in terms of time and space consumed by that algorithm while sorting.

## Goals of the analysis of algorithms.

The goal of the analysis of algorithms is to compare algorithms (or solutions) mainly in terms of running time but also in terms of other factors (e.g. Memory, developer efforts, etc)

## What is running Time Analysis?

It is the process of determining how processing time increases as the size of the problems (input size) increases. The input size is the number of elements in the input, and depending on the problem type, the input may be of different types. The following are the common types of inputs.

```
1. Size of the array.
2. Polynomial degree.
3. Number of elements in a matrix.
4. Number of bits in the binary representation of the input.
5. Vertices and edges in a graph.
```

## How to Compare Algorithms?

To compare algorithms, let us define a few objective measures.

### Execution Times?

Not a good measure as execution times are specific to a particular computer.

### A number of statements executed?

Not a good measure, since the number of statements, varies with the programming language as well as the style of the individual programmer.

### Ideal solution?

Let us assume that we express the running time of a given as a function of the input size n (i.e., f(n)) and compare these different functions corresponding to running times. This kind of comparison is independent of machine time, programming style, etc.

### What is the Rate of Growth?

The rate at which the running time increases as a function of input is called the rate of growth. Let us assume that you go to a shop to buy a motorcycle and a bicycle. If your friend sees you there and asks what are you buying, then in general you say a motorcycle. This is because the cost of the motorcycle is high compared to the cost of the bicycle (approximating the cost of the bicycle to the cost of the car).

```xml
Total Cost  =  cost_of_motorcylce + cost_of_bicycle
```

```xml
Total Cost ≈ cost_of_motorcycle (approximation)
```

For the above-mentioned example, we can represent the cost of the car and the cost of the bicycle in terms of function, and for a given function ignore the low order terms that are relatively insignificant (for large value of input size, n). As an example, in the case below,

X^4 + 4X^2 + 50X + 700 ≈ X^4

## Commonly used Rate Of Growth:

These are some commonly used growth rates.

| Time Complexity | Name               | Example                                              |
| --------------- | ------------------ | ---------------------------------------------------- |
| 1               | Constant           | Adding an element to the front of a linked list.     |
| Logn            | Logarithmic        | Finding an element in a sorted array.                |
| n               | Linear             | Finding an element in an unsorted array.             |
| nlogn           | Linear Logarithmic | Sorting in items by 'divide and conquer' -Merge Sort |
| n²              | Quadratic          | Shortest path between two nodes in a graph.          |
| n³              | Cubic              | Matrix Multiplication.                               |
| 2<sup>n</sup>   | Exponential        | The tower of Hanoi Problem                           |

