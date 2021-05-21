import { Component } from 'react'
import Search from './search'
import Main from './main'

export default class App extends Component {
    state = {
        searchName: ''
    }
    // show () {
    //     console.log(this)
    //     this.setState({
    //       msg: '222'
    //     }, () => {
    //       console.log(this.state.msg) // 更新后的值222
    //     })
    //     console.log(this.state.msg) // 123
    //   }


    setSearchName = (searchName) => {
        let name=searchName
        this.setState({
            searchName: name
        },()=>{
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <Search setSearchName={this.setSearchName} />
                <Main searchName={this.state.searchName} />
            </div>
        )
    }
}