(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;

  navigator.modelContext.provideContext({
    tools: [
      {
        name: "browse_products",
        description: "Browse products by category (signature, disposable, love, spring, black, 4g, wholesale, gummies)",
        inputSchema: {
          type: "object",
          properties: {
            category: { type: "string", description: "Product category to browse" }
          }
        },
        execute: async ({ category }) => {
          const url = category
            ? `https://acecarts.org/shop/?cat=${encodeURIComponent(category)}`
            : `https://acecarts.org/shop/`;
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "order_via_whatsapp",
        description: "Start a WhatsApp order. Minimum order $100 USD.",
        inputSchema: {
          type: "object",
          properties: {
            message: { type: "string", description: "Pre-filled order message" }
          }
        },
        execute: async ({ message }) => {
          const url = message
            ? `https://wa.me/14482348667?text=${encodeURIComponent(message)}`
            : `https://wa.me/14482348667`;
          window.open(url, '_blank');
          return { url };
        }
      },
      {
        name: "get_wholesale_info",
        description: "Get wholesale pricing tiers and ordering info",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = `https://acecarts.org/wholesale/`;
          return { url: `https://acecarts.org/wholesale/` };
        }
      },
      {
        name: "contact",
        description: "Contact for product questions or support",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = `https://acecarts.org/contact/`;
          return { url: `https://acecarts.org/contact/` };
        }
      }
    ]
  });
})();
