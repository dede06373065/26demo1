import { Component } from 'react'
import PropTypes from 'prop-types'
export default class Search extends Component {
    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    }
    search = () => {
        //get input 
        const searchName = this.input.value.trim()
        // alert(searchName)
        if (searchName) {
            this.props.setSearchName(searchName)
        }
    }
    render() {
        return (
            <div className="header">
                <h1>Search Github Users</h1>
                <form className="form-inline">
                    <div className="form-group">
                        <label form="exampleInputName2"></label>
                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" ref={input => this.input = input} />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.search}>Search</button>
                </form>
            </div>
        )
    }

}