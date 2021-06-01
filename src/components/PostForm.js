import React, { Component } from "react"
import { connect } from "react-redux"
import { createPost, fetchPost } from "../actions/postsAction"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Posts } from "./Posts"

export class PostForm extends Component {
  constructor(props) {
    super()
    this.state = {
      post: {
        title: "",
        body: "",
      },
    }
    // PostForm.PropTypes = {
    //   createPost: PropTypes.func.isRequired,
    // }
    this.onchange = this.onchange.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
  }
  onchange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onsubmit(e) {
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body,
    }
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json; charset=UTF-8",
    //   },
    //   body: JSON.stringify(post),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    console.log(post)

    this.props.createPost(post)
    // this.props.fetchPost()
  }
  render() {
    return (
      <form onSubmit={this.onsubmit}>
        <div>
          <h1>Post-Form</h1>
          <label>Post</label>
          <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onchange}
          ></input>
        </div>
        <div>
          <label>Content</label>
          <br />
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.onchange}
          ></textarea>
        </div>
        {/* <Link to="/dashboard" component={Posts}> */}
        {/* <Link to="/dashboard"> */}{" "}
        <button onSubmit={this.onsubmit}>Submit</button>
        {/* </Link> */}
        {/* </Link> */}
        <br />
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.item,
})

export default connect(mapStateToProps, { createPost, fetchPost })(PostForm)
