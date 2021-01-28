import React from 'react'

export default function Breadcrumb() {
    return (
        <>
        <div className="mt-4 mb-4">
            <a className="custom-link-black" href="/">
                <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                <span className="ml-2">Go back</span>
            </a>
        </div>
    </>
  );
}