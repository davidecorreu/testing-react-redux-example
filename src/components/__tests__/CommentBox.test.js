import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root'
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={{auth: true}}>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change',{
      target: { value: 'new comment' }
    });
    wrapped.update();
  })

  it('has a text area that user can type in', () => {
    // find the textarea element
    // simulate a 'change' event
    // provide a fake event object
    // force the component to update

    // assert that the textareas value has changed
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('empties the text area when form submited', () => {

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  })
});
