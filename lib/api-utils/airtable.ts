import Airtable from 'airtable';

// The airtable API key is added by setting it on the env AIRTABLE_API_KEY
const airtable = new Airtable();
const base = airtable.base('app5UYj8zwx3W17Yl');
// The base doesn't have good types, so we use any
const entries = base('Entries') as any;

export const learnTable = {
  async getGitHubEntry(username: string) {
    const records = await entries
      .select({ filterByFormula: `Username = '${username}'` })
      .firstPage();
    return records[0];
  },
  async addGitHubEntry(profile: { [key: string]: any }) {
    const data = profile._json;
    const record = await learnTable.getGitHubEntry(data.login);
    const entry = {
      Name: data.name,
      Username: data.login,
      Company: data.company,
      Followers: data.followers
    };

    if (record) {
      await record.putUpdate(entry);
    } else {
      await entries.create(entry);
    }
  }
};
