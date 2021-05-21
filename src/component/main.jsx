import { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
export default class Main extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    //component receive new props
    componentWillReceiveProps(newProps) {

        //new searchName,need request
        const { searchName } = newProps

        //update state(loading)
        this.setState({
            initView: false,
            loading: true
        })
        //send request
        const url = `https://api.github.com/search/users?q=${searchName}`
        alert(url)
        axios.get(url)
            .then(response => {//get data
                const result = response.data
                console.log(result)
                const users = result.items.map(item => {
                    return {
                        name:item.login,
                        url:item.html_url,
                        avatarUrl:item.avatar_url

                    }
                })

                this.setState({
                    loading: false,
                    users
                })
                //update state
            }).catch(error => {
                //update fail
                this.setState({
                    loading: false,
                    errorMsg: 'error!'
                })

            })
    }
    render() {
        const { initView, loading, users, errorMsg } = this.state
        const { searchName } = this.props
        console.log('render()', searchName)
        if (initView) {
            return <h2>Please input your message!{searchName}</h2>
        } else if (loading) {
            return <h2>Loading....</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank" >
                                    <img src={user.avatarUrl} style={{ width: 100 }} alt="user_photo" />
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>

                        ))
                    }

                </div>
            )
        }
    }
}