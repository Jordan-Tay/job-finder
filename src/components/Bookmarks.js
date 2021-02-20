import { remove } from 'mobx';
import { types } from 'mobx-state-tree';
import Bookmark from './Bookmark';

const Bookmarks = types.model('Bookmarks', {
  bookmarks: types.map(Bookmark)
}).actions(self => ({
  put(bookmark) {
    self.bookmarks.put(bookmark);
  },
  delete(bookmark) {
    self.bookmarks.delete(bookmark);
  },
  has(bookmark) {
    return self.bookmarks.has(bookmark);
  }
}));

export default Bookmarks;