import {useState} from 'react';


function Card({ sight }) {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className="max-w-sm rounded-lg shadow-lg bg-white m-4 overflow-hidden">
            <h2 className="text-xl font-bold p-4 text-gray-800">{sight.sightName}</h2>
            <img 
                src={sight.photoURL} 
                alt={sight.sightName} 
                className="w-full h-48 object-cover" 
            />
            <div className="p-4 space-y-2">
                <p className="text-gray-600">區域: {sight.zone}</p>
                <p className="text-gray-600">類別: {sight.category}</p>
                <p className="text-gray-600">地址: {sight.address}</p>
                <button 
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    onClick={() => setShowDescription(!showDescription)}
                >
                    {showDescription ? '隱藏描述' : '顯示描述'}
                </button>
                {showDescription && (
                    <p className="mt-4 p-3 bg-gray-50 rounded-md text-gray-700">
                        {sight.description ? sight.description : '無描述'}
                    </p>
                )}
            </div>
        </div>
  ) 
}

export default Card;