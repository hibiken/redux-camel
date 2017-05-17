import { expect } from 'chai';
import camelcaseKeys from '../src/camelcaseKeys';

describe('camelcaseKeys', () => {
  it('handles simple object', () => {
    const result = camelcaseKeys({ first_name: 'Ken', last_name: 'Hibino' });
    expect(result).to.deep.equal({ firstName: 'Ken', lastName: 'Hibino' });
  });

  it('handles nested object', () => {
    const result = camelcaseKeys({
      address: {
        city: 'San Francisco',
        zip_code: '12345'
      }
    });

    expect(result).to.deep.equal({
      address: {
        city: 'San Francisco',
        zipCode: '12345'
      }
    });
  });

  it('handles array of objects', () => {
    const result = camelcaseKeys({
      posts: [
        { title: 'Post #1', like_count: 1 },
        { title: 'Post #2', like_count: 2 }
      ]
    });

    expect(result).to.deep.equal({
      posts: [
        { title: 'Post #1', likeCount: 1 },
        { title: 'Post #2', likeCount: 2 }
      ]
    });
  });

  it('handles muliple nesting', () => {
    const result = camelcaseKeys({
      user: {
        first_name: 'Ken',
        last_name: 'Hibino',
        address: {
          city: 'San Francisco',
          zip_code: '12345'
        }
      }
    });

    expect(result).to.deep.equal({
      user: {
        firstName: 'Ken',
        lastName: 'Hibino',
        address: {
          city: 'San Francisco',
          zipCode: '12345'
        }
      }
    });
  });
});
