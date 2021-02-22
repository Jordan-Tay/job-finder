import { types } from 'mobx-state-tree';

const Bookmark = types.model('Bookmark', {
  id: types.identifier,
  title: types.string,
  commitment: types.string,
  cities: types.array(types.string),
  countries: types.array(types.string),
  description: types.string,
  applyUrl: types.string,
  companyName: types.string,
  companyWebsiteUrl: types.string,
  companyLogoUrl: types.string,
  isFeatured: types.boolean,
  userEmail: types.string,
  postedAt: types.string,
});

export default Bookmark;