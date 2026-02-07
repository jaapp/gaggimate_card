# GaggiMate Card

A custom Lovelace card for Home Assistant to control the GaggiMate espresso machine.

## Features

- Display current and target temperature
- Display current pressure
- Mode selector (Standby, Brew, Steam, Water)
- Start/Stop brew button
- Show active profile name
- Progress bar when brewing with elapsed time and phase information
- Support for both light and dark themes

## Installation

### HACS (Recommended)

This repository is not yet in the default HACS store. You need to add it as a custom repository first:

1. Open HACS in your Home Assistant instance
2. Click on the 3-dots menu in the top right corner
3. Select "Custom repositories"
4. Add the repository details:
   - **Repository:** `https://github.com/jaapp/gaggimate_card`
   - **Category:** Lovelace
5. Click "Add"
6. Search for "GaggiMate Card" in the HACS Frontend section
7. Click "Download"
8. Restart Home Assistant

### Manual Installation

1. Download `gaggimate-card.js` from the [latest release](https://github.com/jaapp/gaggimate_card/releases)
2. Copy it to `config/www/gaggimate-card.js` in your Home Assistant installation
3. Add the following to your Lovelace configuration:

```yaml
resources:
  - url: /local/gaggimate-card.js
    type: module
```

## Configuration

Add the card to your Lovelace UI:

```yaml
type: custom:gaggimate-card
entity: sensor.gaggimate_mode
```

### Configuration Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `entity` | string | **Required** | The GaggiMate mode sensor entity |
| `name` | string | Optional | Card title |
| `show_profile` | boolean | `true` | Show the active profile name |
| `show_progress` | boolean | `true` | Show progress bar when brewing |

## Requirements

- Home Assistant 2023.1.0 or newer
- GaggiMate Home Assistant integration installed and configured

## Development

```bash
npm install
npm run build
```

For development with automatic rebuilding:

```bash
npm run watch
```

