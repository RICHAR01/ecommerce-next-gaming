import { ENV, authFetch } from "@/utils";
import { filter } from "lodash";

export class Adress {
  async create(data, userId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADRESS}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            ...data,
            user: userId,
          },
        }),
      };

      const response = await authFetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async getAll(userId) {
    try {
      const filter = `filters[user][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADRESS}?${filter}`;

      const respose = await authFetch(url);
      const result = respose.json();

      if (respose.status != 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(data, adressId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADRESS}/${adressId}`;

      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      };

      const respose = await authFetch(url, params);
      const result = await respose.json();

      if (respose.status != 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async delete(adressId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADRESS}/${adressId}`;

      const params = {
        method: "DELETE",
      };

      const respose = await authFetch(url, params);
      const result = await respose.json();

      if (respose.status != 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
