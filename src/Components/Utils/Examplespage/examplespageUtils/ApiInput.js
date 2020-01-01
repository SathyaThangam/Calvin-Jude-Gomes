import React from 'react'

class ApiInput extends React.Component {


    state = {
        Title: '',
        Year: '',
        Plot: '',
        Response: '',
        Link: null,
        Reply: null
    }

    onChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmitClickHandler = event => {
        event.preventDefault();

        let link = 'http://www.omdbapi.com/?';
        const apiKey = 'apikey=f1578aa8';

        let t = '';
        let y = '';
        let p = '';
        let r = '';
        if (this.state.Title) {
            t = 't=' + this.state.Title + '&';
            link += t;
        }
        if (this.state.Year) {
            y = 'y=' + this.state.Year + '&';
            link += y;
        }
        if (this.state.Plot) {
            p = 'plot=' + this.state.Plot + '&';
            link += p;
        }
        if (this.state.Response) {
            r = 'r=' + this.state.Response + '&';
            link += r;
        }
        link += apiKey;
        this.setState({
            Link: link
        })

        fetch(link)
            .then(res => {
                if (this.state.Response === 'JSON')
                    return res.json()
                else
                    return res.text()
            })
            .then(
                (result) => {
                    this.setState({
                        Reply: result
                    });
                }
            )
    }

    onResetClickHandler = event => {
        this.setState({
            Title: '',
            Year: '',
            Plot: '',
            Response: '',
            Link: null,
            Reply: null
        });
        console.log(this.state);
    }

    render() {
        const { SubHeading } = this.props;
        const styles = {
            paddingBottom: {
                'paddingBottom': '30px'
            },
            marginTop: {
                'marginTop': '30px'
            }
        }
        const { Title, Year, Plot, Response, Link, Reply } = this.state;
        return (
            <div>
                <div className="container">
                    <h3 style={styles.paddingBottom}>By {SubHeading}</h3>
                    <form className="row">
                        <div className="form-group" style={{ 'marginRight': '10px' }}>
                            <label htmlFor="title">Title : </label>
                            <input type="text" className="form-control" id="title" name="Title" value={Title} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group" style={{ 'marginRight': '10px' }}>
                            <label htmlFor="year">Year : </label>
                            <input type="number" className="form-control" id="year" name="Year" value={Year} onChange={this.onChangeHandler} />
                        </div>
                        <div className="form-group" style={{ 'marginRight': '10px' }}>
                            <label htmlFor="plot">Plot :</label>
                            <select className="form-control" id="plot" name="Plot" value={Plot} onChange={this.onChangeHandler}>
                                <option>Short</option>
                                <option>Full</option>
                            </select>
                        </div>
                        <div className="form-group" style={{ 'marginRight': '10px' }}>
                            <label htmlFor="response">Response :</label>
                            <select className="form-control" id="response" name="Response" value={Response} onChange={this.onChangeHandler}>
                                <option>JSON</option>
                                <option>XML</option>
                            </select>
                        </div>
                        <div className="form-group" style={{ 'marginRight': '10px' }}>
                            <button className="btn btn-primary" style={styles.marginTop} type="submit" onClick={this.onSubmitClickHandler}>Search</button>
                        </div>
                        <div className="form-group" style={{ 'marginRight': '10px' }}>
                            <button className="btn btn-danger" style={styles.marginTop} type="button" onClick={this.onResetClickHandler}>Reset</button>
                        </div>
                    </form>
                </div>
                {Link === null ? null :
                    <div>
                        <div>
                            <p>Request : </p>
                            <a href={Link}>{Link}</a>
                        </div>
                        <div>
                            <p>Response : </p>
                            <p style={{ 'backgroundColor': 'tomato', 'padding': '30px' }}>{Reply}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ApiInput;