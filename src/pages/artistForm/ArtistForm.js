import React, { useState } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';

const ArtistForum = () => {
    const [selectedReviews, setSelectedReviews] = useState([]);

    const handleReviewSelection = (review) => {
        if (selectedReviews.includes(review)) {
            setSelectedReviews(selectedReviews.filter((r) => r !== review));
        } else {
            setSelectedReviews([...selectedReviews, review]);
        }
    };

    return (
        <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the Artist Forum</h1>
                <form className="grid grid-cols-1 gap-6">
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="discipline" className="block font-medium text-gray-700 mb-2">
                            Discipline
                        </label>
                        <select
                            id="discipline"
                            name="discipline"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="">Select a discipline</option>
                            <option value="painting">Painting</option>
                            <option value="photography">Photography</option>
                            <option value="dance">Dance</option>
                            <option value="videographer">Videographer</option>
                            <option value="acting-coach">Acting Coach</option>
                            <option value="voice-coach">Voice Coach</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-2">
                            You would like to earn money as a (Select one or more)
                        </label>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {selectedReviews.map((review) => (
                                <div
                                    key={review}
                                    className="bg-indigo-500 text-white px-3 py-1 rounded-full flex items-center space-x-2"
                                >
                                    <span>{review}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleReviewSelection(review)}
                                        className="text-white hover:text-gray-200 focus:outline-none"
                                    >
                                        <XIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="critique"
                                    name="critique"
                                    className="form-checkbox h-5 w-5 text-indigo-500 focus:ring-indigo-500"
                                    checked={selectedReviews.includes('Critique')}
                                    onChange={() => handleReviewSelection('Critique')}
                                />
                                <label htmlFor="critique" className="text-gray-700">
                                    Critique
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="competition-commentary"
                                    name="competition-commentary"
                                    className="form-checkbox h-5 w-5 text-indigo-500 focus:ring-indigo-500"
                                    checked={selectedReviews.includes('Competition/Commentary')}
                                    onChange={() => handleReviewSelection('Competition/Commentary')}
                                />
                                <label htmlFor="competition-commentary" className="text-gray-700">
                                    Competition/Commentary
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="event-choreography"
                                    name="event-choreography"
                                    className="form-checkbox h-5 w-5 text-indigo-500 focus:ring-indigo-500"
                                    checked={selectedReviews.includes('Event Choreography')}
                                    onChange={() => handleReviewSelection('Event Choreography')}
                                />
                                <label htmlFor="event-choreography" className="text-gray-700">
                                    Event Choreography
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="master-classes"
                                    name="master-classes"
                                    className="form-checkbox h-5 w-5 text-indigo-500 focus:ring-indigo-500"
                                    checked={selectedReviews.includes('Master Classes')}
                                    onChange={() => handleReviewSelection('Master Classes')}
                                />
                                <label htmlFor="master-classes" className="text-gray-700">
                                    Master Classes
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="private-classes"
                                    name="private-classes"
                                    className="form-checkbox h-5 w-5 text-indigo-500 focus:ring-indigo-500"
                                    checked={selectedReviews.includes('Private Classes')}
                                    onChange={() => handleReviewSelection('Private Classes')}
                                />
                                <label htmlFor="private-classes" className="text-gray-700">
                                    Private Classes
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="voice-coach"
                                    name="voice-coach"
                                    className="form-checkbox h-5 w-5 text-indigo-500 focus:ring-indigo-500"
                                    checked={selectedReviews.includes('Voice Coach')}
                                    onChange={() => handleReviewSelection('Voice Coach')}
                                />
                                <label htmlFor="voice-coach" className="text-gray-700">
                                    Voice Coach
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="website" className="block font-medium text-gray-700 mb-2">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ArtistForum;