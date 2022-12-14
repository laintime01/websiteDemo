import requests from "@/request";

export function onTalk(data) {
  return requests({
    url: "/ontalk",
    method: "post",
    data,
  });
}
