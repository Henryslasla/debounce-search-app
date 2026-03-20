import { useEffect, useState } from "react";
import useDebounce from "../Hooks/useDebounce";

function DebounceSearch() {
  // Input state (updates on every keystroke)
  const [query, setQuery] = useState("");

  // Debounced value (updates after delay)
  const debouncedQuery = useDebounce(query, 500);

  // API data + loading state
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Avoid API call for empty input
    if (!debouncedQuery) return;
    // AbortController to cancel previous requests
    const controller = new AbortController();
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/search/users?q=${debouncedQuery}`, { signal: controller.signal });
        const data = await res.json();
        // Update results safely
        setResults(data.items || []);
        // Ignore abort errors, log others
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    // Cleanup: cancel previous API request
    return () => controller.abort();
  }, [debouncedQuery]);
  return (
    <div>
      <input type='text' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
      {/* No results state */}
      {loading && <p>Loading...</p>}
      {!loading && results.length === 0 && debouncedQuery && <p>No results found</p>}
      {/* Results list */}
      <ul>
        {results.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} width='30' alt={user.login} />
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DebounceSearch;
