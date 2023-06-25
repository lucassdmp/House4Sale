import React from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter') || '';
    const location = searchParams.get('location') || '';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const inputLocation = form.elements.location.value;

        // Update the search params
        setSearchParams({ filter, location: inputLocation });
    };

    return (
        <form onSubmit={handleFormSubmit} className="ms-auto">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <img className="icon" src="./src/assets/location.png" alt="@" />
                </span>
                <input name="location" type="text" className="form-control" placeholder="Location" aria-label="Location" />
                <button type="submit" className="btn btn-dark">Search</button>
            </div>
        </form>
    );
}

export default FilterForm;
