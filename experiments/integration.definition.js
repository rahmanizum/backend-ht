import { z, IntegrationDefinition, interfaces } from "@botpress/sdk";
import hitl from './bp_modules/hitl'

export default new IntegrationDefinition({
  name: "My HITL Integration",
  version: "0.0.1",
  readme: "hub.md",
  icon: "icon.svg",
  channels: {
    hitl: {
      title: "My HITL",
      messages: {},
      conversation: {
        tags: {
          ticketId: {
            // This is the ticket ID from your platform. It ensures that conversations are correctly matched between Botpress and your platform.
            title: "Ticket ID",
          },
          additionalData: {
            title: "You can pass additional data in the tags object.",
          },
        },
      },
    },
  },
  actions: {},
  user: {
    tags: {
      // This is the user ID from the live agent platform. It ensures that users are correctly matched between Botpress and live agent platform.
      agentHandoffPlatformUserId: {
        title: "Live Agent Platform User ID",
      },
    },
  },
  // Extend the HITL interface to implement HITL in your integration.
}).extend(hitl, () => ({}));

 