import axios from "axios";

const ENTRY_API_BASE_URL = "http://localhost:8080/api/v1/appEntry";
const JOKE_API_BASE_URL = "https://official-joke-api.appspot.com/random_joke";

class EntryService {
  saveEntry(entry) {
    return axios.post(ENTRY_API_BASE_URL, entry);
  }

  getEntries() {
    return axios.get(ENTRY_API_BASE_URL);
  }

  deleteEntry(id) {
    return axios.delete(ENTRY_API_BASE_URL + "/" + id);
  }

  getEntryById(id) {
    return axios.get(ENTRY_API_BASE_URL + "/" + id);
  }

  updateEntry(entry, id) {
    return axios.put(ENTRY_API_BASE_URL + "/" + id, entry);
  }

  getJoke() {
    return axios.get(JOKE_API_BASE_URL);
  }
}

export default new EntryService();
