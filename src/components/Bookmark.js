import { types } from 'mobx-state-tree';

const Bookmark = types.model('Bookmark', {
  id: types.identifier,
  title: types.string,
  cities: types.array(types.string),
  countries: types.array(types.string),
  description: types.string,
  applyUrl: types.string,
  companyName: types.string,
  companyWebsiteUrl: types.string,
  companyLogoUrl: types.string,
  userEmail: types.string,
  postedAt: types.string,
}).actions(self => ({
  getDetails() {
    return {
      key: self.id,
      id: self.id,
      title: self.title,
      cities: self.cities,
      countries: self.countries,
      description: self.description,
      applyUrl: self.applyUrl,
      companyName: self.companyName,
      companyWebsiteUrl: self.companyWebsiteUrl,
      companyLogoUrl: self.companyLogoUrl,
      userEmail: self.userEmail,
      postedAt: self.postedAt,
    }
  }
}));

export default Bookmark;