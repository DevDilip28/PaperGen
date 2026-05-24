import { api } from "@/services/api";

export const assignmentService = {
  async generateAssignment(data: unknown) {
    const response = await api.post(
      "/assignments/generate",
      data
    );

    return response.data;
  },

  async getAssignments() {
    const response = await api.get(
      "/assignments"
    );

    return response.data;
  },

  async getAssignment(id: string) {
    const response = await api.get(
      `/assignments/${id}`
    );

    return response.data;
  },

  async deleteAssignment(id: string) {
    const response = await api.delete(
      `/assignments/${id}`
    );

    return response.data;
  },
};