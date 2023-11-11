import { useRef, useState } from "react";
import List from './List';

const Search = () => {
    const [results, setResults] = useState([]);
    const textRef = useRef();
    const handleSearch = async () => {
        const value = textRef.current.value;
        const apiKey = 'Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g';
        const response = await fetch(`https://api.giphy.com/v1/channels/search?q=${value}&api_key=${apiKey}`, { method: "GET" });
        const result = await response.json();
        setResults(result.data);
    }
    return (
        <>
            <div><input type="text" ref={textRef} />&nbsp;
            <button onClick={handleSearch}>Search</button></div>
            <List results={results}/>
        </>
    )
}

export default Search;