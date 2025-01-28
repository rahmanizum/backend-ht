# Botpress Project

This repository contains a Botpress-based chatbot solution with advanced features, including live agent handoff (HITL) and real-time UI updates using WebSocket. The project is in the prototype phase and will be monitored for one week in QA before its production launch.

## Prerequisites

- Node.js (LTS version recommended)
- npm (bundled with Node.js)
- Botpress CLI

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/rahmanizum/backend-ht.git
```

### 2. Install Dependencies

#### Botpress SDK

```bash
npm install @botpress/sdk
``
#### Botpress CLI

Install the Botpress CLI globally:

```bash
npm install -g @botpress/cli
```

### 3. Add GitHub Integration

Run the following command to integrate GitHub:

```bash
npx bp add github
```

### 4. Log in to Botpress

Log in to your Botpress workspace:

```bash
npx bp login
```

Follow the prompts to select your workspace and provide the access token.

### 5. Add HITL Interface

Add the HITL (Human in the Loop) interface module:

```bash
npx bp add interface:hitl@0.0.1
```

## Features

- **Live Agent Handoff (HITL):** Seamlessly hand off conversations to live agents.
- **Real-Time Updates:** UI updates in real-time via WebSocket.
- **Customizable Chatbot Logic:** Modular architecture for extensibility.

## Usage

- Launch the Botpress server using the CLI.
- Test and monitor the chatbot in the QA environment for one week.

## Support

For any issues, please open an issue in this repository or contact the support team.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
