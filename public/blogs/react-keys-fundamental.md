So many years into React, so many blogs out there, still we miss out on these basic things. Recently, while working on a big freelance React project, I saw they were using `key=list-element-${randomGeneratorID()}` for their rendered lists. This pattern immediately caught my attention as something that needed fixing.

## The Problem with Random IDs as Keys

When you use randomly generated IDs like this:

```jsx
{items.map(item => (
  <div key={`list-element-${Math.random()}`}>{item.content}</div>
))}
```

You're completely undermining React's reconciliation process. Here's what happens:

Every time your component renders (which can be frequently), each item in your list gets a brand new random key. From React's perspective, all the previous components have disappeared, and entirely new components have taken their place.

This causes:

Destruction and recreation of components on every render

Loss of internal component state

Unnecessary DOM manipulations

Performance degradation, especially noticeable in larger applications

Potential bugs when the state disappears unexpectedly

## The Array Index Alternative (Also Problematic)

Another common approach is using array indices:

```jsx
{items.map((item, index) => (
  <li key={index}>{item.content}</li>
))}
```

While better than random IDs, this approach fails when:

Items can be reordered

Items can be inserted/removed from the middle of the list

The list gets filtered

In these cases, the index no longer corresponds to the same item across renders, causing similar issues to random IDs.

## What Makes an Effective Key?

A proper React key should be:

Persistent across renders for the same item

Unique within the list

Stable regardless of item position or filtering

## The Right Solution

The correct approach uses stable identifiers that are intrinsic to your data:

```jsx
{items.map(item => (
  <li key={item.id}>{item.content}</li>
))}
```

When your data doesn't have natural unique identifiers, generate them when the items are created, not during rendering:

```jsx
const itemsWithIds = receivedItems.map(item => ({
  ...item,
  id: generateUniqueId()
}));

// Then in your render function
{itemsWithIds.map(item => (
  <li key={item.id}>{item.content}</li>
))}
```

## Real Impact

Using stable keys instead of random ID's significantly improves React's reconciliation process. The application performs better, components maintain their state correctly, and React can efficiently update only what has changed.

This isn't just theoretical. Proper key management directly impacts performance, stability, and users' experience of your React applications.

What other fundamental React patterns have you seen being overlooked in production code?

Happy Coding!
Mehul
