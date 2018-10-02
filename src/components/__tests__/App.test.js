import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import App from 'components/App';
import Root from 'Root';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('rendrers without crashing', () => {
  // this div wil be created by JSDOM
  const div = document.createElement('div');

  ReactDOM.render(
    <Root>
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    </Root>
    , div);
  // clean the memory used in this test
  ReactDOM.unmountComponentAtNode(div);
});


let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
})

it('shows a comment box', () => {
  wrapped.find('.sign-in-button').simulate('click');
  wrapped.update();
  wrapped.find('Link .post-comment-link').simulate('click', {button: 0});
  wrapped.update();
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
