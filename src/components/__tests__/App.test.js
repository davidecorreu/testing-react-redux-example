import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from 'components/App';
import Root from 'Root';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('rendrers without crashing', () => {
  // this div wil be created by JSDOM
  const div = document.createElement('div');

  ReactDOM.render(
    <Root>
      <App />
    </Root>
    , div);
  // clean the memory used in this test
  ReactDOM.unmountComponentAtNode(div);
});


let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
