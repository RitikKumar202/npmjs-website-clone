import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]); // State to store search results
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Effect to trigger search when URL query changes
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('q'); // Extract the 'q' query parameter

        if (query) {
            performSearch(query);
        }
    }, [location.search]);

    // Function to perform the search using npm's registry API
    const performSearch = async (query) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${query}`);
            setSearchResults(response.data.objects); // Store the search results in the state
        } catch (err) {
            setError('An error occurred while searching. Please try again.');
            console.error('Search error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-xl text-center md:text-left font-bold mb-8">Search Results</h1>

            {isLoading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}

            {searchResults.length > 0 && (
                <div className="space-y-6">
                    {searchResults.map((result) => (
                        <div
                            key={result.package.name}
                            className="bg-white py-6 px-3 border-b-2"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2
                                        className="text-xl font-semibold hover:underline cursor-pointer"
                                        onClick={() => navigate(`/package/${result.package.name}`)}
                                    >
                                        {result.package.name}
                                    </h2>
                                </div>
                            </div>
                            <p className="mt-2 text-gray-600">{result.package.description}</p>
                            {result.package.keywords && result.package.keywords.length > 0 && (
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {result.package.keywords.map((keyword, index) => (
                                            <span key={index} className="px-2 py-1 bg-[#0000000d] text-gray-700 text-xs rounded-sm">
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex gap-2 items-center mt-5">
                                {result.package.publisher && (
                                    <a
                                        href={`https://www.npmjs.com/~${result.package.publisher.username}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center hover:underline"
                                    >
                                        <img
                                            src={`https://www.npmjs.com/${result.package.publisher.username}`}
                                            alt={result.package.publisher.username}
                                            className="w-5 h-5 mr-2"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://www.gravatar.com/avatar/${result.package.publisher.email_md5}?s=20&d=retro`;
                                            }}
                                        />
                                        <span className="text-sm text-gray-900">{result.package.publisher.username}</span>
                                    </a>
                                )}
                                <p className="text-sm text-gray-600">v{result.package.version}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {searchResults.length === 0 && !isLoading && (
                <p className="text-center text-gray-600">No results found. Try a different search term.</p>
            )}
        </div>
    );
};

export default SearchPage;