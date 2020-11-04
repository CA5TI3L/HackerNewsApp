import * as fromNews from './news.actions';

describe('loadNewss', () => {
  it('should return an action', () => {
    expect(fromNews.loadNewss().type).toBe('[News] Load Newss');
  });
});
