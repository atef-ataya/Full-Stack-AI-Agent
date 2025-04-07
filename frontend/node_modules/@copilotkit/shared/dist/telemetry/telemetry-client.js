"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/telemetry/telemetry-client.ts
var telemetry_client_exports = {};
__export(telemetry_client_exports, {
  TelemetryClient: () => TelemetryClient
});
module.exports = __toCommonJS(telemetry_client_exports);
var import_analytics_node = require("@segment/analytics-node");

// src/telemetry/utils.ts
var import_chalk = __toESM(require("chalk"));
function flattenObject(obj, parentKey = "", res = {}) {
  for (let key in obj) {
    const propName = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

// src/telemetry/telemetry-client.ts
var import_uuid = require("uuid");
var TelemetryClient = class {
  constructor({
    packageName,
    packageVersion,
    telemetryDisabled,
    telemetryBaseUrl,
    sampleRate
  }) {
    this.globalProperties = {};
    this.cloudConfiguration = null;
    this.telemetryDisabled = false;
    this.sampleRate = 0.05;
    this.anonymousId = `anon_${(0, import_uuid.v4)()}`;
    this.packageName = packageName;
    this.packageVersion = packageVersion;
    this.telemetryDisabled = telemetryDisabled || process.env.COPILOTKIT_TELEMETRY_DISABLED === "true" || process.env.COPILOTKIT_TELEMETRY_DISABLED === "1" || process.env.DO_NOT_TRACK === "true" || process.env.DO_NOT_TRACK === "1";
    if (this.telemetryDisabled) {
      return;
    }
    this.setSampleRate(sampleRate);
    const writeKey = process.env.COPILOTKIT_SEGMENT_WRITE_KEY || "n7XAZtQCGS2v1vvBy3LgBCv2h3Y8whja";
    this.segment = new import_analytics_node.Analytics({
      writeKey
    });
    this.setGlobalProperties({
      "copilotkit.package.name": packageName,
      "copilotkit.package.version": packageVersion
    });
  }
  shouldSendEvent() {
    const randomNumber = Math.random();
    return randomNumber < this.sampleRate;
  }
  async capture(event, properties) {
    if (!this.shouldSendEvent() || !this.segment) {
      return;
    }
    const flattenedProperties = flattenObject(properties);
    const propertiesWithGlobal = {
      ...this.globalProperties,
      ...flattenedProperties
    };
    const orderedPropertiesWithGlobal = Object.keys(propertiesWithGlobal).sort().reduce(
      (obj, key) => {
        obj[key] = propertiesWithGlobal[key];
        return obj;
      },
      {}
    );
    this.segment.track({
      anonymousId: this.anonymousId,
      event,
      properties: { ...orderedPropertiesWithGlobal }
    });
  }
  setGlobalProperties(properties) {
    const flattenedProperties = flattenObject(properties);
    this.globalProperties = { ...this.globalProperties, ...flattenedProperties };
  }
  setCloudConfiguration(properties) {
    this.cloudConfiguration = properties;
    this.setGlobalProperties({
      cloud: {
        publicApiKey: properties.publicApiKey,
        baseUrl: properties.baseUrl
      }
    });
  }
  setSampleRate(sampleRate) {
    let _sampleRate;
    _sampleRate = sampleRate ?? 0.05;
    if (process.env.COPILOTKIT_TELEMETRY_SAMPLE_RATE) {
      _sampleRate = parseFloat(process.env.COPILOTKIT_TELEMETRY_SAMPLE_RATE);
    }
    if (_sampleRate < 0 || _sampleRate > 1) {
      throw new Error("Sample rate must be between 0 and 1");
    }
    this.sampleRate = _sampleRate;
    this.setGlobalProperties({
      sampleRate: this.sampleRate,
      sampleRateAdjustmentFactor: 1 - this.sampleRate
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TelemetryClient
});
//# sourceMappingURL=telemetry-client.js.map