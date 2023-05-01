import axios from "axios";

const ENTRY_API_BASE_URL = "http://localhost:8080/api/v1/appEntry";

class EntryService {
  saveEntry(entry) {
    return axios.post(ENTRY_API_BASE_URL, entry);
  }
}

export default new EntryService();
