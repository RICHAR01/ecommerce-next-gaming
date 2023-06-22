import { ENV, authFetch } from "@/utils";

export class User {
  async getMe(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

      const respose = await authFetch(url);
      const result = await respose.json();

      if (respose.status != 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateMe(userId, data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;

      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
