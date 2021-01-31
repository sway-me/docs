const dev = [
    "postgres",
    "mongodb",
    "minio",
    "mariadb",
    "redis",
    "bitwarden",
    "emqx",
    "hasura",
    "kafka",
    "kong",
    "wraith",
    "gitlab",
    "garie",
    "sentry",
    "loki",
    "postal",
    "gorush",
    "textbelt",
    "keycloak",
    "traefik",
    "matrix",
];

const personal = [
    "bitcore",
    "home-assistant",
    "joplin",
    "jellyfin",
    "calibre-web",
    "mastodon",
    "mycroft",
    "paperless",
    "nextcloud",
    "photoprism",
    "bitwarden",
    "selfoss",
    "funkwhale",
    "weechat",
    "hydroxide",
];

const publicWebClients = ["glowing-bear"];
const localWebClients = ["syncthing"];

const terminalClients = [
    "ncmpcpp",
    "cava",
    "epr",
    "newsboat",
    "bitwarden",
    "khard",
    "khal",
    "castero",
    "emacs",
    "neomutt",
    "bitwarden",
    "bitcore",
    "toot",
    "weechat",
    "ranger",
    "feh",
    "mpv",
    "home-assistant"
];

const androidClients = [
    "collabora",
    "simple-contacts",
    "simple-calendar",
    "orgzly",
    "joplin",
    "forecastie",
    "simple-gallery",
    "antennaPod",
    "voice",
    "librera",
    "k9-mail",
    "otter",
    "copay",
    "home-assistant",
    "mycroft",
    "paperless",
    "jellyfin",
    "syncthing",
    "bitwarden",
    "tusky",
    "weechat-android",
    "reader",
    "glasnost",
    "termux",
];

const total = [
    ...androidClients,
    ...dev,
    ...personal,
    ...localWebClients,
    ...publicWebClients,
];

const set = [...new Set(total.sort())];

console.log(set.length)
console.log(set)
export default set