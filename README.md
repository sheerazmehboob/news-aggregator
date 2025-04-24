# News-Aggregator

This is a Dockerized React.js application that aggregates and displays the latest news from various sources using the News API and New York Times API. The application offers users the ability to filter news articles based on different criteria such as resources, dates, query, sorting, etc.

## Features

- **News Aggregation:** Fetches the latest news from the News API and New York Times API, providing users with a comprehensive source of up-to-date information.
- **Filtering Options:** Allows users to filter news articles based on various criteria including resources, dates, query, and sorting preferences, providing a tailored news browsing experience.
- **Dockerized Deployment:** Utilizes Docker for streamlined setup and deployment, ensuring consistency across different environments and ease of scalability.

## Prerequisites

Before setting up the News Aggregator, ensure you have the following prerequisites installed on your system:

- **Docker:** Download and install Docker from the [official Docker website](https://www.docker.com/get-started).

## Setup

Follow these steps to set up and run the News Aggregator:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/sheerazmehboob/news-aggregator.git
    cd news-aggregator
    ```

2. **Set Up Environment Variables:**

    Create a `.env` file in the root directory of your project and add the necessary environment variables. These variables include API keys and URLs required for accessing the News API and New York Times API.

    ```plaintext
    REACT_APP_NEWS_API_ORG=YOUR_KEY
    REACT_APP_NYT_API_KEY=YOUR_KEY
    REACT_APP_NEWS_API_URL=https://newsapi.org/v2/everything
    REACT_APP_NYT_API_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json
    ```

3. **Build the Docker Image:**

    In the root directory, open a terminal and build the Docker image:

    ```bash
    docker compose build
    ```

4. **Run the Docker Container:**

    Once the Docker image is built, run the Docker container:

    ```bash
    docker compose up
    ```

5. **Access the Application:**

    After the container is running, access the application by navigating to `http://localhost:3000` in your web browser.

## Updating the Application

To update the News Aggregator with new features or bug fixes, follow these steps:

1. Make the necessary changes to the application codebase.
2. Rebuild the Docker image:

    ```bash
    docker compose build
    ```

3. Restart the Docker container:

    ```bash
    docker compose up
    ```

## Troubleshooting

If you encounter any issues during setup or runtime, refer to Docker's documentation and logs for troubleshooting steps. Additionally, you can reach out to the project maintainers for assistance by [opening an issue](https://github.com/sheerazmehboob/news-aggregator/issues).

## Acknowledgements

The News Aggregator would not be possible without the contributions of various individuals and organizations:

- **News API:** Provides access to the latest news data from various sources.
- **New York Times API:** Offers access to news articles published by The New York Times.
- **Docker:** Simplifies the deployment process and ensures consistency across different environments.

## Feedback and Support

We value your feedback and are committed to providing ongoing support for the News Aggregator. If you have any suggestions, feature requests, or encounter any issues, please don't hesitate to [open an issue](https://github.com/sheerazmehboob/news-aggregator/issues). Your contributions are highly appreciated!
