import AgentService from "@/database/services/dantic/agent.service";
import IpaService from "@/database/services/dantic/ipa.service";
export default {
  name: "ServicesMixins",

  mounted() {
    /*init local database from client side service*/
    /* AgentService.init((res) => console.log());
        IpaService.init((res) => console.log()); */
  },
};
