-- Themes module tables
-- Setup table
-- (c) 2025 Lance Stubblefield

CREATE SCHEMA themes;

CREATE TABLE IF NOT EXISTS themes.templates
(
    themeid            UUID NOT NULL unique primary key,
    themename          varchar(100),
    themelabelbgcolor  varchar(10),
    themelabeltxtcolor varchar(10),
    logourl            varchar(255),
    faintcolor         varchar(10),
    lightcolor         varchar(10),
    softcolor          varchar(10),
    mediumcolor        varchar(10),
    darkcolor          varchar(10),
    verydarkcolor      varchar(10),
    brightcolor        varchar(10),
    okcolor            varchar(10),
    highlightcolor     varchar(10),
    alertcolor         varchar(10),
    lightshade         varchar(10),
    mediumshade        varchar(10),
    darkshade          varchar(10),
    verydarkshade      varchar(10),
    body               varchar(255),
    h1                 varchar(255),
    h2                 varchar(255),
    h3                 varchar(255),
    h4                 varchar(255),
    h5                 varchar(255),
    font               varchar(255),
    fontSize           varchar(255),
    button             varchar(255),
    p                  varchar(255),
    sitetitle          varchar(255),
    sitetagline        varchar(255),
    heroimage          varchar(255)
)
