var domain="";
var host=window.location.host;
if(host.includes("localhost"))
{
    /**
     * Local server.
     * @type {string}
     */
    domain="http://127.0.0.1/backend_snia";
}
else if(host.includes("test"))
{
    /**
     * Test server.
     */
    domain="http://test-back-system.agri-dantic-edai.tech";
}
else if(host.includes("agri"))
{
    /**
     * Production server.
     * @type {string}
     */
    domain="http://back-system.agri-dantic-edai.tech";
}
else{}
//console.log("host:"+host);
domain="http://test-back-system.agri-dantic-edai.tech";
export default{
    url:domain
}