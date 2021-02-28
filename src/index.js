import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='sam'
          timeAgo='Today at 4:00PM'
          avatar={faker.image.image()}
          content='test1'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='tom'
          timeAgo='Today at 2:30AM'
          avatar={faker.image.image()}
          content='test2'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='jane'
          timeAgo='Yesterday at 6:00PM'
          avatar={faker.image.image()}
          content='test3'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
