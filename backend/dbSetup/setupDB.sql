-- Themes module tables
-- Setup table
-- (c) 2025 Lance Stubblefield

CREATE SCHEMA themes

CREATE TABLE IF NOT EXISTS themes.templates
    (
        themeID            UUID NOT NULL UNIQUE,
        themeName          varchar(100),
        themeLabelBGcolor  varchar(10),
        themeLabelTXTcolor varchar(10),
        logoUrl            varchar(255),
        faintColor         varchar(10),
        lightColor         varchar(10),
        softColor          varchar(10),
        mediumColor        varchar(10),
        darkColor          varchar(10),
        veryDarkColor      varchar(10),
        brightColor        varchar(10),
        okColor            varchar(10),
        highlightColor     varchar(10),
        alertColor         varchar(10),
        lightShade         varchar(10),
        mediumShade        varchar(10),
        darkShade          varchar(10),
        veryDarkShade      varchar(10),
        body               varchar(255),
        h1                 varchar(255),
        h2                 varchar(255),
        h3                 varchar(255),
        h4                 varchar(255),
        h5                 varchar(255),
        font               varchar(255),
        fontSize           varchar(255),
        button             varchar(255),
        p                  varchar(255)
    )
