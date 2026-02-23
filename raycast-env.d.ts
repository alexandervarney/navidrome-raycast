/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Server URL - Your Navidrome server URL (e.g. https://music.example.com) */
  "serverUrl": string,
  /** Username - Your Navidrome username */
  "username": string,
  /** Password - Your Navidrome password */
  "password": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search` command */
  export type Search = ExtensionPreferences & {}
  /** Preferences accessible in the `recently-added` command */
  export type RecentlyAdded = ExtensionPreferences & {}
  /** Preferences accessible in the `most-played` command */
  export type MostPlayed = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search` command */
  export type Search = {}
  /** Arguments passed to the `recently-added` command */
  export type RecentlyAdded = {}
  /** Arguments passed to the `most-played` command */
  export type MostPlayed = {}
}

