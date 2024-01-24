// See https://coda.io/packs/build/latest/reference/sdk
import * as coda from "@codahq/packs-sdk";

// TODO: https://coda.io/p/27155?section=listing
// TODO: https://coda.io/packs/build/latest/tutorials/get-started/cli/#add-code-to-the-pack
// TODO: Add pack branding: https://www.figma.com/file/1bsp1RShQpw6m58voEcjJt/Coda---Packs-Marketing-Toolkit-(Community)?type=design&node-id=0-1&mode=design&t=KpDa1x0QTjMqpuGn-0
export const pack = coda.newPack();

// TODO: https://coda.io/developers/apis/v1
// TODO: https://firebase.google.com/docs/reference/js

pack.addFormula({
  // Formula names cannot contain spaces
  name: "Firebase",
  description: "Integrate document tables with Firebase collections.",

  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: "collection",
      description: "The collection you would like to interact with.",
    }),
  ],
  resultType: coda.ValueType.String,

  execute: async function ([name]: [string], context) {
    return "Hello " + name + "!";
  },
});
