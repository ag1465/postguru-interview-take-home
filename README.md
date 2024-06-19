# PostGuru

PostGuru is a web application for managing and viewing posts, built with Next.js, TypeScript, and Redux.

## Table of Contents

- [PostGuru](#postguru)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Technologies Used](#technologies-used)

## Overview

PostGuru is designed to manage and display posts efficiently. It allows users to browse posts, view detailed information for each post, and interact through comments. Built for interview for AdMarketPlace.

## Features

- Browse and view a list of posts
- View detailed information for each post, including title and body
- Display comments associated with each post
- Add new comments to existing posts
- Responsive design for seamless user experience across devices

## Getting Started

Follow these instructions to get PostGuru up and running on your local machine.

### Prerequisites

Ensure you have the following software installed on your machine:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ag1465/admarketplace-allenguo-take-home.git
   ```

2. Navigate into the project directory:

   ```bash
   cd postguru/
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

To start the development server and view PostGuru in your browser:

```bash
npm run dev
# or
yarn dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Folder Structure

The project's folder structure is organized as follows:

```
postguru/
│
├── public/           # Static assets
├── src/              # Source code
│   ├── components/   # React components
│   ├── pages/        # Next.js pages
│   ├── redux/        # Redux setup and slices
│   ├── utils/        # Utility functions
│   └── ...
├── .gitignore        # Git ignore file
├── next.config.js    # Next.js configuration
├── package.json      # NPM package file
└── README.md         # This README file
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Material-UI](https://mui.com/)