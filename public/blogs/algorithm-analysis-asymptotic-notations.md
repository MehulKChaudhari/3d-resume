Hey folks, In this blog I am explaining types of analysis of algorithms and whats are asymptotic notations. 

As we know we have algorithms in computer science, which are needed to analyze. we need to know with which inputs algorithm takes less time and with which inputs it takes a long time. We represent the given algorithm in multiple expressions. Like the expression for the case where the algorithm takes less time and the case in which the algorithm takes a long time, the case in which the algorithm takes less time is called the best case, And the case which takes a long time is called the worst case. To analyze an algorithm, we need syntax and the forms that can be based on asymptotic analysis/notations. There are three types of analysis Worst case, the Best case, Average case.

# **Types of Analysis**

## 1) Worst case:

   - Defines the inputs in which the algorithm takes more time to complete.

   - Input is the one by which the algorithm runs slowest.

 
## 2) Best case:

   - Defines the inputs for which algorithm takes the least time to complete.

   - Inputs are the ones for which the algorithm runs fastest.
 

## 3) Average case:

   - Provides a prediction about the running time of the algorithm.

   - Runs algorithm many times with different inputs that come from some distribution that generates these inputs. And compute the running time.



# **Asymptotic Notations**

## 1)    Big -O Notation:

This notation gives the tight upper bound of the function of a given algorithm, we generally represent it as f(n) = O(g(n)). This means that at larger values of n, the upper bound of f(n) is g(n). for eg f(n) = 10n4 + 32n2+ 10n+50 is the given algorithm, then n4 is g(n). That means g(n) gives the maximum rate of growth of function f(n) at larger values of n.

(X-axis is input sizes (n) and Y-axis is the rate of growth)

![image.png](/blogs/images/big-o-notation.png)

##### Note: Only analyze an algorithm for larger values of n, means below n<sub>0</sub> we don't care about the rate of growth.

## 2)    Omega-Ω Notation:

This notation gives tighter lower bound of given algorithm and we can represent it as f(n) = Ω(g(n)). Means at the larger values of n, the tighter lower bound of f(n) is g(n). for eg f(n) = 32n2 + 10n + 50, g(n) is Ω(n2)

![image.png](/blogs/images/omega-notation.png)

## 3)    Theta-θ Notation:

This notation decides whether the upper and lower bound of the function of a given algorithm are the same or not. The average running time of an algorithm is always in between of upper and lower bound. If upper (O) and lower (Ω) give the same result then θ notation will also have the same rate of growth. For eg f(n) = 10n + 50 then its tight upper bound g(n) is O(n) and the rate of growth in best case is g(n) = O(n).

![theta.webp](/blogs/images/theta-notation.webp)

In this case, the rate of growth of both the best case and worst case is the same So as a result, the average case will also be the same.

If for the, given algorithm if the rate of growth (upper and lower bound) for O and Ω are not the same. Then for the rate of growth of θ case will not be the same. In such cases, we take all the possible time complexities and take the average of those for the result (rate of growth for θ case).

Now consider The definition of θ case, It is defined as Θ(g(n)) = {f(n): there exists positive constants c1,c2 and n0 such that 0 <= c1g(n) <= f(n) <= c2g(n) for all n => n0 }. g(n) is an asymptotic tight bound for f(n). θ(g(n)) is the set of functions with the same order of growth as g(n).

