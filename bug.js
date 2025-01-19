```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the component mounts.
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    // Incorrect asynchronous operation within the state update
    setTimeout(() => {
      setCount(prevCount => prevCount + 1); // This will not render correctly
    }, 0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```