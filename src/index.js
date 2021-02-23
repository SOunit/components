import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='sam'
        timeAgo='Today at 4:00PM'
        avatar={faker.image.image()}
        content='test1'
      />
      <CommentDetail
        author='tom'
        timeAgo='Today at 2:30AM'
        avatar={faker.image.image()}
        content='test2'
      />
      <CommentDetail
        author='jane'
        timeAgo='Yesterday at 6:00PM'
        avatar={faker.image.image()}
        content='test3'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
