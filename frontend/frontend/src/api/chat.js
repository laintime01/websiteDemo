import requests from "@/request";

export function onTalkApi(data) {
  return requests({
    url: "/ontalk",
    method: "post",
    data,
  });
}
