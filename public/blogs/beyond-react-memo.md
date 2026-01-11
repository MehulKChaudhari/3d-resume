Most React developers know about React.memo(), but treating it as a silver bullet for performance issues is a common mistake I see in production code. While React.memo() can be useful, it's just one tool in what should be a comprehensive optimization strategy.

## The Limitations of React.memo

`React.memo` is a higher-order component that prevents unnecessary re-renders when props haven't changed. While useful, it's just one tool in what should be a comprehensive optimization strategy.

```jsx
const MemoizedComponent = React.memo(MyComponent);
```

Its limitations:

* Performs shallow comparison of props by default
* Doesn't help with components that use context
* Won't prevent re-renders when a parent component re-renders
* Adds overhead for components that rarely receive the same props

## Strategic Optimization Techniques

### 1. Component Structure Matters

Often, the most effective optimization is restructuring components:

```jsx
// Before: ExpensiveList re-renders when count changes
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveList items={items} />
    </div>
  );
}

// After: Isolated state changes
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <ExpensiveList items={items} />
    </div>
  );
}
```

By extracting the changing parts into separate components, we prevent expensive re-renders when unrelated state changes.

### 2. State Placement

Place state as close as possible to where it's used:

```jsx
// Instead of this at app level
function App() {
  const [userSettings, setUserSettings] = useState({...});
  // Many nested components later...
  return <DeepNestedTree userSettings={userSettings} />;
}

// Place state closer to usage
function UserSettingsSection() {
  const [userSettings, setUserSettings] = useState({...});
  return <SettingsPanel settings={userSettings} />;
}
```

### 3. Effective Use of useCallback

When passing functions as props, use proper dependency arrays:

```jsx
// Ineffective - creates new function too often
const handleSubmit = useCallback(() => {
  submitData(formData);
}, [formData]); // formData is an object changing frequently

// More effective - stabilize dependencies
const formId = formData.id; // Extract primitive values
const handleSubmit = useCallback(() => {
  const currentData = getCurrentFormData(); // Get latest within callback
  submitData(currentData);
}, [formId]); // Depends only on ID, not entire object
```

### 4. Split Context by Update Frequency

Context triggers re-renders for all consumers when its value changes:

```jsx
// Instead of one large context
const AppContext = createContext({
  user: {},         // Changes rarely
  theme: {},        // Changes occasionally
  notifications: [] // Changes frequently
});

// Split by update frequency
const UserContext = createContext();
const ThemeContext = createContext();
const NotificationContext = createContext();
```

### 5. Windowing for Long Lists

For long lists, implement a basic windowing approach with React's core features:

```jsx
function SimpleWindowedList({ items, windowSize = 10 }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = items.slice(startIndex, startIndex + windowSize);
  
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const newIndex = Math.floor(scrollTop / 50); // 50px item height
    setStartIndex(Math.max(0, newIndex));
  };
  
  return (
    <div 
      style={{ height: '500px', overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: `${items.length * 50}px`, position: 'relative' }}>
        {visibleItems.map((item, index) => (
          <div 
            key={item.id}
            style={{
              position: 'absolute',
              top: `${(startIndex + index) * 50}px`,
              height: '50px'
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 6. Measure First, Optimize Later

Performance optimization should be data-driven. Use React DevTools Profiler:

1. Record renders during a slow interaction
2. Identify components that render too frequently
3. Look for components with long render times
4. Optimize the biggest bottlenecks first

## When React.memo Makes Sense

After applying structural optimizations, selectively use `React.memo` for:

* Pure components that render frequently
* Components that receive the same props often
* Expensive components deep in the tree

Use custom comparison for complex props:

```jsx
const MemoizedComponent = React.memo(MyComponent, (prev, next) => {
  return prev.item.id === next.item.id;
});
```

## Conclusion

Effective React optimisation is about strategy, not just applying `memo` everywhere. Start with component structure and state placement, then measure and apply targeted optimisation where it matters most.

What performance optimisation techniques have you found most effective in your React applications?

