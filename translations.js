const translations = {
    de: {
        freeDescription: "Kostenlos & ohne Werbung",
        plusDescription: "Die erweiterte Version",
        openPlayStore: "Im Google Play Store öffnen",

        sharedTitle: "Geteilte Erinnerung",
        sharedDescription:
            "Du hast eine Erinnerung über SimpleReminder erhalten. Wähle eine App aus, um die Erinnerung zu öffnen."
    },

    en: {
        freeDescription: "Free & ad-free",
        plusDescription: "The extended version",
        openPlayStore: "Open in Google Play",

        sharedTitle: "Shared reminder",
        sharedDescription:
            "You received a reminder via SimpleReminder. Choose an app to open the reminder."
    },

    es: {
        freeDescription: "Gratis y sin publicidad",
        plusDescription: "La versión ampliada",
        openPlayStore: "Abrir en Google Play",

        sharedTitle: "Recordatorio compartido",
        sharedDescription:
            "Has recibido un recordatorio a través de SimpleReminder. Elige una aplicación para abrirlo."
    },

    fr: {
        freeDescription: "Gratuit et sans publicité",
        plusDescription: "La version avancée",
        openPlayStore: "Ouvrir dans Google Play",

        sharedTitle: "Rappel partagé",
        sharedDescription:
            "Tu as reçu un rappel via SimpleReminder. Choisis une application pour ouvrir le rappel."
    },

    it: {
        freeDescription: "Gratis e senza pubblicità",
        plusDescription: "La versione avanzata",
        openPlayStore: "Apri in Google Play",

        sharedTitle: "Promemoria condiviso",
        sharedDescription:
            "Hai ricevuto un promemoria tramite SimpleReminder. Scegli un'app per aprire il promemoria."
    },

    hi: {
        freeDescription: "मुफ़्त और विज्ञापन-मुक्त",
        plusDescription: "उन्नत संस्करण",
        openPlayStore: "Google Play में खोलें",

        sharedTitle: "साझा रिमाइंडर",
        sharedDescription:
            "आपको SimpleReminder के ज़रिए एक रिमाइंडर मिला है। रिमाइंडर खोलने के लिए कोई ऐप चुनें।"
    },

    nl: {
        freeDescription: "Gratis en zonder advertenties",
        plusDescription: "De uitgebreide versie",
        openPlayStore: "Openen in Google Play",

        sharedTitle: "Gedeelde herinnering",
        sharedDescription:
            "Je hebt via SimpleReminder een herinnering ontvangen. Kies een app om de herinnering te openen."
    }
};

function getTranslations() {
    const browserLanguage = navigator.language.toLowerCase().split("-")[0];

    return translations[browserLanguage] || translations.en;
}
