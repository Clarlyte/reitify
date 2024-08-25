# Reitify

**Reitify** is a comprehensive application designed to provide essential Philippine Real Estate Investment Trust (REIT) indicators for detailed analysis. Additionally, Reitify features an AI-driven portfolio maker that helps users create optimized investment portfolios based on real-time data and market trends.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Investing in REITs requires a deep understanding of various indicators and market conditions. Reitify simplifies this process by aggregating all key Philippine REIT indicators into one platform, allowing for comprehensive analysis and data-driven investment decisions. The AI portfolio maker feature provides personalized investment strategies tailored to individual risk profiles and market conditions.

## Features

- **Comprehensive REIT Indicators**: Access all important Philippine REIT data in one place.
- **AI Portfolio Maker**: Create optimized investment portfolios with the help of AI.
- **Real-Time Data**: Stay updated with the latest market trends and REIT indicators.
- **User-Friendly Interface**: Easy navigation and clear visualizations for quick analysis.
- **Customizable Dashboards**: Personalize your dashboard to focus on the data that matters most to you.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Django (Python)
- **Database**: PostgreSQL
- **AI/ML**: Scikit-learn, TensorFlow
- **API**: Django REST Framework
- **Deployment**: Docker, AWS

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/reitify.git
    cd reitify
    ```

2. **Backend Setup (Django)**:

    - Create a virtual environment:

      ```bash
      python -m venv env
      source env/bin/activate  # On Windows use `env\Scripts\activate`
      ```

    - Install backend dependencies:

      ```bash
      pip install -r requirements.txt
      ```

    - Run migrations:

      ```bash
      python manage.py migrate
      ```

    - Start the Django server:

      ```bash
      python manage.py runserver
      ```

3. **Frontend Setup (Next.js)**:

    - Navigate to the frontend directory:

      ```bash
      cd frontend
      ```

    - Install frontend dependencies:

      ```bash
      npm install
      ```

    - Start the Next.js development server:

      ```bash
      npm run dev
      ```

4. **Environment Variables**:

    - Copy `.env.example` to `.env` for both backend and frontend, and fill in the required configuration values.

## Usage

1. **Access the Frontend**: Open your browser and go to `http://localhost:3000` to view the application.
2. **Admin Panel**: Access Django’s admin panel at `http://localhost:8000/admin` for backend management.

## API Reference

For API documentation, visit the [API Reference Documentation](http://localhost:8000/api/docs) after starting the Django server.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.

For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, suggestions, or feedback, please contact:

- **Your Name** - [carllaw.banuag@gmail.com](mailto:carllaw.banuag@gmail.com)
- **GitHub**: [clarlyte](https://github.com/clarlyte)

