import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "!",
  TOKEN: "MTA2MjE2Nzc5MTAxODQ1MDk5NQ.GhVqoS.-0XVrGeWqQHseKo46ksRqrq8s41jOfX7WQCVYM",
  ACTIVITY: { NAME: "", TYPE: "PLAYING" },
  GUILD_ID: "1057731517167702036",
  TICKET: {
    CHANNEL: "1062712232066154496",
    CATEGORY: "1062721117363654737",
    ARCHIVE_CATEGORY: "1062721168102146238",
    MESSAGE: "Destek Talebi Oluştur!",
    STAFF_ROLES: ["1062169698378207263","1062169813667029104","1062169889982382100"],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Destek Kabul",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Arşive Yolla",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Desteği Sil",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "Adınız ?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "adını yazabilirsin.",
        REQUIRED: true,
      },
      {
        ID: "age",
        LABEL: "Yaşınız?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "yaşını yazabilirsin.",
        REQUIRED: true,
      },
      {
        ID: "sebep",
        LABEL: "Sebebi?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 5,
        MAX_LENGTH: 60,
        PLACE_HOLDER: "Açıklayınız.",
        REQUIRED: true,
      },
    ],
  },
};
