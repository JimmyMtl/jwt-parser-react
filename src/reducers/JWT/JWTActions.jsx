/*
  JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.
  It is decomposed into three parts: header, payload, and signature. In this order. We could extract the three as follow :
  
  ```const [headerBase64, payloadBase64, signatureBase64] = token.split(".");```
 */

export const decodePayload = (token) => {
  const [_, payloadBase64, __] = token.split(".");
  return decodeBase64(payloadBase64);
};
export const decodeHeader = (token) => {
  const [headerBase64, _, __] = token.split(".");
  return decodeBase64(headerBase64);
};
export const decodeSignature = (token) => {
  const [__, _, signatureBase64] = token.split(".");
  return decodeBase64(signatureBase64);
};
const decodeBase64 = (base64, type) => {
  try {
    console.log("received base64", base64);
    const cleanedBase64 = base64.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(
      decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(""),
      ),
    );
  } catch (ex) {
    // console.error("Cannot decode ", type, ex);
    return {};
  }
};
