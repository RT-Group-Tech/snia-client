const ipaModel = [
  { key: "ipa_id", type: "int", props: ["pk", "ai"] },
  { key: "province", type: "string" },
  { key: "superficie", type: "string" },
  { key: "habitant", type: "string" },
  {
    key: "inspecteur",
    type: "obj",
    model: {
      "nom:string": {},
      "email:string": {},
      "portable:string": {},
    },
  },
  {
    key: "territoires",
    type: "obj[]",
    model: {
      "nom:string": {},
      "superficie:string": {},
      "habitant:string": {},
    },
    default: [],
  },
];
export default ipaModel;
