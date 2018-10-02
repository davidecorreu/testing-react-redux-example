import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  const url = 'http://jsonplaceholder.typicode.com/comments';
  moxios.stubRequest(url, {
    status: 200,
    response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
  });
});

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    </Root>
  );

  wrapped.find('.sign-in-button').simulate('click');
  wrapped.update();
  wrapped.find('Link .post-comment-link').simulate('click', {button: 0});
  wrapped.update();
  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    wrapped.find('Link .home-link').simulate('click', {button: 0});
    wrapped.update();
    expect(wrapped.find('.posts-list li').length).toEqual(2);
    done();
    wrapped.unmount();
  });

});
