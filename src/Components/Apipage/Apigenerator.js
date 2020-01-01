import React from 'react'

export const Apigenerator = () => {
    return (
        <div style={{ 'height': '60vh' }}>
            <h1>API Key</h1>
            <form className="row">
                <div className="form-group">
                    <label htmlFor="title">Title : </label>
                    <input type="text" className="form-control" id="title" name="Title" />
                </div>
            </form>
        </div>
    )
}

export default Apigenerator;