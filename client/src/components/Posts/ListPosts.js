import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AddPost from "./AddPost";
import Post from "./Post";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";
import LoadingPosts from "../Posts/LoadingPosts";

class ListPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: true
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getPosts();
  }

  handleChange(event) {
    this.setState({ allPosts: event.target.checked });
  }

  render() {
    const { list, loading } = this.props;
    const { allPosts } = this.state;
    const items = list && list.map(el => <Post key={el._id} post={el} />);
    return (
      <div>
        <AddPost />
        <FormControlLabel
          control={<Switch checked={allPosts} onChange={this.handleChange} />}
          label={allPosts ? "All Posts" : "From following users"}
        />
        {loading ? <LoadingPosts /> : items}
        <Post />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.post.list,
  loading: state.post.loading
});

export default connect(mapStateToProps, { getPosts })(ListPost);
