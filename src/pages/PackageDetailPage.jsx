import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PackageDetailPage = () => {
    const { packageName } = useParams(); // Extracts the package name from the route parameters
    const [packageInfo, setPackageInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch package info from the NPM registry when the component loads or the package name changes
    useEffect(() => {
        const fetchPackageInfo = async () => {
            try {
                const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
                setPackageInfo(response.data);
            } catch (err) {
                setError('An error occurred while fetching package information. Please try again.');
                console.error('Package info fetch error:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPackageInfo();
    }, [packageName]);

    if (isLoading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;
    if (!packageInfo) return null;

    const latestVersion = packageInfo['dist-tags'].latest;


    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">{packageInfo.name}</h1>
            <p className="text-xl mb-4">{packageInfo.description}</p>
            <div className="bg-white p-3 md:p-6 rounded-md shadow mb-8">
                <h2 className="text-2xl font-semibold mb-4">Latest Version: {latestVersion}</h2>
                <p className="mb-2"><strong>License:</strong> {packageInfo.license || 'Not specified'}</p>
                <p className="mb-2"><strong>Homepage:</strong> <Link to={packageInfo.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm md:text-base hover:underline">{packageInfo.homepage}</Link></p>
                <p className=""><strong>Repository:</strong> <Link to={packageInfo.repository.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm md:text-base hover:underline">{packageInfo.repository.url}</Link></p>
            </div>
            <h3 className="text-xl font-semibold mb-4">All Versions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.keys(packageInfo.versions).reverse().map((version) => (
                    <Link
                        key={version}
                        to={`/package/${packageName}/v/${version}`}
                        className="bg-white p-4 rounded-md shadow text-center hover:shadow-md transition-shadow"
                    >
                        {version}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PackageDetailPage;