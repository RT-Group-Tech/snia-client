var domain="";
domain =process.env.NODE_ENV === "production" ? "http://snia.edgeverifed.com" : "http://snia.edgeverifed.com";

if(window.location.host.includes("localhost"))
{
    /**
     * Local server.
     * @type {string}
     */
    domain="http://127.0.0.1/backend_snia";
}
else if(window.location.host.includes("edge"))
{
    /**
     * Test server.
     */
    domain="http://snia.edgeverifed.com";
}
else if(window.location.host.includes("agri"))
{
    domain="http://back-system.agri-dantic-edai.tech";
}
else{}

export default{
    url:domain
}