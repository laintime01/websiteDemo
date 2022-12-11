import request from "@/utils/request";

export function talkToOpenai(data) {
  return request({
    url: "/talk",
    method: "post",
    data,
  });
}
