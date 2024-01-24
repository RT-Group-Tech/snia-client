var domain="";

if(window.location.host.includes("localhost"))
{
    /**
     * Local server.
     * @type {string}
     */
    domain="http://127.0.0.1/backend_snia";
}
else if(window.location.host.includes("test"))
{
    /**
     * Test server.
     */
    domain="http://test-back-system.agri-dantic-edai.tech";
}
else if(window.location.host.includes("agri"))
{
    /**
     * Production server.
     * @type {string}
     */
    domain="http://back-system.agri-dantic-edai.tech";
}
else{}

export default{
    url:domain
}