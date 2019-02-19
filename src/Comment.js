import React, { Component } from 'react';

// export class so it can be used in other files
export default class Comment extends Component {
    render() {
        return (
            // unpack variable values directly (in parent component- BlogPost)
            <div className='comment'>{this.props.commentText}</div>
        );
    }
}

// export default Comment;
// ^ can be written as 'export default class Comment...'
