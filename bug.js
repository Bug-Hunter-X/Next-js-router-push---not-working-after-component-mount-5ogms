```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/my-page');
    // ... other logic ...
  };
  return (
    <button onClick={handleClick}>
      Go to My Page
    </button>
  );
}
```