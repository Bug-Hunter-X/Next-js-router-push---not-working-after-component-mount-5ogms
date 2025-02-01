```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    // Simulate an asynchronous operation
    const delayedNavigation = setTimeout(() => {
      router.push('/my-page');
    }, 1000);

    return () => clearTimeout(delayedNavigation);
  }, []);

  return (
    <button>
      Go to My Page (After 1 second)
    </button>
  );
}

export default MyComponent;
```