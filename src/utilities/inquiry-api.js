
import sendRequest from "./sendRequest";

export function createInquiry(data) {
  const { property, ...rest } = data;
  const url = `/properties/${property}/inquiries/`;
  return sendRequest(url, "POST", { property, ...rest });
}
