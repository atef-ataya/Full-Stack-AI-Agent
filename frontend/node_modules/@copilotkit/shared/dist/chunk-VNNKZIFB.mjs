// src/utils/random-id.ts
import { v4 as uuidv4, validate, v5 as uuidv5 } from "uuid";
function randomId() {
  return "ck-" + uuidv4();
}
function randomUUID() {
  return uuidv4();
}
function dataToUUID(input, namespace) {
  const BASE_NAMESPACE = "e4b01160-ff74-4c6e-9b27-d53cd930fe8e";
  const boundNamespace = namespace ? uuidv5(namespace, BASE_NAMESPACE) : BASE_NAMESPACE;
  return uuidv5(input, boundNamespace);
}
function isValidUUID(uuid) {
  return validate(uuid);
}

export {
  randomId,
  randomUUID,
  dataToUUID,
  isValidUUID
};
//# sourceMappingURL=chunk-VNNKZIFB.mjs.map