import { ENV, authFetch } from "@/utils";

export class Order {
  async getAll(userId) {
    try {
      const filter = `filters[user][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDER}?${filter}`;

      const respose = await authFetch(url);
      const result = respose.json();

      if (respose.status != 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
