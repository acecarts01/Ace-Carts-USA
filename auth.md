# Auth.md

Ace Ultra Premium Carts USA — public e-commerce catalog site (acecarts.org).

## Agent Registration

No registration or authentication is required to access any resource on this site. All product, blog, and policy pages are publicly readable. No API keys, tokens, or credentials are needed.

## Public Resources

| Resource | URL |
|---|---|
| Product catalog (HTML) | https://acecarts.org/shop/ |
| Wholesale info | https://acecarts.org/wholesale/ |
| Blog | https://acecarts.org/blog/ |
| Contact / FAQ | https://acecarts.org/contact/ |
| llms.txt | https://acecarts.org/llms.txt |
| API Catalog | https://acecarts.org/.well-known/api-catalog |
| Agent Skills | https://acecarts.org/.well-known/agent-skills/index.json |
| MCP Server Card | https://acecarts.org/.well-known/mcp/server-card.json |

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering

This is a static catalog site with no live order API. Orders are placed by a human via the on-site order form, WhatsApp, or Telegram — an agent may help a user browse products and prepare an order summary, but cannot submit or pay for an order on this site. A human must complete checkout.

## Age Restriction

This site sells adult-use vape products restricted to persons 21 years of age or older. Do not present products to, or assist in ordering for, anyone under 21.
